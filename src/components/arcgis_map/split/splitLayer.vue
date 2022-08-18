<template>
  <div style="max-height:150px;overflow: auto;">
    <Tree :data="layer" show-checkbox @on-check-change="changeSwitch"></Tree>
  </div>
</template>

<script>

import axios from 'axios'
export default {
  data() {
    return {
      isreset: false, //用来重置树
      layer: []
    };
  },
  watch: {
    isreset(newvalue, oldvalue) {
      if (newvalue) this.resettree(this.layer);
      this.isreset = false;
    }
  },
  mounted() {
    let _self = this;
    axios.get(require('@/assets/static/data/layertree.json')).then(function (res) {
      _self.$store.dispatch('layertree', res.data.source);
      _self.initial();
    }).catch(err => {
      console.log(err);
    });
  },
  methods: {
    initial() {
      let list = JSON.parse(JSON.stringify(this.$store.getters.layertree))
      this.treelist(list);
      this.layer = list;
    },
    changeSwitch(data) {
      this.$parent.$parent.items = [];
      for (let i = 0; i < data.length; i++) {
        if (data[i].children.length == 0) {
          if (this.$parent.$parent.items.indexOf(data[i]) < 0) {
            this.$parent.$parent.items.push(data[i]);
          }
        }
      }
    },
    resettree(tree) {
      for (let i = 0; i < tree.length; i++) {
        tree[i].checked = false;
        if (tree[i].children.length > 0) {
          this.resettree(tree[i].children);
        }
      }
    },
    treelist(list) {
      for (let index = 0; index < list.length; index++) {
        list[index].checked = false;
        list[index].expand = list[index].subjectname ? true : false; //展开
        list[index].slider = Number(list[index].opacity) * 100; //新增的滑块属性
        list[index].title = list[index].subjectname ? list[index].subjectname : list[index].servicename;
        if (list[index].haschild != undefined && !list[index].haschild)
          list[index].children = [];
        if (list[index].children != undefined) {
          this.treelist(list[index].children);
        }
      }
    }
  }
};
</script>
