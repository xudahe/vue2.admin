<style lang="less">
.videoPage {
  .leftimg {
    height: calc(100%);
    width: calc(100%);
    display: inline-block;
    overflow-y: auto;
  }
  .rightimg {
    width: 100%;
    height: calc(100%);
    display: inline-block;
    overflow-y: auto;
  }

  .changebtnnext {
    position: absolute;
    width: 99%;
    top: 47%;
    * {
      font-size: 0.24rem;
    }
  }

  .fenye {
    position: absolute;
    bottom: 1.3%;
    color: #ffffff;
    width: 100%;
    z-index: 99;
    text-align: center;

    * {
      font-size: 0.24rem;
    }
  }

  .selectedwaters,
  .unselectedwaters:hover {
    width: 100%;
    text-align: left !important;
    display: inline-block !important;
    padding: 10px 5px !important;
    font-size: 0.17rem !important;
    margin-top: 0.1rem !important;
    background-color: rgba(39, 164, 217, 0.7);
    width: 100%;
    font-family: "SOURCEHANSANS-MEDIUM";
    cursor: pointer;

    span {
      color: #ffad33;
      font-size: 0.18rem;
      padding-left: 0.1rem;
    }
  }

  .unselectedwaters {
    text-align: left !important;
    color: #fff !important;
    display: inline-block !important;
    padding: 10px 5px !important;
    font-size: 0.17rem !important;
    margin-top: 0.1rem !important;
    background-color: rgba(15, 61, 82, 0.7);
    width: 100%;
    font-family: "SOURCEHANSANS-MEDIUM";
    cursor: pointer;

    span {
      color: #51afdb;
      font-size: 0.18rem;
      padding-left: 0.1rem;
    }
  }
}

