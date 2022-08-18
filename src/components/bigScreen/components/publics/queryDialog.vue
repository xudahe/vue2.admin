<!-- 数据查询通用的弹出框 -->
<template>
  <dialogtt ref="dataQuery" v-model="dataQuery.show" :title="dataQuery.title" :buttons="dataQuery.buttons" :bodyshow="dataQuery.bodyshow" @input="clearDialogGx">
    <div class="queryDialog" style="max-height:8rem;max-width: 4.5rem;">
      <table class="dia_Table">
        <tr v-for="(item,index,key) in dialoglist" :key="index">
          <td style="width: 1.4rem;" class="td_title">{{item.name}}</td>
          <td v-if="item.name!='photo'" class="td_value"> {{item.value}}</td>
          <td v-else class="td_value">
            <img :src="photourl + 'JYPS/Images/pk/' + item.value" style="width: 2rem" alt="未找到图片" v-viewer>
          </td>
        </tr>
      </table>
    </div>
  </dialogtt>

</template>

<script>
import dialogtt from "../dialog.vue"
export default {
  components: {
    dialogtt
  },
  name: 'querydetail',
  props: {
    detailData: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  watch: {
    detailData(newVal, oldVal) {
      if (newVal) {
        this.dataQuery.title.text = newVal.title;
        this.dataQuery.show = true;
        this.$refs.dataQuery.retresizeNew();

        this.initial(newVal.list);
      }
    },
  },
  beforeDestroy() {
    this.clearDialogGx();
  },
  data() {
    return {
      photourl: AppConfig.baseUrl_Pro,
      dataQuery: {
        show: false,
        title: {
          text: '',
          className: 'xa-bg-blue' //标题样式类名，包含`background`、`color`即可
        },
        bodyshow: true,
      },
      dialoglist: [],
    }
  },
  methods: {
    clearDialogGx() {
 
    },
    initial(value) {
      var attributs = []; //有值的数组
      var isNullattributs = []; //值为空的数组
      for (var key in value) {
        if (AppSetting.hiddfields.indexOf(',' + key + ',') < 0) {
          if (value[key] == "") {
            // isNullattributs.push({
            //   name: key,
            //   value: ''
            // })
          } else {
            attributs.push({
              name: key,
              value: value[key]
            });
          }

        }
      }
      attributs.push.apply(attributs, isNullattributs);

      this.dialoglist = attributs;
    },
  },
  mounted() {
    this.dataQuery.title.text = this.detailData.title;
    this.dataQuery.show = true;
    this.$refs.dataQuery.retresizeNew();

    this.initial(this.detailData.list);
  },
  created() {

  },
}
</script>

<style lang="less">
.dia_Table {
  width: 100%;
  background-color: #053c51;

  .td_title {
    font-size: 0.16rem;
    font-family: "微软雅黑";
    white-space: normal;
    width: 1.5rem;
    padding-left: 0.1rem;
    color: #c9e4fc;
    text-align: left;
    border-right: 1px solid #076587;
    border-bottom: 1px solid #076587;
    border-left: 1px solid #076587;
    font-weight: 100;
    line-height: 0.35rem;
  }
  .td_titleTop {
    border-top: 1px solid #076587;
  }

  .td_value {
    padding: 0.05rem;
    font-size: 0.16rem;
    color: #fff;
    text-align: left;
    font-weight: normal;
    border-right: 1px solid #076587;
    border-bottom: 1px solid #076587;
    line-height: 0.35rem;
  }
}
</style>