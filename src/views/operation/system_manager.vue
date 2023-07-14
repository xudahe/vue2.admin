<template>
    <div class="system_manager card_css">
        <el-card class="box-card" shadow="hover">
            <!--工具条-->
            <v-header icon="md-podium" text="系统列表">
                <div slot="content"></div>
                <div style="text-align: right;">
                    <!--快速查询字段-->
                    <el-input v-model="filters.name" style="width:160px;padding-right: 5px;" placeholder="系统名称">
                    </el-input>
                    <!--操作按钮组-->
                    <el-tooltip content="查询">
                        <el-button type="primary" icon="el-icon-search" circle @click.native="searchData"></el-button>
                    </el-tooltip>
                    <el-tooltip content="新增">
                        <el-button type="primary" icon="el-icon-plus" circle @click.native="plusData"></el-button>
                    </el-tooltip>
                    <el-tooltip content="刷新">
                        <el-button type="primary" icon="el-icon-refresh" circle @click.native="refreshData"></el-button>
                    </el-tooltip>
                </div>
            </v-header>

            <!--列表-->
            <e-table :table-data="tableData" :loading="loading" :table-label="tableLabel" :table-option="tableOption"
                :now-page="nowPage" :now-size="nowSize" @handleButton="handleButton"
                @handleSelectionChange="handleSelectionChange" @searchData="searchData"></e-table>
        </el-card>

        <!--弹出界面-->
        <el-dialog :title="formTitle" :visible.sync="formVisible" width="500px" v-model="formVisible"
            :close-on-click-modal="false">
            <el-form :model="systemForm" label-width="80px" :rules="formRules" ref="systemForm">
                <el-row>
                    <el-col :span="24">
                        <el-form-item label="系统编码" prop="systemCode">
                            <el-input v-model="systemForm.systemCode" autocomplete="off" placeholder="请输入系统编码"
                                clearable>
                            </el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="24">
                        <el-form-item label="系统名称" prop="systemName">
                            <el-input v-model="systemForm.systemName" autocomplete="off" placeholder="请输入系统名称"
                                clearable>
                            </el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="24">
                        <el-form-item label="加载序号" prop="index">
                            <el-input v-model="systemForm.index" autocomplete="off" placeholder="请输入加载序号" clearable>
                            </el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="24">
                        <el-form-item label="状态" prop="enabled">
                            <el-radio-group v-model="systemForm.enabled">
                                <el-radio :label="false" border>正常</el-radio>
                                <el-radio :label="true" border>禁用</el-radio>
                            </el-radio-group>
                        </el-form-item>
                    </el-col>
                    <el-col :span="24">
                        <el-form-item label="备注" prop="remark">
                            <el-input v-model="systemForm.remark" autocomplete="off" type="textarea" :autosize="{ minRows: 2, maxRows: 6 }"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click.native="formVisible = false">取消</el-button>
                <el-button type="primary" @click.native="handleSubmit" :loading="logining">提交</el-button>
            </div>
        </el-dialog>

    </div>
</template>

<script>
import { debounce } from '@/api/control/index.js'
import apiSetting from "@/api/apiSetting.js"

