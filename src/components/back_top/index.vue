<template>
  <div class="back-top" ref="backtop">
    <el-button :type="backTopOptions.type" :icon="backTopOptions.icon" :circle="backTopOptions.isCircle" class="to-top"
      @click.native="backTop">
      <slot />
    </el-button>
  </div>
</template>

<script>
/**
 * @description 回到顶部
 */
export default {
  name: "back-top",
  props: {
    options: {
      type: Object,
      default: () => {
        return {
          target: "body",
          type: "primary",
          delay: 500,
          isCircle: true,
          icon: "el-icon-caret-top",
          right: "40px",
          bottom: "60px",
          visibility: 100,
          isMove: false
        };
      }
    }
  },
  data() {
    return {
      timeout: "",
      backTopOptions: {}
    };
  },
  created() {
    this.backTopOptions = {
      target: this.options.target || "body",
      type: this.options.type || "primary",
      delay: this.options.delay || 500,
      isCircle: this.options.isCircle === false ? false : true,
      icon: this.options.icon || "el-icon-caret-top",
      right: this.options.right || "40px",
      bottom: this.options.bottom || "60px",
      visibility: this.options.visibility || 100,
      isMove: this.options.isMove
    };
  },
  beforeDestroy() {
    document
      .querySelector(this.backTopOptions.target)
      .removeEventListener("scroll", this.getScrollTop);
  },
  mounted() {
    let _this = this;
    this.initialStyle();

    if (!this.$isNull(this.timer)) {
      clearInterval(this.timeout);
    }
    this.timeout = setInterval(() => {
      if (document.querySelector(_this.backTopOptions.target)) {
        _this.initialListener();
        clearInterval(this.timeout);
      }
    });
  },
  methods: {
    // 初始化样式
    initialStyle() {
      const backtop = this.$refs.backtop;
      this.$setStyle(backtop, {
        bottom: this.backTopOptions.bottom,
        right: this.backTopOptions.right
      });
      this.backTopOptions.isMove &&
        this.$setStyle(backtop,
          "transform",
          `translate(${parseInt(this.backTopOptions.right)}px, ${parseInt(this.backTopOptions.bottom)}px)`
        );
    },
    // 返回顶部
    backTop() {
      $(this.options.target).animate(
        { scrollTop: 0 },
        this.backTopOptions.delay
      );
    },
    // 获取滚动高度
    getScrollTop(e) {
      const backtop = document.querySelector(".to-top");
      const box = this.$refs.backtop;
      e.target.scrollTop >= this.backTopOptions.visibility
        ? (this.$setStyle(backtop, "transform", "scale(1)"),
          this.backTopOptions.isMove &&
          this.$setStyle(box, "transform", `translate(0, 0)`))
        : (this.$setStyle(backtop, "transform", "scale(0)"),
          this.backTopOptions.isMove &&
          this.$setStyle(box,
            "transform",
            `translate(${parseInt(this.backTopOptions.right)}px, ${parseInt(this.backTopOptions.bottom)}px)`
          ));
    },
    initialListener() {
      const _this = this;
      document
        .querySelector(this.backTopOptions.target)
        .addEventListener("scroll", this.getScrollTop);
    }
  },
  beforeDestroy() {
    clearInterval(this.timeout)
  },
};
</script>

<style lang="scss" scoped>
.back-top {
  position: fixed;
  z-index: 99;
  right: 40px;
  bottom: 60px;
  transition: 0.3s;
}

.to-top {
  position: relative;
  transform: scale(0);
  transition: 0.3s;
}
</style>