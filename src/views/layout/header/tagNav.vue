<template>
  <div class="tags-nav">
    <div class="btn-con left-btn" v-if="arrowVisible" @click="handleScroll(180)">
      <i class="el-icon-arrow-left" />
    </div>
    <div class="btn-con right-btn" v-if="arrowVisible" @click="handleScroll(-180)">
      <i class="el-icon-arrow-right" />
    </div>
    <div class="scroll-outer" ref="scrollOuter" @DOMMouseScroll="handlescroll" @mousewheel="handlescroll"
      :style="{ left: arrowVisible ? '20px' : '0', right: arrowVisible ? '20px' : '0', width: arrowVisible ? 'calc(100% - 45px)' : '100%' }">
      <div ref="scrollBody" class="scroll-body" :style="{ left: tagBodyLeft + 'px' }">
        <transition-group name="taglist">
          <el-tag v-for="(item, index) in $store.getters.tabnavBox" ref="tagsPageOpened" :key="`tag-nav-${item.name}`"
            :name="item.name" :data-route-item="item" :closable="item.name !== 'home'"
            :effect="$route.name === item.name ? 'dark' : 'plain'" @close="removeTab(item)"
            @click="$router.push({ path: item.path })" @contextmenu.native.prevent="openMenu(item, $event, index)"
            style="margin:0 3px; cursor: pointer;display: inline-block;">{{ item.title }}
          </el-tag>
        </transition-group>
      </div>
      <div v-show="rightMenuShow" :style="{ left: contextMenuLeft + 'px', top: contextMenuTop + 'px' }" class="menuBox">
        <div @click="removeTab($store.getters.openNav)">关闭当前</div>
        <div @click="removeLeftTab($store.getters.openNav)">关闭左侧</div>
        <div @click="removeRightTab($store.getters.openNav)">关闭右侧</div>
        <div @click="removeOtherTab($store.getters.openNav)">关闭其他</div>
        <div @click="removeAllTab">关闭全部</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TagsNav",
  props: {
    value: Object,
    list: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      tagBodyLeft: 0,
      outerPadding: 4,

      arrowVisible: false, // 是否显示左右箭头
      rightMenuShow: false, // 是否显示右键菜单
      contextMenuLeft: 0, // 右键菜单距离浏览器左边的距离
      contextMenuTop: 0, // 右键菜单距离浏览器上边的距离
    };
  },
  methods: {
    openMenu(item, e, index) {
      if (index === 0) {
        return false;
      }
      this.rightMenuShow = true;
      this.contextMenuLeft = e.clientX + 10;
      this.contextMenuTop = e.clientY + 15;
      this.$store.dispatch("openMenu", item);
    },
    removeTab(tabItem) {
      this.$store.dispatch("removeTab", {
        tabItem,
        fullPath: this.$route.fullPath,
        router: this.$router
      });
    },
    removeLeftTab(tabItem) {
      this.$store.dispatch("removeLeftTab", { tabItem, router: this.$router });
    },
    removeRightTab(tabItem) {
      this.$store.dispatch("removeRightTab", { tabItem, router: this.$router });
    },
    removeOtherTab(tabItem) {
      this.$store.dispatch("removeOtherTab", { tabItem, router: this.$router });
    },
    removeAllTab() {
      this.$store.dispatch("removeOtherTab", {
        all: true,
        router: this.$router
      });
    },
    handlescroll(e) {

      //    1. mousewheel事件有event.wheelDelta
      //    ---------如果返回的是正的值就说明向上（前）滚动了，反之如果负值就向下（后）。
      //    ---------返回的值多是120的倍数，所以 返回的值/120

      //     2. DeltaDOMMouseScroll事件有event.detail
      //    ---------如果是负值说明向上（前）滚动了，反之如果是正值就向下（后）。 -------
      //    ---------返回的值多是3的倍数，所以  返回值/3

      var type = e.type;
      let delta = 0;
      if (type === "DOMMouseScroll" || type === "mousewheel") {
        delta = e.wheelDelta ? e.wheelDelta : -(e.detail || 0) * 40;
      }
      this.handleScroll(delta);
    },
    handleScroll(offset) {
      const outerWidth = this.$refs.scrollOuter.offsetWidth;
      const bodyWidth = this.$refs.scrollBody.offsetWidth;
      if (offset > 0) {
        this.tagBodyLeft = Math.min(0, this.tagBodyLeft + offset);
      } else {
        if (outerWidth < bodyWidth) {
          if (this.tagBodyLeft < -(bodyWidth - outerWidth)) {
            this.tagBodyLeft = this.tagBodyLeft;
          } else {
            this.tagBodyLeft = Math.max(
              this.tagBodyLeft + offset,
              outerWidth - bodyWidth
            );
          }
        } else {
          this.tagBodyLeft = 0;
        }
      }
    }
  },
  mounted() {
    this.tagsWidth = this.$refs.scrollOuter.offsetWidth;

    this.$erd.listenTo(this.$refs.scrollBody, ele => {
      this.$nextTick(() => {
        this.arrowVisible = ele.offsetWidth >= this.tagsWidth ? true : false;
      });
    });
  },
  watch: {
    rightMenuShow(value) {
      if (value) {
        document.body.addEventListener("click", () => {
          this.rightMenuShow = false;
        });
      } else {
        document.body.removeEventListener("click", () => {
          this.rightMenuShow = false;
        });
      }
    }
  }
};
</script>

<style lang="less" scoped>
.tags-nav {
  width: 100%;
  // height: 42px !important;
  // line-height: 42px;
  position: relative;
  border-top: 1px solid #f0f0f0;
  border-bottom: 1px solid #f0f0f0;

  .btn-con {
    cursor: pointer;
    position: absolute;
    height: 100%;
    background: #fff;
    z-index: 10;

    &.left-btn {
      left: 0px;
    }

    &.right-btn {
      right: 0px;
    }
  }

  .scroll-outer {
    position: absolute;
    box-shadow: 0px 0 3px 2px rgba(100, 100, 100, 0.1) inset;

    height: 100%;
    overflow: hidden;

    .scroll-body {
      height: ~"calc(100% - 1px)";
      display: inline-block;

      position: absolute;
      overflow: visible;
      white-space: nowrap;
      transition: left 0.3s ease;

      .ivu-tag-dot-inner {
        transition: background 0.2s ease;
      }
    }
  }


  .menuBox {
    letter-spacing: 1px;
    border-radius: 5px;
    margin: 0;
    background: #fff;
    z-index: 999;
    position: fixed;
    padding: 0;
    font-size: 12px;
    font-weight: 400;
    color: #333;
    box-shadow: 2px 1px 6px 0 rgba(0, 0, 0, 0.3);

    div {
      margin: 0;
      padding: 0px 16px;
      cursor: pointer;
      height: 0.4rem;
      line-height: 0.4rem;

      &:hover {
        background: #e3f6ff;
      }
    }
  }
}



// name为taglist的transiton会使用这个类名

/* transition-group 效果过程 */
.taglist-enter-active,
.taglist-leave-active {
  transition: all 0.5s linear;
}

/* transition-group 进场的瞬间与离场的效果添加 */
.taglist-enter,
.taglist-leave-to {
  opacity: 0; /*透明度*/
  transform: translateY(50px);
}
</style>