// /**
// 不同分辨率适配
//  */
// @media screen and (max-width: 1440px) {
//   .selected {
//     width: 0.88rem !important;
//   }
//   .unselected {
//     width: 0.88rem !important;
//   }
// }
// @media screen and (max-width: 1366px) {
//   .selected {
//     width: 0.72rem !important;
//   }
//   .unselected {
//     width: 0.72rem !important;
//   }
// }
</style>
<template>
  <div class="videoPage" style="width:100%;height: 100%;">
    <!-- 左侧 -->
    <div id="circleLeft" style="height: 100%;width:3.2rem;float: left;padding-bottom: 0.1rem;" class=" fade-in-right">
      <div class="leftimg">
        <div style="margin:0.1rem;height: calc(100% - 0.2rem);">
          <div style="padding: 0rem;  height: 100%;    overflow: auto;">
            <div v-for="(item, index) in selectlist" :key="index" @click="expandlist(item, index)" :class="index == currentindex ? 'selectedwaters' : 'unselectedwaters'" :style="index == 0 ? 'margin-top: 0.1rem' : ''">
              <span>{{ item.title }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 右侧 -->
    <div id="circleMiddle" style="height: 100%;width:calc(100% - 3.2rem);float: left;position: relative;padding-bottom: 0.1rem;" class=" fade-in-left">
      <div class="rightimg" v-show="waterList.length > 0">
        <div class="fenye">
          <span>{{ this.current }}</span> <span>/</span>
          <span>{{ this.pageSizenum }}</span>
        </div>
        <div id="videos" style="width:100%;height: 100%;padding: 0.12%"></div>
        <div class="changebtnnext">
          <Button shape="circle" size="small" v-show="leftbtn" style="float: left;display: block;" icon="ios-arrow-back" type="primary" @click="changecurrent(1)"></Button>
          <Button shape="circle" size="small" v-show="rightbtn" style="float: right;display: block;" icon="ios-arrow-forward" type="primary" @click="changecurrent(0)"></Button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import videojs from "video.js";
import "videojs-contrib-hls";

export default {
  name: "videojs",
  data() {
    return {
      leftbtn: false,
      rightbtn: true,
      page: {
        pagesize: 9,
        currentPage: 1,
        list: [],
        total: 0
      },
      current: 1,
      pagenum: 0,
      pageSizenum: 0,
      selectlist: [],
      khmyVideojs: [],
      currentRow: 0, //视频行
      currentCol: 0, //视频列
      currentindex: -1,
      waterList: [],
      waterListChildren: []
    };
  },
  methods: {
    //获取左侧河道列表
    getLeftWaterList() {
      var _this = this;
      _this.waterList = [];
      _this.selectlist = [];

      this.$ajax(this.$apiSet.getwaterlistData1, {
        type: "",
        isgroup: 1
      }).then(
        res => {
          if (res.data.success && res.data.source.length > 0) {
            var mydata = res.data.source;

            _this.waterList = mydata;
            _this.selectlist = mydata;
            _this.expandlist(_this.selectlist[0], 0);
          } else {
            _this.$Message.error("暂无视频");
          }
        },
        error => { }
      );
    },
    //列表点击事件
    expandlist(item, index) {
      this.pageSizenum = 0;
      this.current = 1;
      this.currentindex = index;
      this.waterListChildren = [];
      this.waterListChildren = item.children;
      this.page.list = item.children;
      this.changePage();
    },
    changeType(type) {
      bus.$emit("changetype", type);
    },

    showVideo() {
      var _this = this;
      this.clearvideo();
      //视频总数
      var spCount = _this.list.length;
      //行：平方根后四舍五入
      var pfgNum = Math.sqrt(spCount); //开平方根
      var sswrNum = Math.round(pfgNum); //平方根后如果遇到小数，则进行四舍五入
      // 列：小数点后进一位
      _this.currentCol = Math.ceil(spCount / sswrNum);
      _this.currentRow = sswrNum;

      let elementList = document.getElementById("videos");
      elementList.innerHTML = "";
      let dom = "";

      for (let j = 0; j < _this.list.length; j++) {
        var url = _this.list[j].hls;
        var name = _this.list[j].stationname;

        dom +=
          "<div style='height:" + (1 / _this.currentRow) * 100 +
          "%;width:" + (1 / _this.currentCol) * 100 +
          "%;float:left;text-align: center;position: relative;'><video khvideoid='" + j +
          "' indexcode='" + url +
          "' id='khVideos" + j + "'" +
          " class='video-js vjs-default-skin vjs-big-play-centered khvideojs' muted='muted' controls preload='auto'  poster='auto' style='width: 100%;height: 100%;'></video><div style='position: absolute;top: 0%;width: 100%;text-align: right;z-index: 2;'><span style='background-color: black;padding: 5px;color:#ffffff;font-size:16px;font-weight: 700;margin-right: 6%;'>" +
          name +
          "</span></div></div>";

        this.$ajax(this.$apiSet.getaddress_kh1, {
          indexcode: url,
          protocol: "hls"
        }).then(
          res => {
            if (res != undefined) {
              if (res.data.success) {
                let khvideojs = document.querySelectorAll(".khvideojs");
                for (let ss = 0; ss < khvideojs.length; ss++) {
                  let indexcode = khvideojs[ss].getAttribute("indexcode");
                  let khvideoid = parseInt(
                    khvideojs[ss].getAttribute("khvideoid")
                  );
                  if (indexcode == res.config.params.indexcode) {
                    let khurl = res.data.source;
                    _this.khmyVideojs[ss].src({
                      src: khurl,
                      type: "application/x-mpegURL"
                    });
                    // _this.khmyVideojs[ss].play();
                  }
                }
              }
            }
          },
          error => {
            alert(error);
          }
        );
      }

      elementList.innerHTML += dom;
      _this.setvideodom();
    },
    setvideodom() {
      var _this = this;
      let khvideojs = document.querySelectorAll(".khvideojs");

      for (let ss = 0; ss < khvideojs.length; ss++) {
        var khvideojsid = khvideojs[ss].getAttribute("id");
        _this.khmyVideojs.push(
          videojs(khvideojsid, {
            autoplay: true, //是否自动播放
            bigPlayButton: true,
            textTrackDisplay: false,
            posterImage: false,
            errorDisplay: false,
            hls: {
              withCredentials: true
            }
          })
        );
      }
    },
    changecurrent(ins) {
      let _this = this;
      if (ins == 0) {
        if (_this.current >= _this.pageSizenum) {
          this.$Message.error("已经是最后一页了");
          _this.rightbtn = false;
          return;
        } else {
          _this.current++;
          _this.changePage();
          if (_this.current >= _this.pageSizenum) {
            _this.rightbtn = false;
            _this.leftbtn = true;
          } else {
            _this.rightbtn = true;
            _this.leftbtn = true;
          }
        }
      } else if (ins == 1) {
        if (_this.current == 1) {
          this.$Message.error("已经是第一页了");
          _this.leftbtn = false;
          return;
        } else {
          _this.current--;
          _this.changePage();
          if (_this.current == 1) {
            _this.rightbtn = true;
            _this.leftbtn = false;
          } else {
            _this.rightbtn = true;
            _this.leftbtn = true;
          }
        }
      }
    },
    //分页
    changePage() {
      let _this = this;
      _this.list = [];

      let pagesize = this.page.pagesize; //每页显示条数
      let result = this.page.list; //数据
      this.page.total = result.length; //总数
      _this.pageSizenum = parseInt(this.page.list.length / pagesize); //分了几页
      //计算总页数
      _this.pageSizenum = Math.ceil(this.page.total / pagesize);

      if (_this.current == _this.pageSizenum) {
        _this.rightbtn = false;
        _this.leftbtn = false;
      } else {
        _this.rightbtn = true;
      }

      let startIndex = (_this.current - 1) * pagesize; //开始下标
      let pagenum = 0;
      if (result.length < startIndex + pagesize) {
        pagenum = result.length;
      } else {
        pagenum = startIndex + pagesize;
      }
      for (let j = startIndex; j < pagenum; j++) {
        _this.list.push(result[j]);
      }
      _this.showVideo();
    },

    clearvideo() {
      //重置清空视频
      for (let j = 0; j < this.khmyVideojs.length; j++) {
        this.khmyVideojs[j].pause();
        videojs(this.khmyVideojs[j].id_).dispose();
      }

      this.khmyVideojs = [];
    }
  },
  mounted() {
    var _this = this;
    this.getLeftWaterList();
  },
  destroyed() { },
  beforeDestroy() {
    this.clearvideo();
  }
};
</script>
