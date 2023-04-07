<style>
.bootombar {
  background: #409EFF;
  height: 100%;
  width: 100%;
}
</style>

<template>
  <div class="bootombar">
    <div style="float:left;width:50%;height: 100%;"></div>
    <div style="float:right;width:50%;height: 100%;">
      <div style="float:right">
        <el-button size="mini" type="primary" icon="el-icon-time" @click="LoadDataCenter()">数据中心</el-button>
        <el-button size="mini" type="primary" icon="el-icon-time" @click="LoadTaskCenter()">任务列表</el-button>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {};
  },
  components: {

  },
  computed: {

  },
  mounted() {
    let that = this;

  },
  methods: {
    LoadTaskCenter() {

    },
    LoadDataCenter() {

    }
  }
};
</script>