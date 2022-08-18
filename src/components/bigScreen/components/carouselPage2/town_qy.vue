<template>
  <div class="town_qy" style="width: 100%;height: 100%;position: relative;" :style="{top: topHeight+'px'}">
    <img :src="qyTown" style="width: 100%;height: 100%;position: absolute;" />

    <img :src="wscPoint" class="point_sel_qy wscPoint" />

    <img :src="bzPoint" class="bzPoint1_qy" />
    <img :src="bzPointBg" class="bzPointBg1_qy" />

    <div class="line" style="position: relative;z-index: 1;">
      <canvas id="myCanvas_qy" style="width: 100%;height: 100%;"></canvas>
      <canvas id="myCanvas_qy1" style="width: 100%;height: 100%;"></canvas>
    </div>

    <img :title="item.name" :key="'water'+index" v-for="(item,index) in waterList" :src="require('@/assets/static/img/lshome/ic_water'+item.state+'.png')" class="waterIcon img-scale" :style="{left:item.left-0.1+'rem',top:item.top-0.1+'rem'}" @click="waterClick(item)" />

    <div :key="'level'+index" v-for="(item,index) in waterList" class="waterClass" :style="{color:item.color,left:item.left-0.1+'rem',top:item.top - 0.2+'rem'}">
      {{item.doppler_level}}m
    </div>

    <div :key="'text'+index" v-for="(item,index) in TextList" @click="location(item)" :class="[item.classname,'mapText']">
      <div v-html="item.name"></div>
    </div>

  </div>
</template>

<script>

var global = typeof window === 'undefined' ? {} : window;

var requestAnimationFrame = global.requestAnimationFrame || global.mozRequestAnimationFrame || global.webkitRequestAnimationFrame || global.msRequestAnimationFrame || function (callback) {
  return global.setTimeout(callback, 1000 / 60);
};

