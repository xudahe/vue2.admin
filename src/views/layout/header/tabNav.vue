<template>
    <div class="avue-tags">
        <!-- tag盒子 -->
        <div v-if="contextmenuFlag" class="avue-tags__contentmenu"
            :style="{ left: contentmenuX + 'px', top: contentmenuY + 'px' }">
            <div class="item" @click="clearCacheTags">清除缓存
            </div>
            <div class="item" @click="closeOthersTags">关闭其他
            </div>
            <div class="item" @click="closeAllTags">关闭所有
            </div>
        </div>
        <div class="avue-tags__box" :class="{ 'avue-tags__box--close': !isFirstPage }">
            <el-tabs v-model="active" type="card" @contextmenu.native="handleContextmenu" :closable="tagLen !== 1"
                @tab-click="openTag" @edit="menuTag">
                <el-tab-pane :key="item.value" v-for="item in tagList" :label="item.lable" :name="item.value">
                </el-tab-pane>

            </el-tabs>
            <el-dropdown class="avue-tags__menu">
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item @click.native="closeOthersTags">关闭其他</el-dropdown-item>
                    <el-dropdown-item @click.native="closeAllTags">关闭所有</el-dropdown-item>
                    <el-dropdown-item @click.native="clearCacheTags">关闭所有</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>

    </div>
</template>
<script>
import { mapGetters, mapState } from "vuex";
import { clearCache } from "@/api/user";

export default {
    name: "tags",
    data() {
        return {
            active: "",
            contentmenuX: "",
            contentmenuY: "",
            contextmenuFlag: false,

            tagList: [],
            isFirstPage: true,// 配置首页不可关闭
        };
    },
    created() { },
    mounted() {
        this.setActive();
    },
    watch: {
        tag() {
            this.setActive();
        },
        contextmenuFlag() {
            window.addEventListener("mousedown", this.watchContextmenu);
        },
    },
    computed: {
        tagLen() {
            return this.tagList.length || 0;
        },
    },
    methods: {

        watchContextmenu(event) {
            if (!this.$el.contains(event.target) || event.button !== 0) {
                this.contextmenuFlag = false;
            }
            window.removeEventListener("mousedown", this.watchContextmenu);
        },
        handleContextmenu(event) {
            let target = event.target;
            // 解决 https://github.com/d2-projects/d2-admin/issues/54
            let flag = false;
            if (target.className.indexOf("el-tabs__item") > -1) flag = true;
            else if (target.parentNode.className.indexOf("el-tabs__item") > -1) {
                target = target.parentNode;
                flag = true;
            }
            if (flag) {
                event.preventDefault();
                event.stopPropagation();
                this.contentmenuX = event.clientX;
                this.contentmenuY = event.clientY;
                this.tagName = target.getAttribute("aria-controls").slice(5);
                this.contextmenuFlag = true;
            }
        },
        //激活当前选项
        setActive() {
            this.active = this.tag.value;
        },
        menuTag(value, action) {
            if (action === "remove") {
                let { tag, key } = this.findTag(value);
                this.$store.commit("DEL_TAG", tag);
                if (tag.value === this.tag.value) {
                    tag = this.tagList[key === 0 ? key : key - 1]; //如果关闭本标签让前推一个
                    this.openTag(tag);
                }
            }
        },
        openTag(item) {
            let tag;
            if (item.name) {
                tag = this.findTag(item.name).tag;
            } else {
                tag = item;
            }


        },
        closeOthersTags() {
            this.contextmenuFlag = false;
            this.$store.commit("DEL_TAG_OTHER");
        },
        findTag(value) {
            let tag, key;
            this.tagList.map((item, index) => {
                if (item.value === value) {
                    tag = item;
                    key = index;
                }
            });
            return { tag: tag, key: key };
        },
        closeAllTags() {
            this.contextmenuFlag = false;

        },
        clearCacheTags() {
            this.$confirm("是否需要清除缓存?", {
                confirmButtonText: "确定",
                cancelButtonText: "取消",
                type: "warning",
            }).then(() => {
                clearCache().then(() => {
                    this.contextmenuFlag = false;
                    this.$message.success("清除完毕");
                });
            });
        },
    },
};
</script>
  
  
  