export default {
    name: 'system_manager',
    data() {
        return {
            logining: false, //提交中
            loading: false, //加载中

            filters: {
                name: "",
            },
            tableData: [],
            tableLabel: [
                // { label: '标识', param: 'id', width: '60', },
                { label: '排序', param: 'index', width: '60' },
                { label: '系统编码', param: 'systemCode' },
                { label: '系统名称', param: 'systemName' },
                {
                    label: '更新时间', param: 'createTime', sortable: true, width: '160',
                    formatter: row => {
                        return this.$formatDate(new Date(this.$isNull(row.modifyTime) ? row.createTime : row.modifyTime), true);
                    }
                },
                {
                    label: '状态', param: 'enabled', width: '80',
                    render: (h, params) => {
                        if (!params.row.enabled) {
                            return h('el-tag', {
                                props: {
                                    type: 'success',
                                    size: 'mini',
                                },
                                style: {
                                    cursor: 'pointer'
                                },
                                on: {
                                    click: e => {
                                        e.stopPropagation(); //阻止row-click事件冒泡
                                        this.disable(params.row)
                                    }
                                }
                            }, '正常')
                        }
                        else {
                            return h('el-tag', {
                                props: {
                                    type: 'danger',
                                    size: 'mini',
                                },
                                style: {
                                    cursor: 'pointer'
                                },
                                on: {
                                    click: e => {
                                        e.stopPropagation(); //阻止row-click事件冒泡
                                        this.disable(params.row)
                                    }
                                }
                            }, '禁用')
                        }
                    },
                },
                { label: '备注', param: 'remark' },
            ],
            tableOption: {
                label: '操作',
                width: '160',
                options: [
                    { label: '', type: 'primary', icon: 'el-icon-edit', methods: 'handleEdit' },
                    { label: '', type: 'danger', icon: 'el-icon-delete', methods: 'handleDelete' },
                ]
            },

            sels: {}, //列表选中列

            nowPage: 1, // 当前页数
            nowSize: 15, // 当前页条数

            formTitle: '',
            formVisible: false, //界面是否显示
            formRules: {
                // systemName: [{ required: true, message: "请输入系统名称", trigger: "blur" }],
            },
            //表单数据
            initForm: {
                id: 0,
                systemCode: '',
                systemName: '',
                index: '',
                enabled: false,
                remark: '',
            },
            systemForm: {},

        }
    },
    methods: {
        //获取系统列表
        searchData() {
            let _this = this;
            this.$ajax(apiSetting.getSystemInfo, {
                key: this.filters.name,
            }).then(res => {
                _this.loading = false;
                if (!res.data.success) {
                    _this.$errorMsg(res.data.message)
                } else {
                    _this.tableData = res.data.response;
                }
            }).catch(err => {
                _this.loading = false;
            })
        },

        handleButton(val) {
            if (val.methods == 'handleEdit') this.handleEdit(val.index, val.row)
            if (val.methods == 'handleDelete') this.handleDelete(val.index, val.row)
        },
        handleSelectionChange(val) {
            this.sels = val;
        },
        disable(row) {
            let _this = this;
            this.$showMsgBox({
                msg: `<p>是否${row.enabled ? `启用` : `禁用`}【${row.systemName}】系统?</p>`,
                type: 'warning',
                isHTML: true
            }).then(() => {
                this.$ajax(apiSetting.disableSystem, {
                    id: row.id,
                    falg: !row.enabled
                }).then(res => {
                    if (!res.data.success) {
                        _this.$errorMsg(res.data.message)
                    } else {
                        _this.searchData();
                        _this.$successMsg(res.data.message)
                    }
                }).catch(err => { })
            }).catch(() => { });
        },
        //删除
        handleDelete(index, row) {
            let _this = this
            this.$showMsgBox({
                msg: `您确定要删除【${row.systemName}】系统?</p>`,
                type: 'warning',
                isHTML: true
            }).then(() => {
                this.$ajax(apiSetting.deleteSystem, {
                    id: row.id
                }).then(res => {
                    if (!res.data.success) {
                        _this.$errorMsg(res.data.message)
                    } else {
                        _this.searchData();
                        _this.$successMsg(res.data.message)
                    }
                }).catch(err => { })
            }).catch(() => { });
        },
        //显示编辑界面
        handleEdit(index, row) {
            this.formTitle = "编辑";
            this.formVisible = true;
            this.systemForm = Object.assign({}, row);
        },
        //显示新增界面
        plusData() {
            this.formTitle = "新增";
            this.formVisible = true;
            this.systemForm = JSON.parse(JSON.stringify(this.initForm));
        },
        handleSubmit: debounce(function () {
            let _this = this;

            if (this.$isNull(this.systemForm.systemName))
                return this.$warnMsg("系统名称不能为空！")
            if (this.$isNull(this.systemForm.index))
                return this.$warnMsg("加载序号不能为空！")

            let apiUrl = this.formTitle == '编辑' ? apiSetting.putSystem : apiSetting.postSystem;

            this.logining = true;
            this.$ajax(apiUrl, this.systemForm)
                .then(res => {
                    this.logining = false;

                    if (!res.data.success) {
                        _this.$errorMsg(res.data.message)
                    } else {
                        _this.formVisible = false;
                        _this.searchData();
                        _this.$successMsg(res.data.message)
                    }
                }).catch(err => {
                    this.logining = false;
                })
        }, 1000),
        refreshData() {
            this.loading = true;
            this.searchData();
        },
    },
    mounted() {
        this.refreshData();
    }
};
</script>

<style scoped>
.system_manager {
    height: 100%;
    width: 100%;
}
</style>