function TrackLine(userOptions, lineList) {
  //全局参数
  var self = { lines: [] },
    timer = null,
    canvas = document.getElementById("myCanvas_qy"),
    context = canvas.getContext('2d'),
    width = canvas.width || window.innerWidth,
    height = canvas.height || window.innerHeight;

  canvas.style.cssText = "position:absolute;z-index:1;user-select:none;" + "left: -0.9rem;top: 0.5rem;width: 5.05rem;height: 3.88rem;";

  var canvas1 = document.getElementById("myCanvas_qy1");
  canvas1.style.cssText = "position:absolute;z-index:1;user-select:none;" + "left: -0.9rem;top: 0.5rem;width: 5.05rem;height: 3.88rem;";

  //默认参数
  var options = {
    lineWidth: 1,
    strokeStyle: '#fff',
    radius: 2,
    speed: 1,
    //marker点半径
    markerRadius: 3,
    //marker点颜色,为空或null则默认取线条颜色
    markerColor: '#fff',
    //线条类型 solid、dashed、dotted
    lineType: 'solid',
    //线条颜色
    colors: ['#F9815C', '#F8AB60', '#EDCC72', '#E2F194', '#94E08A', '#4ECDA5'],
    //移动点半径
    moveRadius: 2,
    //移动点颜色
    fillColor: '#fff',
    //移动点阴影颜色
    shadowColor: '#fff',
    //移动点阴影大小
    shadowBlur: 5
  };

  //参数合并
  var merge = function merge(userOptions, options) {
    Object.keys(userOptions).forEach(function (key) {
      options[key] = userOptions[key];
    });
  };

  //线条
  function Line(options) {
    this.options = options;
    this.fillStyle = options.fillStyle;
    this.turnPoints = options.turnPoints || []; //[[50,50],[150,250],[400,650]]
    this.step = 0;
    this.id = options.id;
    this.from = options.pointList.from;
    this.to = options.pointList.to;
  }

  function draw(context) {
    context.save();
    context.beginPath();
    context.lineWidth = options.lineWidth;
    context.strokeStyle = "#2ccccc";

    for (let i = 0; i < lineList.length; i++) {
      context.moveTo(lineList[i].from.x, lineList[i].from.y);
      context.lineTo(lineList[i].to.x, lineList[i].to.y);
    }

    context.stroke();
    context.restore();
  };

  Line.prototype.getPointList = function (from, to) {
    var points = [[from.x, from.y], [to.x, to.y]];
    var ex = points[1][0];
    var ey = points[1][1];
    points[3] = [ex, ey];
    points[1] = this.getOffsetPoint(points[0], points[3]);
    points[2] = this.getOffsetPoint(points[3], points[0]);
    points = this.smoothSpline(points, false);
    //修正最后一点在插值产生的偏移
    points[points.length - 1] = [ex, ey];
    return points;
  };

  Line.prototype.getOffsetPoint = function (start, end) {
    var distance = this.getDistance(start, end) / 3; //除以3？
    var angle, dX, dY;
    var mp = [start[0], start[1]];
    var deltaAngle = -0.001; //偏移0.2弧度
    if (start[0] != end[0] && start[1] != end[1]) {
      //斜率存在
      var k = (end[1] - start[1]) / (end[0] - start[0]);
      angle = Math.atan(k);
    } else if (start[0] == end[0]) {
      //垂直线
      angle = (start[1] <= end[1] ? 1 : -1) * Math.PI / 2;
    } else {
      //水平线
      angle = 0;
    }
    if (start[0] <= end[0]) {
      angle -= deltaAngle;
      dX = Math.round(Math.cos(angle) * distance);
      dY = Math.round(Math.sin(angle) * distance);
      mp[0] += dX;
      mp[1] += dY;
    } else {
      angle += deltaAngle;
      dX = Math.round(Math.cos(angle) * distance);
      dY = Math.round(Math.sin(angle) * distance);
      mp[0] -= dX;
      mp[1] -= dY;
    }
    return mp;
  };

  Line.prototype.smoothSpline = function (points, isLoop) {
    var len = points.length;
    var ret = [];
    var distance = 0;
    for (var i = 1; i < len; i++) {
      distance += this.getDistance(points[i - 1], points[i]);
    }
    var segs = distance / 2;
    segs = segs < len ? len : segs;
    for (var i = 0; i < segs; i++) {
      var pos = i / (segs - 1) * (isLoop ? len : len - 1);
      var idx = Math.floor(pos);
      var w = pos - idx;
      var p0;
      var p1 = points[idx % len];
      var p2;
      var p3;
      if (!isLoop) {
        p0 = points[idx === 0 ? idx : idx - 1];
        p2 = points[idx > len - 2 ? len - 1 : idx + 1];
        p3 = points[idx > len - 3 ? len - 1 : idx + 2];
      } else {
        p0 = points[(idx - 1 + len) % len];
        p2 = points[(idx + 1) % len];
        p3 = points[(idx + 2) % len];
      }
      var w2 = w * w;
      var w3 = w * w2;

      ret.push([this.interpolate(p0[0], p1[0], p2[0], p3[0], w, w2, w3), this.interpolate(p0[1], p1[1], p2[1], p3[1], w, w2, w3)]);
    }
    return ret;
  };

  Line.prototype.interpolate = function (p0, p1, p2, p3, t, t2, t3) {
    var v0 = (p2 - p0) * 0.5;
    var v1 = (p3 - p1) * 0.5;
    return (2 * (p1 - p2) + v0 + v1) * t3 + (-3 * (p1 - p2) - 2 * v0 - v1) * t2 + v0 * t + p1;
  };

  Line.prototype.getDistance = function (p1, p2) {
    return Math.sqrt((p1[0] - p2[0]) * (p1[0] - p2[0]) + (p1[1] - p2[1]) * (p1[1] - p2[1]));
  };

  Line.prototype.drawMoveCircle = function (context) {
    var pointList = this.pointList || this.getPointList(this.from, this.to);

    context.save();
    context.fillStyle = options.fillColor;
    context.shadowColor = options.shadowColor;
    context.shadowBlur = options.shadowBlur;
    context.beginPath();
    context.arc(pointList[this.step][0], pointList[this.step][1], options.moveRadius, 0, Math.PI * 2, true);
    context.fill();
    context.closePath();
    context.restore();
    this.step += 1;
    if (this.step >= pointList.length) {
      this.step = 0;
    }
  };

  //初始化线条
  var createLine = function createLine() {
    var lines = self.lines = [];
    for (var i = 0; i < options.data.length; i++) {
      lines.push(new Line(options.data[i]));
    }
  };

  //底层canvas渲染，标注，线条
  var brush = function brush() {
    var baseCtx = document.getElementById("myCanvas_qy1").getContext('2d');
    if (!baseCtx) {
      return;
    }
    baseCtx.clearRect(0, 0, width, height);
    draw(baseCtx)
  };

  //上层canvas渲染，动画效果
  var render = function render() {
    context.fillStyle = 'rgba(0,0,0,.9)';
    var prev = context.globalCompositeOperation;
    context.globalCompositeOperation = 'destination-in';
    context.fillRect(0, 0, width, height);
    context.globalCompositeOperation = prev;

    var lines = self.lines;

    //动画渲染
    for (var j = 0; j < lines.length; j++) {
      lines[j].drawMoveCircle(context); //移动圆点
    }
  };


  //初始化
  var init = function init(options) {
    merge(userOptions, options);

    createLine();


    // timer = setInterval(() => {
    //   render();
    // }, 60);

    setTimeout(function () {
      brush();
    }, 15);

    (function drawFrame() {
      requestAnimationFrame(drawFrame);
      render();
    })();
  };

  if (timer != null) clearInterval(timer);
  init(options);
};

