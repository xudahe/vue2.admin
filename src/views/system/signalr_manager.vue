<template>
  <div style="width:100%;height:100%;">
    <el-form ref="form" label-width="80px" @submit.prevent="onSubmit" style="margin:20px;width:60%;min-width:300px;">
      <el-form-item label="用户名">
        <el-input v-model="userName"></el-input>
      </el-form-item>
      <el-form-item label="消息">
        <el-input v-model="userMessage"></el-input>
      </el-form-item>
    </el-form>
    <ul v-for="(item, index) in messages" v-bind:key="index + 'itemMessage'" style="width:100%;">
      <li><b>返回信息：</b>User：{{item.user}}&nbsp;&nbsp;Message：{{item.message}}</li>
    </ul>
    <el-button type="primary" @click="submitCard">发送</el-button>
    <el-button type="primary" @click="getLogs">获取</el-button>
  </div>
</template>

<script>

import { encrypt, decrypt } from "@/utils/encrypt.js"
import * as signalR from "@aspnet/signalr";


export default {
  name: 'signalr_manager',
  data() {
    return {
      userName: "Tom",
      userMessage: "123",
      connection: "",
      messages: [],
    }
  },
  methods: {
    //建立连接
    initStart() {
      let _this = this;

      this.connection.start().then(() => {
        console.log("建立连接成功！")
        // _this.connection.invoke('GetLatestCount', 1).catch(function (err) {
        //   return console.error(err);
        // });
      });
    },
    //发送消息
    submitCard() {
      if (this.userName && this.userMessage) {
        this.connection.invoke('SendMessage', this.userName, this.userMessage).catch(function (err) {
          return console.error(err);
        });
      }
    },
    getLogs() {
      this.connection.invoke('GetLatestCount', 1).catch(function (err) {
        return console.error(err);
      });
    },

  },
  created() {
    let _this = this;
    //参考案列：https://www.cnblogs.com/laozhang-is-phi/p/netcore-vue-signalr.html#autoid-4-1-0

    //1、实例化一个连接器
    this.connection = new signalR.HubConnectionBuilder()
      .withUrl(`http://localhost:1082/api/chatHub`, {
        skipNegotiation: true, //针对webSocket为默认协议的时候，可以跳过协商
        transport: signalR.HttpTransportType.WebSockets //通讯方式：webSockets
      })  //然后配置通道路由
      .configureLogging(signalR.LogLevel.Information) //日志信息
      .withAutomaticReconnect() // 在没有任何参数的情况下，将客户端配置为在每次尝试重新连接之前分别等待 0、2、10 和 30 秒，在四次尝试失败后停止。
      .build(); //创建

    //客户端配置15s内没有向服务器发送任何消息，则自动ping一下服务器端
    this.connection.keepAliveIntervalInMilliseconds = 15000;  //默认值15s

    //接收消息
    this.connection.on('ReceiveMessage', function (user, message) {
      console.info('ReceiveMessage')
      _this.messages.push({ user, message });
    });

    //接收来自服务器的通讯返回结果
    this.connection.on('ReceiveUpdate', function (update) {
      console.info('ReceiveUpdate')
      console.info(update)
    })

  },
  mounted() {
    this.initStart();
  },
  beforeDestroy() {
    this.connection.stop(); //关闭连接
  }
}

</script>

<style scoped>
</style>
