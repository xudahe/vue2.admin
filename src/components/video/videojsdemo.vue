<!--
  videojs插件模块
  目前支持 m3u8，mp4,Ogg格式
  rtmp,flv格式已写，未测试
  domid用于区分视频，多个视频的时候需要修改，不传有默认值
  1.传参格式 (videojsurl:Object)
   最好别用，初始化容易出错
    {
        url:"视频地址",
    }
  2.如果失效就用$emit传
    尽量用这种方法
    bus.$emit('videojsdemouel','视频地址链接')
  3.手动关闭视频
    bus.$off('videojsdemouel_stop')
  正常不需要手动关闭，页面销毁时会自动销毁视频
-->
<template>
  <div :id="'videojsdiv_' + domid" style="width: 100%;height: 100%">
    <video :id="domid" class='video-js vjs-default-skin vjs-big-play-centered mvideojs' controls preload='auto' style='width: 100%;height: 100%;' poster='auto'></video>
  </div>
</template>


<script>
import videojs from 'video.js'
import 'videojs-contrib-hls'
import bus from "../../eventBus";
export default {
  name: "videojsdemo",
  props: {
    domid: {
      type: String,
      default() {
        return Math.random().toString(16).substr(2, 8);
      }
    },

    videojsurl: {
      type: Object,
      default() {
        return { url: "" }
      }
    }
  },

  watch: {
    videojsurl: {
      handler(newName, oldName) {
        if (newName.url == oldName.url) return;
        let _this = this;
        _this.videojsurl = newName;
        if (_this.videojsdemoname != null) {
          _this.stopvideo();
        }
        _this.initvideo();
        let videourl = newName.url == undefined ? '' : newName.url; //地址
        if (videourl == '') return
        _this.videojsdemoname.src({ src: videourl, type: _this.inittype(videourl) });
        _this.videojsdemoname.play()
      },
      deep: true,
      // immediate:true
    }
  },

  data() {
    return {
      videojsdemoname: null,
    }
  },
  mounted() {
    let _this = this;
    this.initvideo();
    bus.$off('videojsdemouel')
    bus.$on('videojsdemouel', function (item) {
      if (_this.videojsdemoname == null) _this.initvideo();
      _this.videojsdemoname.pause();
      _this.videojsdemoname.src({ src: item, type: _this.inittype(item) });
      _this.videojsdemoname.play()
    });

    bus.$off('videojsdemouel_stop')
    bus.$on('videojsdemouel_stop', this.stopvideo)
  },
  methods: {
    initvideo() {
      let _this = this;
      _this.videojsdemoname = null;
      let videojsdemoid = document.getElementById(_this.domid);
      if (videojsdemoid == null) {
        let divdom = document.getElementById('videojsdiv_' + _this.domid);
        if (divdom == undefined) divdom = document.getElementById('videojsdiv_videojsdemo');
        divdom.innerHTML = (` <video id="` + _this.domid + `"  class='video-js vjs-default-skin vjs-big-play-centered mvideojs' controls preload='auto' style='width: 100%;height: 100%;' poster='auto'></video>`);
        videojsdemoid = document.getElementById(_this.domid)
      }
      _this.videojsdemoname = videojs(videojsdemoid, {
        bigPlayButton: true,
        textTrackDisplay: false,
        posterImage: false,
        errorDisplay: false,
        controlBar: {
          fullscreenToggle: true,//显示全屏按钮，默认为true
          pictureInPictureToggle: false,//隐藏画中画按钮，默认为true
          volumePanel: true,//隐藏声音面板
          currentTimeDisplay: true,//显示当前播放时间
          timeDivider: false,//显示时间分割线
          durationDisplay: false,//显示总时间
          remainingTimeDisplay: false,//隐藏剩余时间，
        },
        hls: {
          withCredentials: true
        }
      });

      let videourl = this.videojsurl.url == undefined ? '' : this.videojsurl.url; //地址
      if (videourl == '') return
      _this.videojsdemoname.src({ src: videourl, type: _this.inittype(videourl) });
      _this.videojsdemoname.play()
      // _this.videojsdemoname.src({src:videourl, type: "video/x-flv"})
    },
    stopvideo() {
      if (this.videojsdemoname != null) {
        // this.videojsdemoname.pause();
        videojs(this.videojsdemoname.id_).dispose();
        this.videojsdemoname = null
      }
    },
    inittype(url) {
      let type = 'application/x-mpegURL';
      if (url != undefined && url != null && url != "") {
        if (url.toLowerCase().indexOf("m3u8") > -1) return type = 'application/x-mpegURL';
        if (url.toLowerCase().indexOf("rtmp") > -1) return type = 'rtmp/flv';
        if (url.toLowerCase().indexOf("flv") > -1) return type = 'rtmp/flv';
        if (url.toLowerCase().indexOf("mp4") > -1) return type = 'video/mp4';
        if (url.toLowerCase().indexOf("ogg") > -1) return type = 'video/ogg';
      }
      return type
    }
  },
  beforeDestroy() {
    this.stopvideo();
  },
}
</script>

<style scoped>
</style>