export default {
  components: {},
  data() {
    return {
      wscPoint: require('@/assets/static/img/lshome/ic_污水处理厂.png'),
      bzPoint: require('@/assets/static/img/lshome/lshomeMore/ic_泵站.png'),
      bzPointBg: require('@/assets/static/img/lshome/lshomeMore/bg_ic_泵站.png'),
      qyTown: require('@/assets/static/img/lshome/map_sel.png'),

      TextList: [
        {
          name: '秦源污水处理厂<br/><span class="wscSpan">11万吨/日</span>',
          classname: 'qyText_qy',
          id: 1
        },
        {
          name: '观峰路',
          classname: 'gflText_qy',
          id: 11
        },
      ],
      waterList: [
        { inde: '液位1', left: 2.2, top: 2.0, state: 4, name: '三河六岸' },
        { inde: '液位2', left: 3.6, top: 2.2, state: 4, name: '明珠桥' },
        { inde: '液位3', left: 4.7, top: 2.3, state: 4, name: '61号秦淮大道' },
        { inde: '液位4', left: 2.6, top: 2.4, state: 4, name: '宝城名苑' },
        { inde: '液位5', left: 2.8, top: 3.4, state: 4, name: '64号南门河' },
        { inde: '液位6', left: 3.2, top: 2.9, state: 4, name: '中大街护城河交界' },
        { inde: '液位7', left: 4.0, top: 3.4, state: 4, name: '65号淮源街' },
        { inde: '液位8', left: 5.8, top: 2.5, state: 4, name: '62号经济河' },
        { inde: '液位9', left: 4.1, top: 2.6, state: 4, name: '63号交通东路' },
        { inde: '液位10', left: 4.4, top: 3.8, state: 4, name: '陈沛河入中山河' },
        { inde: '液位11', left: 4.1, top: 4.5, state: 4, name: '天生桥陈沛河交界' },
        { inde: '液位12', left: 4.0, top: 5.2, state: 4, name: '67号莘庄路' },
        { inde: '液位13', left: 5.1, top: 3.9, state: 4, name: '66号仪凤路' },
        { inde: '液位14', left: 5.4, top: 4.5, state: 4, name: '石燕路与天生桥大道交界' },
        { inde: '液位15', left: 6.0, top: 5.0, state: 4, name: '68号幸庄路' },
      ],
      topHeight: 0,
      events: {
        handleEvent: function (event) {
          if (event.type == 'resize') {
            this.resizeHeight()
          }
        },
        resizeHeight: (e) => {
          // 逻辑代码
          let hei = document.getElementsByClassName('mapMiddle')[0].offsetHeight;
          let hei1 = document.getElementsByClassName('mapTownImg')[0].offsetHeight;
          this.topHeight = Math.abs((hei - hei1) / 2)
        },
      },

      modal: {
        item: {},
        show: false,
        title: ""
      },

      color_chart: {
        chart: "green", //曲线
        line1: "#ed3f14", //报警线
        line2: "#FFB900" //警戒线
      },
      isShowSpin: false,
      visiteVolume: null,
      liquidData_history: [],
      history: {
        monitoractors: "level_height|液面高程(m)", //监测因子
        strartTime: new Date().getFullYear() + "-" + (new Date().getMonth() + 1) + "-" + (new Date().getDate() - 3),
        endTime: new Date().getFullYear() + "-" + (new Date().getMonth() + 1) + "-" + new Date().getDate()
      },
    }
  },
  methods: {
    location(item) {
      if (item.id != undefined) {
        let name = item.name.substr(0, 2);

        this.$router.push({
          name: 'jnApplication',
          params: { wsc: name },
          query: {
            id: item.name.indexOf('污水处理厂') != -1 ? 574 : 655
          }
        })
      }
    },
    loadData() {
      let _this = this;

      //原始数据
      _this.waterList = [
        { inde: '液位1', left: 2.2, top: 2.0, state: 4, name: '三河六岸' },
        { inde: '液位2', left: 3.6, top: 2.2, state: 4, name: '明珠桥' },
        { inde: '液位3', left: 4.7, top: 2.3, state: 4, name: '61号秦淮大道' },
        { inde: '液位4', left: 2.6, top: 2.4, state: 4, name: '宝城名苑' },
        { inde: '液位5', left: 2.8, top: 3.4, state: 4, name: '64号南门河' },
        { inde: '液位6', left: 3.2, top: 2.9, state: 4, name: '中大街护城河交界' },
        { inde: '液位7', left: 4.0, top: 3.4, state: 4, name: '65号淮源街' },
        { inde: '液位8', left: 5.8, top: 2.5, state: 4, name: '62号经济河' },
        { inde: '液位9', left: 4.1, top: 2.6, state: 4, name: '63号交通东路' },
        { inde: '液位10', left: 4.4, top: 3.8, state: 4, name: '陈沛河入中山河' },
        { inde: '液位11', left: 4.1, top: 4.5, state: 4, name: '天生桥陈沛河交界' },
        { inde: '液位12', left: 4.0, top: 5.2, state: 4, name: '67号莘庄路' },
        { inde: '液位13', left: 5.1, top: 3.9, state: 4, name: '66号仪凤路' },
        { inde: '液位14', left: 5.4, top: 4.5, state: 4, name: '石燕路与天生桥大道交界' },
        { inde: '液位15', left: 6.0, top: 5.0, state: 4, name: '68号幸庄路' },
      ]

      //接口数据
      let source = [
        {
          "toplevel": "4.573",
          "mn": "52",
          "guid": "c66c96f2-a5a5-449c-a870-469de460e51e",
          "name": "宝城名苑",
          "shortname": "压力式液位仪",
          "road": "宝城名苑",
          "dmgc": "9.604",
          "x": "351944.82395679696",
          "y": "304585.4143227407",
          "isusing": "0",
          "baojingmax": "8.604",
          "category": "",
          "areaname": "宝城名苑",
          "groupname": "宝城名苑",
          "groups": 1,
          "status": 0,
          "stationname": "宝城名苑",
          "roadname": "宝城名苑",
          "id": 871838,
          "recordtime": "2021-06-22 19:40:01",
          "doppler_level": 3.68,
          "level_height": 7.684,
          "level_well": 1.92,
          "doppler_velocity": "",
          "instant_flow": 0,
          "doppler_flow": 0,
          "doppler_voltage": 11.77578,
          "temperature": 0,
          "equiptype": 6
        },
        {
          "toplevel": "",
          "mn": "51",
          "guid": "3f8a15f4-e251-49db-862d-d3379f590d45",
          "name": "三河六岸",
          "shortname": "压力式液位仪",
          "road": "宝塔路",
          "dmgc": "6.948",
          "x": "351642.28218546405",
          "y": "305031.4358529718",
          "isusing": "0",
          "baojingmax": "5.948",
          "category": "",
          "areaname": "宝塔路",
          "groupname": "宝塔路",
          "groups": 1,
          "status": 0,
          "stationname": "三河六岸",
          "roadname": "宝塔路",
          "id": 530492,
          "recordtime": "2020-08-31 19:52:42",
          "doppler_level": 7.04,
          "level_height": 4.388,
          "level_well": 2.56,
          "doppler_velocity": "",
          "instant_flow": 0,
          "doppler_flow": 0,
          "doppler_voltage": 19.504,
          "temperature": 0,
          "equiptype": 6
        },
        {
          "toplevel": "",
          "mn": "55",
          "guid": "22bbe6e4-89bf-4787-a380-e578e5e4a8b9",
          "name": "陈沛河入中山河",
          "shortname": "压力式液位仪",
          "road": "陈沛河",
          "dmgc": "10.227",
          "x": "353768.6847883307",
          "y": "302868.12081729184",
          "isusing": "0",
          "baojingmax": "9.227",
          "category": "",
          "areaname": "陈沛河",
          "groupname": "陈沛河",
          "groups": 1,
          "status": 0,
          "stationname": "陈沛河入中山河",
          "roadname": "陈沛河",
          "id": 646855,
          "recordtime": "2020-12-17 09:20:00",
          "doppler_level": 4.39,
          "level_height": 8.317,
          "level_well": 1.91,
          "doppler_velocity": "",
          "instant_flow": 0,
          "doppler_flow": 0,
          "doppler_voltage": 7.11193,
          "temperature": 0,
          "equiptype": 6
        },
        {
          "toplevel": "7.552",
          "mn": "65",
          "guid": "1c137a3b-2244-46e0-a389-42f59501c007",
          "name": "65号淮源街",
          "shortname": "压力式液位仪",
          "road": "淮源街",
          "dmgc": "12.052",
          "x": "353496.593079",
          "y": "303374.791077",
          "isusing": "0",
          "baojingmax": "11.052",
          "category": "",
          "areaname": "淮源街",
          "groupname": "淮源街",
          "groups": 1,
          "status": 1,
          "stationname": "65号淮源街",
          "roadname": "淮源街",
          "id": 945244,
          "recordtime": "2021-09-03 10:30:01",
          "doppler_level": 1.34,
          "level_height": 8.492,
          "level_well": 3.56,
          "doppler_velocity": "",
          "instant_flow": 0,
          "doppler_flow": 0,
          "doppler_voltage": 11.6909,
          "temperature": 0,
          "equiptype": 6
        },
        {
          "toplevel": "7.847",
          "mn": "63",
          "guid": "b472db9a-70d7-4bc0-b7ee-1fe7326b84bf",
          "name": "63号交通东路",
          "shortname": "压力式液位仪",
          "road": "交通东路",
          "dmgc": "14.147",
          "x": "353652.570496",
          "y": "304295.248901",
          "isusing": "0",
          "baojingmax": "13.147",
          "category": "",
          "areaname": "交通东路",
          "groupname": "交通东路",
          "groups": 1,
          "status": 1,
          "stationname": "63号交通东路",
          "roadname": "交通东路",
          "id": 945242,
          "recordtime": "2021-09-03 10:30:01",
          "doppler_level": 1.46,
          "level_height": 8.907,
          "level_well": 5.24,
          "doppler_velocity": "",
          "instant_flow": 0,
          "doppler_flow": 0,
          "doppler_voltage": 11.34692,
          "temperature": 0,
          "equiptype": 6
        },
        {
          "toplevel": "14.376",
          "mn": "62",
          "guid": "24b3b1ea-5213-4d71-b8a6-45b6538fc4c3",
          "name": "62号经济河",
          "shortname": "压力式液位仪",
          "road": "经济河",
          "dmgc": "16.676",
          "x": "355564.706909",
          "y": "304513.973328",
          "isusing": "0",
          "baojingmax": "15.676",
          "category": "",
          "areaname": "经济河",
          "groupname": "经济河",
          "groups": 1,
          "status": 1,
          "stationname": "62号经济河",
          "roadname": "经济河",
          "id": 945241,
          "recordtime": "2021-09-03 10:30:01",
          "doppler_level": 0.1,
          "level_height": 14.276,
          "level_well": 2.4,
          "doppler_velocity": "",
          "instant_flow": 0,
          "doppler_flow": 0,
          "doppler_voltage": 14.41595,
          "temperature": 0,
          "equiptype": 6
        },
        {
          "toplevel": "",
          "mn": "54",
          "guid": "946232c9-63b7-4a3a-8c9f-5caffcacb351",
          "name": "明珠桥",
          "shortname": "压力式液位仪",
          "road": "明珠桥",
          "dmgc": "9.142",
          "x": "352996.8204225273",
          "y": "304692.17198024085",
          "isusing": "0",
          "baojingmax": "8.142",
          "category": "",
          "areaname": "明珠桥",
          "groupname": "明珠桥",
          "groups": 1,
          "status": 0,
          "stationname": "明珠桥",
          "roadname": "明珠桥",
          "id": 549296,
          "recordtime": "2020-09-19 15:00:22",
          "doppler_level": 3.04,
          "level_height": 8.482,
          "level_well": 0.66,
          "doppler_velocity": "",
          "instant_flow": 0,
          "doppler_flow": 0,
          "doppler_voltage": 22.989,
          "temperature": 0,
          "equiptype": 6
        },
        {
          "toplevel": "6.932",
          "mn": "64",
          "guid": "5396fad2-cbb4-44a2-bec4-3cd4950c0e71",
          "name": "64号南门河",
          "shortname": "压力式液位仪",
          "road": "南门河",
          "dmgc": "10.932",
          "x": "352255.747314",
          "y": "303536.520081",
          "isusing": "0",
          "baojingmax": "9.932",
          "category": "",
          "areaname": "南门河",
          "groupname": "南门河",
          "groups": 1,
          "status": 0,
          "stationname": "64号南门河",
          "roadname": "南门河",
          "id": 858364,
          "recordtime": "2021-06-08 12:01:25",
          "doppler_level": 0.5,
          "level_height": 6.632,
          "level_well": 4.3,
          "doppler_velocity": "",
          "instant_flow": 0,
          "doppler_flow": 0,
          "doppler_voltage": 12.73624,
          "temperature": 0,
          "equiptype": 6
        },
        {
          "toplevel": "12.232",
          "mn": "61",
          "guid": "a68ae872-8516-4db0-bb18-4365d6573f7c",
          "name": "61号秦淮大道",
          "shortname": "压力式液位仪",
          "road": "秦淮大道",
          "dmgc": "12.232",
          "x": "354220.072876",
          "y": "304744.096497",
          "isusing": "0",
          "baojingmax": "11.232",
          "category": "",
          "areaname": "秦淮大道",
          "groupname": "秦淮大道",
          "groups": 1,
          "status": 1,
          "stationname": "61号秦淮大道",
          "roadname": "秦淮大道",
          "id": 945243,
          "recordtime": "2021-09-03 10:30:02",
          "doppler_level": 0.48,
          "level_height": 9.412,
          "level_well": 2.82,
          "doppler_velocity": "",
          "instant_flow": 0,
          "doppler_flow": 0,
          "doppler_voltage": 11.66409,
          "temperature": 0,
          "equiptype": 6
        },
        {
          "toplevel": "21.027",
          "mn": "67",
          "guid": "0cd4cd96-9dc1-4730-896c-9d58de87acf5",
          "name": "67号莘庄路",
          "shortname": "压力式液位仪",
          "road": "莘庄路",
          "dmgc": "22.967",
          "x": "353392.75293",
          "y": "300766.49707",
          "isusing": "0",
          "baojingmax": "21.967",
          "category": "",
          "areaname": "莘庄路",
          "groupname": "莘庄路",
          "groups": 1,
          "status": 1,
          "stationname": "67号莘庄路",
          "roadname": "莘庄路",
          "id": 945245,
          "recordtime": "2021-09-03 10:30:01",
          "doppler_level": 0.07,
          "level_height": 20.697,
          "level_well": 2.27,
          "doppler_velocity": "",
          "instant_flow": 0,
          "doppler_flow": 0,
          "doppler_voltage": 12.1823,
          "temperature": 0,
          "equiptype": 6
        },
        {
          "toplevel": "11.711",
          "mn": "58",
          "guid": "a89f7156-cb59-42ee-8adb-e88d7194928c",
          "name": " 石燕路与天生桥大道交界",
          "shortname": "压力式液位仪",
          "road": "石燕路",
          "dmgc": "14.921",
          "x": "355005.5692477499",
          "y": "301905.765648902",
          "isusing": "0",
          "baojingmax": "13.921",
          "category": "",
          "areaname": "石燕路",
          "groupname": "石燕路",
          "groups": 1,
          "status": 0,
          "stationname": "石燕路与天生桥大道交界",
          "roadname": "石燕路",
          "id": 840994,
          "recordtime": "2021-05-20 09:20:01",
          "doppler_level": 9999.05,
          "level_height": 10009.761,
          "level_well": -9994.84,
          "doppler_velocity": "",
          "instant_flow": 0,
          "doppler_flow": 0,
          "doppler_voltage": 5.81641,
          "temperature": 0,
          "equiptype": 6
        },
        {
          "toplevel": "11.06",
          "mn": "56",
          "guid": "9b28ab04-5684-4773-a2ef-bdc295a0f96e",
          "name": "天生桥陈沛河交界",
          "shortname": "压力式液位仪",
          "road": "天生桥",
          "dmgc": "15.86",
          "x": "353469.43334691983",
          "y": "301893.4038827049",
          "isusing": "0",
          "baojingmax": "14.86",
          "category": "",
          "areaname": "天生桥",
          "groupname": "天生桥",
          "groups": 1,
          "status": 0,
          "stationname": "天生桥陈沛河交界",
          "roadname": "天生桥",
          "id": 714870,
          "recordtime": "2021-01-29 11:30:01",
          "doppler_level": 0.29,
          "level_height": 10.85,
          "level_well": 5.01,
          "doppler_velocity": "",
          "instant_flow": 0,
          "doppler_flow": 0,
          "doppler_voltage": 10.9538,
          "temperature": 0,
          "equiptype": 6
        },
        {
          "toplevel": "14.1",
          "mn": "68",
          "guid": "824dc8ee-7bcd-41f2-8a5c-20b10667c62b",
          "name": "68号幸庄路",
          "shortname": "压力式液位仪",
          "road": "幸庄路",
          "dmgc": "18",
          "x": "355704.906677",
          "y": "300795.791321",
          "isusing": "0",
          "baojingmax": "17",
          "category": "",
          "areaname": "幸庄路",
          "groupname": "幸庄路",
          "groups": 1,
          "status": 1,
          "stationname": "68号幸庄路",
          "roadname": "幸庄路",
          "id": 945246,
          "recordtime": "2021-09-03 10:30:02",
          "doppler_level": 0.43,
          "level_height": 13.93,
          "level_well": 4.07,
          "doppler_velocity": "",
          "instant_flow": 0,
          "doppler_flow": 0,
          "doppler_voltage": 12.14656,
          "temperature": 0,
          "equiptype": 6
        },
        {
          "toplevel": "9.06",
          "mn": "66",
          "guid": "689c52c9-3d32-413b-9a0d-b7ea6656fe4c",
          "name": "66号仪凤路",
          "shortname": "压力式液位仪",
          "road": "仪凤路",
          "dmgc": "13.3",
          "x": "354677.186279",
          "y": "302736.623474",
          "isusing": "0",
          "baojingmax": "12.3",
          "category": "",
          "areaname": "仪凤路",
          "groupname": "仪凤路",
          "groups": 1,
          "status": 1,
          "stationname": "66号仪凤路",
          "roadname": "仪凤路",
          "id": 945240,
          "recordtime": "2021-09-03 10:30:01",
          "doppler_level": 1,
          "level_height": 9.2,
          "level_well": 4.1,
          "doppler_velocity": "",
          "instant_flow": 0,
          "doppler_flow": 0,
          "doppler_voltage": 12.30738,
          "temperature": 0,
          "equiptype": 6
        },
        {
          "toplevel": "",
          "mn": "57",
          "guid": "a84a31ec-5c47-46e0-8ccd-54b99d95106c",
          "name": "中大街护城河交界",
          "shortname": "压力式液位仪",
          "road": "中大街",
          "dmgc": "11.08",
          "x": "352596.5735746621",
          "y": "303924.8268365692",
          "isusing": "0",
          "baojingmax": "10.08",
          "category": "",
          "areaname": "中大街",
          "groupname": "中大街",
          "groups": 1,
          "status": 0,
          "stationname": "中大街护城河交界",
          "roadname": "中大街",
          "id": 566177,
          "recordtime": "2020-10-25 17:49:08",
          "doppler_level": 2.9,
          "level_height": 7.98,
          "level_well": 3.1,
          "doppler_velocity": "",
          "instant_flow": 0,
          "doppler_flow": 0,
          "doppler_voltage": 10.74376,
          "temperature": 0,
          "equiptype": 6
        }
      ];

      for (var i = 0; i < source.length; i++) {

        for (let a = 0; a < _this.waterList.length; a++) {
          if (source[i].stationname.indexOf(_this.waterList[a].name) != -1) {

            Object.assign(_this.waterList[a], _this.waterList[a], source[i]) //将后面两个对象合并到第一个对象中。

            // _this.waterList[a] = {..._this.waterList[a],...source[i]}

            _this.waterList[a].doppler_level = source[i].doppler_level != '' ? parseFloat(source[i].doppler_level).toFixed(2) : '--';
            _this.waterList[a].guid = source[i].guid;

            let _state = status(source[i].status, source[i].dmgc, source[i].level_height);
            _this.waterList[a].state = _state[0];
            _this.waterList[a].color = _state[1];
          }
        }
      }

      function status(state, dmgc, level_height) {
        if (state == 0) { //离线
          return [4, '#cfcfcf'];
        }
        if (state == 1) {
          if (level_height < dmgc - 3) { //正常
            return [1, '#4fe41f'];
          } else if (level_height >= dmgc - 3 && level_height < dmgc - 1) { //预警
            return [2, '#ffde33'];
          } else if (level_height >= dmgc - 1 && level_height < dmgc) { //报警
            return [3, '#cc3715'];
          } else if (level_height >= dmgc) { //溢流
            return [5, '#8156ef']; //#d066d8
          }
        }
      }

    },
    waterClick(item) {

    },
  },
  mounted() {
    var options = [
      {
        strokeStyle: '#fff',
        radius: 2.7,
        speed: 10,
        data: [{
          id: 3,
          turnPoints: null, //[[50,50],[150,250],[400,650]]
          pointList: {
            from: {
              city: 'yw1',
              x: 60,
              y: 20
            },
            to: {
              city: 'wush',
              x: 0,
              y: 0
            }
          },
          fillStyle: '#F8B551'
        }],
      },
      {
        strokeStyle: '#fff',
        radius: 2.7,
        speed: 10,
        data: [{
          id: 3,
          turnPoints: null,
          pointList: {
            from: {
              city: 'yw4',
              x: 85,
              y: 35
            },
            to: {
              city: 'yw1',
              x: 60,
              y: 20
            }
          },
          fillStyle: '#F8B551'
        }],
      },
      {
        strokeStyle: '#fff',
        radius: 2.7,
        speed: 10,
        data: [{
          id: 3,
          turnPoints: null,
          pointList: {
            from: {
              city: 'yw2',
              x: 140,
              y: 28
            },
            to: {
              city: 'yw1',
              x: 60,
              y: 20
            }
          },
          fillStyle: '#F8B551'
        }],
      },
      {
        strokeStyle: '#fff',
        radius: 2.7,
        speed: 10,
        data: [{
          id: 3,
          turnPoints: null,
          pointList: {
            from: {
              city: 'yw3',
              x: 205,
              y: 32
            },
            to: {
              city: 'yw2',
              x: 140,
              y: 28
            }
          },
          fillStyle: '#F8B551'
        }],
      },
      {
        strokeStyle: '#fff',
        radius: 2.7,
        speed: 10,
        data: [{
          id: 3,
          turnPoints: null,
          pointList: {
            from: {
              city: 'yw9',
              x: 175,
              y: 45
            },
            to: {
              city: 'yw2',
              x: 140,
              y: 28
            }
          },
          fillStyle: '#F8B551'
        }],
      },
      {
        strokeStyle: '#fff',
        radius: 2.7,
        speed: 10,
        data: [{
          id: 3,
          turnPoints: null,
          pointList: {
            from: {
              city: 'yw8',
              x: 275,
              y: 40
            },
            to: {
              city: 'yw3',
              x: 205,
              y: 32
            }
          },
          fillStyle: '#F8B551'
        }],
      },
      {
        strokeStyle: '#fff',
        radius: 2.7,
        speed: 10,
        data: [{
          id: 3,
          turnPoints: null,
          pointList: {
            from: {
              city: 'yw15',
              x: 289,
              y: 138
            },
            to: {
              city: 'yw8',
              x: 275,
              y: 40
            }
          },
          fillStyle: '#F8B551'
        }],
      },
      {
        strokeStyle: '#fff',
        radius: 2.7,
        speed: 10,
        data: [{
          id: 3,
          turnPoints: null,
          pointList: {
            from: {
              city: 'yw5',
              x: 100,
              y: 75
            },
            to: {
              city: 'yw4',
              x: 85,
              y: 35
            }
          },
          fillStyle: '#F8B551'
        }],
      },
      {
        strokeStyle: '#fff',
        radius: 2.7,
        speed: 10,
        data: [{
          id: 3,
          turnPoints: null,
          pointList: {
            from: {
              city: 'beng',
              x: 70,
              y: 100
            },
            to: {
              city: 'yw5',
              x: 100,
              y: 75
            }
          },
          fillStyle: '#F8B551'
        }],
      },
      {
        strokeStyle: '#fff',
        radius: 2.7,
        speed: 10,
        data: [{
          id: 3,
          turnPoints: null,
          pointList: {
            from: {
              city: 'yw6',
              x: 116,
              y: 55
            },
            to: {
              city: 'yw4',
              x: 85,
              y: 35
            }
          },
          fillStyle: '#F8B551'
        }],
      },
      {
        strokeStyle: '#fff',
        radius: 2.7,
        speed: 10,
        data: [{
          id: 3,
          turnPoints: null,
          pointList: {
            from: {
              city: 'yw7',
              x: 165,
              y: 73
            },
            to: {
              city: 'yw6',
              x: 118,
              y: 55
            }
          },
          fillStyle: '#F8B551'
        }],
      },
      {
        strokeStyle: '#fff',
        radius: 2.7,
        speed: 10,
        data: [{
          id: 3,
          turnPoints: null,
          pointList: {
            from: {
              city: 'yw10',
              x: 193,
              y: 92
            },
            to: {
              city: 'yw9',
              x: 175,
              y: 45
            }
          },
          fillStyle: '#F8B551'
        }],
      },
      {
        strokeStyle: '#fff',
        radius: 2.7,
        speed: 10,
        data: [{
          id: 3,
          turnPoints: null,
          pointList: {
            from: {
              city: 'yw11',
              x: 175,
              y: 118
            },
            to: {
              city: 'yw10',
              x: 193,
              y: 92
            }
          },
          fillStyle: '#F8B551'
        }],
      },
      {
        strokeStyle: '#fff',
        radius: 2.7,
        speed: 10,
        data: [{
          id: 3,
          turnPoints: null,
          pointList: {
            from: {
              city: 'yw12',
              x: 170,
              y: 145
            },
            to: {
              city: 'yw11',
              x: 175,
              y: 118
            }
          },
          fillStyle: '#F8B551'
        }],
      },
      {
        strokeStyle: '#fff',
        radius: 2.7,
        speed: 10,
        data: [{
          id: 3,
          turnPoints: null,
          pointList: {
            from: {
              city: 'yw13',
              x: 233,
              y: 95
            },
            to: {
              city: 'yw10',
              x: 193,
              y: 92
            }
          },
          fillStyle: '#F8B551'
        }],
      },
      {
        strokeStyle: '#fff',
        radius: 2.7,
        speed: 10,
        data: [{
          id: 3,
          turnPoints: null,
          pointList: {
            from: {
              city: 'yw14',
              x: 253,
              y: 118
            },
            to: {
              city: 'yw13',
              x: 233,
              y: 95
            }
          },
          fillStyle: '#F8B551'
        }],
      },
      {
        strokeStyle: '#fff',
        radius: 2.7,
        speed: 10,
        data: [{
          id: 3,
          turnPoints: null,
          pointList: {
            from: {
              city: 'yw15',
              x: 289,
              y: 138
            },
            to: {
              city: 'yw14',
              x: 250,
              y: 115
            }
          },
          fillStyle: '#F8B551'
        }],
      },
    ];

    var lines = []
    for (let i = options.length - 1; i >= 0; i--) {
      lines.push(options[i].data[0].pointList)
      TrackLine(options[i], lines);
    }

    let _this = this;
    _this.loadData();

    let timer = setInterval(() => {
      _this.loadData();
    }, 60000);
    this.$once('hook:beforeDestroy', () => {
      clearInterval(timer);
    })

    this.$nextTick(() => {
      let hei = document.getElementsByClassName('mapMiddle')[0].offsetHeight;
      let hei1 = document.getElementsByClassName('mapTownImg')[0].offsetHeight;

      _this.topHeight = Math.abs((hei - hei1) / 2)
    })
    window.addEventListener('resize', this.events, false);
  },
  beforeDestroy() {
    var _this = this;
    window.removeEventListener('resize', this.events, false);
  }
}
</script>



