<template>
    <div class="plat_manager card_css">
        <el-row :gutter="5" style="height:100%;">
            <el-col :sm="24" :md="19" style="height:100%;">
                <el-card class="box-card" shadow="hover">
                    <!--工具条-->
                    <v-header icon="md-podium" text="平台列表">
                        <div slot="content"></div>
                        <div style="text-align: right;">
                            <!--快速查询字段-->
                            <el-input v-model="filters.name" style="width:160px;padding-right: 5px;" placeholder="平台名称">
                            </el-input>
                            <!--操作按钮组-->
                            <el-tooltip content="查询">
                                <el-button type="primary" icon="el-icon-search" circle @click.native="searchData">
                                </el-button>
                            </el-tooltip>
                            <el-tooltip content="新增">
                                <el-button type="primary" icon="el-icon-plus" circle @click.native="plusData">
                                </el-button>
                            </el-tooltip>
                            <el-tooltip content="刷新">
                                <el-button type="primary" icon="el-icon-refresh" circle @click.native="refreshData">
                                </el-button>
                            </el-tooltip>
                        </div>
                    </v-header>

                    <!--列表-->
                    <e-table :table-data="tableData" :loading="loading" :table-label="tableLabel"
                        :table-option="tableOption" :now-page="nowPage" :now-size="nowSize" @handleRowClick="handleRowClick"
                        @handleButton="handleButton" @handleSelectionChange="handleSelectionChange"
                        @searchData="searchData"></e-table>
                </el-card>
            </el-col>
            <el-col :sm="24" :md="5" style="height:100%;">
                <el-card class="box-card" shadow="hover">
                    <v-header text="系统分配">
                        <div slot="content" style="color:#67c23a;">{{ sels.platformName }}</div>
                        <div style="text-align: right;">
                            <el-tooltip content="保存">
                                <el-button type="primary" icon="el-icon-check" circle :disabled="!showButton"
                                    @click.native="saveSystem">
                                </el-button>
                            </el-tooltip>
                        </div>
                    </v-header>

                    <div class="tree-box">
                        <el-tree ref="systemtree" :data="systemData" :check-strictly="checkStrictly" :props="defaultProps"
                            @node-click="nodeclick" default-expand-all show-checkbox node-key="guid" />
                    </div>
                </el-card>
            </el-col>
        </el-row>
        <!--弹出界面-->
        <el-dialog :title="formTitle" :visible.sync="formVisible" width="500px" v-model="formVisible"
            :close-on-click-modal="false">
            <el-form :model="platForm" label-width="80px" :rules="formRules" ref="platForm">
                <el-row>
                    <el-col :span="24">
                        <el-form-item label="平台简码" prop="platformCode">
                            <el-input v-model="platForm.platformCode" autocomplete="off" placeholder="请输入平台简码" clearable>
                            </el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="24">
                        <el-form-item label="平台名称" prop="platformName">
                            <el-input v-model="platForm.platformName" autocomplete="off" placeholder="请输入平台名称" clearable>
                            </el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="24">
                        <el-form-item label="主题编号" prop="theme">
                            <el-input v-model="platForm.theme" autocomplete="off" placeholder="请输入主题编号" clearable>
                            </el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="24">
                        <el-form-item label="加载序号" prop="index">
                            <el-input v-model="platForm.index" autocomplete="off" placeholder="请输入加载序号" clearable>
                            </el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="24">
                        <el-form-item label="状态" prop="enabled">
                            <el-radio-group v-model="platForm.enabled">
                                <el-radio :label="false">正常</el-radio>
                                <el-radio :label="true">禁用</el-radio>
                            </el-radio-group>
                        </el-form-item>
                    </el-col>
                    <el-col :span="24">
                        <el-form-item label="备注" prop="remark">
                            <el-input v-model="platForm.remark" autocomplete="off" type="textarea"
                                :autosize="{ minRows: 2, maxRows: 6 }"></el-input>
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

