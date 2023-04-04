<style>
.bootombar {
  position: fixed;
  bottom: 0px;
  right: 0px;
  left: 0px;
  height: 30px;
  background: #3f8ffe;
  z-index: 999;
}
</style>

<template>
  <div class="bootombar">
    <div style="float:left;width:50%;margin-left: 10px;"></div>
    <div style="float:right;width:50%;margin-left: -10px;">
      <div style="float:right">
        <Button type="primary" icon="ios-timer" @click="LoadDataCenter()">数据中心</Button>
        <Button type="primary" icon="ios-timer" @click="LoadTaskCenter()">任务列表</Button>
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