<style lang="less">
.town_qy {
  .bzPoint1_qy {
    width: calc(~"1.07rem * 0.8");
    position: absolute;
    left: 2.1rem;
    top: 3.6rem;
    z-index: 3;
  }
  .bzPointBg1_qy {
    width: calc(~"0.6rem * 0.8");
    position: absolute;
    left: 2.29rem;
    top: 4rem;
    z-index: 3;
  }

  .point_sel_qy {
    left: 0.85rem;
    top: 1rem;
  }

  .qyText_qy {
    color: rgba(255, 255, 255, 0.9);
    left: 1.45rem;
    top: 1.2rem;
    font-size: 0.16rem;
  }
  .gflText_qy {
    left: 2.7rem;
    top: 4rem;
  }

  .wscSpan {
    color: #85ff9a;
    font-size: 0.12rem;
  }

  .waterIcon {
    position: absolute;
    z-index: 3;
    width: 0.5rem;
    cursor: pointer;
  }
  .waterClass {
    font-family: "lsmap";
    position: absolute;
    z-index: 3;
    color: #fff;
  }

  .img-scale {
    transition: All 0.4s ease-in-out;
    -webkit-transition: All 0.4s ease-in-out;
  }
  .img-scale:hover {
    z-index: 9;
    transform: scale(1.5);
    -webkit-transform: scale(1.5);
  }
}
</style>