export default {
    name: 'plat_manager',
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
                { label: '平台名称', param: 'platformName' },
                { label: '主题', param: 'theme' },
                { label: '排序', param: 'index', width: '60' },
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
                // platformName: [{ required: true, message: "请输入平台名称", trigger: "blur" }],
            },
            //表单数据
            initForm: {
                id: 0,
                PlatformCode: '',
                platformName: '',
                theme: '',
                index: '',
                enabled: false,
                remark: '',
            },
            platForm: {},

            showButton: false, //系统配置保存按钮
            systemData: [],
            defaultProps: {
                children: "children",
                label: "systemName"
            },

        }
    },
    methods: {
        //获取平台列表
        searchData() {
            let _this = this;
            this.$ajax(this.$apiSet.getPlatformInfo, {
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
        getSystemData() {
            let _this = this;
            this.$ajax(this.$apiSet.getSystemInfo)
                .then(res => {
                    if (!res.data.success) {
                        _this.$errorMsg(res.data.message)
                    } else {
                        _this.systemData = res.data.response;
                    }
                }).catch(err => { })
        },
        handleButton(val) {
            if (val.methods == 'handleEdit') this.handleEdit(val.index, val.row)
            if (val.methods == 'handleDelete') this.handleDelete(val.index, val.row)
        },
        handleSelectionChange(val) {
            this.sels = val;
        },
        handleRowClick(val) {
            this.sels = val;
            this.showButton = true;
            this.initialSystemCheck(val);
        },
        disable(row) {
            let _this = this;
            this.$showMsgBox({
                msg: `<p>是否${row.enabled ? `启用` : `禁用`}【${row.platformName}】平台?</p>`,
                type: 'warning',
                isHTML: true
            }).then(() => {
                this.$ajax(this.$apiSet.disablePlatform, {
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
                msg: `<p>您确定要删除【${row.platformName}】平台?</p>`,
                type: 'warning',
                isHTML: true
            }).then(() => {
                this.$ajax(this.$apiSet.deletePlatform, {
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
        // 初始化系统选中
        initialSystemCheck(item) {
            this.$refs.systemtree.setCheckedKeys([])
            this.$refs.systemtree.setCheckedKeys(item.systemIds ? item.systemIds.split(',') : [])
        },
        nodeclick(data, node) {
            node.checked = !(node.checked)
        },
        //角色绑定
        saveSystem() {
            let ids = this.$refs.systemtree.getCheckedNodes(false, true).map(item => item.guid)

            this.platForm = this.sels
            this.platForm.systemIds = ids.join(',')

            this.formTitle = "编辑"
            this.handleSubmit()
        },
        //显示编辑界面
        handleEdit(index, row) {
            this.formTitle = "编辑";
            this.formVisible = true;
            this.platForm = Object.assign({}, row);
        },
        //显示新增界面
        plusData() {
            this.formTitle = "新增";
            this.formVisible = true;
            this.platForm = JSON.parse(JSON.stringify(this.initForm));
        },
        handleSubmit: debounce(function () {
            let _this = this;

            if (this.$isNull(this.platForm.platformName))
                return this.$warnMsg("平台名称不能为空！")
            if (this.$isNull(this.platForm.index))
                return this.$warnMsg("加载序号不能为空！")

            let apiUrl = this.formTitle == '编辑' ? this.$apiSet.putPlatform : this.$apiSet.postPlatform;

            this.logining = true;
            this.$ajax(apiUrl, this.platForm)
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
            this.sels = {}
            this.loading = true;

            this.searchData();
            this.getSystemData();

            this.$nextTick(() => {
                this.$refs.systemtree.setCheckedKeys([]) //清除选中项
            })
        },
    },
    mounted() {
        this.refreshData();
    }
};
</script>

<style scoped>
.plat_manager {
    height: 100%;
    width: 100%;
}

.plat_manager .tree-box {
    height: calc(100% - 32px);
    overflow: auto;
}
</style>
