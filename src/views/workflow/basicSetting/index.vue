<template>
  <div class="base-setup">
    <el-form label-position="top" label-width="80px">

      <el-form-item label="流程图标">
        <i :class="setup.icon" :style="'background:' + setup.background"></i>
        <span class="change-icon">
          <span>
            <span>选择背景色</span>
            <el-color-picker v-model="setup.background" show-alpha size="small" :predefine="colors"></el-color-picker>
          </span>
          <span>
            <span>选择图标</span>
            <el-popover placement="bottom-start" width="180" trigger="click">
              <div class="icon-select">
                <i :class="i" v-for="(i, id) in icons" :key="id" @click="setup.icon = i"></i>
              </div>
              <i slot="reference" :class="setup.icon"></i>
            </el-popover>
          </span>
        </span>
      </el-form-item>

      <el-form-item label="流程名称">
        <el-input v-model="setup.name" size="medium"></el-input>
      </el-form-item>

      <el-form-item label="所在分组" class="group">
        <el-select v-model="setup.group" placeholder="请选择分组" size="medium" style="width:calc(100% - 130px) !important;">
          <el-option v-for="(op, index) in fromGroup" :key="index" :label="op.name" :value="op.id"></el-option>
        </el-select>
        <el-popover placement="bottom-end" title="新建分组" width="300" trigger="click">
          <el-input size="medium" v-model="newGroup" placeholder="请输入新的分组名">
            <el-button slot="append" size="medium" type="primary" @click="addGroup">提交</el-button>
          </el-input>
          <el-button icon="el-icon-plus" slot="reference" size="medium" type="primary" style="width:120px;">新建分组</el-button>
        </el-popover>
      </el-form-item>

      <el-form-item label="备注说明">
        <el-input placeholder="请输入备注说明" v-model="setup.remark" type="textarea" show-word-limit :autosize="{ minRows: 2, maxRows: 5}" maxlength="500"></el-input>
      </el-form-item>

      <el-form-item label="消息通知方式">
        <el-select v-model="setup.notify.types" value-key="name" placeholder="选择消息通知方式" style="width: 30% !important;" size="medium" clearable multiple collapse-tags>
          <el-option v-for="(wc, index) in notifyTypes" :label="wc.name" :key="index" :value="wc"></el-option>
        </el-select>
        <el-input size="medium" v-model="setup.notify.title" style="width: 68%; float:right;" placeholder="消息通知标题"></el-input>
      </el-form-item>

    </el-form>
  </div>
</template>

<script>

export default {
  components: {},
  data() {
    return {
      setup: this.modelValue,
      newGroup: '',
      fromGroup: [
        { id: 1, name: '默认分组1' },
        { id: 2, name: '默认分组2' },
        { id: 3, name: '默认分组3' },
      ],
      notifyTypes: [
        { type: 'app', name: '应用内通知' },
        { type: 'email', name: '邮件通知' },
        { type: 'sms', name: '短信通知' },
        { type: 'wx', name: '微信通知' },
        { type: 'dd', name: '钉钉通知' },
      ],
      colors: [
        '#ff4500',
        '#ff8c00',
        '#ffd700',
        '#90ee90',
        '#00ced1',
        '#1e90ff',
        '#c71585',
        'rgba(255, 69, 0, 0.68)',
        'rgb(255, 120, 0)',
        'hsl(181, 100%, 37%)',
        'hsla(209, 100%, 56%, 0.73)',
        '#c7158577'
      ],
      icons: [
        'el-icon-delete-solid',
        'el-icon-s-tools',
        'el-icon-phone',
        'el-icon-s-goods',
        'el-icon-warning',
        'el-icon-circle-plus',
        'el-icon-s-help',
        'el-icon-camera-solid',
        'el-icon-s-promotion',
        'el-icon-s-cooperation',
        'el-icon-s-platform',
        'el-icon-s-custom',
        'el-icon-s-data',
        'el-icon-s-check',
        'el-icon-s-claim',
        'el-icon-location'
      ]
    }
  },
  props: {
    modelValue: { type: Object, default: () => { } }
  },
  watch: {
    setup: {
      handler: function (newVal, oldVal) {
        this.setup = newVal;
        this.$emit("update:modelValue", newVal)
      },
      deep: true
    },
  },
  mounted() {

  },
  methods: {
    addGroup() {
      if (this.newGroup !== '') {
        this.fromGroup.push({
          id: 1,
          name: this.newGroup
        })
        this.$message.success('添加分组' + this.newGroup + '成功！')
      }
    },
  }
}
</script>

<style lang="less" scoped>
/deep/ .el-select-dropdown {
  display: none;
}

.icon-select {
  i {
    cursor: pointer;
    font-size: large;
    padding: 10px;

    &:hover {
      box-shadow: 0 0 10px 2px #c2c2c2;
    }
  }
}

/deep/ .select-u {
  width: 100%;
}

.base-setup {
  overflow: auto;
  margin: 0 auto;
  width: 600px;
  height: calc(100vh - 105px);
  background: #ffffff;
  margin-top: 10px;
  padding: 15px 20px;
  
  i:first-child {
    position: relative;
    cursor: pointer;
    font-size: xx-large;
    color: #ffffff;
    border-radius: 10px;
    padding: 5px;
  }

  .change-icon {
    margin-left: 20px;

    span {
      font-size: small;
      color: #7a7a7a;
      margin-right: 15px;
    }

    i {
      cursor: pointer;
      color: #7a7a7a;
      font-size: x-large;
    }
  }

  /deep/ .el-form-item__label {
    padding: 0;
    font-weight: bold;
  }

  /deep/ .el-form-item {
    margin-bottom: 5px;
  }
}
</style>
