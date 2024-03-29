<template>
  <div class="v-card" id="v-card">
    <back-top :options="{ target: '#v-card', isMove: true }" />
    <el-row>
      <el-col v-for="(item, index) in datalist" v-bind="colProps" style="padding: 0.05rem;" :key="index"
        class="img-scale">
        <el-card class="box-card" shadow="hover" style="border: 1px solid #ebeef5;">
          <div class="panel_body">
            <div class="data-item">
              <img :src="require('@/assets/image/暂无图片.png')" class="imgLeft" v-viewer />
              <div class="text">
                <div class="card_title">糖果</div>
                <div class="card_lable">糖果，是糖果糕点的一种，指以糖类为主要成分的一种小吃。若水果或坚果类食物裹上糖衣，则称为甜食（如糖葫芦）</div>
              </div>
            </div>
          </div>
          <div v-if="actions && actions.length" class="panel_actions">
            <div class="panel-action_item" v-for="(action, index) in actions" :key="index"
              :style="{ width: `${100 / actions.length}%` }">
              <i :class="action.icon" style="margin-right: 0.05rem;" />{{ action.text }}
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>

import responsive, { responsiveArray } from '../../utils/responsive.js'

export default {
  name: 'v-card',
  props: {
    // 数据
    datalist: {
      type: Array,
      default: [1, 2, 3, 4, 5, 6, 7, 8, 9]
    },
    // 显示列数，支持响应式对象设置 {xxl,xl,lg,md,sm,xs}
    columns: {
      type: [Number, Object], //多个可能的类型
      default: 3,
      validator(val) {
        return typeof val === 'number' ? 24 % val === 0 : true // 自定义验证函数
      }
    },
  },
  watch: {
    columns: {
      handler() {
        this.setupResponsive()
        this.currentColumn = this.getResponsiveValue()
      },
      immediate: true,
      deep: true,
    },
    screens() {
      this.currentColumn = this.getResponsiveValue()
    },
  },
  data() {
    return {
      screens: {},
      currentColumn: 3,

      actions: [
        {
          text: '查看',
          icon: 'el-icon-view'
        },
        {
          text: '编辑',
          icon: 'el-icon-edit'
        },
        {
          text: '删除',
          icon: 'el-icon-delete'
        }
      ]
    }
  },
  computed: {
    colProps() {
      return {
        span: Math.floor(24 / this.currentColumn)
      }
    },
  },
  methods: {
    // 开启响应式
    setupResponsive() {

      this.token && responsive.off(this.token)

      // 参数是对象类型，即开启响应式
      if (typeof this.columns !== 'object') return

      this.token = responsive.on(screens => {
        this.screens = screens
      })
    },
    // 获取当前响应式的列数
    getResponsiveValue() {

      const columns = this.columns
      const defaultValue = 3
      if (!columns) return defaultValue
      // 参数是对象类型，即开启响应式
      if (typeof columns === 'object') {
        for (let i = 0; i < responsiveArray.length; i++) {
          const breakpoint = responsiveArray[i]
          if (this.screens[breakpoint]) {
            return columns[breakpoint] || defaultValue
          }
        }
      }
      // 数字类型
      return columns
    },
    handleActionClick(action) {
      this.$emit('action', action)
    }

  }
}
</script>

<style lang="less" scoped>
@deep: ~">>>";

.v-card {
  padding: 0.1rem 0.5rem;
  height: 100%;
  width: 100%;
  overflow: auto;

  @{deep}.el-card__body {
    padding: 0 !important;
  }

  .panel_body {
    width: 100%;
    height: 100%;
    padding: 0.05rem;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }

  .panel_actions {
    width: 100%;
    background: rgba(0, 0, 0, 0.02);
    border-top: 1px solid rgba(0, 0, 0, 0.04);
  }

  .panel-action_item {
    text-align: center;
    display: inline-block;
    width: 50%;
    position: relative;
    line-height: 0.4rem;
    height: 0.4rem;
    cursor: pointer;
    color: rgba(0, 0, 0, 0.45);
  }

  .panel-action_item::after {
    content: "";
    border-right: 1px solid rgba(0, 0, 0, 0.09);
    height: 0.2rem;
    position: absolute;
    right: 0;
    top: 50%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
  }

  .panel-action_item:last-child::after {
    display: none;
  }

  .panel-action_item:hover {
    color: rgba(24, 144, 255, 1);
  }

  .data-item {
    width: 100%;
    height: 1.3rem;
  }

  .data-item .imgLeft {
    width: 1.0rem;
    // float: left;
    margin-top: 0.3rem;
  }

  .data-item .text {
    width: calc(~"100% - 1.0rem");
    height: 100%;
    float: left;
    padding-left: 0.05rem;
  }

  .card_title {
    font-size: 0.18rem;
    font-weight: 500;
    color: #000;
    height: 0.3rem;
    // line-height: 0.3rem;
  }

  .card_lable {
    font-size: 0.12rem;
    // height: calc(100% - 0.3rem);
    text-indent: 3em; //首行缩进
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
    overflow: hidden;
  }

  /*效果二：放大 修改scale(放大的值)*/
  .img-scale {
    transition: All 0.2s ease-in-out;
    -webkit-transition: All 0.2s ease-in-out;
    -moz-transition: All 0.2s ease-in-out;
    -o-transition: All 0.2s ease-in-out;
  }

  .img-scale:hover {
    z-index: 9;
    transform: scale(1.02);
    -webkit-transform: scale(1.02);
    -moz-transform: scale(1.02);
    -o-transform: scale(1.02);
    -ms-transform: scale(1.02);
  }
}
</style>
