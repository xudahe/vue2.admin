<!--水质-->
<template>
  <div class="sewageDivRight" style="width: 100%;height: 100%;">
    <div class="leftBg homebg fade-in-left1">
      <div  class="homeTitle">
        <span>COD</span>
        <div style="position: absolute;top: 0rem;right: 0.05rem;letter-spacing: 0px;font-family: 'Compacte BT Roman';cursor: pointer;color:#3399ff;" @click="moreData('COD')">
          更多>>
        </div>
      </div>
      <div id="wsclcCharts_1" style="height: calc(100% - 0.25rem);"></div>
    </div>
    <div class="leftBg homebg fade-in-left2">
      <div  class="homeTitle">
        <span>氨氮</span>
        <div style="position: absolute;top: 0rem;right: 0.05rem;letter-spacing: 0px;font-family: 'Compacte BT Roman';cursor: pointer;color:#3399ff;" @click="moreData('氨氮')">
          更多>>
        </div>
      </div>
      <div id="wsclcCharts_2" style="height: calc(100% - 0.25rem);"></div>
    </div>
    <div class="leftBg homebg fade-in-left3">
      <div  class="homeTitle">
        <span>PH</span>
        <div style="position: absolute;top: 0rem;right: 0.05rem;letter-spacing: 0px;font-family: 'Compacte BT Roman';cursor: pointer;color:#3399ff;" @click="moreData('PH')">
          更多>>
        </div>
      </div>
      <div id="wsclcCharts_3" style="height: calc(100% - 0.25rem);"></div>
    </div>
    <div class="leftBg homebg fade-in-left4">
      <div  class="homeTitle">
        <span>总磷</span>
        <div style="position: absolute;top: 0rem;right: 0.05rem;letter-spacing: 0px;font-family: 'Compacte BT Roman';cursor: pointer;color:#3399ff;" @click="moreData('总磷')">
          更多>>
        </div>
      </div>
      <div id="wsclcCharts_4" style="height: calc(100% - 0.25rem);"></div>
    </div>
    <Modal v-model="showdetail" :showHead="false" title="水质曲线" width='800' draggable closable footer-hide>
      <sewage_detail></sewage_detail>
    </Modal>
  </div>
</template>

<script>
import bus from '../../../../eventBus.js';

import sewage_detail from './water_detail';

export default {
  components: {
    sewage_detail
  },
  data() {
    return {
      showdetail: false,
      data_in: [],
      data_out: [],

      dtuid: "",
      sTime: new Date(),
      eTime: new Date(),
      timeList: [],
      jsk_codList: [],
      jsk_anList: [],
      jsk_tpList: [],
      jsk_phList: [],

      colorlist: [
        "#7ad87f",
        "#edc20e",
        "#57a3f3",
        "#f53972",
        "#8632ec",
        "#37A2DA",
        "#c4ccd3",
        "#7721f7"
      ],
    };
  },
  methods: {
    initial() {
      this.data_in = [
        {
          "id": 10154526,
          "addtime": "2021-09-06 00:01:21",
          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 00:00:14",
          "cod": 95.486115,
          "ph": 6.9959493,
          "an": 22.424768,
          "tp": 1.7650462,
          "flow": 2295.7175,
          "curdayflow": 0,
          "totalflow": 2097152,
          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10154554,
          "addtime": "2021-09-06 00:03:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 00:02:14",
          "cod": 95.486115,
          "ph": 6.9959493,
          "an": 22.424768,
          "tp": 1.7650462,
          "flow": 2324.6528,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10154590,
          "addtime": "2021-09-06 00:05:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 00:04:14",
          "cod": 95.486115,
          "ph": 6.9959493,
          "an": 22.424768,
          "tp": 1.7650462,
          "flow": 2330.1504,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10154618,
          "addtime": "2021-09-06 00:07:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 00:06:14",
          "cod": 95.486115,
          "ph": 6.9959493,
          "an": 22.424768,
          "tp": 1.7650462,
          "flow": 2335.6482,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10154634,
          "addtime": "2021-09-06 00:09:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 00:08:14",
          "cod": 95.486115,
          "ph": 6.9959493,
          "an": 22.424768,
          "tp": 1.7650462,
          "flow": 2294.56,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10154666,
          "addtime": "2021-09-06 00:11:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 00:10:14",
          "cod": 95.486115,
          "ph": 6.9959493,
          "an": 22.424768,
          "tp": 1.7650462,
          "flow": 2330.7292,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10154690,
          "addtime": "2021-09-06 00:13:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 00:12:14",
          "cod": 95.486115,
          "ph": 7.004051,
          "an": 22.424768,
          "tp": 1.7650462,
          "flow": 2323.7847,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10154738,
          "addtime": "2021-09-06 00:15:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 00:14:14",
          "cod": 95.486115,
          "ph": 6.9959493,
          "an": 22.424768,
          "tp": 1.7650462,
          "flow": 2351.8518,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10154758,
          "addtime": "2021-09-06 00:17:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 00:16:14",
          "cod": 95.486115,
          "ph": 6.9959493,
          "an": 22.424768,
          "tp": 1.7650462,
          "flow": 2357.9282,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10154782,
          "addtime": "2021-09-06 00:19:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 00:18:14",
          "cod": 95.486115,
          "ph": 7.004051,
          "an": 22.424768,
          "tp": 1.7650462,
          "flow": 2335.359,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10154802,
          "addtime": "2021-09-06 00:21:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 00:20:14",
          "cod": 95.486115,
          "ph": 6.9959493,
          "an": 22.424768,
          "tp": 1.7650462,
          "flow": 2333.3335,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10154842,
          "addtime": "2021-09-06 00:23:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 00:22:14",
          "cod": 95.486115,
          "ph": 6.9959493,
          "an": 29.224537,
          "tp": 1.7650462,
          "flow": 2320.0232,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10154854,
          "addtime": "2021-09-06 00:25:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 00:24:14",
          "cod": 95.486115,
          "ph": 6.9959493,
          "an": 29.224537,
          "tp": 1.7650462,
          "flow": 2332.7546,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10154886,
          "addtime": "2021-09-06 00:27:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 00:26:14",
          "cod": 95.486115,
          "ph": 6.9959493,
          "an": 29.224537,
          "tp": 1.7650462,
          "flow": 2350.6943,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10154930,
          "addtime": "2021-09-06 00:29:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 00:28:14",
          "cod": 95.486115,
          "ph": 7.004051,
          "an": 29.224537,
          "tp": 1.7650462,
          "flow": 2330.729,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10154946,
          "addtime": "2021-09-06 00:31:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 00:30:14",
          "cod": 95.486115,
          "ph": 7.004051,
          "an": 29.224537,
          "tp": 1.7650462,
          "flow": 2301.2153,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10154986,
          "addtime": "2021-09-06 00:33:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 00:32:14",
          "cod": 95.486115,
          "ph": 7.004051,
          "an": 29.224537,
          "tp": 1.9560184,
          "flow": 2297.4536,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10155006,
          "addtime": "2021-09-06 00:35:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 00:34:14",
          "cod": 95.486115,
          "ph": 7.004051,
          "an": 29.224537,
          "tp": 1.9560184,
          "flow": 1545.1389,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10155030,
          "addtime": "2021-09-06 00:37:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 00:36:14",
          "cod": 95.486115,
          "ph": 7.004051,
          "an": 29.224537,
          "tp": 1.9560184,
          "flow": 1426.5046,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10155054,
          "addtime": "2021-09-06 00:39:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 00:38:14",
          "cod": 113.71528,
          "ph": 6.9959493,
          "an": 29.224537,
          "tp": 1.9560184,
          "flow": 1427.0834,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10155102,
          "addtime": "2021-09-06 00:41:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 00:40:14",
          "cod": 113.71528,
          "ph": 7.004051,
          "an": 29.224537,
          "tp": 1.9560184,
          "flow": 1443.287,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10155126,
          "addtime": "2021-09-06 00:43:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 00:42:14",
          "cod": 113.71528,
          "ph": 7.004051,
          "an": 29.224537,
          "tp": 1.9560184,
          "flow": 2157.986,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10155142,
          "addtime": "2021-09-06 00:45:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 00:44:14",
          "cod": 113.71528,
          "ph": 7.004051,
          "an": 29.224537,
          "tp": 1.9560184,
          "flow": 2348.3796,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10155166,
          "addtime": "2021-09-06 00:47:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 00:46:14",
          "cod": 113.71528,
          "ph": 7.004051,
          "an": 29.224537,
          "tp": 1.9560184,
          "flow": 2316.551,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10155214,
          "addtime": "2021-09-06 00:49:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 00:48:14",
          "cod": 113.71528,
          "ph": 7.004051,
          "an": 29.224537,
          "tp": 1.9560184,
          "flow": 2389.1782,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10155218,
          "addtime": "2021-09-06 00:51:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 00:50:14",
          "cod": 113.71528,
          "ph": 7.004051,
          "an": 29.224537,
          "tp": 1.9560184,
          "flow": 2308.7385,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10155250,
          "addtime": "2021-09-06 00:53:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 00:52:14",
          "cod": 113.71528,
          "ph": 7.004051,
          "an": 29.224537,
          "tp": 1.9560184,
          "flow": 2372.3958,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10155294,
          "addtime": "2021-09-06 00:55:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 00:54:14",
          "cod": 113.71528,
          "ph": 6.9959493,
          "an": 29.224537,
          "tp": 1.9560184,
          "flow": 2333.6226,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10155310,
          "addtime": "2021-09-06 00:57:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 00:56:14",
          "cod": 113.71528,
          "ph": 6.9959493,
          "an": 29.224537,
          "tp": 1.9560184,
          "flow": 2351.8518,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10155334,
          "addtime": "2021-09-06 00:59:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 00:58:14",
          "cod": 113.71528,
          "ph": 6.9959493,
          "an": 29.224537,
          "tp": 1.9560184,
          "flow": 2386.2847,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10155370,
          "addtime": "2021-09-06 01:01:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 01:00:14",
          "cod": 113.71528,
          "ph": 7.004051,
          "an": 29.224537,
          "tp": 1.9560184,
          "flow": 2388.889,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10155390,
          "addtime": "2021-09-06 01:03:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 01:02:14",
          "cod": 113.71528,
          "ph": 7.004051,
          "an": 29.224537,
          "tp": 1.9560184,
          "flow": 2332.7546,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10155438,
          "addtime": "2021-09-06 01:05:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 01:04:14",
          "cod": 113.71528,
          "ph": 7.008102,
          "an": 29.224537,
          "tp": 1.9560184,
          "flow": 2321.1807,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10155450,
          "addtime": "2021-09-06 01:07:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 01:06:14",
          "cod": 113.71528,
          "ph": 7.004051,
          "an": 29.224537,
          "tp": 1.9560184,
          "flow": 2372.396,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10155486,
          "addtime": "2021-09-06 01:09:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 01:08:14",
          "cod": 113.71528,
          "ph": 7.004051,
          "an": 29.224537,
          "tp": 1.9560184,
          "flow": 2378.4722,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10155518,
          "addtime": "2021-09-06 01:11:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 01:10:14",
          "cod": 113.71528,
          "ph": 6.9959493,
          "an": 29.224537,
          "tp": 1.9560184,
          "flow": 2340.5671,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10155538,
          "addtime": "2021-09-06 01:13:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 01:12:14",
          "cod": 113.71528,
          "ph": 6.9959493,
          "an": 29.224537,
          "tp": 1.9560184,
          "flow": 2348.669,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10155558,
          "addtime": "2021-09-06 01:15:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 01:14:14",
          "cod": 113.71528,
          "ph": 6.9959493,
          "an": 29.224537,
          "tp": 1.9560184,
          "flow": 2359.0857,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10155590,
          "addtime": "2021-09-06 01:17:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 01:16:14",
          "cod": 113.71528,
          "ph": 7.004051,
          "an": 29.224537,
          "tp": 1.9560184,
          "flow": 2319.734,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10155614,
          "addtime": "2021-09-06 01:19:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 01:18:14",
          "cod": 113.71528,
          "ph": 7.008102,
          "an": 29.224537,
          "tp": 1.9560184,
          "flow": 2346.3542,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10155642,
          "addtime": "2021-09-06 01:21:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 01:20:14",
          "cod": 113.71528,
          "ph": 7.004051,
          "an": 29.224537,
          "tp": 1.9560184,
          "flow": 2348.0903,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10155678,
          "addtime": "2021-09-06 01:23:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 01:22:14",
          "cod": 113.71528,
          "ph": 7.004051,
          "an": 29.224537,
          "tp": 1.9560184,
          "flow": 2315.104,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10155698,
          "addtime": "2021-09-06 01:25:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 01:24:14",
          "cod": 113.71528,
          "ph": 7.004051,
          "an": 29.224537,
          "tp": 1.9560184,
          "flow": 2302.9514,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10155738,
          "addtime": "2021-09-06 01:27:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 01:26:14",
          "cod": 113.71528,
          "ph": 6.9959493,
          "an": 29.224537,
          "tp": 1.9560184,
          "flow": 2357.9282,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10155766,
          "addtime": "2021-09-06 01:29:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 01:28:14",
          "cod": 113.71528,
          "ph": 7.004051,
          "an": 29.224537,
          "tp": 1.9560184,
          "flow": 2343.4607,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10155782,
          "addtime": "2021-09-06 01:31:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 01:30:14",
          "cod": 113.71528,
          "ph": 7.004051,
          "an": 29.224537,
          "tp": 1.9560184,
          "flow": 2377.8936,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10155810,
          "addtime": "2021-09-06 01:33:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 01:32:14",
          "cod": 113.71528,
          "ph": 7.008102,
          "an": 29.224537,
          "tp": 1.9560184,
          "flow": 2339.9885,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10155858,
          "addtime": "2021-09-06 01:35:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 01:34:14",
          "cod": 113.71528,
          "ph": 7.004051,
          "an": 29.224537,
          "tp": 1.9560184,
          "flow": 2346.6436,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10155866,
          "addtime": "2021-09-06 01:37:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 01:36:14",
          "cod": 113.71528,
          "ph": 7.004051,
          "an": 29.224537,
          "tp": 1.9560184,
          "flow": 2340.2778,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10155902,
          "addtime": "2021-09-06 01:39:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 01:38:14",
          "cod": 113.71528,
          "ph": 7.004051,
          "an": 29.224537,
          "tp": 1.9560184,
          "flow": 2341.1458,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10155922,
          "addtime": "2021-09-06 01:41:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 01:40:14",
          "cod": 113.71528,
          "ph": 7.004051,
          "an": 29.224537,
          "tp": 1.9560184,
          "flow": 2310.764,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10155946,
          "addtime": "2021-09-06 01:43:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 01:42:14",
          "cod": 113.71528,
          "ph": 7.004051,
          "an": 29.224537,
          "tp": 1.9560184,
          "flow": 2343.1714,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10155974,
          "addtime": "2021-09-06 01:45:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 01:44:14",
          "cod": 113.71528,
          "ph": 7.004051,
          "an": 29.224537,
          "tp": 1.9560184,
          "flow": 2341.7246,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10156010,
          "addtime": "2021-09-06 01:47:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 01:46:14",
          "cod": 113.71528,
          "ph": 7.004051,
          "an": 29.224537,
          "tp": 1.9560184,
          "flow": 2338.831,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10156034,
          "addtime": "2021-09-06 01:49:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 01:48:14",
          "cod": 113.71528,
          "ph": 7.004051,
          "an": 29.224537,
          "tp": 1.9560184,
          "flow": 2355.3242,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10156082,
          "addtime": "2021-09-06 01:51:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 01:50:14",
          "cod": 113.71528,
          "ph": 7.004051,
          "an": 29.224537,
          "tp": 1.9560184,
          "flow": 2328.9932,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10156102,
          "addtime": "2021-09-06 01:53:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 01:52:15",
          "cod": 113.71528,
          "ph": 7.004051,
          "an": 29.224537,
          "tp": 1.9560184,
          "flow": 2400.1736,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10156118,
          "addtime": "2021-09-06 01:55:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 01:54:15",
          "cod": 113.71528,
          "ph": 7.004051,
          "an": 29.224537,
          "tp": 1.9560184,
          "flow": 2314.8147,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10156142,
          "addtime": "2021-09-06 01:57:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 01:56:15",
          "cod": 113.71528,
          "ph": 7.004051,
          "an": 29.224537,
          "tp": 1.9560184,
          "flow": 2344.3286,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10156178,
          "addtime": "2021-09-06 01:59:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 01:58:15",
          "cod": 113.71528,
          "ph": 7.004051,
          "an": 29.224537,
          "tp": 1.9560184,
          "flow": 2311.0532,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10156218,
          "addtime": "2021-09-06 02:01:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 02:00:15",
          "cod": 113.71528,
          "ph": 7.004051,
          "an": 29.224537,
          "tp": 1.9560184,
          "flow": 2326.0996,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10156230,
          "addtime": "2021-09-06 02:03:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 02:02:15",
          "cod": 113.71528,
          "ph": 7.004051,
          "an": 29.224537,
          "tp": 1.9560184,
          "flow": 2310.4746,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10156266,
          "addtime": "2021-09-06 02:05:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 02:04:15",
          "cod": 113.71528,
          "ph": 7.008102,
          "an": 29.224537,
          "tp": 1.9560184,
          "flow": 2319.734,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10156286,
          "addtime": "2021-09-06 02:07:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 02:06:15",
          "cod": 113.71528,
          "ph": 6.9959493,
          "an": 29.224537,
          "tp": 1.9560184,
          "flow": 2364.5833,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10156322,
          "addtime": "2021-09-06 02:09:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 02:08:15",
          "cod": 113.71528,
          "ph": 6.9959493,
          "an": 29.224537,
          "tp": 1.9560184,
          "flow": 2320.023,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10156342,
          "addtime": "2021-09-06 02:11:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 02:10:15",
          "cod": 113.71528,
          "ph": 6.9959493,
          "an": 29.224537,
          "tp": 1.9560184,
          "flow": 2319.4446,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10156370,
          "addtime": "2021-09-06 02:13:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 02:12:15",
          "cod": 113.71528,
          "ph": 6.9959493,
          "an": 29.224537,
          "tp": 1.9560184,
          "flow": 2334.4907,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10156394,
          "addtime": "2021-09-06 02:15:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 02:14:15",
          "cod": 113.71528,
          "ph": 6.9959493,
          "an": 29.224537,
          "tp": 1.9560184,
          "flow": 2356.4814,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10156426,
          "addtime": "2021-09-06 02:17:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 02:16:15",
          "cod": 113.71528,
          "ph": 6.9959493,
          "an": 29.224537,
          "tp": 1.9560184,
          "flow": 2313.3682,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10156458,
          "addtime": "2021-09-06 02:19:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 02:18:15",
          "cod": 113.71528,
          "ph": 7.004051,
          "an": 29.224537,
          "tp": 1.9560184,
          "flow": 2375,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10156482,
          "addtime": "2021-09-06 02:21:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 02:20:15",
          "cod": 113.71528,
          "ph": 7.004051,
          "an": 29.224537,
          "tp": 1.9560184,
          "flow": 2329.5718,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10156510,
          "addtime": "2021-09-06 02:23:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 02:22:15",
          "cod": 113.71528,
          "ph": 7.004051,
          "an": 30.237268,
          "tp": 1.9560184,
          "flow": 2296.0068,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10156558,
          "addtime": "2021-09-06 02:25:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 02:24:15",
          "cod": 113.71528,
          "ph": 7.004051,
          "an": 30.237268,
          "tp": 1.9560184,
          "flow": 2352.72,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10156569,
          "addtime": "2021-09-06 02:27:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 02:26:15",
          "cod": 113.71528,
          "ph": 7.004051,
          "an": 30.237268,
          "tp": 1.9560184,
          "flow": 2348.9585,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10156594,
          "addtime": "2021-09-06 02:29:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 02:28:15",
          "cod": 113.71528,
          "ph": 7.004051,
          "an": 30.237268,
          "tp": 1.9560184,
          "flow": 2361.9792,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10156626,
          "addtime": "2021-09-06 02:31:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 02:30:15",
          "cod": 113.71528,
          "ph": 6.9959493,
          "an": 30.237268,
          "tp": 1.9560184,
          "flow": 2320.023,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10156662,
          "addtime": "2021-09-06 02:33:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 02:32:15",
          "cod": 113.71528,
          "ph": 6.9959493,
          "an": 30.237268,
          "tp": 2.1469908,
          "flow": 2362.5579,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10156686,
          "addtime": "2021-09-06 02:35:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 02:34:15",
          "cod": 113.71528,
          "ph": 7.004051,
          "an": 30.237268,
          "tp": 2.1469908,
          "flow": 2326.389,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10156702,
          "addtime": "2021-09-06 02:37:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 02:36:15",
          "cod": 113.71528,
          "ph": 7.004051,
          "an": 30.237268,
          "tp": 2.1469908,
          "flow": 2335.9375,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10156750,
          "addtime": "2021-09-06 02:39:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 02:38:15",
          "cod": 116.31945,
          "ph": 7.004051,
          "an": 30.237268,
          "tp": 2.1469908,
          "flow": 2323.206,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10156766,
          "addtime": "2021-09-06 02:41:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 02:40:15",
          "cod": 116.31945,
          "ph": 7.004051,
          "an": 30.237268,
          "tp": 2.1469908,
          "flow": 2353.0093,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10156798,
          "addtime": "2021-09-06 02:43:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 02:42:15",
          "cod": 116.31945,
          "ph": 7.004051,
          "an": 30.237268,
          "tp": 2.1469908,
          "flow": 2350.984,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10156830,
          "addtime": "2021-09-06 02:45:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 02:44:15",
          "cod": 116.31945,
          "ph": 7.004051,
          "an": 30.237268,
          "tp": 2.1469908,
          "flow": 2310.4746,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10156862,
          "addtime": "2021-09-06 02:47:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 02:46:15",
          "cod": 116.31945,
          "ph": 7.004051,
          "an": 30.237268,
          "tp": 2.1469908,
          "flow": 2338.5417,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10156870,
          "addtime": "2021-09-06 02:49:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 02:48:15",
          "cod": 116.31945,
          "ph": 6.9959493,
          "an": 30.237268,
          "tp": 2.1469908,
          "flow": 2350.984,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10156902,
          "addtime": "2021-09-06 02:51:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 02:50:15",
          "cod": 116.31945,
          "ph": 7.004051,
          "an": 30.237268,
          "tp": 2.1469908,
          "flow": 2365.7407,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10156942,
          "addtime": "2021-09-06 02:53:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 02:52:15",
          "cod": 116.31945,
          "ph": 7.004051,
          "an": 30.237268,
          "tp": 2.1469908,
          "flow": 2312.5,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10156954,
          "addtime": "2021-09-06 02:55:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 02:54:15",
          "cod": 116.31945,
          "ph": 7.008102,
          "an": 30.237268,
          "tp": 2.1469908,
          "flow": 2331.5972,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10157006,
          "addtime": "2021-09-06 02:57:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 02:56:15",
          "cod": 116.31945,
          "ph": 7.008102,
          "an": 30.237268,
          "tp": 2.1469908,
          "flow": 2338.831,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10157030,
          "addtime": "2021-09-06 02:59:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 02:58:15",
          "cod": 116.31945,
          "ph": 7.004051,
          "an": 30.237268,
          "tp": 2.1469908,
          "flow": 2342.014,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10157042,
          "addtime": "2021-09-06 03:01:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 03:00:15",
          "cod": 116.31945,
          "ph": 7.004051,
          "an": 30.237268,
          "tp": 2.1469908,
          "flow": 2343.4607,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10157074,
          "addtime": "2021-09-06 03:03:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 03:02:15",
          "cod": 116.31945,
          "ph": 7.004051,
          "an": 30.237268,
          "tp": 2.1469908,
          "flow": 2366.03,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10157106,
          "addtime": "2021-09-06 03:05:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 03:04:15",
          "cod": 116.31945,
          "ph": 7.004051,
          "an": 30.237268,
          "tp": 2.1469908,
          "flow": 2308.7383,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10157146,
          "addtime": "2021-09-06 03:07:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 03:06:15",
          "cod": 116.31945,
          "ph": 7.004051,
          "an": 30.237268,
          "tp": 2.1469908,
          "flow": 2297.1643,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10157166,
          "addtime": "2021-09-06 03:09:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 03:08:15",
          "cod": 116.31945,
          "ph": 7.008102,
          "an": 30.237268,
          "tp": 2.1469908,
          "flow": 2354.456,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10157182,
          "addtime": "2021-09-06 03:11:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 03:10:15",
          "cod": 116.31945,
          "ph": 7.008102,
          "an": 30.237268,
          "tp": 2.1469908,
          "flow": 2375.5786,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10157210,
          "addtime": "2021-09-06 03:13:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 03:12:15",
          "cod": 116.31945,
          "ph": 7.008102,
          "an": 30.237268,
          "tp": 2.1469908,
          "flow": 2328.9932,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10157250,
          "addtime": "2021-09-06 03:15:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 03:14:15",
          "cod": 116.31945,
          "ph": 7.004051,
          "an": 30.237268,
          "tp": 2.1469908,
          "flow": 2310.764,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10157266,
          "addtime": "2021-09-06 03:17:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 03:16:15",
          "cod": 116.31945,
          "ph": 7.004051,
          "an": 30.237268,
          "tp": 2.1469908,
          "flow": 2337.3843,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10157294,
          "addtime": "2021-09-06 03:19:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 03:18:15",
          "cod": 116.31945,
          "ph": 7.004051,
          "an": 30.237268,
          "tp": 2.1469908,
          "flow": 2334.7803,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10157318,
          "addtime": "2021-09-06 03:21:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 03:20:15",
          "cod": 116.31945,
          "ph": 7.008102,
          "an": 30.237268,
          "tp": 2.1469908,
          "flow": 2353.588,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10157346,
          "addtime": "2021-09-06 03:23:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 03:22:15",
          "cod": 116.31945,
          "ph": 7.004051,
          "an": 30.237268,
          "tp": 2.1469908,
          "flow": 2356.1921,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10157386,
          "addtime": "2021-09-06 03:25:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 03:24:15",
          "cod": 116.31945,
          "ph": 7.008102,
          "an": 30.237268,
          "tp": 2.1469908,
          "flow": 2328.9932,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10157406,
          "addtime": "2021-09-06 03:27:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 03:26:15",
          "cod": 116.31945,
          "ph": 7.004051,
          "an": 30.237268,
          "tp": 2.1469908,
          "flow": 2366.3193,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10157442,
          "addtime": "2021-09-06 03:29:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 03:28:15",
          "cod": 116.31945,
          "ph": 7.008102,
          "an": 30.237268,
          "tp": 2.1469908,
          "flow": 2342.3032,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10157458,
          "addtime": "2021-09-06 03:31:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 03:30:15",
          "cod": 116.31945,
          "ph": 7.004051,
          "an": 30.237268,
          "tp": 2.1469908,
          "flow": 2339.9885,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10157490,
          "addtime": "2021-09-06 03:33:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 03:32:15",
          "cod": 116.31945,
          "ph": 7.004051,
          "an": 30.237268,
          "tp": 2.1469908,
          "flow": 2336.5164,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10157522,
          "addtime": "2021-09-06 03:35:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 03:34:15",
          "cod": 116.31945,
          "ph": 7.004051,
          "an": 30.237268,
          "tp": 2.1469908,
          "flow": 2354.7454,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10157562,
          "addtime": "2021-09-06 03:37:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 03:36:15",
          "cod": 116.31945,
          "ph": 7.004051,
          "an": 30.237268,
          "tp": 2.1469908,
          "flow": 2285.0115,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10157578,
          "addtime": "2021-09-06 03:39:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 03:38:15",
          "cod": 116.31945,
          "ph": 7.004051,
          "an": 30.237268,
          "tp": 2.1469908,
          "flow": 2326.389,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10157598,
          "addtime": "2021-09-06 03:41:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 03:40:15",
          "cod": 116.31945,
          "ph": 7.008102,
          "an": 30.237268,
          "tp": 2.1469908,
          "flow": 2350.6943,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10157634,
          "addtime": "2021-09-06 03:43:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 03:42:15",
          "cod": 116.31945,
          "ph": 7.008102,
          "an": 30.237268,
          "tp": 2.1469908,
          "flow": 2346.6436,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10157654,
          "addtime": "2021-09-06 03:45:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 03:44:15",
          "cod": 116.31945,
          "ph": 7.008102,
          "an": 30.237268,
          "tp": 2.1469908,
          "flow": 2368.345,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10157686,
          "addtime": "2021-09-06 03:47:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 03:46:15",
          "cod": 116.31945,
          "ph": 7.004051,
          "an": 30.237268,
          "tp": 2.1469908,
          "flow": 2314.5254,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10157710,
          "addtime": "2021-09-06 03:49:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 03:48:15",
          "cod": 116.31945,
          "ph": 7.004051,
          "an": 30.237268,
          "tp": 2.1469908,
          "flow": 2352.4307,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10157758,
          "addtime": "2021-09-06 03:51:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 03:50:15",
          "cod": 116.31945,
          "ph": 7.004051,
          "an": 30.237268,
          "tp": 2.1469908,
          "flow": 2289.352,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10157790,
          "addtime": "2021-09-06 03:53:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 03:52:15",
          "cod": 116.31945,
          "ph": 7.004051,
          "an": 30.237268,
          "tp": 2.1469908,
          "flow": 2328.7036,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10157810,
          "addtime": "2021-09-06 03:55:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 03:54:15",
          "cod": 116.31945,
          "ph": 7.008102,
          "an": 30.237268,
          "tp": 2.1469908,
          "flow": 2338.5417,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10157830,
          "addtime": "2021-09-06 03:57:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 03:56:15",
          "cod": 116.31945,
          "ph": 7.008102,
          "an": 30.237268,
          "tp": 2.1469908,
          "flow": 2356.4814,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10157866,
          "addtime": "2021-09-06 03:59:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 03:58:15",
          "cod": 116.31945,
          "ph": 7.008102,
          "an": 30.237268,
          "tp": 2.1469908,
          "flow": 2321.7593,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10157898,
          "addtime": "2021-09-06 04:01:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 04:00:15",
          "cod": 116.31945,
          "ph": 7.004051,
          "an": 30.237268,
          "tp": 2.1469908,
          "flow": 2309.6064,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10157926,
          "addtime": "2021-09-06 04:03:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 04:02:15",
          "cod": 116.31945,
          "ph": 7.004051,
          "an": 30.237268,
          "tp": 2.1469908,
          "flow": 2327.8357,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10157958,
          "addtime": "2021-09-06 04:05:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 04:04:15",
          "cod": 116.31945,
          "ph": 6.9959493,
          "an": 30.237268,
          "tp": 2.1469908,
          "flow": 2322.6274,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10157978,
          "addtime": "2021-09-06 04:07:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 04:06:15",
          "cod": 116.31945,
          "ph": 6.9959493,
          "an": 30.237268,
          "tp": 2.1469908,
          "flow": 2320.3125,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10158006,
          "addtime": "2021-09-06 04:09:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 04:08:15",
          "cod": 116.31945,
          "ph": 6.9959493,
          "an": 30.237268,
          "tp": 2.1469908,
          "flow": 2295.139,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10158042,
          "addtime": "2021-09-06 04:11:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 04:10:15",
          "cod": 116.31945,
          "ph": 6.9959493,
          "an": 30.237268,
          "tp": 2.1469908,
          "flow": 2326.0996,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10158054,
          "addtime": "2021-09-06 04:13:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 04:12:15",
          "cod": 116.31945,
          "ph": 7.004051,
          "an": 30.237268,
          "tp": 2.1469908,
          "flow": 2331.3079,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10158078,
          "addtime": "2021-09-06 04:15:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 04:14:15",
          "cod": 116.31945,
          "ph": 7.004051,
          "an": 30.237268,
          "tp": 2.1469908,
          "flow": 2315.104,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10158114,
          "addtime": "2021-09-06 04:17:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 04:16:15",
          "cod": 116.31945,
          "ph": 7.004051,
          "an": 30.237268,
          "tp": 2.1469908,
          "flow": 2338.2522,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10158134,
          "addtime": "2021-09-06 04:19:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 04:18:15",
          "cod": 116.31945,
          "ph": 7.004051,
          "an": 30.237268,
          "tp": 2.1469908,
          "flow": 2333.3335,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10158170,
          "addtime": "2021-09-06 04:21:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 04:20:15",
          "cod": 116.31945,
          "ph": 7.004051,
          "an": 30.237268,
          "tp": 2.1469908,
          "flow": 2334.4907,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10158198,
          "addtime": "2021-09-06 04:23:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 04:22:15",
          "cod": 116.31945,
          "ph": 6.9959493,
          "an": 29.658566,
          "tp": 2.1469908,
          "flow": 2296.5857,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10158230,
          "addtime": "2021-09-06 04:25:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 04:24:15",
          "cod": 116.31945,
          "ph": 6.9959493,
          "an": 29.658566,
          "tp": 2.1469908,
          "flow": 2313.368,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10158266,
          "addtime": "2021-09-06 04:27:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 04:26:15",
          "cod": 116.31945,
          "ph": 7.004051,
          "an": 29.658566,
          "tp": 2.1469908,
          "flow": 2355.0347,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10158274,
          "addtime": "2021-09-06 04:29:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 04:28:15",
          "cod": 116.31945,
          "ph": 7.004051,
          "an": 29.658566,
          "tp": 2.1469908,
          "flow": 2311.0532,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10158302,
          "addtime": "2021-09-06 04:31:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 04:30:15",
          "cod": 116.31945,
          "ph": 7.008102,
          "an": 29.658566,
          "tp": 2.1469908,
          "flow": 2333.912,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10158330,
          "addtime": "2021-09-06 04:33:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 04:32:15",
          "cod": 116.31945,
          "ph": 7.004051,
          "an": 29.658566,
          "tp": 2.037037,
          "flow": 2290.7986,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10158374,
          "addtime": "2021-09-06 04:35:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 04:34:15",
          "cod": 116.31945,
          "ph": 7.008102,
          "an": 29.658566,
          "tp": 2.037037,
          "flow": 2287.3264,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10158398,
          "addtime": "2021-09-06 04:37:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 04:36:15",
          "cod": 116.31945,
          "ph": 7.004051,
          "an": 29.658566,
          "tp": 2.0399306,
          "flow": 2305.266,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10158418,
          "addtime": "2021-09-06 04:39:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 04:38:15",
          "cod": 99.826385,
          "ph": 7.004051,
          "an": 29.658566,
          "tp": 2.037037,
          "flow": 2350.1157,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10158442,
          "addtime": "2021-09-06 04:41:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 04:40:15",
          "cod": 99.826385,
          "ph": 7.004051,
          "an": 29.658566,
          "tp": 2.037037,
          "flow": 2345.1968,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10158470,
          "addtime": "2021-09-06 04:43:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 04:42:15",
          "cod": 99.826385,
          "ph": 7.004051,
          "an": 29.658566,
          "tp": 2.0399306,
          "flow": 2316.551,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10158514,
          "addtime": "2021-09-06 04:45:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 04:44:16",
          "cod": 99.826385,
          "ph": 7.004051,
          "an": 29.658566,
          "tp": 2.037037,
          "flow": 2347.2222,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10158526,
          "addtime": "2021-09-06 04:47:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 04:46:16",
          "cod": 99.826385,
          "ph": 7.004051,
          "an": 29.658566,
          "tp": 2.037037,
          "flow": 2339.9883,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10158570,
          "addtime": "2021-09-06 04:49:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 04:48:16",
          "cod": 99.826385,
          "ph": 7.008102,
          "an": 29.658566,
          "tp": 2.037037,
          "flow": 2336.516,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10158582,
          "addtime": "2021-09-06 04:51:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 04:50:16",
          "cod": 99.826385,
          "ph": 7.004051,
          "an": 29.658566,
          "tp": 2.037037,
          "flow": 2349.2478,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10158610,
          "addtime": "2021-09-06 04:53:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 04:52:16",
          "cod": 99.826385,
          "ph": 7.004051,
          "an": 29.658566,
          "tp": 2.037037,
          "flow": 2334.78,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10158646,
          "addtime": "2021-09-06 04:55:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 04:54:16",
          "cod": 99.826385,
          "ph": 7.004051,
          "an": 29.658566,
          "tp": 2.0399306,
          "flow": 2321.47,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10158674,
          "addtime": "2021-09-06 04:57:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 04:56:16",
          "cod": 99.826385,
          "ph": 7.004051,
          "an": 29.658566,
          "tp": 2.037037,
          "flow": 2334.78,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10158698,
          "addtime": "2021-09-06 04:59:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 04:58:16",
          "cod": 99.826385,
          "ph": 7.004051,
          "an": 29.658566,
          "tp": 2.037037,
          "flow": 2332.7546,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10158742,
          "addtime": "2021-09-06 05:01:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 05:00:16",
          "cod": 99.826385,
          "ph": 7.004051,
          "an": 29.658566,
          "tp": 2.037037,
          "flow": 2313.3682,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10158750,
          "addtime": "2021-09-06 05:03:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 05:02:16",
          "cod": 99.826385,
          "ph": 7.004051,
          "an": 29.658566,
          "tp": 2.0399306,
          "flow": 2269.9653,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10158782,
          "addtime": "2021-09-06 05:05:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 05:04:16",
          "cod": 99.826385,
          "ph": 7.008102,
          "an": 29.658566,
          "tp": 2.0399306,
          "flow": 2316.5508,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10158822,
          "addtime": "2021-09-06 05:07:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 05:06:16",
          "cod": 99.826385,
          "ph": 7.004051,
          "an": 29.658566,
          "tp": 2.037037,
          "flow": 2331.3079,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10158842,
          "addtime": "2021-09-06 05:09:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 05:08:16",
          "cod": 99.826385,
          "ph": 7.004051,
          "an": 29.658566,
          "tp": 2.037037,
          "flow": 2317.419,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10158878,
          "addtime": "2021-09-06 05:11:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 05:10:16",
          "cod": 99.826385,
          "ph": 7.004051,
          "an": 29.658566,
          "tp": 2.037037,
          "flow": 2329.5718,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10158886,
          "addtime": "2021-09-06 05:13:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 05:12:16",
          "cod": 99.826385,
          "ph": 7.004051,
          "an": 29.658566,
          "tp": 2.037037,
          "flow": 2276.0415,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10158918,
          "addtime": "2021-09-06 05:15:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 05:14:16",
          "cod": 99.826385,
          "ph": 7.004051,
          "an": 29.658566,
          "tp": 2.037037,
          "flow": 2316.8403,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10158950,
          "addtime": "2021-09-06 05:17:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 05:16:16",
          "cod": 99.826385,
          "ph": 7.004051,
          "an": 29.658566,
          "tp": 2.037037,
          "flow": 2302.3726,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10158990,
          "addtime": "2021-09-06 05:19:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 05:18:16",
          "cod": 99.826385,
          "ph": 7.008102,
          "an": 29.658566,
          "tp": 2.0399306,
          "flow": 2354.456,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10159010,
          "addtime": "2021-09-06 05:21:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 05:20:16",
          "cod": 99.826385,
          "ph": 7.004051,
          "an": 29.658566,
          "tp": 2.037037,
          "flow": 2318.287,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10159042,
          "addtime": "2021-09-06 05:23:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 05:22:16",
          "cod": 99.826385,
          "ph": 7.004051,
          "an": 29.658566,
          "tp": 2.037037,
          "flow": 2339.6992,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10159062,
          "addtime": "2021-09-06 05:25:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 05:24:16",
          "cod": 99.826385,
          "ph": 7.004051,
          "an": 29.658566,
          "tp": 2.037037,
          "flow": 2317.1296,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10159098,
          "addtime": "2021-09-06 05:27:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 05:26:16",
          "cod": 99.826385,
          "ph": 7.004051,
          "an": 29.658566,
          "tp": 2.037037,
          "flow": 2317.1296,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10159118,
          "addtime": "2021-09-06 05:29:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 05:28:16",
          "cod": 99.826385,
          "ph": 7.004051,
          "an": 29.658566,
          "tp": 2.037037,
          "flow": 2313.368,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10159146,
          "addtime": "2021-09-06 05:31:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 05:30:16",
          "cod": 99.826385,
          "ph": 7.004051,
          "an": 29.658566,
          "tp": 2.037037,
          "flow": 2321.7593,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10159186,
          "addtime": "2021-09-06 05:33:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 05:32:16",
          "cod": 99.826385,
          "ph": 7.004051,
          "an": 29.658566,
          "tp": 2.037037,
          "flow": 2326.3887,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10159210,
          "addtime": "2021-09-06 05:35:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 05:34:16",
          "cod": 99.826385,
          "ph": 7.004051,
          "an": 29.658566,
          "tp": 2.0399306,
          "flow": 2276.6204,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10159234,
          "addtime": "2021-09-06 05:37:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 05:36:16",
          "cod": 99.826385,
          "ph": 7.004051,
          "an": 29.658566,
          "tp": 2.037037,
          "flow": 2313.9468,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10159254,
          "addtime": "2021-09-06 05:39:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 05:38:16",
          "cod": 99.826385,
          "ph": 7.004051,
          "an": 29.658566,
          "tp": 2.037037,
          "flow": 2314.815,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10159294,
          "addtime": "2021-09-06 05:41:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 05:40:16",
          "cod": 99.826385,
          "ph": 7.008102,
          "an": 29.658566,
          "tp": 2.037037,
          "flow": 2311.632,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10159318,
          "addtime": "2021-09-06 05:43:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 05:42:16",
          "cod": 99.826385,
          "ph": 7.004051,
          "an": 29.658566,
          "tp": 2.037037,
          "flow": 2334.78,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10159346,
          "addtime": "2021-09-06 05:45:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 05:44:16",
          "cod": 99.826385,
          "ph": 7.004051,
          "an": 29.658566,
          "tp": 2.037037,
          "flow": 2310.185,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10159386,
          "addtime": "2021-09-06 05:47:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 05:46:16",
          "cod": 99.826385,
          "ph": 7.004051,
          "an": 29.658566,
          "tp": 2.037037,
          "flow": 2337.6736,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10159406,
          "addtime": "2021-09-06 05:49:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 05:48:16",
          "cod": 99.826385,
          "ph": 7.004051,
          "an": 29.658566,
          "tp": 2.037037,
          "flow": 2322.9165,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10159426,
          "addtime": "2021-09-06 05:51:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 05:50:16",
          "cod": 99.826385,
          "ph": 7.008102,
          "an": 29.658566,
          "tp": 2.0399306,
          "flow": 2322.9165,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10159450,
          "addtime": "2021-09-06 05:53:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 05:52:16",
          "cod": 99.826385,
          "ph": 7.004051,
          "an": 29.658566,
          "tp": 2.037037,
          "flow": 2327.5464,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10159478,
          "addtime": "2021-09-06 05:55:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 05:54:16",
          "cod": 99.826385,
          "ph": 7.004051,
          "an": 29.658566,
          "tp": 2.037037,
          "flow": 2313.0789,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10159510,
          "addtime": "2021-09-06 05:57:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 05:56:16",
          "cod": 99.826385,
          "ph": 7.004051,
          "an": 29.658566,
          "tp": 2.037037,
          "flow": 2320.891,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10159550,
          "addtime": "2021-09-06 05:59:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 05:58:16",
          "cod": 99.826385,
          "ph": 7.004051,
          "an": 29.658566,
          "tp": 2.037037,
          "flow": 2317.1296,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10159558,
          "addtime": "2021-09-06 06:01:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 06:00:16",
          "cod": 99.826385,
          "ph": 7.004051,
          "an": 29.658566,
          "tp": 2.037037,
          "flow": 2324.6528,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10159606,
          "addtime": "2021-09-06 06:03:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 06:02:16",
          "cod": 99.826385,
          "ph": 7.004051,
          "an": 29.658566,
          "tp": 2.037037,
          "flow": 2282.9858,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10159638,
          "addtime": "2021-09-06 06:05:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 06:04:16",
          "cod": 99.826385,
          "ph": 6.9959493,
          "an": 29.658566,
          "tp": 2.0399306,
          "flow": 2265.3357,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10159654,
          "addtime": "2021-09-06 06:07:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 06:06:16",
          "cod": 99.826385,
          "ph": 7.004051,
          "an": 29.658566,
          "tp": 2.037037,
          "flow": 2325.5208,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10159670,
          "addtime": "2021-09-06 06:09:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 06:08:16",
          "cod": 99.826385,
          "ph": 7.004051,
          "an": 29.658566,
          "tp": 2.0399306,
          "flow": 2317.419,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10159710,
          "addtime": "2021-09-06 06:11:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 06:10:16",
          "cod": 99.826385,
          "ph": 7.004051,
          "an": 29.658566,
          "tp": 2.037037,
          "flow": 2314.8147,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10159730,
          "addtime": "2021-09-06 06:13:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 06:12:16",
          "cod": 99.826385,
          "ph": 7.004051,
          "an": 29.658566,
          "tp": 2.0399306,
          "flow": 2318.8657,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10159758,
          "addtime": "2021-09-06 06:15:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 06:14:16",
          "cod": 99.826385,
          "ph": 7.004051,
          "an": 29.658566,
          "tp": 2.037037,
          "flow": 2336.2268,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10159790,
          "addtime": "2021-09-06 06:17:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 06:16:16",
          "cod": 99.826385,
          "ph": 7.004051,
          "an": 29.658566,
          "tp": 2.037037,
          "flow": 2322.6274,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10159814,
          "addtime": "2021-09-06 06:19:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 06:18:16",
          "cod": 99.826385,
          "ph": 7.004051,
          "an": 29.658566,
          "tp": 2.0399306,
          "flow": 2311.3425,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10159842,
          "addtime": "2021-09-06 06:21:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 06:20:16",
          "cod": 99.826385,
          "ph": 7.004051,
          "an": 29.658566,
          "tp": 2.037037,
          "flow": 2294.271,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10159878,
          "addtime": "2021-09-06 06:23:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 06:22:16",
          "cod": 99.826385,
          "ph": 7.004051,
          "an": 22.424768,
          "tp": 2.037037,
          "flow": 2328.125,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10159914,
          "addtime": "2021-09-06 06:25:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 06:24:16",
          "cod": 99.826385,
          "ph": 7.004051,
          "an": 22.424768,
          "tp": 2.037037,
          "flow": 2340.5671,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10159942,
          "addtime": "2021-09-06 06:27:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 06:26:16",
          "cod": 99.826385,
          "ph": 7.004051,
          "an": 22.424768,
          "tp": 2.037037,
          "flow": 2321.7593,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10159970,
          "addtime": "2021-09-06 06:29:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 06:28:16",
          "cod": 99.826385,
          "ph": 7.004051,
          "an": 22.424768,
          "tp": 2.037037,
          "flow": 2320.3125,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10159990,
          "addtime": "2021-09-06 06:31:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 06:30:16",
          "cod": 99.826385,
          "ph": 7.004051,
          "an": 22.424768,
          "tp": 2.3177083,
          "flow": 2316.8403,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10160022,
          "addtime": "2021-09-06 06:33:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 06:32:16",
          "cod": 99.826385,
          "ph": 7.004051,
          "an": 22.424768,
          "tp": 2.3177083,
          "flow": 2309.6064,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10160054,
          "addtime": "2021-09-06 06:35:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 06:34:16",
          "cod": 99.826385,
          "ph": 7.004051,
          "an": 22.424768,
          "tp": 2.3177083,
          "flow": 2298.611,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10160074,
          "addtime": "2021-09-06 06:37:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 06:36:16",
          "cod": 99.826385,
          "ph": 7.004051,
          "an": 22.424768,
          "tp": 2.3177083,
          "flow": 2336.2268,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10160110,
          "addtime": "2021-09-06 06:39:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 06:38:16",
          "cod": 173.61111,
          "ph": 7.004051,
          "an": 22.424768,
          "tp": 2.3177083,
          "flow": 2339.9883,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10160142,
          "addtime": "2021-09-06 06:41:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 06:40:16",
          "cod": 173.61111,
          "ph": 7.004051,
          "an": 22.424768,
          "tp": 2.3177083,
          "flow": 2319.155,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10160158,
          "addtime": "2021-09-06 06:43:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 06:42:16",
          "cod": 173.61111,
          "ph": 7.004051,
          "an": 22.424768,
          "tp": 2.3177083,
          "flow": 2313.6575,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10160194,
          "addtime": "2021-09-06 06:45:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 06:44:16",
          "cod": 173.61111,
          "ph": 7.004051,
          "an": 22.424768,
          "tp": 2.3177083,
          "flow": 2276.0417,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10160218,
          "addtime": "2021-09-06 06:47:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 06:46:16",
          "cod": 173.61111,
          "ph": 7.004051,
          "an": 22.424768,
          "tp": 2.3177083,
          "flow": 2258.9697,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10160242,
          "addtime": "2021-09-06 06:49:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 06:48:16",
          "cod": 173.61111,
          "ph": 7.004051,
          "an": 22.424768,
          "tp": 2.3177083,
          "flow": 2283.854,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10160258,
          "addtime": "2021-09-06 06:51:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 06:50:16",
          "cod": 173.61111,
          "ph": 7.004051,
          "an": 22.424768,
          "tp": 2.3177083,
          "flow": 2067.1296,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10160298,
          "addtime": "2021-09-06 06:53:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 06:52:16",
          "cod": 173.61111,
          "ph": 7.004051,
          "an": 22.424768,
          "tp": 2.3177083,
          "flow": 2108.5068,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10160322,
          "addtime": "2021-09-06 06:55:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 06:54:16",
          "cod": 173.61111,
          "ph": 7.004051,
          "an": 22.424768,
          "tp": 2.3177083,
          "flow": 2247.1064,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10160362,
          "addtime": "2021-09-06 06:57:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 06:56:16",
          "cod": 173.61111,
          "ph": 7.004051,
          "an": 22.424768,
          "tp": 2.3177083,
          "flow": 2287.037,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10160381,
          "addtime": "2021-09-06 06:59:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 06:58:16",
          "cod": 173.61111,
          "ph": 7.004051,
          "an": 22.424768,
          "tp": 2.3177083,
          "flow": 2307.2915,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10160398,
          "addtime": "2021-09-06 07:01:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 07:00:16",
          "cod": 173.61111,
          "ph": 7.004051,
          "an": 22.424768,
          "tp": 2.3177083,
          "flow": 2298.0325,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10160442,
          "addtime": "2021-09-06 07:03:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 07:02:16",
          "cod": 173.61111,
          "ph": 7.004051,
          "an": 22.424768,
          "tp": 2.3177083,
          "flow": 2312.7893,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10160454,
          "addtime": "2021-09-06 07:05:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 07:04:16",
          "cod": 173.61111,
          "ph": 7.004051,
          "an": 22.424768,
          "tp": 2.3177083,
          "flow": 2299.479,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10160490,
          "addtime": "2021-09-06 07:07:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 07:06:16",
          "cod": 173.61111,
          "ph": 7.004051,
          "an": 22.424768,
          "tp": 2.3177083,
          "flow": 2323.4954,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10160534,
          "addtime": "2021-09-06 07:09:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 07:08:16",
          "cod": 173.61111,
          "ph": 7.004051,
          "an": 22.424768,
          "tp": 2.3177083,
          "flow": 2291.956,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10160562,
          "addtime": "2021-09-06 07:11:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 07:10:16",
          "cod": 173.61111,
          "ph": 7.004051,
          "an": 22.424768,
          "tp": 2.3177083,
          "flow": 2339.4097,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10160586,
          "addtime": "2021-09-06 07:13:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 07:12:16",
          "cod": 173.61111,
          "ph": 7.004051,
          "an": 22.424768,
          "tp": 2.3177083,
          "flow": 2323.7847,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10160594,
          "addtime": "2021-09-06 07:15:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 07:14:16",
          "cod": 173.61111,
          "ph": 7.004051,
          "an": 22.424768,
          "tp": 2.3177083,
          "flow": 2316.2615,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10160634,
          "addtime": "2021-09-06 07:17:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 07:16:16",
          "cod": 173.61111,
          "ph": 7.004051,
          "an": 22.424768,
          "tp": 2.3177083,
          "flow": 2336.516,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10160650,
          "addtime": "2021-09-06 07:19:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 07:18:16",
          "cod": 173.61111,
          "ph": 7.004051,
          "an": 22.424768,
          "tp": 2.3177083,
          "flow": 2324.3635,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10160678,
          "addtime": "2021-09-06 07:21:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 07:20:16",
          "cod": 173.61111,
          "ph": 7.004051,
          "an": 22.424768,
          "tp": 2.3177083,
          "flow": 2336.2268,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10160710,
          "addtime": "2021-09-06 07:23:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 07:22:16",
          "cod": 173.61111,
          "ph": 7.004051,
          "an": 22.424768,
          "tp": 2.3177083,
          "flow": 2351.852,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10160742,
          "addtime": "2021-09-06 07:25:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 07:24:16",
          "cod": 173.61111,
          "ph": 7.004051,
          "an": 22.424768,
          "tp": 2.3177083,
          "flow": 2347.8008,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10160778,
          "addtime": "2021-09-06 07:27:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 07:26:16",
          "cod": 173.61111,
          "ph": 7.004051,
          "an": 22.424768,
          "tp": 2.3177083,
          "flow": 2329.5718,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10160802,
          "addtime": "2021-09-06 07:29:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 07:28:16",
          "cod": 173.61111,
          "ph": 7.004051,
          "an": 22.424768,
          "tp": 2.3177083,
          "flow": 2216.7246,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10160826,
          "addtime": "2021-09-06 07:31:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 07:30:16",
          "cod": 173.61111,
          "ph": 7.004051,
          "an": 22.424768,
          "tp": 2.3177083,
          "flow": 2251.4468,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10160858,
          "addtime": "2021-09-06 07:33:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 07:32:16",
          "cod": 173.61111,
          "ph": 7.004051,
          "an": 22.424768,
          "tp": 2.3177083,
          "flow": 2265.3357,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10160878,
          "addtime": "2021-09-06 07:35:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 07:34:16",
          "cod": 173.61111,
          "ph": 7.004051,
          "an": 22.424768,
          "tp": 2.3177083,
          "flow": 2296.5854,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10160906,
          "addtime": "2021-09-06 07:37:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 07:36:17",
          "cod": 173.61111,
          "ph": 7.004051,
          "an": 22.424768,
          "tp": 2.3177083,
          "flow": 2339.9883,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10160954,
          "addtime": "2021-09-06 07:39:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 07:38:17",
          "cod": 173.61111,
          "ph": 7.004051,
          "an": 22.424768,
          "tp": 2.3177083,
          "flow": 2335.0693,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10160974,
          "addtime": "2021-09-06 07:41:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 07:40:17",
          "cod": 173.61111,
          "ph": 7.004051,
          "an": 22.424768,
          "tp": 2.3177083,
          "flow": 2323.206,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10161002,
          "addtime": "2021-09-06 07:43:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 07:42:17",
          "cod": 173.61111,
          "ph": 7.004051,
          "an": 22.424768,
          "tp": 2.3177083,
          "flow": 2346.3542,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10161024,
          "addtime": "2021-09-06 07:45:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 07:44:17",
          "cod": 173.61111,
          "ph": 7.004051,
          "an": 22.424768,
          "tp": 2.3177083,
          "flow": 2306.1343,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10161054,
          "addtime": "2021-09-06 07:47:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 07:46:17",
          "cod": 173.61111,
          "ph": 7.008102,
          "an": 22.424768,
          "tp": 2.3177083,
          "flow": 2319.4443,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10161094,
          "addtime": "2021-09-06 07:49:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 07:48:17",
          "cod": 173.61111,
          "ph": 7.008102,
          "an": 22.424768,
          "tp": 2.3177083,
          "flow": 2333.044,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10161102,
          "addtime": "2021-09-06 07:51:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 07:50:17",
          "cod": 173.61111,
          "ph": 7.004051,
          "an": 22.424768,
          "tp": 2.3177083,
          "flow": 2337.095,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10161134,
          "addtime": "2021-09-06 07:53:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 07:52:17",
          "cod": 173.61111,
          "ph": 7.004051,
          "an": 22.424768,
          "tp": 2.3177083,
          "flow": 2323.7847,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10161170,
          "addtime": "2021-09-06 07:55:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 07:54:17",
          "cod": 173.61111,
          "ph": 7.004051,
          "an": 22.424768,
          "tp": 2.3177083,
          "flow": 2312.5,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10161206,
          "addtime": "2021-09-06 07:57:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 07:56:17",
          "cod": 173.61111,
          "ph": 7.004051,
          "an": 22.424768,
          "tp": 2.3177083,
          "flow": 2362.2686,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10161218,
          "addtime": "2021-09-06 07:59:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 07:58:17",
          "cod": 173.61111,
          "ph": 7.004051,
          "an": 22.424768,
          "tp": 2.3177083,
          "flow": 2318.5764,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10161238,
          "addtime": "2021-09-06 08:01:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 08:00:17",
          "cod": 173.61111,
          "ph": 7.004051,
          "an": 22.424768,
          "tp": 2.3177083,
          "flow": 2282.1182,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10161282,
          "addtime": "2021-09-06 08:03:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 08:02:17",
          "cod": 173.61111,
          "ph": 7.008102,
          "an": 22.424768,
          "tp": 2.3177083,
          "flow": 2326.9675,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10161310,
          "addtime": "2021-09-06 08:05:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 08:04:17",
          "cod": 173.61111,
          "ph": 7.004051,
          "an": 22.424768,
          "tp": 2.3177083,
          "flow": 2345.1968,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10161342,
          "addtime": "2021-09-06 08:07:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 08:06:17",
          "cod": 173.61111,
          "ph": 7.004051,
          "an": 22.424768,
          "tp": 2.3177083,
          "flow": 2342.5925,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10161358,
          "addtime": "2021-09-06 08:09:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 08:08:17",
          "cod": 173.61111,
          "ph": 7.004051,
          "an": 22.424768,
          "tp": 2.3177083,
          "flow": 2344.9075,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10161382,
          "addtime": "2021-09-06 08:11:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 08:10:17",
          "cod": 173.61111,
          "ph": 7.004051,
          "an": 22.424768,
          "tp": 2.3177083,
          "flow": 2330.44,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10161418,
          "addtime": "2021-09-06 08:13:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 08:12:17",
          "cod": 173.61111,
          "ph": 7.004051,
          "an": 22.424768,
          "tp": 2.3177083,
          "flow": 2324.6528,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10161438,
          "addtime": "2021-09-06 08:15:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 08:14:17",
          "cod": 173.61111,
          "ph": 7.004051,
          "an": 22.424768,
          "tp": 2.3177083,
          "flow": 2296.875,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10161478,
          "addtime": "2021-09-06 08:17:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 08:16:17",
          "cod": 173.61111,
          "ph": 7.004051,
          "an": 22.424768,
          "tp": 2.3177083,
          "flow": 2302.9514,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10161494,
          "addtime": "2021-09-06 08:19:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 08:18:17",
          "cod": 173.61111,
          "ph": 7.004051,
          "an": 22.424768,
          "tp": 2.3177083,
          "flow": 2327.8357,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10161542,
          "addtime": "2021-09-06 08:21:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 08:20:17",
          "cod": 173.61111,
          "ph": 7.004051,
          "an": 22.424768,
          "tp": 2.3177083,
          "flow": 2318.287,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10161562,
          "addtime": "2021-09-06 08:23:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 08:22:17",
          "cod": 173.61111,
          "ph": 7.004051,
          "an": 23.148148,
          "tp": 2.3177083,
          "flow": 2328.125,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10161586,
          "addtime": "2021-09-06 08:25:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 08:24:17",
          "cod": 173.61111,
          "ph": 7.004051,
          "an": 23.148148,
          "tp": 2.3177083,
          "flow": 2313.0786,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10161606,
          "addtime": "2021-09-06 08:27:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 08:26:17",
          "cod": 173.61111,
          "ph": 7.004051,
          "an": 23.148148,
          "tp": 2.3177083,
          "flow": 2351.2732,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10161630,
          "addtime": "2021-09-06 08:29:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 08:28:17",
          "cod": 173.61111,
          "ph": 7.004051,
          "an": 23.148148,
          "tp": 2.3177083,
          "flow": 2337.963,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10161662,
          "addtime": "2021-09-06 08:31:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 08:30:17",
          "cod": 173.61111,
          "ph": 7.004051,
          "an": 23.148148,
          "tp": 3.1452546,
          "flow": 2261.2847,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10161710,
          "addtime": "2021-09-06 08:33:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 08:32:17",
          "cod": 173.61111,
          "ph": 7.004051,
          "an": 23.148148,
          "tp": 3.1452546,
          "flow": 2359.6643,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10161722,
          "addtime": "2021-09-06 08:35:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 08:34:17",
          "cod": 173.61111,
          "ph": 7.004051,
          "an": 23.148148,
          "tp": 3.1452546,
          "flow": 2355.6135,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10161766,
          "addtime": "2021-09-06 08:37:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 08:36:17",
          "cod": 173.61111,
          "ph": 7.004051,
          "an": 23.148148,
          "tp": 3.1452546,
          "flow": 2335.359,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10161774,
          "addtime": "2021-09-06 08:39:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 08:38:17",
          "cod": 101.5625,
          "ph": 7.004051,
          "an": 23.148148,
          "tp": 3.1452546,
          "flow": 2369.5022,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10161802,
          "addtime": "2021-09-06 08:41:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 08:40:17",
          "cod": 101.5625,
          "ph": 7.004051,
          "an": 23.148148,
          "tp": 3.1452546,
          "flow": 2294.8496,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10161830,
          "addtime": "2021-09-06 08:43:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 08:42:17",
          "cod": 101.5625,
          "ph": 7.004051,
          "an": 23.148148,
          "tp": 3.1452546,
          "flow": 2325.5208,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10161874,
          "addtime": "2021-09-06 08:45:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 08:44:17",
          "cod": 101.5625,
          "ph": 7.004051,
          "an": 23.148148,
          "tp": 3.1452546,
          "flow": 2359.375,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10161898,
          "addtime": "2021-09-06 08:47:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 08:46:17",
          "cod": 101.5625,
          "ph": 7.004051,
          "an": 23.148148,
          "tp": 3.1452546,
          "flow": 2368.345,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10161918,
          "addtime": "2021-09-06 08:49:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 08:48:17",
          "cod": 101.5625,
          "ph": 7.004051,
          "an": 23.148148,
          "tp": 3.1452546,
          "flow": 2354.456,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10161962,
          "addtime": "2021-09-06 08:51:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 08:50:17",
          "cod": 101.5625,
          "ph": 7.004051,
          "an": 23.148148,
          "tp": 3.1452546,
          "flow": 2402.7778,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10161974,
          "addtime": "2021-09-06 08:53:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 08:52:17",
          "cod": 101.5625,
          "ph": 7.004051,
          "an": 23.148148,
          "tp": 3.1452546,
          "flow": 2350.984,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10161994,
          "addtime": "2021-09-06 08:55:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 08:54:17",
          "cod": 101.5625,
          "ph": 7.004051,
          "an": 23.148148,
          "tp": 3.1452546,
          "flow": 2348.669,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10162026,
          "addtime": "2021-09-06 08:57:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 08:56:17",
          "cod": 101.5625,
          "ph": 7.004051,
          "an": 23.148148,
          "tp": 3.1452546,
          "flow": 2381.9443,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10162072,
          "addtime": "2021-09-06 08:59:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 08:58:17",
          "cod": 101.5625,
          "ph": 7.004051,
          "an": 23.148148,
          "tp": 3.1452546,
          "flow": 2356.1921,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10162082,
          "addtime": "2021-09-06 09:01:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 09:00:17",
          "cod": 101.5625,
          "ph": 7.004051,
          "an": 23.148148,
          "tp": 3.1452546,
          "flow": 2321.7593,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10162114,
          "addtime": "2021-09-06 09:03:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 09:02:17",
          "cod": 101.5625,
          "ph": 7.004051,
          "an": 23.148148,
          "tp": 3.1452546,
          "flow": 2357.6387,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10162138,
          "addtime": "2021-09-06 09:05:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 09:04:17",
          "cod": 103.29861,
          "ph": 7.004051,
          "an": 23.148148,
          "tp": 3.1452546,
          "flow": 2348.3796,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10162174,
          "addtime": "2021-09-06 09:07:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 09:06:17",
          "cod": 101.5625,
          "ph": 7.004051,
          "an": 23.148148,
          "tp": 3.1452546,
          "flow": 2371.8171,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10162206,
          "addtime": "2021-09-06 09:09:24",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 09:08:17",
          "cod": 103.29861,
          "ph": 7.004051,
          "an": 23.148148,
          "tp": 3.1452546,
          "flow": 2741.898,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10162222,
          "addtime": "2021-09-06 09:11:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 09:10:17",
          "cod": 103.29861,
          "ph": 7.004051,
          "an": 23.148148,
          "tp": 3.1452546,
          "flow": 2427.9514,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10162254,
          "addtime": "2021-09-06 09:13:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 09:12:17",
          "cod": 103.29861,
          "ph": 7.004051,
          "an": 23.148148,
          "tp": 3.1452546,
          "flow": 2350.6946,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10162274,
          "addtime": "2021-09-06 09:15:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 09:14:17",
          "cod": 103.29861,
          "ph": 7.004051,
          "an": 23.148148,
          "tp": 3.1452546,
          "flow": 2366.8982,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10162302,
          "addtime": "2021-09-06 09:17:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 09:16:17",
          "cod": 103.29861,
          "ph": 7.004051,
          "an": 23.148148,
          "tp": 3.1452546,
          "flow": 2370.3704,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10162346,
          "addtime": "2021-09-06 09:19:24",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 09:18:17",
          "cod": 103.29861,
          "ph": 7.004051,
          "an": 23.148148,
          "tp": 3.1452546,
          "flow": 2407.4072,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10162358,
          "addtime": "2021-09-06 09:21:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 09:20:17",
          "cod": 103.29861,
          "ph": 7.004051,
          "an": 23.148148,
          "tp": 3.1452546,
          "flow": 2369.7915,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10162394,
          "addtime": "2021-09-06 09:23:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 09:22:17",
          "cod": 103.29861,
          "ph": 7.004051,
          "an": 22.280094,
          "tp": 3.1452546,
          "flow": 2366.609,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10162426,
          "addtime": "2021-09-06 09:25:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 09:24:17",
          "cod": 103.29861,
          "ph": 7.004051,
          "an": 22.280094,
          "tp": 3.1452546,
          "flow": 2378.1829,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10162458,
          "addtime": "2021-09-06 09:27:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 09:26:17",
          "cod": 103.29861,
          "ph": 7.004051,
          "an": 22.280094,
          "tp": 3.1452546,
          "flow": 2389.757,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10162482,
          "addtime": "2021-09-06 09:29:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 09:28:17",
          "cod": 103.29861,
          "ph": 7.004051,
          "an": 22.280094,
          "tp": 3.1452546,
          "flow": 2358.5068,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10162504,
          "addtime": "2021-09-06 09:31:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 09:30:17",
          "cod": 103.29861,
          "ph": 7.004051,
          "an": 22.280094,
          "tp": 3.1452546,
          "flow": 2369.5022,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10162550,
          "addtime": "2021-09-06 09:33:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 09:32:17",
          "cod": 103.29861,
          "ph": 7.004051,
          "an": 22.280094,
          "tp": 2.0891204,
          "flow": 2311.6318,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10162574,
          "addtime": "2021-09-06 09:35:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 09:34:17",
          "cod": 103.29861,
          "ph": 7.004051,
          "an": 22.280094,
          "tp": 2.0891204,
          "flow": 2329.5718,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10162590,
          "addtime": "2021-09-06 09:37:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 09:36:17",
          "cod": 103.29861,
          "ph": 7.004051,
          "an": 22.280094,
          "tp": 2.0891204,
          "flow": 2366.3193,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10162614,
          "addtime": "2021-09-06 09:39:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 09:38:17",
          "cod": 94.61805,
          "ph": 7.004051,
          "an": 22.280094,
          "tp": 2.0891204,
          "flow": 2382.8125,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10162646,
          "addtime": "2021-09-06 09:41:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 09:40:17",
          "cod": 94.61805,
          "ph": 7.004051,
          "an": 22.280094,
          "tp": 2.0891204,
          "flow": 2363.7153,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10162666,
          "addtime": "2021-09-06 09:43:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 09:42:17",
          "cod": 94.61805,
          "ph": 7.004051,
          "an": 22.280094,
          "tp": 2.0891204,
          "flow": 2365.162,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10162702,
          "addtime": "2021-09-06 09:45:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 09:44:17",
          "cod": 94.61805,
          "ph": 7.004051,
          "an": 22.280094,
          "tp": 2.0891204,
          "flow": 2333.912,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10162734,
          "addtime": "2021-09-06 09:47:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 09:46:17",
          "cod": 94.61805,
          "ph": 7.004051,
          "an": 22.280094,
          "tp": 2.0891204,
          "flow": 2360.5322,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10162762,
          "addtime": "2021-09-06 09:49:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 09:48:17",
          "cod": 94.61805,
          "ph": 7.004051,
          "an": 22.280094,
          "tp": 2.0891204,
          "flow": 2389.4675,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10162778,
          "addtime": "2021-09-06 09:51:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 09:50:17",
          "cod": 94.61805,
          "ph": 7.004051,
          "an": 22.280094,
          "tp": 2.0891204,
          "flow": 2370.949,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10162828,
          "addtime": "2021-09-06 09:53:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 09:52:17",
          "cod": 94.61805,
          "ph": 7.004051,
          "an": 22.280094,
          "tp": 2.0891204,
          "flow": 2330.1504,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10162842,
          "addtime": "2021-09-06 09:55:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 09:54:17",
          "cod": 94.61805,
          "ph": 7.004051,
          "an": 22.280094,
          "tp": 2.0891204,
          "flow": 2368.9236,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10162886,
          "addtime": "2021-09-06 09:57:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 09:56:17",
          "cod": 94.61805,
          "ph": 7.004051,
          "an": 22.280094,
          "tp": 2.0891204,
          "flow": 2365.162,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10162906,
          "addtime": "2021-09-06 09:59:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 09:58:17",
          "cod": 94.61805,
          "ph": 7.004051,
          "an": 22.280094,
          "tp": 2.0891204,
          "flow": 2375,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10162934,
          "addtime": "2021-09-06 10:01:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 10:00:17",
          "cod": 94.61805,
          "ph": 7.004051,
          "an": 22.280094,
          "tp": 2.0891204,
          "flow": 2347.2222,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10162946,
          "addtime": "2021-09-06 10:03:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 10:02:17",
          "cod": 94.61805,
          "ph": 7.004051,
          "an": 22.280094,
          "tp": 2.0891204,
          "flow": 2348.9585,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10162986,
          "addtime": "2021-09-06 10:05:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 10:04:17",
          "cod": 94.61805,
          "ph": 7.004051,
          "an": 22.280094,
          "tp": 2.0891204,
          "flow": 2394.0972,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10163022,
          "addtime": "2021-09-06 10:07:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 10:06:17",
          "cod": 94.61805,
          "ph": 7.004051,
          "an": 22.280094,
          "tp": 2.0891204,
          "flow": 2335.0693,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10163034,
          "addtime": "2021-09-06 10:09:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 10:08:17",
          "cod": 94.61805,
          "ph": 7.004051,
          "an": 22.280094,
          "tp": 2.0891204,
          "flow": 2297.1643,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10163062,
          "addtime": "2021-09-06 10:11:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 10:10:17",
          "cod": 94.61805,
          "ph": 7.004051,
          "an": 22.280094,
          "tp": 2.0891204,
          "flow": 2323.206,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10163086,
          "addtime": "2021-09-06 10:13:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 10:12:17",
          "cod": 94.61805,
          "ph": 7.004051,
          "an": 22.280094,
          "tp": 2.0891204,
          "flow": 2375,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10163118,
          "addtime": "2021-09-06 10:15:21",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 10:14:17",
          "cod": 94.61805,
          "ph": 7.004051,
          "an": 22.280094,
          "tp": 2.0891204,
          "flow": 2346.065,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10163162,
          "addtime": "2021-09-06 10:17:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 10:16:17",
          "cod": 94.61805,
          "ph": 7.004051,
          "an": 22.280094,
          "tp": 2.0891204,
          "flow": 2388.3103,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10163182,
          "addtime": "2021-09-06 10:19:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 10:18:17",
          "cod": 94.61805,
          "ph": 7.004051,
          "an": 22.280094,
          "tp": 2.0891204,
          "flow": 2323.4954,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10163202,
          "addtime": "2021-09-06 10:21:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 10:20:17",
          "cod": 94.61805,
          "ph": 7.004051,
          "an": 22.280094,
          "tp": 2.0891204,
          "flow": 2371.5278,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10163238,
          "addtime": "2021-09-06 10:23:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 10:22:17",
          "cod": 94.61805,
          "ph": 7.004051,
          "an": 21.701387,
          "tp": 2.0891204,
          "flow": 2349.537,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10163262,
          "addtime": "2021-09-06 10:25:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 10:24:17",
          "cod": 94.61805,
          "ph": 7.004051,
          "an": 21.701387,
          "tp": 2.0891204,
          "flow": 2318.287,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10163294,
          "addtime": "2021-09-06 10:27:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 10:26:17",
          "cod": 94.61805,
          "ph": 7.004051,
          "an": 21.701387,
          "tp": 2.0891204,
          "flow": 2324.6528,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10163314,
          "addtime": "2021-09-06 10:29:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 10:28:17",
          "cod": 94.61805,
          "ph": 7.004051,
          "an": 21.701387,
          "tp": 2.0891204,
          "flow": 1536.169,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10163346,
          "addtime": "2021-09-06 10:31:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 10:30:18",
          "cod": 94.61805,
          "ph": 7.004051,
          "an": 21.701387,
          "tp": 6.652199,
          "flow": 1452.8357,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10163370,
          "addtime": "2021-09-06 10:33:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 10:32:18",
          "cod": 94.61805,
          "ph": 7.004051,
          "an": 21.701387,
          "tp": 6.652199,
          "flow": 1442.1296,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10163406,
          "addtime": "2021-09-06 10:35:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 10:34:18",
          "cod": 94.61805,
          "ph": 7.004051,
          "an": 21.701387,
          "tp": 6.652199,
          "flow": 1438.6575,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10163438,
          "addtime": "2021-09-06 10:37:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 10:36:18",
          "cod": 94.61805,
          "ph": 7.004051,
          "an": 21.701387,
          "tp": 6.652199,
          "flow": 1457.4652,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10163458,
          "addtime": "2021-09-06 10:39:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 10:38:18",
          "cod": 194.44444,
          "ph": 7.004051,
          "an": 21.701387,
          "tp": 6.652199,
          "flow": 1449.9421,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10163478,
          "addtime": "2021-09-06 10:41:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 10:40:18",
          "cod": 194.44444,
          "ph": 7.004051,
          "an": 21.701387,
          "tp": 6.652199,
          "flow": 1444.7339,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10163510,
          "addtime": "2021-09-06 10:43:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 10:42:18",
          "cod": 194.44444,
          "ph": 7.004051,
          "an": 21.701387,
          "tp": 6.652199,
          "flow": 1448.7847,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10163542,
          "addtime": "2021-09-06 10:45:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 10:44:18",
          "cod": 194.44444,
          "ph": 7.004051,
          "an": 21.701387,
          "tp": 6.652199,
          "flow": 1453.9932,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10163570,
          "addtime": "2021-09-06 10:47:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 10:46:18",
          "cod": 194.44444,
          "ph": 7.004051,
          "an": 21.701387,
          "tp": 6.652199,
          "flow": 1435.1853,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10163602,
          "addtime": "2021-09-06 10:49:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 10:48:18",
          "cod": 192.70833,
          "ph": 7.004051,
          "an": 21.701387,
          "tp": 6.652199,
          "flow": 1455.7292,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10163626,
          "addtime": "2021-09-06 10:51:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 10:50:18",
          "cod": 194.44444,
          "ph": 7.004051,
          "an": 21.701387,
          "tp": 6.652199,
          "flow": 1954.5718,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10163654,
          "addtime": "2021-09-06 10:53:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 10:52:18",
          "cod": 194.44444,
          "ph": 7.004051,
          "an": 21.701387,
          "tp": 6.652199,
          "flow": 2043.4028,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10163690,
          "addtime": "2021-09-06 10:55:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 10:54:18",
          "cod": 194.44444,
          "ph": 7.004051,
          "an": 21.701387,
          "tp": 6.652199,
          "flow": 2035.0117,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10163722,
          "addtime": "2021-09-06 10:57:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 10:56:18",
          "cod": 194.44444,
          "ph": 7.004051,
          "an": 21.701387,
          "tp": 6.652199,
          "flow": 2042.5347,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10163734,
          "addtime": "2021-09-06 10:59:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 10:58:18",
          "cod": 192.70833,
          "ph": 7.004051,
          "an": 21.701387,
          "tp": 6.652199,
          "flow": 2049.7686,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10163778,
          "addtime": "2021-09-06 11:01:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 11:00:18",
          "cod": 192.70833,
          "ph": 7.004051,
          "an": 21.701387,
          "tp": 6.652199,
          "flow": 2045.7175,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10163786,
          "addtime": "2021-09-06 11:03:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 11:02:18",
          "cod": 192.70833,
          "ph": 7.004051,
          "an": 21.701387,
          "tp": 6.652199,
          "flow": 2035.5903,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10163818,
          "addtime": "2021-09-06 11:05:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 11:04:18",
          "cod": 194.44444,
          "ph": 7.004051,
          "an": 21.701387,
          "tp": 6.652199,
          "flow": 2035.5902,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10163852,
          "addtime": "2021-09-06 11:07:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 11:06:18",
          "cod": 194.44444,
          "ph": 7.004051,
          "an": 21.701387,
          "tp": 6.652199,
          "flow": 2043.9814,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10163878,
          "addtime": "2021-09-06 11:09:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 11:08:18",
          "cod": 194.44444,
          "ph": 7.004051,
          "an": 21.701387,
          "tp": 6.652199,
          "flow": 2063.3682,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10163912,
          "addtime": "2021-09-06 11:11:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 11:10:18",
          "cod": 194.44444,
          "ph": 7.004051,
          "an": 21.701387,
          "tp": 6.652199,
          "flow": 2032.4075,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10163930,
          "addtime": "2021-09-06 11:13:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 11:12:18",
          "cod": 194.44444,
          "ph": 7.004051,
          "an": 21.701387,
          "tp": 6.652199,
          "flow": 2037.905,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10163962,
          "addtime": "2021-09-06 11:15:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 11:14:18",
          "cod": 194.44444,
          "ph": 7.004051,
          "an": 21.701387,
          "tp": 6.652199,
          "flow": 2022.28,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10163998,
          "addtime": "2021-09-06 11:17:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 11:16:18",
          "cod": 194.44444,
          "ph": 7.004051,
          "an": 21.701387,
          "tp": 6.652199,
          "flow": 2018.2292,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10164034,
          "addtime": "2021-09-06 11:19:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 11:18:18",
          "cod": 194.44444,
          "ph": 7.004051,
          "an": 21.701387,
          "tp": 6.652199,
          "flow": 2044.8496,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10164050,
          "addtime": "2021-09-06 11:21:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 11:20:18",
          "cod": 194.44444,
          "ph": 7.004051,
          "an": 21.701387,
          "tp": 6.652199,
          "flow": 2055.845,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10164078,
          "addtime": "2021-09-06 11:23:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 11:22:18",
          "cod": 194.44444,
          "ph": 7.004051,
          "an": 22.280094,
          "tp": 6.652199,
          "flow": 2052.662,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10164114,
          "addtime": "2021-09-06 11:25:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 11:24:18",
          "cod": 194.44444,
          "ph": 7.004051,
          "an": 22.280094,
          "tp": 6.652199,
          "flow": 2756.0764,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10164146,
          "addtime": "2021-09-06 11:27:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 11:26:18",
          "cod": 194.44444,
          "ph": 7.004051,
          "an": 22.280094,
          "tp": 6.652199,
          "flow": 2268.8079,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10164158,
          "addtime": "2021-09-06 11:29:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 11:28:18",
          "cod": 194.44444,
          "ph": 7.004051,
          "an": 22.280094,
          "tp": 6.652199,
          "flow": 2076.9675,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10164182,
          "addtime": "2021-09-06 11:31:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 11:30:18",
          "cod": 194.44444,
          "ph": 7.004051,
          "an": 22.280094,
          "tp": 2.745949,
          "flow": 2019.3865,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10164222,
          "addtime": "2021-09-06 11:33:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 11:32:18",
          "cod": 194.44444,
          "ph": 7.004051,
          "an": 22.280094,
          "tp": 2.745949,
          "flow": 2054.109,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10164246,
          "addtime": "2021-09-06 11:35:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 11:34:18",
          "cod": 194.44444,
          "ph": 7.004051,
          "an": 22.280094,
          "tp": 2.745949,
          "flow": 2024.5948,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10164270,
          "addtime": "2021-09-06 11:37:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 11:36:18",
          "cod": 194.44444,
          "ph": 7.004051,
          "an": 22.280094,
          "tp": 2.745949,
          "flow": 2044.5603,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10164306,
          "addtime": "2021-09-06 11:39:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 11:38:18",
          "cod": 87.673615,
          "ph": 7.004051,
          "an": 22.280094,
          "tp": 2.745949,
          "flow": 2052.0833,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10164318,
          "addtime": "2021-09-06 11:41:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 11:40:18",
          "cod": 87.673615,
          "ph": 7.004051,
          "an": 22.280094,
          "tp": 2.745949,
          "flow": 2041.0879,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10164350,
          "addtime": "2021-09-06 11:43:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 11:42:18",
          "cod": 87.673615,
          "ph": 7.004051,
          "an": 22.280094,
          "tp": 2.745949,
          "flow": 2057.2917,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10164382,
          "addtime": "2021-09-06 11:45:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 11:44:18",
          "cod": 87.673615,
          "ph": 7.004051,
          "an": 22.280094,
          "tp": 2.745949,
          "flow": 2024.0162,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10164406,
          "addtime": "2021-09-06 11:47:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 11:46:18",
          "cod": 87.673615,
          "ph": 7.004051,
          "an": 22.280094,
          "tp": 2.745949,
          "flow": 2019.3866,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10164446,
          "addtime": "2021-09-06 11:49:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 11:48:18",
          "cod": 87.673615,
          "ph": 7.004051,
          "an": 22.280094,
          "tp": 2.745949,
          "flow": 2053.53,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10164462,
          "addtime": "2021-09-06 11:51:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 11:50:18",
          "cod": 87.673615,
          "ph": 7.004051,
          "an": 22.280094,
          "tp": 2.745949,
          "flow": 2023.7269,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10164486,
          "addtime": "2021-09-06 11:53:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 11:52:18",
          "cod": 87.673615,
          "ph": 7.004051,
          "an": 22.280094,
          "tp": 2.745949,
          "flow": 2035.3008,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10164518,
          "addtime": "2021-09-06 11:55:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 11:54:18",
          "cod": 87.673615,
          "ph": 7.004051,
          "an": 22.280094,
          "tp": 2.745949,
          "flow": 2006.3657,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10164546,
          "addtime": "2021-09-06 11:57:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 11:56:18",
          "cod": 87.673615,
          "ph": 7.004051,
          "an": 22.280094,
          "tp": 2.745949,
          "flow": 2023.7268,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10164582,
          "addtime": "2021-09-06 11:59:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 11:58:18",
          "cod": 87.673615,
          "ph": 7.004051,
          "an": 22.280094,
          "tp": 2.745949,
          "flow": 2013.8889,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10164606,
          "addtime": "2021-09-06 12:01:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 12:00:18",
          "cod": 87.673615,
          "ph": 7.008102,
          "an": 22.280094,
          "tp": 2.745949,
          "flow": 2039.6411,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10164630,
          "addtime": "2021-09-06 12:03:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 12:02:18",
          "cod": 87.673615,
          "ph": 7.004051,
          "an": 22.280094,
          "tp": 2.745949,
          "flow": 2035.0116,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10164658,
          "addtime": "2021-09-06 12:05:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 12:04:18",
          "cod": 87.673615,
          "ph": 7.008102,
          "an": 22.280094,
          "tp": 2.745949,
          "flow": 2043.1133,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10164694,
          "addtime": "2021-09-06 12:07:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 12:06:18",
          "cod": 87.673615,
          "ph": 7.004051,
          "an": 22.280094,
          "tp": 2.745949,
          "flow": 2012.1528,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10164716,
          "addtime": "2021-09-06 12:09:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 12:08:18",
          "cod": 87.673615,
          "ph": 7.004051,
          "an": 22.280094,
          "tp": 2.745949,
          "flow": 2036.7477,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10164746,
          "addtime": "2021-09-06 12:11:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 12:10:18",
          "cod": 87.673615,
          "ph": 7.004051,
          "an": 22.280094,
          "tp": 2.745949,
          "flow": 2031.8286,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10164770,
          "addtime": "2021-09-06 12:13:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 12:12:18",
          "cod": 87.673615,
          "ph": 7.004051,
          "an": 22.280094,
          "tp": 2.745949,
          "flow": 2014.4675,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10164807,
          "addtime": "2021-09-06 12:15:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 12:14:18",
          "cod": 87.673615,
          "ph": 7.004051,
          "an": 22.280094,
          "tp": 2.745949,
          "flow": 2014.4675,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10164826,
          "addtime": "2021-09-06 12:17:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 12:16:18",
          "cod": 87.673615,
          "ph": 7.004051,
          "an": 22.280094,
          "tp": 2.745949,
          "flow": 2024.0162,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10164854,
          "addtime": "2021-09-06 12:19:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 12:18:18",
          "cod": 87.673615,
          "ph": 7.004051,
          "an": 22.280094,
          "tp": 2.745949,
          "flow": 2033.8542,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10164902,
          "addtime": "2021-09-06 12:21:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 12:20:18",
          "cod": 87.673615,
          "ph": 7.004051,
          "an": 22.280094,
          "tp": 2.745949,
          "flow": 2033.8541,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10164926,
          "addtime": "2021-09-06 12:23:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 12:22:18",
          "cod": 87.673615,
          "ph": 7.004051,
          "an": 24.016203,
          "tp": 2.745949,
          "flow": 2050.3472,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10164934,
          "addtime": "2021-09-06 12:25:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 12:24:18",
          "cod": 87.673615,
          "ph": 7.004051,
          "an": 24.016203,
          "tp": 2.745949,
          "flow": 2039.9307,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10164962,
          "addtime": "2021-09-06 12:27:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 12:26:18",
          "cod": 87.673615,
          "ph": 7.004051,
          "an": 24.016203,
          "tp": 2.745949,
          "flow": 2043.4028,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10165002,
          "addtime": "2021-09-06 12:29:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 12:28:18",
          "cod": 87.673615,
          "ph": 7.004051,
          "an": 24.016203,
          "tp": 2.745949,
          "flow": 1984.6643,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10165026,
          "addtime": "2021-09-06 12:31:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 12:30:18",
          "cod": 87.673615,
          "ph": 7.004051,
          "an": 24.016203,
          "tp": 2.0543983,
          "flow": 2034.1436,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10165054,
          "addtime": "2021-09-06 12:33:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 12:32:18",
          "cod": 87.673615,
          "ph": 7.004051,
          "an": 24.016203,
          "tp": 2.0543983,
          "flow": 2011.8635,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10165094,
          "addtime": "2021-09-06 12:35:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 12:34:18",
          "cod": 87.673615,
          "ph": 7.004051,
          "an": 24.016203,
          "tp": 2.0543983,
          "flow": 2142.6504,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10165114,
          "addtime": "2021-09-06 12:37:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 12:36:18",
          "cod": 87.673615,
          "ph": 7.004051,
          "an": 24.016203,
          "tp": 2.0543983,
          "flow": 2080.7292,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10165134,
          "addtime": "2021-09-06 12:39:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 12:38:18",
          "cod": 71.18056,
          "ph": 7.004051,
          "an": 24.016203,
          "tp": 2.0543983,
          "flow": 2073.206,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10165166,
          "addtime": "2021-09-06 12:41:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 12:40:18",
          "cod": 71.18056,
          "ph": 7.004051,
          "an": 24.016203,
          "tp": 2.0543983,
          "flow": 2041.3772,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10165190,
          "addtime": "2021-09-06 12:43:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 12:42:18",
          "cod": 71.18056,
          "ph": 7.004051,
          "an": 24.016203,
          "tp": 2.0572917,
          "flow": 2062.2107,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10165218,
          "addtime": "2021-09-06 12:45:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 12:44:18",
          "cod": 71.18056,
          "ph": 7.004051,
          "an": 24.016203,
          "tp": 2.0543983,
          "flow": 2039.0625,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10165250,
          "addtime": "2021-09-06 12:47:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 12:46:18",
          "cod": 71.18056,
          "ph": 7.004051,
          "an": 24.016203,
          "tp": 2.0572917,
          "flow": 2074.074,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10165290,
          "addtime": "2021-09-06 12:49:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 12:48:18",
          "cod": 71.18056,
          "ph": 7.004051,
          "an": 24.016203,
          "tp": 2.0543983,
          "flow": 2028.9353,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10165302,
          "addtime": "2021-09-06 12:51:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 12:50:18",
          "cod": 71.18056,
          "ph": 7.004051,
          "an": 24.016203,
          "tp": 2.0543983,
          "flow": 2041.956,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10165347,
          "addtime": "2021-09-06 12:53:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 12:52:18",
          "cod": 71.18056,
          "ph": 7.004051,
          "an": 24.016203,
          "tp": 2.0543983,
          "flow": 2048.3218,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10165367,
          "addtime": "2021-09-06 12:55:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 12:54:18",
          "cod": 71.18056,
          "ph": 7.004051,
          "an": 24.016203,
          "tp": 2.0543983,
          "flow": 2055.8447,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10165382,
          "addtime": "2021-09-06 12:57:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 12:56:18",
          "cod": 71.18056,
          "ph": 7.004051,
          "an": 24.016203,
          "tp": 2.0543983,
          "flow": 2005.7871,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10165414,
          "addtime": "2021-09-06 12:59:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 12:58:18",
          "cod": 71.18056,
          "ph": 7.004051,
          "an": 24.016203,
          "tp": 2.0543983,
          "flow": 2041.956,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10165454,
          "addtime": "2021-09-06 13:01:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 13:00:18",
          "cod": 71.18056,
          "ph": 7.004051,
          "an": 24.016203,
          "tp": 2.0543983,
          "flow": 2041.6667,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10165470,
          "addtime": "2021-09-06 13:03:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 13:02:18",
          "cod": 71.18056,
          "ph": 7.004051,
          "an": 24.016203,
          "tp": 2.0543983,
          "flow": 2037.6158,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10165498,
          "addtime": "2021-09-06 13:05:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 13:04:18",
          "cod": 71.18056,
          "ph": 7.004051,
          "an": 24.016203,
          "tp": 2.0543983,
          "flow": 2045.4282,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10165538,
          "addtime": "2021-09-06 13:07:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 13:06:18",
          "cod": 71.18056,
          "ph": 7.004051,
          "an": 24.016203,
          "tp": 2.0543983,
          "flow": 2046.007,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10165554,
          "addtime": "2021-09-06 13:09:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 13:08:18",
          "cod": 71.18056,
          "ph": 7.004051,
          "an": 24.016203,
          "tp": 2.0543983,
          "flow": 2021.9907,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10165582,
          "addtime": "2021-09-06 13:11:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 13:10:18",
          "cod": 71.18056,
          "ph": 7.004051,
          "an": 24.016203,
          "tp": 2.0543983,
          "flow": 2028.0671,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10165610,
          "addtime": "2021-09-06 13:13:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 13:12:18",
          "cod": 71.18056,
          "ph": 7.004051,
          "an": 24.016203,
          "tp": 2.0543983,
          "flow": 2053.53,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10165658,
          "addtime": "2021-09-06 13:15:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 13:14:18",
          "cod": 71.18056,
          "ph": 7.004051,
          "an": 24.016203,
          "tp": 2.0543983,
          "flow": 2028.6459,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10165678,
          "addtime": "2021-09-06 13:17:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 13:16:18",
          "cod": 71.18056,
          "ph": 7.004051,
          "an": 24.016203,
          "tp": 2.0543983,
          "flow": 2057.2917,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10165702,
          "addtime": "2021-09-06 13:19:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 13:18:18",
          "cod": 71.18056,
          "ph": 7.008102,
          "an": 24.016203,
          "tp": 2.0572917,
          "flow": 2033.5647,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10165726,
          "addtime": "2021-09-06 13:21:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 13:20:18",
          "cod": 71.18056,
          "ph": 7.004051,
          "an": 24.016203,
          "tp": 2.0543983,
          "flow": 2039.9307,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10165754,
          "addtime": "2021-09-06 13:23:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 13:22:19",
          "cod": 71.18056,
          "ph": 7.004051,
          "an": 25.89699,
          "tp": 2.0543983,
          "flow": 2055.266,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10165794,
          "addtime": "2021-09-06 13:25:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 13:24:19",
          "cod": 71.18056,
          "ph": 7.004051,
          "an": 25.89699,
          "tp": 2.0543983,
          "flow": 2046.875,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10165806,
          "addtime": "2021-09-06 13:27:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 13:26:19",
          "cod": 71.18056,
          "ph": 7.004051,
          "an": 25.89699,
          "tp": 2.0572917,
          "flow": 2041.3772,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10165834,
          "addtime": "2021-09-06 13:29:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 13:28:19",
          "cod": 71.18056,
          "ph": 7.004051,
          "an": 25.89699,
          "tp": 2.0543983,
          "flow": 2036.7477,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10165862,
          "addtime": "2021-09-06 13:31:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 13:30:19",
          "cod": 71.18056,
          "ph": 7.004051,
          "an": 25.89699,
          "tp": 1.9878472,
          "flow": 2048.9004,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10165910,
          "addtime": "2021-09-06 13:33:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 13:32:19",
          "cod": 71.18056,
          "ph": 7.004051,
          "an": 25.89699,
          "tp": 1.9878472,
          "flow": 2033.2754,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10165926,
          "addtime": "2021-09-06 13:35:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 13:34:19",
          "cod": 71.18056,
          "ph": 7.004051,
          "an": 25.89699,
          "tp": 1.9878472,
          "flow": 2041.6666,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10165950,
          "addtime": "2021-09-06 13:37:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 13:36:19",
          "cod": 71.18056,
          "ph": 7.004051,
          "an": 25.89699,
          "tp": 1.9878472,
          "flow": 2020.8333,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10165990,
          "addtime": "2021-09-06 13:39:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 13:38:19",
          "cod": 71.18056,
          "ph": 7.004051,
          "an": 25.89699,
          "tp": 1.9878472,
          "flow": 2048.3218,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10166002,
          "addtime": "2021-09-06 13:41:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 13:40:19",
          "cod": 71.18056,
          "ph": 7.008102,
          "an": 25.89699,
          "tp": 1.9878472,
          "flow": 2036.7478,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10166026,
          "addtime": "2021-09-06 13:43:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 13:42:19",
          "cod": 71.18056,
          "ph": 7.004051,
          "an": 25.89699,
          "tp": 1.9878472,
          "flow": 2020.8333,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10166058,
          "addtime": "2021-09-06 13:45:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 13:44:19",
          "cod": 71.18056,
          "ph": 7.004051,
          "an": 25.89699,
          "tp": 1.9878472,
          "flow": 2020.544,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10166098,
          "addtime": "2021-09-06 13:47:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 13:46:19",
          "cod": 71.18056,
          "ph": 7.004051,
          "an": 25.89699,
          "tp": 1.9878472,
          "flow": 2004.0509,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10166122,
          "addtime": "2021-09-06 13:49:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 13:48:19",
          "cod": 71.18056,
          "ph": 7.004051,
          "an": 25.89699,
          "tp": 1.9878472,
          "flow": 1988.1366,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10166150,
          "addtime": "2021-09-06 13:51:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 13:50:19",
          "cod": 71.18056,
          "ph": 7.004051,
          "an": 25.89699,
          "tp": 1.9878472,
          "flow": 2020.8335,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10166182,
          "addtime": "2021-09-06 13:53:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 13:52:19",
          "cod": 71.18056,
          "ph": 7.004051,
          "an": 25.89699,
          "tp": 1.9878472,
          "flow": 2021.7014,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10166218,
          "addtime": "2021-09-06 13:55:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 13:54:19",
          "cod": 71.18056,
          "ph": 7.008102,
          "an": 25.89699,
          "tp": 1.9878472,
          "flow": 1987.8472,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10166222,
          "addtime": "2021-09-06 13:57:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 13:56:19",
          "cod": 71.18056,
          "ph": 7.004051,
          "an": 25.89699,
          "tp": 1.9878472,
          "flow": 2010.1273,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10166274,
          "addtime": "2021-09-06 13:59:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 13:58:19",
          "cod": 71.18056,
          "ph": 7.004051,
          "an": 25.89699,
          "tp": 1.9878472,
          "flow": 1997.9746,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10166286,
          "addtime": "2021-09-06 14:01:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 14:00:19",
          "cod": 71.18056,
          "ph": 7.008102,
          "an": 25.89699,
          "tp": 1.9878472,
          "flow": 2022.28,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10166310,
          "addtime": "2021-09-06 14:03:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 14:02:19",
          "cod": 71.18056,
          "ph": 7.004051,
          "an": 25.89699,
          "tp": 1.9878472,
          "flow": 2018.5186,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10166334,
          "addtime": "2021-09-06 14:05:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 14:04:19",
          "cod": 71.18056,
          "ph": 7.004051,
          "an": 25.89699,
          "tp": 1.9878472,
          "flow": 2016.493,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10166374,
          "addtime": "2021-09-06 14:07:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 14:06:19",
          "cod": 71.18056,
          "ph": 7.004051,
          "an": 25.89699,
          "tp": 1.9878472,
          "flow": 2019.9653,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10166398,
          "addtime": "2021-09-06 14:09:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 14:08:19",
          "cod": 71.18056,
          "ph": 7.004051,
          "an": 25.89699,
          "tp": 1.9878472,
          "flow": 2023.1482,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10166434,
          "addtime": "2021-09-06 14:11:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 14:10:19",
          "cod": 71.18056,
          "ph": 7.004051,
          "an": 25.89699,
          "tp": 1.9878472,
          "flow": 2007.8125,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10166450,
          "addtime": "2021-09-06 14:13:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 14:12:19",
          "cod": 71.18056,
          "ph": 7.004051,
          "an": 25.89699,
          "tp": 1.9878472,
          "flow": 2004.6296,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10166498,
          "addtime": "2021-09-06 14:15:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 14:14:19",
          "cod": 71.18056,
          "ph": 7.004051,
          "an": 25.89699,
          "tp": 1.9878472,
          "flow": 2021.9907,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10166506,
          "addtime": "2021-09-06 14:17:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 14:16:19",
          "cod": 71.18056,
          "ph": 7.004051,
          "an": 25.89699,
          "tp": 1.9878472,
          "flow": 2018.8079,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10166534,
          "addtime": "2021-09-06 14:19:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 14:18:19",
          "cod": 71.18056,
          "ph": 7.004051,
          "an": 25.89699,
          "tp": 1.9878472,
          "flow": 2011.5741,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10166570,
          "addtime": "2021-09-06 14:21:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 14:20:19",
          "cod": 71.18056,
          "ph": 7.008102,
          "an": 25.89699,
          "tp": 1.9878472,
          "flow": 2015.9143,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10166606,
          "addtime": "2021-09-06 14:23:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 14:22:19",
          "cod": 71.18056,
          "ph": 7.004051,
          "an": 27.633102,
          "tp": 1.9878472,
          "flow": 2036.4584,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10166614,
          "addtime": "2021-09-06 14:25:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 14:24:19",
          "cod": 71.18056,
          "ph": 7.004051,
          "an": 27.633102,
          "tp": 1.9878472,
          "flow": 2055.5554,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10166662,
          "addtime": "2021-09-06 14:27:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 14:26:19",
          "cod": 71.18056,
          "ph": 7.004051,
          "an": 27.633102,
          "tp": 1.9878472,
          "flow": 2052.9514,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10166682,
          "addtime": "2021-09-06 14:29:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 14:28:19",
          "cod": 71.18056,
          "ph": 7.004051,
          "an": 27.633102,
          "tp": 1.9878472,
          "flow": 2057.8704,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10166706,
          "addtime": "2021-09-06 14:31:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 14:30:19",
          "cod": 71.18056,
          "ph": 7.004051,
          "an": 27.633102,
          "tp": 3.035301,
          "flow": 2034.4329,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10166730,
          "addtime": "2021-09-06 14:33:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 14:32:19",
          "cod": 71.18056,
          "ph": 7.008102,
          "an": 27.633102,
          "tp": 3.035301,
          "flow": 2054.398,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10166770,
          "addtime": "2021-09-06 14:35:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 14:34:19",
          "cod": 71.18056,
          "ph": 7.004051,
          "an": 27.633102,
          "tp": 3.035301,
          "flow": 2032.1182,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10166786,
          "addtime": "2021-09-06 14:37:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 14:36:19",
          "cod": 71.18056,
          "ph": 7.004051,
          "an": 27.633102,
          "tp": 3.035301,
          "flow": 2041.3772,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10166830,
          "addtime": "2021-09-06 14:39:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 14:38:19",
          "cod": 152.77777,
          "ph": 7.008102,
          "an": 27.633102,
          "tp": 3.035301,
          "flow": 2017.3611,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10166862,
          "addtime": "2021-09-06 14:41:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 14:40:19",
          "cod": 152.77777,
          "ph": 7.004051,
          "an": 27.633102,
          "tp": 3.035301,
          "flow": 2019.6759,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10166882,
          "addtime": "2021-09-06 14:43:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 14:42:19",
          "cod": 152.77777,
          "ph": 7.008102,
          "an": 27.633102,
          "tp": 3.035301,
          "flow": 2022.8589,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10166910,
          "addtime": "2021-09-06 14:45:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 14:44:19",
          "cod": 152.77777,
          "ph": 7.008102,
          "an": 27.633102,
          "tp": 3.035301,
          "flow": 2021.7014,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10166926,
          "addtime": "2021-09-06 14:47:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 14:46:19",
          "cod": 152.77777,
          "ph": 7.004051,
          "an": 27.633102,
          "tp": 3.035301,
          "flow": 2052.3726,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10166958,
          "addtime": "2021-09-06 14:49:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 14:48:19",
          "cod": 152.77777,
          "ph": 7.004051,
          "an": 27.633102,
          "tp": 3.035301,
          "flow": 1994.7917,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10166990,
          "addtime": "2021-09-06 14:51:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 14:50:19",
          "cod": 152.77777,
          "ph": 7.004051,
          "an": 27.633102,
          "tp": 3.035301,
          "flow": 2056.713,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10167010,
          "addtime": "2021-09-06 14:53:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 14:52:19",
          "cod": 152.77777,
          "ph": 7.008102,
          "an": 27.633102,
          "tp": 3.035301,
          "flow": 2009.2593,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10167058,
          "addtime": "2021-09-06 14:55:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 14:54:19",
          "cod": 152.77777,
          "ph": 7.004051,
          "an": 27.633102,
          "tp": 3.035301,
          "flow": 1995.3704,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10167082,
          "addtime": "2021-09-06 14:57:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 14:56:19",
          "cod": 152.77777,
          "ph": 7.004051,
          "an": 27.633102,
          "tp": 3.035301,
          "flow": 2025.1736,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10167090,
          "addtime": "2021-09-06 14:59:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 14:58:19",
          "cod": 152.77777,
          "ph": 7.004051,
          "an": 27.633102,
          "tp": 3.035301,
          "flow": 2016.493,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10167126,
          "addtime": "2021-09-06 15:01:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 15:00:19",
          "cod": 152.77777,
          "ph": 7.004051,
          "an": 27.633102,
          "tp": 3.035301,
          "flow": 2015.0463,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10167154,
          "addtime": "2021-09-06 15:03:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 15:02:19",
          "cod": 152.77777,
          "ph": 7.004051,
          "an": 27.633102,
          "tp": 3.035301,
          "flow": 1997.6852,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10167194,
          "addtime": "2021-09-06 15:05:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 15:04:19",
          "cod": 152.77777,
          "ph": 7.004051,
          "an": 27.633102,
          "tp": 3.035301,
          "flow": 1999.1318,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10167214,
          "addtime": "2021-09-06 15:07:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 15:06:19",
          "cod": 152.77777,
          "ph": 7.004051,
          "an": 27.633102,
          "tp": 3.035301,
          "flow": 2026.0417,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10167250,
          "addtime": "2021-09-06 15:09:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 15:08:19",
          "cod": 152.77777,
          "ph": 7.004051,
          "an": 27.633102,
          "tp": 3.035301,
          "flow": 2041.0879,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10167262,
          "addtime": "2021-09-06 15:11:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 15:10:19",
          "cod": 152.77777,
          "ph": 7.004051,
          "an": 27.633102,
          "tp": 3.035301,
          "flow": 1999.4214,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10167286,
          "addtime": "2021-09-06 15:13:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 15:12:19",
          "cod": 152.77777,
          "ph": 7.004051,
          "an": 27.633102,
          "tp": 3.035301,
          "flow": 2742.766,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10167330,
          "addtime": "2021-09-06 15:15:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 15:14:19",
          "cod": 152.77777,
          "ph": 7.004051,
          "an": 27.633102,
          "tp": 3.035301,
          "flow": 2757.8125,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10167354,
          "addtime": "2021-09-06 15:17:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 15:16:19",
          "cod": 152.77777,
          "ph": 7.004051,
          "an": 27.633102,
          "tp": 3.035301,
          "flow": 2738.4258,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10167382,
          "addtime": "2021-09-06 15:19:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 15:18:19",
          "cod": 152.77777,
          "ph": 7.008102,
          "an": 27.633102,
          "tp": 3.035301,
          "flow": 2721.6436,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10167406,
          "addtime": "2021-09-06 15:21:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 15:20:19",
          "cod": 152.77777,
          "ph": 7.008102,
          "an": 27.633102,
          "tp": 3.035301,
          "flow": 2721.6436,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10167442,
          "addtime": "2021-09-06 15:23:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 15:22:19",
          "cod": 152.77777,
          "ph": 7.008102,
          "an": 21.701387,
          "tp": 3.035301,
          "flow": 2735.2432,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10167466,
          "addtime": "2021-09-06 15:25:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 15:24:19",
          "cod": 152.77777,
          "ph": 7.008102,
          "an": 21.701387,
          "tp": 3.035301,
          "flow": 2736.69,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10167490,
          "addtime": "2021-09-06 15:27:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 15:26:19",
          "cod": 152.77777,
          "ph": 7.008102,
          "an": 21.701387,
          "tp": 3.035301,
          "flow": 2704.5718,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10167534,
          "addtime": "2021-09-06 15:29:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 15:28:19",
          "cod": 152.77777,
          "ph": 7.004051,
          "an": 21.701387,
          "tp": 3.035301,
          "flow": 2725.405,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10167546,
          "addtime": "2021-09-06 15:31:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 15:30:19",
          "cod": 152.77777,
          "ph": 7.004051,
          "an": 21.701387,
          "tp": 5.51794,
          "flow": 2725.405,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10167578,
          "addtime": "2021-09-06 15:33:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 15:32:19",
          "cod": 152.77777,
          "ph": 7.004051,
          "an": 21.701387,
          "tp": 5.51794,
          "flow": 2723.669,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10167598,
          "addtime": "2021-09-06 15:35:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 15:34:19",
          "cod": 152.77777,
          "ph": 7.004051,
          "an": 21.701387,
          "tp": 5.51794,
          "flow": 2757.234,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10167626,
          "addtime": "2021-09-06 15:37:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 15:36:19",
          "cod": 152.77777,
          "ph": 7.004051,
          "an": 21.701387,
          "tp": 5.51794,
          "flow": 2755.4976,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10167674,
          "addtime": "2021-09-06 15:39:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 15:38:19",
          "cod": 257.8125,
          "ph": 7.008102,
          "an": 21.701387,
          "tp": 5.51794,
          "flow": 2763.889,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10167702,
          "addtime": "2021-09-06 15:41:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 15:40:19",
          "cod": 257.8125,
          "ph": 7.004051,
          "an": 21.701387,
          "tp": 5.51794,
          "flow": 2754.919,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10167706,
          "addtime": "2021-09-06 15:43:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 15:42:19",
          "cod": 257.8125,
          "ph": 7.004051,
          "an": 21.701387,
          "tp": 5.51794,
          "flow": 2751.4468,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10167742,
          "addtime": "2021-09-06 15:45:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 15:44:19",
          "cod": 257.8125,
          "ph": 7.004051,
          "an": 21.701387,
          "tp": 5.51794,
          "flow": 2765.625,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10167766,
          "addtime": "2021-09-06 15:47:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 15:46:19",
          "cod": 257.8125,
          "ph": 7.004051,
          "an": 21.701387,
          "tp": 5.51794,
          "flow": 2768.8079,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10167790,
          "addtime": "2021-09-06 15:49:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 15:48:19",
          "cod": 257.8125,
          "ph": 7.004051,
          "an": 21.701387,
          "tp": 5.51794,
          "flow": 2763.889,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10167830,
          "addtime": "2021-09-06 15:51:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 15:50:19",
          "cod": 257.8125,
          "ph": 7.004051,
          "an": 21.701387,
          "tp": 5.51794,
          "flow": 2760.706,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10167846,
          "addtime": "2021-09-06 15:53:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 15:52:19",
          "cod": 257.8125,
          "ph": 6.9959493,
          "an": 21.701387,
          "tp": 5.51794,
          "flow": 2784.7222,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10167890,
          "addtime": "2021-09-06 15:55:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 15:54:19",
          "cod": 257.8125,
          "ph": 6.9959493,
          "an": 21.701387,
          "tp": 5.51794,
          "flow": 2770.8333,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10167906,
          "addtime": "2021-09-06 15:57:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 15:56:19",
          "cod": 257.8125,
          "ph": 7.004051,
          "an": 21.701387,
          "tp": 5.51794,
          "flow": 2767.361,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10167934,
          "addtime": "2021-09-06 15:59:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 15:58:19",
          "cod": 257.8125,
          "ph": 7.004051,
          "an": 21.701387,
          "tp": 5.51794,
          "flow": 2767.94,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10167958,
          "addtime": "2021-09-06 16:01:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 16:00:19",
          "cod": 257.8125,
          "ph": 7.004051,
          "an": 21.701387,
          "tp": 5.51794,
          "flow": 2770.8333,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10167994,
          "addtime": "2021-09-06 16:03:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 16:02:19",
          "cod": 257.8125,
          "ph": 7.004051,
          "an": 21.701387,
          "tp": 5.51794,
          "flow": 2775.7524,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10168014,
          "addtime": "2021-09-06 16:05:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 16:04:19",
          "cod": 257.8125,
          "ph": 7.004051,
          "an": 21.701387,
          "tp": 5.51794,
          "flow": 2778.6458,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10168042,
          "addtime": "2021-09-06 16:07:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 16:06:19",
          "cod": 257.8125,
          "ph": 7.004051,
          "an": 21.701387,
          "tp": 5.51794,
          "flow": 2769.6758,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10168074,
          "addtime": "2021-09-06 16:09:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 16:08:19",
          "cod": 257.8125,
          "ph": 7.004051,
          "an": 21.701387,
          "tp": 5.51794,
          "flow": 2778.0671,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10168098,
          "addtime": "2021-09-06 16:11:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 16:10:19",
          "cod": 257.8125,
          "ph": 7.004051,
          "an": 21.701387,
          "tp": 5.51794,
          "flow": 2771.7014,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10168142,
          "addtime": "2021-09-06 16:13:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 16:12:19",
          "cod": 257.8125,
          "ph": 6.9959493,
          "an": 21.701387,
          "tp": 5.51794,
          "flow": 2766.7825,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10168154,
          "addtime": "2021-09-06 16:15:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 16:14:19",
          "cod": 257.8125,
          "ph": 7.004051,
          "an": 21.701387,
          "tp": 5.51794,
          "flow": 2772.5693,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10168190,
          "addtime": "2021-09-06 16:17:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 16:16:20",
          "cod": 257.8125,
          "ph": 7.004051,
          "an": 21.701387,
          "tp": 5.51794,
          "flow": 2771.7014,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10168222,
          "addtime": "2021-09-06 16:19:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 16:18:20",
          "cod": 257.8125,
          "ph": 7.004051,
          "an": 21.701387,
          "tp": 5.51794,
          "flow": 2767.94,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10168242,
          "addtime": "2021-09-06 16:21:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 16:20:20",
          "cod": 257.8125,
          "ph": 7.004051,
          "an": 21.701387,
          "tp": 5.51794,
          "flow": 2765.625,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10168270,
          "addtime": "2021-09-06 16:23:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 16:22:20",
          "cod": 257.8125,
          "ph": 7.004051,
          "an": 21.701387,
          "tp": 5.51794,
          "flow": 2761.5742,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10168294,
          "addtime": "2021-09-06 16:25:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 16:24:20",
          "cod": 257.8125,
          "ph": 7.004051,
          "an": 19.386574,
          "tp": 5.51794,
          "flow": 2773.7268,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10168322,
          "addtime": "2021-09-06 16:27:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 16:26:20",
          "cod": 257.8125,
          "ph": 7.004051,
          "an": 19.386574,
          "tp": 5.51794,
          "flow": 2772.5693,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10168374,
          "addtime": "2021-09-06 16:29:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 16:28:20",
          "cod": 257.8125,
          "ph": 6.9959493,
          "an": 19.386574,
          "tp": 5.51794,
          "flow": 2771.7014,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10168402,
          "addtime": "2021-09-06 16:31:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 16:30:20",
          "cod": 257.8125,
          "ph": 7.004051,
          "an": 19.097221,
          "tp": 9.435764,
          "flow": 2775.7524,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10168410,
          "addtime": "2021-09-06 16:33:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 16:32:20",
          "cod": 257.8125,
          "ph": 7.004051,
          "an": 19.386574,
          "tp": 9.435764,
          "flow": 2772.5693,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10168454,
          "addtime": "2021-09-06 16:35:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 16:34:20",
          "cod": 257.8125,
          "ph": 7.004051,
          "an": 19.097221,
          "tp": 9.435764,
          "flow": 2771.412,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10168476,
          "addtime": "2021-09-06 16:37:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 16:36:20",
          "cod": 257.8125,
          "ph": 7.004051,
          "an": 19.386574,
          "tp": 9.435764,
          "flow": 2609.375,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10168498,
          "addtime": "2021-09-06 16:39:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 16:38:20",
          "cod": 335.06943,
          "ph": 7.004051,
          "an": 19.386574,
          "tp": 9.435764,
          "flow": 2306.1343,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10168522,
          "addtime": "2021-09-06 16:41:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 16:40:20",
          "cod": 335.06943,
          "ph": 7.004051,
          "an": 19.386574,
          "tp": 9.435764,
          "flow": 2340.5671,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10168550,
          "addtime": "2021-09-06 16:43:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 16:42:20",
          "cod": 335.06943,
          "ph": 6.9959493,
          "an": 19.097221,
          "tp": 9.435764,
          "flow": 2346.354,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10168586,
          "addtime": "2021-09-06 16:45:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 16:44:20",
          "cod": 335.06943,
          "ph": 6.9959493,
          "an": 19.097221,
          "tp": 9.435764,
          "flow": 2328.9932,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10168618,
          "addtime": "2021-09-06 16:47:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 16:46:20",
          "cod": 335.06943,
          "ph": 6.9959493,
          "an": 19.386574,
          "tp": 9.435764,
          "flow": 2300.926,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10168630,
          "addtime": "2021-09-06 16:49:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 16:48:20",
          "cod": 335.06943,
          "ph": 6.9959493,
          "an": 19.386574,
          "tp": 9.435764,
          "flow": 2303.2407,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10168662,
          "addtime": "2021-09-06 16:51:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 16:50:20",
          "cod": 335.06943,
          "ph": 6.9959493,
          "an": 19.386574,
          "tp": 9.435764,
          "flow": 2352.7197,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10168686,
          "addtime": "2021-09-06 16:53:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 16:52:20",
          "cod": 335.06943,
          "ph": 6.9959493,
          "an": 19.097221,
          "tp": 9.435764,
          "flow": 2304.977,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10168714,
          "addtime": "2021-09-06 16:55:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 16:54:20",
          "cod": 335.06943,
          "ph": 6.9959493,
          "an": 19.097221,
          "tp": 9.435764,
          "flow": 2298.611,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10168746,
          "addtime": "2021-09-06 16:57:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 16:56:20",
          "cod": 335.06943,
          "ph": 6.9959493,
          "an": 19.386574,
          "tp": 9.435764,
          "flow": 2312.2107,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10168774,
          "addtime": "2021-09-06 16:59:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 16:58:20",
          "cod": 335.06943,
          "ph": 6.9959493,
          "an": 19.386574,
          "tp": 9.435764,
          "flow": 2323.7847,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10168806,
          "addtime": "2021-09-06 17:01:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 17:00:20",
          "cod": 335.06943,
          "ph": 7.004051,
          "an": 19.097221,
          "tp": 9.435764,
          "flow": 2355.0347,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10168834,
          "addtime": "2021-09-06 17:03:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 17:02:20",
          "cod": 335.06943,
          "ph": 7.004051,
          "an": 19.097221,
          "tp": 9.435764,
          "flow": 2329.5718,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10168870,
          "addtime": "2021-09-06 17:05:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 17:04:20",
          "cod": 335.06943,
          "ph": 6.9959493,
          "an": 19.386574,
          "tp": 9.435764,
          "flow": 2315.3936,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10168894,
          "addtime": "2021-09-06 17:07:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 17:06:20",
          "cod": 335.06943,
          "ph": 6.9959493,
          "an": 19.386574,
          "tp": 9.435764,
          "flow": 2324.9421,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10168926,
          "addtime": "2021-09-06 17:09:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 17:08:20",
          "cod": 335.06943,
          "ph": 6.9959493,
          "an": 19.386574,
          "tp": 9.435764,
          "flow": 2259.838,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10168938,
          "addtime": "2021-09-06 17:11:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 17:10:20",
          "cod": 335.06943,
          "ph": 6.9959493,
          "an": 19.386574,
          "tp": 9.435764,
          "flow": 2322.6274,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10168970,
          "addtime": "2021-09-06 17:13:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 17:12:20",
          "cod": 335.06943,
          "ph": 7.004051,
          "an": 19.386574,
          "tp": 9.435764,
          "flow": 2313.6572,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10169006,
          "addtime": "2021-09-06 17:15:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 17:14:20",
          "cod": 335.06943,
          "ph": 7.004051,
          "an": 19.386574,
          "tp": 9.435764,
          "flow": 2351.8518,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10169034,
          "addtime": "2021-09-06 17:17:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 17:16:20",
          "cod": 335.06943,
          "ph": 6.9959493,
          "an": 19.386574,
          "tp": 9.435764,
          "flow": 2319.4446,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10169062,
          "addtime": "2021-09-06 17:19:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 17:18:20",
          "cod": 335.06943,
          "ph": 7.004051,
          "an": 19.386574,
          "tp": 9.435764,
          "flow": 2312.2107,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10169098,
          "addtime": "2021-09-06 17:21:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 17:20:20",
          "cod": 335.06943,
          "ph": 7.004051,
          "an": 19.386574,
          "tp": 9.435764,
          "flow": 2363.426,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10169110,
          "addtime": "2021-09-06 17:23:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 17:22:20",
          "cod": 335.06943,
          "ph": 7.004051,
          "an": 25.89699,
          "tp": 9.435764,
          "flow": 2350.984,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10169146,
          "addtime": "2021-09-06 17:25:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 17:24:20",
          "cod": 335.06943,
          "ph": 7.004051,
          "an": 25.89699,
          "tp": 9.435764,
          "flow": 2370.081,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10169178,
          "addtime": "2021-09-06 17:27:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 17:26:20",
          "cod": 335.06943,
          "ph": 7.004051,
          "an": 25.89699,
          "tp": 9.435764,
          "flow": 2335.3586,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10169194,
          "addtime": "2021-09-06 17:29:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 17:28:20",
          "cod": 335.06943,
          "ph": 7.004051,
          "an": 25.89699,
          "tp": 9.435764,
          "flow": 2330.4397,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10169238,
          "addtime": "2021-09-06 17:31:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 17:30:20",
          "cod": 335.06943,
          "ph": 7.004051,
          "an": 25.89699,
          "tp": 9.435764,
          "flow": 2357.639,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10169258,
          "addtime": "2021-09-06 17:33:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 17:32:20",
          "cod": 335.06943,
          "ph": 7.004051,
          "an": 25.89699,
          "tp": 2.5318286,
          "flow": 2291.3772,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10169290,
          "addtime": "2021-09-06 17:35:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 17:34:20",
          "cod": 335.06943,
          "ph": 7.004051,
          "an": 25.89699,
          "tp": 2.5318286,
          "flow": 2326.9678,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10169322,
          "addtime": "2021-09-06 17:37:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 17:36:20",
          "cod": 335.06943,
          "ph": 7.004051,
          "an": 25.89699,
          "tp": 2.5318286,
          "flow": 2313.0789,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10169334,
          "addtime": "2021-09-06 17:39:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 17:38:20",
          "cod": 123.263885,
          "ph": 7.004051,
          "an": 25.89699,
          "tp": 2.5318286,
          "flow": 2320.891,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10169359,
          "addtime": "2021-09-06 17:41:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 17:40:20",
          "cod": 123.263885,
          "ph": 7.004051,
          "an": 25.89699,
          "tp": 2.5318286,
          "flow": 2316.551,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10169390,
          "addtime": "2021-09-06 17:43:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 17:42:20",
          "cod": 123.263885,
          "ph": 7.004051,
          "an": 25.89699,
          "tp": 2.5318286,
          "flow": 2303.53,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10169430,
          "addtime": "2021-09-06 17:45:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 17:44:20",
          "cod": 123.263885,
          "ph": 7.004051,
          "an": 25.89699,
          "tp": 2.5318286,
          "flow": 2349.8264,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10169442,
          "addtime": "2021-09-06 17:47:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 17:46:20",
          "cod": 123.263885,
          "ph": 7.004051,
          "an": 25.89699,
          "tp": 2.5318286,
          "flow": 2341.146,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10169470,
          "addtime": "2021-09-06 17:49:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 17:48:20",
          "cod": 123.263885,
          "ph": 7.004051,
          "an": 25.89699,
          "tp": 2.5318286,
          "flow": 2320.023,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10169506,
          "addtime": "2021-09-06 17:51:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 17:50:20",
          "cod": 123.263885,
          "ph": 7.004051,
          "an": 25.89699,
          "tp": 2.5318286,
          "flow": 2337.963,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10169530,
          "addtime": "2021-09-06 17:53:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 17:52:20",
          "cod": 123.263885,
          "ph": 7.004051,
          "an": 25.89699,
          "tp": 2.5318286,
          "flow": 2290.22,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10169554,
          "addtime": "2021-09-06 17:55:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 17:54:20",
          "cod": 123.263885,
          "ph": 7.004051,
          "an": 25.89699,
          "tp": 2.5318286,
          "flow": 2339.9885,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10169582,
          "addtime": "2021-09-06 17:57:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 17:56:20",
          "cod": 123.263885,
          "ph": 7.004051,
          "an": 25.89699,
          "tp": 2.5318286,
          "flow": 2345.4858,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10169614,
          "addtime": "2021-09-06 17:59:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 17:58:20",
          "cod": 123.263885,
          "ph": 7.004051,
          "an": 25.89699,
          "tp": 2.5318286,
          "flow": 2320.0232,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10169638,
          "addtime": "2021-09-06 18:01:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 18:00:20",
          "cod": 123.263885,
          "ph": 7.004051,
          "an": 25.89699,
          "tp": 2.5318286,
          "flow": 2311.9214,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10169690,
          "addtime": "2021-09-06 18:03:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 18:02:20",
          "cod": 123.263885,
          "ph": 7.004051,
          "an": 25.89699,
          "tp": 2.5318286,
          "flow": 2348.9583,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10169698,
          "addtime": "2021-09-06 18:05:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 18:04:20",
          "cod": 123.263885,
          "ph": 7.004051,
          "an": 25.89699,
          "tp": 2.5318286,
          "flow": 2307.2915,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10169738,
          "addtime": "2021-09-06 18:07:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 18:06:20",
          "cod": 123.263885,
          "ph": 7.004051,
          "an": 25.89699,
          "tp": 2.5318286,
          "flow": 2306.1343,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10169754,
          "addtime": "2021-09-06 18:09:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 18:08:20",
          "cod": 123.263885,
          "ph": 7.004051,
          "an": 25.89699,
          "tp": 2.5318286,
          "flow": 2329.5718,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10169778,
          "addtime": "2021-09-06 18:11:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 18:10:20",
          "cod": 123.263885,
          "ph": 7.004051,
          "an": 25.89699,
          "tp": 2.5318286,
          "flow": 2336.5164,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10169816,
          "addtime": "2021-09-06 18:13:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 18:12:20",
          "cod": 123.263885,
          "ph": 7.004051,
          "an": 25.89699,
          "tp": 2.5318286,
          "flow": 2335.648,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10169850,
          "addtime": "2021-09-06 18:15:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 18:14:20",
          "cod": 123.263885,
          "ph": 7.004051,
          "an": 25.89699,
          "tp": 2.5318286,
          "flow": 2334.2014,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10169886,
          "addtime": "2021-09-06 18:17:23",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 18:16:20",
          "cod": 123.263885,
          "ph": 7.004051,
          "an": 25.89699,
          "tp": 2.5318286,
          "flow": 2331.0186,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10169906,
          "addtime": "2021-09-06 18:19:23",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 18:18:20",
          "cod": 123.263885,
          "ph": 7.004051,
          "an": 25.89699,
          "tp": 2.5318286,
          "flow": 2294.56,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10169926,
          "addtime": "2021-09-06 18:21:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 18:20:20",
          "cod": 123.263885,
          "ph": 7.004051,
          "an": 25.89699,
          "tp": 2.5318286,
          "flow": 2294.8496,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10169966,
          "addtime": "2021-09-06 18:23:23",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 18:22:20",
          "cod": 123.263885,
          "ph": 7.004051,
          "an": 26.331018,
          "tp": 2.5318286,
          "flow": 2311.6318,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10169974,
          "addtime": "2021-09-06 18:25:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 18:24:20",
          "cod": 123.263885,
          "ph": 7.004051,
          "an": 26.331018,
          "tp": 2.5318286,
          "flow": 2325.5208,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10170018,
          "addtime": "2021-09-06 18:27:23",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 18:26:20",
          "cod": 123.263885,
          "ph": 7.004051,
          "an": 26.331018,
          "tp": 2.5318286,
          "flow": 2302.0833,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10170038,
          "addtime": "2021-09-06 18:29:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 18:28:20",
          "cod": 123.263885,
          "ph": 7.004051,
          "an": 26.331018,
          "tp": 2.5318286,
          "flow": 2333.912,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10170070,
          "addtime": "2021-09-06 18:31:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 18:30:20",
          "cod": 123.263885,
          "ph": 7.004051,
          "an": 26.331018,
          "tp": 1.8663194,
          "flow": 2322.0483,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10170094,
          "addtime": "2021-09-06 18:33:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 18:32:20",
          "cod": 123.263885,
          "ph": 7.004051,
          "an": 26.331018,
          "tp": 1.8663194,
          "flow": 2305.266,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10170118,
          "addtime": "2021-09-06 18:35:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 18:34:20",
          "cod": 123.263885,
          "ph": 7.004051,
          "an": 26.331018,
          "tp": 1.8663194,
          "flow": 2368.6343,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10170142,
          "addtime": "2021-09-06 18:37:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 18:36:20",
          "cod": 123.263885,
          "ph": 7.004051,
          "an": 26.331018,
          "tp": 1.8663194,
          "flow": 2345.1968,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10170178,
          "addtime": "2021-09-06 18:39:23",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 18:38:20",
          "cod": 95.486115,
          "ph": 7.004051,
          "an": 26.331018,
          "tp": 1.8663194,
          "flow": 2291.3774,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10170202,
          "addtime": "2021-09-06 18:41:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 18:40:20",
          "cod": 95.486115,
          "ph": 7.004051,
          "an": 26.331018,
          "tp": 1.8663194,
          "flow": 2363.426,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10170230,
          "addtime": "2021-09-06 18:43:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 18:42:20",
          "cod": 95.486115,
          "ph": 7.004051,
          "an": 26.331018,
          "tp": 1.8663194,
          "flow": 2328.125,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10170262,
          "addtime": "2021-09-06 18:45:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 18:44:20",
          "cod": 95.486115,
          "ph": 7.004051,
          "an": 26.331018,
          "tp": 1.8663194,
          "flow": 2345.7754,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10170306,
          "addtime": "2021-09-06 18:47:23",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 18:46:20",
          "cod": 95.486115,
          "ph": 7.004051,
          "an": 26.331018,
          "tp": 1.8663194,
          "flow": 2361.9792,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10170322,
          "addtime": "2021-09-06 18:49:23",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 18:48:20",
          "cod": 95.486115,
          "ph": 7.004051,
          "an": 26.331018,
          "tp": 1.8663194,
          "flow": 2310.185,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10170354,
          "addtime": "2021-09-06 18:51:23",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 18:50:20",
          "cod": 95.486115,
          "ph": 7.004051,
          "an": 26.331018,
          "tp": 1.8663194,
          "flow": 2343.4607,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10170382,
          "addtime": "2021-09-06 18:53:23",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 18:52:20",
          "cod": 95.486115,
          "ph": 7.004051,
          "an": 26.331018,
          "tp": 1.8663194,
          "flow": 2347.801,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10170402,
          "addtime": "2021-09-06 18:55:23",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 18:54:20",
          "cod": 95.486115,
          "ph": 7.004051,
          "an": 26.331018,
          "tp": 1.8663194,
          "flow": 2360.2432,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10170422,
          "addtime": "2021-09-06 18:57:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 18:56:20",
          "cod": 95.486115,
          "ph": 7.004051,
          "an": 26.331018,
          "tp": 1.8663194,
          "flow": 2329.5718,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10170454,
          "addtime": "2021-09-06 18:59:23",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 18:58:20",
          "cod": 95.486115,
          "ph": 7.004051,
          "an": 26.331018,
          "tp": 1.8663194,
          "flow": 2283.2754,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10170490,
          "addtime": "2021-09-06 19:01:23",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 19:00:20",
          "cod": 95.486115,
          "ph": 7.004051,
          "an": 26.331018,
          "tp": 1.8663194,
          "flow": 2353.588,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10170526,
          "addtime": "2021-09-06 19:03:23",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 19:02:20",
          "cod": 95.486115,
          "ph": 7.008102,
          "an": 26.331018,
          "tp": 1.8663194,
          "flow": 2358.5068,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10170538,
          "addtime": "2021-09-06 19:05:23",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 19:04:20",
          "cod": 95.486115,
          "ph": 7.008102,
          "an": 26.331018,
          "tp": 1.8663194,
          "flow": 2357.3496,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10170570,
          "addtime": "2021-09-06 19:07:23",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 19:06:20",
          "cod": 95.486115,
          "ph": 7.004051,
          "an": 26.331018,
          "tp": 1.8663194,
          "flow": 2325.8103,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10170594,
          "addtime": "2021-09-06 19:09:23",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 19:08:21",
          "cod": 95.486115,
          "ph": 7.004051,
          "an": 26.331018,
          "tp": 1.8663194,
          "flow": 2305.2664,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10170618,
          "addtime": "2021-09-06 19:11:23",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 19:10:21",
          "cod": 95.486115,
          "ph": 7.004051,
          "an": 26.331018,
          "tp": 1.8663194,
          "flow": 2316.551,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10170646,
          "addtime": "2021-09-06 19:13:23",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 19:12:21",
          "cod": 95.486115,
          "ph": 7.004051,
          "an": 26.331018,
          "tp": 1.8663194,
          "flow": 2333.3333,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10170678,
          "addtime": "2021-09-06 19:15:23",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 19:14:21",
          "cod": 95.486115,
          "ph": 7.004051,
          "an": 26.331018,
          "tp": 1.8663194,
          "flow": 2346.9329,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10170710,
          "addtime": "2021-09-06 19:17:23",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 19:16:21",
          "cod": 95.486115,
          "ph": 7.008102,
          "an": 26.331018,
          "tp": 1.8663194,
          "flow": 2352.141,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10170730,
          "addtime": "2021-09-06 19:19:23",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 19:18:21",
          "cod": 95.486115,
          "ph": 7.004051,
          "an": 26.331018,
          "tp": 1.8663194,
          "flow": 2300.0579,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10170762,
          "addtime": "2021-09-06 19:21:23",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 19:20:21",
          "cod": 95.486115,
          "ph": 7.008102,
          "an": 26.331018,
          "tp": 1.8663194,
          "flow": 2337.3843,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10170790,
          "addtime": "2021-09-06 19:23:23",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 19:22:21",
          "cod": 95.486115,
          "ph": 7.008102,
          "an": 26.331018,
          "tp": 1.8663194,
          "flow": 2330.1504,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10170814,
          "addtime": "2021-09-06 19:25:22",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 19:24:21",
          "cod": 95.486115,
          "ph": 7.004051,
          "an": 26.331018,
          "tp": 1.8663194,
          "flow": 2338.5417,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10170850,
          "addtime": "2021-09-06 19:27:23",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 19:26:21",
          "cod": 95.486115,
          "ph": 7.004051,
          "an": 26.331018,
          "tp": 1.8663194,
          "flow": 2328.9932,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10170870,
          "addtime": "2021-09-06 19:29:23",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 19:28:21",
          "cod": 95.486115,
          "ph": 7.004051,
          "an": 26.331018,
          "tp": 1.8663194,
          "flow": 2329.5718,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10170910,
          "addtime": "2021-09-06 19:31:23",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 19:30:21",
          "cod": 95.486115,
          "ph": 7.008102,
          "an": 26.331018,
          "tp": 1.8663194,
          "flow": 2354.1665,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10170930,
          "addtime": "2021-09-06 19:33:23",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 19:32:21",
          "cod": 95.486115,
          "ph": 7.004051,
          "an": 26.331018,
          "tp": 1.8663194,
          "flow": 2307.2917,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10170958,
          "addtime": "2021-09-06 19:35:23",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 19:34:21",
          "cod": 95.486115,
          "ph": 7.004051,
          "an": 26.331018,
          "tp": 1.8663194,
          "flow": 2334.4907,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10171006,
          "addtime": "2021-09-06 19:37:23",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 19:36:21",
          "cod": 95.486115,
          "ph": 7.008102,
          "an": 26.331018,
          "tp": 1.8663194,
          "flow": 2319.734,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10171022,
          "addtime": "2021-09-06 19:39:23",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 19:38:21",
          "cod": 95.486115,
          "ph": 7.008102,
          "an": 26.331018,
          "tp": 1.8663194,
          "flow": 2328.993,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10171038,
          "addtime": "2021-09-06 19:41:23",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 19:40:21",
          "cod": 95.486115,
          "ph": 7.004051,
          "an": 26.331018,
          "tp": 1.8663194,
          "flow": 2356.771,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10171070,
          "addtime": "2021-09-06 19:43:23",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 19:42:21",
          "cod": 95.486115,
          "ph": 7.004051,
          "an": 26.331018,
          "tp": 1.8663194,
          "flow": 2356.7708,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10171106,
          "addtime": "2021-09-06 19:45:23",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 19:44:21",
          "cod": 95.486115,
          "ph": 7.008102,
          "an": 26.62037,
          "tp": 1.8663194,
          "flow": 2336.5164,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10171126,
          "addtime": "2021-09-06 19:47:23",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 19:46:21",
          "cod": 95.486115,
          "ph": 7.004051,
          "an": 26.331018,
          "tp": 1.8663194,
          "flow": 2342.3032,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10171158,
          "addtime": "2021-09-06 19:49:23",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 19:48:21",
          "cod": 95.486115,
          "ph": 7.008102,
          "an": 26.331018,
          "tp": 1.8663194,
          "flow": 2347.2222,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10171182,
          "addtime": "2021-09-06 19:51:23",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 19:50:21",
          "cod": 95.486115,
          "ph": 7.008102,
          "an": 26.331018,
          "tp": 1.8663194,
          "flow": 2354.1665,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10171226,
          "addtime": "2021-09-06 19:53:23",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 19:52:21",
          "cod": 95.486115,
          "ph": 7.008102,
          "an": 26.331018,
          "tp": 1.8663194,
          "flow": 2326.0996,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10171250,
          "addtime": "2021-09-06 19:55:23",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 19:54:21",
          "cod": 95.486115,
          "ph": 7.008102,
          "an": 26.331018,
          "tp": 1.8663194,
          "flow": 2304.9768,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10171282,
          "addtime": "2021-09-06 19:57:23",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 19:56:21",
          "cod": 95.486115,
          "ph": 7.004051,
          "an": 26.331018,
          "tp": 1.8663194,
          "flow": 2326.389,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10171298,
          "addtime": "2021-09-06 19:59:23",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 19:58:21",
          "cod": 95.486115,
          "ph": 7.004051,
          "an": 26.331018,
          "tp": 1.8663194,
          "flow": 2343.4607,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10171342,
          "addtime": "2021-09-06 20:01:23",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 20:00:21",
          "cod": 95.486115,
          "ph": 7.008102,
          "an": 26.331018,
          "tp": 1.8663194,
          "flow": 2330.1504,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10171346,
          "addtime": "2021-09-06 20:03:23",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 20:02:21",
          "cod": 95.486115,
          "ph": 7.008102,
          "an": 26.331018,
          "tp": 1.8663194,
          "flow": 2314.2358,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10171378,
          "addtime": "2021-09-06 20:05:23",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 20:04:21",
          "cod": 95.486115,
          "ph": 7.004051,
          "an": 26.331018,
          "tp": 1.8663194,
          "flow": 2313.6572,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10171410,
          "addtime": "2021-09-06 20:07:23",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 20:06:21",
          "cod": 95.486115,
          "ph": 7.004051,
          "an": 26.331018,
          "tp": 1.8663194,
          "flow": 2329.5718,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10171434,
          "addtime": "2021-09-06 20:09:23",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 20:08:21",
          "cod": 95.486115,
          "ph": 7.004051,
          "an": 26.331018,
          "tp": 1.8663194,
          "flow": 2348.0903,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10171462,
          "addtime": "2021-09-06 20:11:23",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 20:10:21",
          "cod": 95.486115,
          "ph": 7.004051,
          "an": 26.331018,
          "tp": 1.8663194,
          "flow": 2353.0093,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10171498,
          "addtime": "2021-09-06 20:13:23",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 20:12:21",
          "cod": 95.486115,
          "ph": 7.004051,
          "an": 26.331018,
          "tp": 1.8663194,
          "flow": 2282.4075,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10171518,
          "addtime": "2021-09-06 20:15:23",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 20:14:21",
          "cod": 95.486115,
          "ph": 7.004051,
          "an": 26.331018,
          "tp": 1.8663194,
          "flow": 2359.0857,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10171542,
          "addtime": "2021-09-06 20:17:23",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 20:16:21",
          "cod": 95.486115,
          "ph": 7.004051,
          "an": 26.331018,
          "tp": 1.8663194,
          "flow": 2288.7732,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10171586,
          "addtime": "2021-09-06 20:19:23",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 20:18:21",
          "cod": 95.486115,
          "ph": 7.004051,
          "an": 26.331018,
          "tp": 1.8663194,
          "flow": 2334.2014,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10171598,
          "addtime": "2021-09-06 20:21:23",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 20:20:21",
          "cod": 95.486115,
          "ph": 7.004051,
          "an": 26.331018,
          "tp": 1.8663194,
          "flow": 2314.2363,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10171638,
          "addtime": "2021-09-06 20:23:23",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 20:22:21",
          "cod": 95.486115,
          "ph": 7.008102,
          "an": 25.607637,
          "tp": 1.8663194,
          "flow": 2329.8613,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10171662,
          "addtime": "2021-09-06 20:25:23",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 20:24:21",
          "cod": 95.486115,
          "ph": 7.008102,
          "an": 25.607637,
          "tp": 1.8663194,
          "flow": 2364.0046,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10171690,
          "addtime": "2021-09-06 20:27:23",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 20:26:21",
          "cod": 95.486115,
          "ph": 7.004051,
          "an": 25.607637,
          "tp": 1.8663194,
          "flow": 2307.0024,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10171718,
          "addtime": "2021-09-06 20:29:23",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 20:28:21",
          "cod": 95.486115,
          "ph": 7.008102,
          "an": 25.607637,
          "tp": 1.8663194,
          "flow": 2364.0046,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10171754,
          "addtime": "2021-09-06 20:31:23",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 20:30:21",
          "cod": 95.486115,
          "ph": 7.004051,
          "an": 25.607637,
          "tp": 1.8952547,
          "flow": 2360.5325,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10171778,
          "addtime": "2021-09-06 20:33:23",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 20:32:21",
          "cod": 95.486115,
          "ph": 7.004051,
          "an": 25.607637,
          "tp": 1.8952547,
          "flow": 2347.2224,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10171798,
          "addtime": "2021-09-06 20:35:23",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 20:34:21",
          "cod": 95.486115,
          "ph": 7.004051,
          "an": 25.607637,
          "tp": 1.8952547,
          "flow": 2324.3635,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10171822,
          "addtime": "2021-09-06 20:37:23",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 20:36:21",
          "cod": 95.486115,
          "ph": 7.004051,
          "an": 25.607637,
          "tp": 1.8952547,
          "flow": 2335.0693,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10171854,
          "addtime": "2021-09-06 20:39:23",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 20:38:21",
          "cod": 78.99306,
          "ph": 7.004051,
          "an": 25.607637,
          "tp": 1.8952547,
          "flow": 2338.831,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10171894,
          "addtime": "2021-09-06 20:41:23",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 20:40:21",
          "cod": 79.861115,
          "ph": 7.004051,
          "an": 25.607637,
          "tp": 1.8981482,
          "flow": 2362.8472,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10171914,
          "addtime": "2021-09-06 20:43:23",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 20:42:21",
          "cod": 79.861115,
          "ph": 7.008102,
          "an": 25.607637,
          "tp": 1.8952547,
          "flow": 2357.9282,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10171954,
          "addtime": "2021-09-06 20:45:23",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 20:44:21",
          "cod": 79.861115,
          "ph": 7.008102,
          "an": 25.607637,
          "tp": 1.8952547,
          "flow": 2339.9885,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10171970,
          "addtime": "2021-09-06 20:47:23",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 20:46:21",
          "cod": 79.861115,
          "ph": 7.008102,
          "an": 25.607637,
          "tp": 1.8952547,
          "flow": 2317.419,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10172002,
          "addtime": "2021-09-06 20:49:23",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 20:48:21",
          "cod": 79.861115,
          "ph": 7.004051,
          "an": 25.607637,
          "tp": 1.8952547,
          "flow": 2327.8357,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10172034,
          "addtime": "2021-09-06 20:51:23",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 20:50:21",
          "cod": 78.99306,
          "ph": 7.004051,
          "an": 25.607637,
          "tp": 1.8952547,
          "flow": 2364.5833,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10172046,
          "addtime": "2021-09-06 20:53:23",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 20:52:21",
          "cod": 79.861115,
          "ph": 7.004051,
          "an": 25.607637,
          "tp": 1.8952547,
          "flow": 2335.359,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10172094,
          "addtime": "2021-09-06 20:55:23",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 20:54:21",
          "cod": 79.861115,
          "ph": 7.004051,
          "an": 25.607637,
          "tp": 1.8952547,
          "flow": 2307.0024,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10172110,
          "addtime": "2021-09-06 20:57:23",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 20:56:21",
          "cod": 78.99306,
          "ph": 7.008102,
          "an": 25.607637,
          "tp": 1.8952547,
          "flow": 2299.19,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10172138,
          "addtime": "2021-09-06 20:59:23",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 20:58:21",
          "cod": 78.99306,
          "ph": 7.008102,
          "an": 25.607637,
          "tp": 1.8952547,
          "flow": 2337.6736,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10172178,
          "addtime": "2021-09-06 21:01:23",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 21:00:21",
          "cod": 79.861115,
          "ph": 7.008102,
          "an": 25.607637,
          "tp": 1.8952547,
          "flow": 2308.1597,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10172190,
          "addtime": "2021-09-06 21:03:23",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 21:02:21",
          "cod": 79.861115,
          "ph": 7.008102,
          "an": 25.607637,
          "tp": 1.8952547,
          "flow": 2321.1807,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10172222,
          "addtime": "2021-09-06 21:05:23",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 21:04:21",
          "cod": 79.861115,
          "ph": 7.004051,
          "an": 25.607637,
          "tp": 1.8952547,
          "flow": 2349.2478,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10172242,
          "addtime": "2021-09-06 21:07:23",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 21:06:21",
          "cod": 78.99306,
          "ph": 7.004051,
          "an": 25.607637,
          "tp": 1.8952547,
          "flow": 2365.7407,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10172274,
          "addtime": "2021-09-06 21:09:23",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 21:08:21",
          "cod": 79.861115,
          "ph": 7.004051,
          "an": 25.607637,
          "tp": 1.8952547,
          "flow": 2317.1296,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10172322,
          "addtime": "2021-09-06 21:11:23",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 21:10:21",
          "cod": 79.861115,
          "ph": 7.004051,
          "an": 25.607637,
          "tp": 1.8952547,
          "flow": 2345.486,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10172350,
          "addtime": "2021-09-06 21:13:23",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 21:12:21",
          "cod": 79.861115,
          "ph": 7.008102,
          "an": 25.607637,
          "tp": 1.8981482,
          "flow": 2360.5325,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10172374,
          "addtime": "2021-09-06 21:15:23",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 21:14:21",
          "cod": 78.99306,
          "ph": 7.008102,
          "an": 25.607637,
          "tp": 1.8952547,
          "flow": 2305.845,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10172386,
          "addtime": "2021-09-06 21:17:23",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 21:16:21",
          "cod": 79.861115,
          "ph": 7.008102,
          "an": 25.607637,
          "tp": 1.8952547,
          "flow": 2332.176,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10172418,
          "addtime": "2021-09-06 21:19:23",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 21:18:21",
          "cod": 78.99306,
          "ph": 7.004051,
          "an": 25.607637,
          "tp": 1.8952547,
          "flow": 2294.8496,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10172458,
          "addtime": "2021-09-06 21:21:23",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 21:20:21",
          "cod": 79.861115,
          "ph": 7.004051,
          "an": 25.607637,
          "tp": 1.8952547,
          "flow": 2353.8774,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10172470,
          "addtime": "2021-09-06 21:23:23",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 21:22:21",
          "cod": 79.861115,
          "ph": 7.004051,
          "an": 25.607637,
          "tp": 1.8981482,
          "flow": 2351.8518,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10172494,
          "addtime": "2021-09-06 21:25:23",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 21:24:21",
          "cod": 79.861115,
          "ph": 7.004051,
          "an": 25.607637,
          "tp": 1.8952547,
          "flow": 2330.4397,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10172546,
          "addtime": "2021-09-06 21:27:23",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 21:26:21",
          "cod": 78.99306,
          "ph": 7.008102,
          "an": 25.607637,
          "tp": 1.8952547,
          "flow": 2311.3428,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10172550,
          "addtime": "2021-09-06 21:29:23",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 21:28:21",
          "cod": 79.861115,
          "ph": 7.008102,
          "an": 25.607637,
          "tp": 1.8952547,
          "flow": 2300.3472,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10172594,
          "addtime": "2021-09-06 21:31:23",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 21:30:21",
          "cod": 78.99306,
          "ph": 7.008102,
          "an": 25.607637,
          "tp": 1.8952547,
          "flow": 2318.287,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10172610,
          "addtime": "2021-09-06 21:33:23",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 21:32:21",
          "cod": 79.861115,
          "ph": 7.008102,
          "an": 25.607637,
          "tp": 1.8952547,
          "flow": 2328.125,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10172650,
          "addtime": "2021-09-06 21:35:23",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 21:34:21",
          "cod": 79.861115,
          "ph": 7.004051,
          "an": 25.607637,
          "tp": 1.8952547,
          "flow": 2338.831,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10172686,
          "addtime": "2021-09-06 21:37:23",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 21:36:21",
          "cod": 79.861115,
          "ph": 7.004051,
          "an": 25.607637,
          "tp": 1.8952547,
          "flow": 2305.5557,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10172702,
          "addtime": "2021-09-06 21:39:23",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 21:38:21",
          "cod": 78.99306,
          "ph": 7.004051,
          "an": 25.607637,
          "tp": 1.8952547,
          "flow": 2316.8403,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10172738,
          "addtime": "2021-09-06 21:41:23",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 21:40:21",
          "cod": 79.861115,
          "ph": 7.004051,
          "an": 25.607637,
          "tp": 1.8952547,
          "flow": 2356.4814,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10172762,
          "addtime": "2021-09-06 21:43:23",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 21:42:21",
          "cod": 79.861115,
          "ph": 7.008102,
          "an": 25.607637,
          "tp": 1.8952547,
          "flow": 2324.0742,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10172778,
          "addtime": "2021-09-06 21:45:23",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 21:44:21",
          "cod": 79.861115,
          "ph": 7.008102,
          "an": 25.607637,
          "tp": 1.8952547,
          "flow": 2339.699,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10172802,
          "addtime": "2021-09-06 21:47:23",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 21:46:21",
          "cod": 79.861115,
          "ph": 7.008102,
          "an": 25.607637,
          "tp": 1.8952547,
          "flow": 2339.699,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10172838,
          "addtime": "2021-09-06 21:49:23",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 21:48:21",
          "cod": 79.861115,
          "ph": 7.008102,
          "an": 25.607637,
          "tp": 1.8952547,
          "flow": 2346.065,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10172858,
          "addtime": "2021-09-06 21:51:23",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 21:50:21",
          "cod": 79.861115,
          "ph": 7.004051,
          "an": 25.607637,
          "tp": 1.8952547,
          "flow": 2308.7385,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10172894,
          "addtime": "2021-09-06 21:53:23",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 21:52:21",
          "cod": 79.861115,
          "ph": 7.004051,
          "an": 25.607637,
          "tp": 1.8952547,
          "flow": 2370.081,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10172922,
          "addtime": "2021-09-06 21:55:23",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 21:54:21",
          "cod": 78.99306,
          "ph": 7.004051,
          "an": 25.607637,
          "tp": 1.8981482,
          "flow": 2332.4653,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10172946,
          "addtime": "2021-09-06 21:57:23",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 21:56:21",
          "cod": 79.861115,
          "ph": 7.004051,
          "an": 25.607637,
          "tp": 1.8952547,
          "flow": 2329.861,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10172978,
          "addtime": "2021-09-06 21:59:23",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 21:58:21",
          "cod": 79.861115,
          "ph": 7.008102,
          "an": 25.607637,
          "tp": 1.8952547,
          "flow": 2339.6992,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10172998,
          "addtime": "2021-09-06 22:01:23",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 21:59:21",
          "cod": 79.861115,
          "ph": 7.008102,
          "an": 25.607637,
          "tp": 1.8952547,
          "flow": 2361.111,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10173030,
          "addtime": "2021-09-06 22:03:23",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 22:01:21",
          "cod": 79.861115,
          "ph": 7.008102,
          "an": 25.607637,
          "tp": 1.8952547,
          "flow": 2287.6157,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10173070,
          "addtime": "2021-09-06 22:05:23",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 22:03:21",
          "cod": 79.861115,
          "ph": 7.008102,
          "an": 25.607637,
          "tp": 1.8952547,
          "flow": 2351.8518,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10173102,
          "addtime": "2021-09-06 22:07:23",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 22:05:21",
          "cod": 79.861115,
          "ph": 7.004051,
          "an": 25.607637,
          "tp": 1.8952547,
          "flow": 2353.0093,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10173126,
          "addtime": "2021-09-06 22:09:23",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 22:07:21",
          "cod": 79.861115,
          "ph": 7.004051,
          "an": 25.607637,
          "tp": 1.8952547,
          "flow": 2345.486,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10173156,
          "addtime": "2021-09-06 22:11:23",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 22:09:21",
          "cod": 79.861115,
          "ph": 7.004051,
          "an": 25.607637,
          "tp": 1.8952547,
          "flow": 2342.014,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10173190,
          "addtime": "2021-09-06 22:13:23",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 22:11:21",
          "cod": 78.99306,
          "ph": 7.004051,
          "an": 25.607637,
          "tp": 1.8952547,
          "flow": 2370.3704,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10173206,
          "addtime": "2021-09-06 22:15:23",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 22:13:21",
          "cod": 79.861115,
          "ph": 7.008102,
          "an": 25.607637,
          "tp": 1.8952547,
          "flow": 2329.2822,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10173226,
          "addtime": "2021-09-06 22:17:23",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 22:15:21",
          "cod": 79.861115,
          "ph": 7.004051,
          "an": 25.607637,
          "tp": 1.8952547,
          "flow": 2345.1968,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10173258,
          "addtime": "2021-09-06 22:19:23",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 22:17:21",
          "cod": 79.861115,
          "ph": 7.008102,
          "an": 25.607637,
          "tp": 1.8981482,
          "flow": 2349.8262,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10173278,
          "addtime": "2021-09-06 22:21:23",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 22:19:21",
          "cod": 79.861115,
          "ph": 7.008102,
          "an": 25.607637,
          "tp": 1.8952547,
          "flow": 2339.699,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10173314,
          "addtime": "2021-09-06 22:23:23",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 22:21:21",
          "cod": 79.861115,
          "ph": 7.008102,
          "an": 26.041666,
          "tp": 1.8952547,
          "flow": 2274.016,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10173346,
          "addtime": "2021-09-06 22:25:23",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 22:23:21",
          "cod": 79.861115,
          "ph": 7.004051,
          "an": 26.041666,
          "tp": 1.8952547,
          "flow": 2317.1296,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10173382,
          "addtime": "2021-09-06 22:27:23",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 22:25:21",
          "cod": 79.861115,
          "ph": 7.004051,
          "an": 26.041666,
          "tp": 1.8952547,
          "flow": 2334.2014,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10173390,
          "addtime": "2021-09-06 22:29:23",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 22:27:21",
          "cod": 78.99306,
          "ph": 7.004051,
          "an": 26.041666,
          "tp": 1.8952547,
          "flow": 2380.4976,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10173426,
          "addtime": "2021-09-06 22:31:23",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 22:29:21",
          "cod": 79.861115,
          "ph": 7.004051,
          "an": 26.041666,
          "tp": 1.8952547,
          "flow": 2340.2778,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10173454,
          "addtime": "2021-09-06 22:33:23",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 22:31:21",
          "cod": 79.861115,
          "ph": 7.008102,
          "an": 26.041666,
          "tp": 3.7760415,
          "flow": 2376.736,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10173482,
          "addtime": "2021-09-06 22:35:23",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 22:33:21",
          "cod": 79.861115,
          "ph": 7.008102,
          "an": 26.041666,
          "tp": 3.7760415,
          "flow": 2341.435,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10173522,
          "addtime": "2021-09-06 22:37:23",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 22:35:21",
          "cod": 78.99306,
          "ph": 7.008102,
          "an": 26.041666,
          "tp": 3.7760415,
          "flow": 2336.8057,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10173534,
          "addtime": "2021-09-06 22:39:23",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 22:37:21",
          "cod": 233.50694,
          "ph": 7.004051,
          "an": 26.041666,
          "tp": 3.7760415,
          "flow": 2331.3079,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10173558,
          "addtime": "2021-09-06 22:41:23",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 22:39:21",
          "cod": 233.50694,
          "ph": 7.004051,
          "an": 26.041666,
          "tp": 3.7760415,
          "flow": 2317.419,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10173598,
          "addtime": "2021-09-06 22:43:23",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 22:41:21",
          "cod": 233.50694,
          "ph": 7.004051,
          "an": 26.041666,
          "tp": 3.7760415,
          "flow": 2343.1711,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10173634,
          "addtime": "2021-09-06 22:45:23",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 22:43:21",
          "cod": 233.50694,
          "ph": 7.004051,
          "an": 26.041666,
          "tp": 3.7760415,
          "flow": 2368.0557,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10173646,
          "addtime": "2021-09-06 22:47:23",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 22:45:21",
          "cod": 233.50694,
          "ph": 7.004051,
          "an": 26.041666,
          "tp": 3.7760415,
          "flow": 2312.5,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10173694,
          "addtime": "2021-09-06 22:49:23",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 22:47:21",
          "cod": 233.50694,
          "ph": 7.008102,
          "an": 26.041666,
          "tp": 3.7760415,
          "flow": 2355.6133,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10173698,
          "addtime": "2021-09-06 22:51:23",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 22:49:21",
          "cod": 233.50694,
          "ph": 7.008102,
          "an": 26.041666,
          "tp": 3.7760415,
          "flow": 2365.7407,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10173730,
          "addtime": "2021-09-06 22:53:23",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 22:51:21",
          "cod": 233.50694,
          "ph": 7.008102,
          "an": 26.041666,
          "tp": 3.7760415,
          "flow": 2365.162,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10173762,
          "addtime": "2021-09-06 22:55:23",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 22:53:21",
          "cod": 233.50694,
          "ph": 7.004051,
          "an": 26.041666,
          "tp": 3.7760415,
          "flow": 2357.3496,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10173802,
          "addtime": "2021-09-06 22:57:23",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 22:55:21",
          "cod": 233.50694,
          "ph": 7.004051,
          "an": 26.041666,
          "tp": 3.7760415,
          "flow": 2360.8218,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10173818,
          "addtime": "2021-09-06 22:59:23",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 22:57:21",
          "cod": 233.50694,
          "ph": 7.004051,
          "an": 26.041666,
          "tp": 3.7760415,
          "flow": 2357.9282,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10173842,
          "addtime": "2021-09-06 23:01:23",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 22:59:21",
          "cod": 233.50694,
          "ph": 7.004051,
          "an": 26.041666,
          "tp": 3.7760415,
          "flow": 2360.2432,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10173875,
          "addtime": "2021-09-06 23:03:23",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 23:01:21",
          "cod": 233.50694,
          "ph": 7.004051,
          "an": 26.041666,
          "tp": 3.7760415,
          "flow": 2330.729,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10173910,
          "addtime": "2021-09-06 23:05:23",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 23:03:21",
          "cod": 233.50694,
          "ph": 7.008102,
          "an": 26.041666,
          "tp": 3.7760415,
          "flow": 2368.0557,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10173938,
          "addtime": "2021-09-06 23:07:23",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 23:05:21",
          "cod": 233.50694,
          "ph": 7.008102,
          "an": 26.041666,
          "tp": 3.7760415,
          "flow": 2344.9072,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10173966,
          "addtime": "2021-09-06 23:09:23",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 23:07:21",
          "cod": 233.50694,
          "ph": 7.008102,
          "an": 26.041666,
          "tp": 3.7760415,
          "flow": 2342.3032,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10173982,
          "addtime": "2021-09-06 23:11:23",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 23:09:21",
          "cod": 233.50694,
          "ph": 7.004051,
          "an": 26.041666,
          "tp": 3.7760415,
          "flow": 2358.2175,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10174014,
          "addtime": "2021-09-06 23:13:23",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 23:11:21",
          "cod": 233.50694,
          "ph": 7.004051,
          "an": 26.041666,
          "tp": 3.7760415,
          "flow": 2348.3796,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10174046,
          "addtime": "2021-09-06 23:15:23",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 23:13:21",
          "cod": 233.50694,
          "ph": 7.004051,
          "an": 26.041666,
          "tp": 3.7760415,
          "flow": 2335.0693,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10174078,
          "addtime": "2021-09-06 23:17:23",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 23:15:21",
          "cod": 233.50694,
          "ph": 7.004051,
          "an": 26.041666,
          "tp": 3.7760415,
          "flow": 2346.6436,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10174094,
          "addtime": "2021-09-06 23:19:23",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 23:17:21",
          "cod": 233.50694,
          "ph": 7.008102,
          "an": 26.041666,
          "tp": 3.7760415,
          "flow": 2355.324,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10174126,
          "addtime": "2021-09-06 23:21:23",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 23:19:21",
          "cod": 233.50694,
          "ph": 7.008102,
          "an": 26.041666,
          "tp": 3.7760415,
          "flow": 2351.2732,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10174154,
          "addtime": "2021-09-06 23:23:23",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 23:21:21",
          "cod": 233.50694,
          "ph": 7.008102,
          "an": 26.041666,
          "tp": 3.7760415,
          "flow": 2350.405,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10174178,
          "addtime": "2021-09-06 23:25:23",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 23:23:21",
          "cod": 233.50694,
          "ph": 7.008102,
          "an": 26.041666,
          "tp": 3.7760415,
          "flow": 2340.5671,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10174222,
          "addtime": "2021-09-06 23:27:23",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 23:25:21",
          "cod": 233.50694,
          "ph": 7.008102,
          "an": 26.041666,
          "tp": 3.7760415,
          "flow": 2328.125,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10174238,
          "addtime": "2021-09-06 23:29:23",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 23:27:21",
          "cod": 233.50694,
          "ph": 7.004051,
          "an": 26.041666,
          "tp": 3.7760415,
          "flow": 2353.0093,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10174266,
          "addtime": "2021-09-06 23:31:23",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 23:29:21",
          "cod": 233.50694,
          "ph": 7.004051,
          "an": 26.041666,
          "tp": 3.7760415,
          "flow": 2367.766,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10174306,
          "addtime": "2021-09-06 23:33:23",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 23:31:21",
          "cod": 233.50694,
          "ph": 7.004051,
          "an": 26.041666,
          "tp": 3.7760415,
          "flow": 2357.639,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10174338,
          "addtime": "2021-09-06 23:35:23",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 23:33:21",
          "cod": 233.50694,
          "ph": 7.008102,
          "an": 26.041666,
          "tp": 3.7760415,
          "flow": 2346.3542,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10174358,
          "addtime": "2021-09-06 23:37:23",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 23:35:21",
          "cod": 233.50694,
          "ph": 7.008102,
          "an": 26.041666,
          "tp": 3.7760415,
          "flow": 2316.8403,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10174378,
          "addtime": "2021-09-06 23:39:23",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 23:37:21",
          "cod": 233.50694,
          "ph": 7.008102,
          "an": 26.041666,
          "tp": 3.7760415,
          "flow": 2374.7107,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10174398,
          "addtime": "2021-09-06 23:41:23",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 23:39:21",
          "cod": 233.50694,
          "ph": 7.008102,
          "an": 26.041666,
          "tp": 3.7760415,
          "flow": 2345.7754,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10174450,
          "addtime": "2021-09-06 23:43:23",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 23:41:21",
          "cod": 233.50694,
          "ph": 7.008102,
          "an": 26.041666,
          "tp": 3.7760415,
          "flow": 2348.3796,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10174470,
          "addtime": "2021-09-06 23:45:23",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 23:43:21",
          "cod": 233.50694,
          "ph": 7.004051,
          "an": 26.041666,
          "tp": 3.7760415,
          "flow": 2329.5718,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10174486,
          "addtime": "2021-09-06 23:47:23",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 23:45:21",
          "cod": 233.50694,
          "ph": 7.008102,
          "an": 26.041666,
          "tp": 3.7760415,
          "flow": 2353.0093,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10174524,
          "addtime": "2021-09-06 23:49:23",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 23:47:21",
          "cod": 233.50694,
          "ph": 7.008102,
          "an": 26.041666,
          "tp": 3.7760415,
          "flow": 2331.3079,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10174562,
          "addtime": "2021-09-06 23:51:23",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 23:49:21",
          "cod": 233.50694,
          "ph": 7.008102,
          "an": 26.041666,
          "tp": 3.7760415,
          "flow": 2356.4814,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10174570,
          "addtime": "2021-09-06 23:53:23",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 23:51:21",
          "cod": 233.50694,
          "ph": 7.008102,
          "an": 26.041666,
          "tp": 3.7760415,
          "flow": 2337.095,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10174598,
          "addtime": "2021-09-06 23:55:23",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 23:53:21",
          "cod": 233.50694,
          "ph": 7.008102,
          "an": 26.041666,
          "tp": 3.7760415,
          "flow": 2369.213,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10174622,
          "addtime": "2021-09-06 23:57:23",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 23:55:21",
          "cod": 233.50694,
          "ph": 7.008102,
          "an": 26.041666,
          "tp": 3.7760415,
          "flow": 2364.8728,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
        {
          "id": 10174666,
          "addtime": "2021-09-06 23:59:23",

          "sewagecode": "LSQY_In",
          "recordtime": "2021-09-06 23:57:21",
          "cod": 233.50694,
          "ph": 7.008102,
          "an": 26.041666,
          "tp": 3.7760415,
          "flow": 2381.0767,
          "curdayflow": 0,
          "totalflow": 2097152,

          
          "zs_flow": "",
          "zs_curdayflow": "",
          "zs_totalflow": ""
        },
      ];
      this.data_out = [
        {
          "id": 10154528,
          "addtime": "2021-09-06 00:01:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 00:00:14",
          "cod": 8.680555,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.09693287,
          "flow": 1970.4861,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 289.61273,
          "zs_curdayflow": 7194.3125,
          "zs_totalflow": 591994.2
        },
        {
          "id": 10154556,
          "addtime": "2021-09-06 00:03:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 00:02:14",
          "cod": 8.680555,
          "ph": 6.8420143,
          "an": 0.011574075,
          "tp": 0.09693287,
          "flow": 2013.0208,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 305.31018,
          "zs_curdayflow": 1.75,
          "zs_totalflow": 592004.1
        },
        {
          "id": 10154592,
          "addtime": "2021-09-06 00:05:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 00:04:14",
          "cod": 8.680555,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.09693287,
          "flow": 2044.2709,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 312.35876,
          "zs_curdayflow": 11.5,
          "zs_totalflow": 592013.9
        },
        {
          "id": 10154620,
          "addtime": "2021-09-06 00:07:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 00:06:14",
          "cod": 8.680555,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.09693287,
          "flow": 2065.9722,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 296.54532,
          "zs_curdayflow": 21.625,
          "zs_totalflow": 592024
        },
        {
          "id": 10154636,
          "addtime": "2021-09-06 00:09:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 00:08:14",
          "cod": 8.680555,
          "ph": 6.8420143,
          "an": 0.011574075,
          "tp": 0.09693287,
          "flow": 1936.632,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 283.30627,
          "zs_curdayflow": 31.5,
          "zs_totalflow": 592033.9
        },
        {
          "id": 10154668,
          "addtime": "2021-09-06 00:11:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 00:10:14",
          "cod": 8.680555,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.09693287,
          "flow": 2118.0554,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 283.7014,
          "zs_curdayflow": 41.125,
          "zs_totalflow": 592043.5
        },
        {
          "id": 10154692,
          "addtime": "2021-09-06 00:13:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 00:12:14",
          "cod": 8.680555,
          "ph": 6.8420143,
          "an": 0.011574075,
          "tp": 0.09693287,
          "flow": 2098.0903,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 305.98105,
          "zs_curdayflow": 51.125,
          "zs_totalflow": 592053.5
        },
        {
          "id": 10154740,
          "addtime": "2021-09-06 00:15:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 00:14:14",
          "cod": 8.680555,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.09693287,
          "flow": 2092.8818,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 290.7072,
          "zs_curdayflow": 61,
          "zs_totalflow": 592063.4
        },
        {
          "id": 10154760,
          "addtime": "2021-09-06 00:17:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 00:16:14",
          "cod": 8.680555,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.09693287,
          "flow": 2039.9307,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 309.80832,
          "zs_curdayflow": 71.125,
          "zs_totalflow": 592073.5
        },
        {
          "id": 10154784,
          "addtime": "2021-09-06 00:19:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 00:18:14",
          "cod": 8.680555,
          "ph": 6.8420143,
          "an": 0.011574075,
          "tp": 0.09693287,
          "flow": 2028.6459,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 281.7328,
          "zs_curdayflow": 81,
          "zs_totalflow": 592083.4
        },
        {
          "id": 10154804,
          "addtime": "2021-09-06 00:21:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 00:20:14",
          "cod": 8.680555,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.09693287,
          "flow": 1992.1875,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 290.88318,
          "zs_curdayflow": 90.8125,
          "zs_totalflow": 592093.2
        },
        {
          "id": 10154844,
          "addtime": "2021-09-06 00:23:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 00:22:14",
          "cod": 8.680555,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.09693287,
          "flow": 1888.0209,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 293.2406,
          "zs_curdayflow": 100.8125,
          "zs_totalflow": 592103.2
        },
        {
          "id": 10154856,
          "addtime": "2021-09-06 00:25:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 00:24:14",
          "cod": 8.680555,
          "ph": 6.8420143,
          "an": 0.011574075,
          "tp": 0.09693287,
          "flow": 1787.3264,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 316.4169,
          "zs_curdayflow": 110.9375,
          "zs_totalflow": 592113.3
        },
        {
          "id": 10154888,
          "addtime": "2021-09-06 00:27:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 00:26:14",
          "cod": 8.680555,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.09693287,
          "flow": 1823.7847,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 291.23462,
          "zs_curdayflow": 120.9375,
          "zs_totalflow": 592123.3
        },
        {
          "id": 10154932,
          "addtime": "2021-09-06 00:29:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 00:28:14",
          "cod": 8.680555,
          "ph": 6.8420143,
          "an": 0.011574075,
          "tp": 0.09693287,
          "flow": 1879.3403,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 305.86087,
          "zs_curdayflow": 130.625,
          "zs_totalflow": 592133
        },
        {
          "id": 10154948,
          "addtime": "2021-09-06 00:31:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 00:30:14",
          "cod": 8.680555,
          "ph": 6.8420143,
          "an": 0.011574075,
          "tp": 0.09693287,
          "flow": 1784.7222,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 281.47427,
          "zs_curdayflow": 140.25,
          "zs_totalflow": 592142.6
        },
        {
          "id": 10154988,
          "addtime": "2021-09-06 00:33:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 00:32:14",
          "cod": 8.680555,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.09693287,
          "flow": 1857.6389,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 294.9035,
          "zs_curdayflow": 150.25,
          "zs_totalflow": 592152.6
        },
        {
          "id": 10155008,
          "addtime": "2021-09-06 00:35:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 00:34:14",
          "cod": 8.680555,
          "ph": 6.8420143,
          "an": 0.011574075,
          "tp": 0.09693287,
          "flow": 1779.5139,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 286.8781,
          "zs_curdayflow": 159.8125,
          "zs_totalflow": 592162.2
        },
        {
          "id": 10155032,
          "addtime": "2021-09-06 00:37:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 00:36:14",
          "cod": 8.680555,
          "ph": 6.8420143,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1796.007,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 301.05222,
          "zs_curdayflow": 169.8125,
          "zs_totalflow": 592172.2
        },
        {
          "id": 10155056,
          "addtime": "2021-09-06 00:39:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 00:38:14",
          "cod": 8.680555,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1835.9375,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 274.5649,
          "zs_curdayflow": 179.75,
          "zs_totalflow": 592182.1
        },
        {
          "id": 10155104,
          "addtime": "2021-09-06 00:41:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 00:40:14",
          "cod": 8.680555,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1743.9237,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 312.0644,
          "zs_curdayflow": 189.625,
          "zs_totalflow": 592192
        },
        {
          "id": 10155128,
          "addtime": "2021-09-06 00:43:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 00:42:14",
          "cod": 8.680555,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1883.6805,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 287.45987,
          "zs_curdayflow": 199.9375,
          "zs_totalflow": 592202.3
        },
        {
          "id": 10155144,
          "addtime": "2021-09-06 00:45:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 00:44:14",
          "cod": 8.680555,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1740.4514,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 297.69632,
          "zs_curdayflow": 209.8125,
          "zs_totalflow": 592212.2
        },
        {
          "id": 10155168,
          "addtime": "2021-09-06 00:47:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 00:46:14",
          "cod": 8.680555,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1826.3889,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 298.58847,
          "zs_curdayflow": 219.75,
          "zs_totalflow": 592222.1
        },
        {
          "id": 10155216,
          "addtime": "2021-09-06 00:49:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 00:48:14",
          "cod": 8.969908,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1749.132,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 310.013,
          "zs_curdayflow": 229.75,
          "zs_totalflow": 592232.1
        },
        {
          "id": 10155220,
          "addtime": "2021-09-06 00:51:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 00:50:14",
          "cod": 8.969908,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1742.1875,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 304.34537,
          "zs_curdayflow": 239.3125,
          "zs_totalflow": 592241.7
        },
        {
          "id": 10155252,
          "addtime": "2021-09-06 00:53:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 00:52:14",
          "cod": 8.969908,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1823.7847,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 308.2071,
          "zs_curdayflow": 249.25,
          "zs_totalflow": 592251.6
        },
        {
          "id": 10155296,
          "addtime": "2021-09-06 00:55:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 00:54:14",
          "cod": 8.969908,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1771.7013,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 282.2059,
          "zs_curdayflow": 259.125,
          "zs_totalflow": 592261.5
        },
        {
          "id": 10155312,
          "addtime": "2021-09-06 00:57:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 00:56:14",
          "cod": 8.969908,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1742.1875,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 289.7887,
          "zs_curdayflow": 269.25,
          "zs_totalflow": 592271.6
        },
        {
          "id": 10155337,
          "addtime": "2021-09-06 00:59:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 00:58:14",
          "cod": 8.969908,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1874.1318,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 305.0553,
          "zs_curdayflow": 279.125,
          "zs_totalflow": 592281.5
        },
        {
          "id": 10155372,
          "addtime": "2021-09-06 01:01:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 01:00:14",
          "cod": 8.969908,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1792.5348,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 283.4233,
          "zs_curdayflow": 288.9375,
          "zs_totalflow": 592291.3
        },
        {
          "id": 10155392,
          "addtime": "2021-09-06 01:03:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 01:02:14",
          "cod": 8.969908,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1761.2847,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 307.71118,
          "zs_curdayflow": 298.8125,
          "zs_totalflow": 592301.2
        },
        {
          "id": 10155440,
          "addtime": "2021-09-06 01:05:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 01:04:14",
          "cod": 8.969908,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1833.3334,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 303.62598,
          "zs_curdayflow": 308.4375,
          "zs_totalflow": 592310.8
        },
        {
          "id": 10155452,
          "addtime": "2021-09-06 01:07:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 01:06:14",
          "cod": 8.969908,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1688.3682,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 312.36325,
          "zs_curdayflow": 318.4375,
          "zs_totalflow": 592320.8
        },
        {
          "id": 10155488,
          "addtime": "2021-09-06 01:09:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 01:08:14",
          "cod": 8.969908,
          "ph": 6.8420143,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1776.0416,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 284.38403,
          "zs_curdayflow": 328.125,
          "zs_totalflow": 592330.5
        },
        {
          "id": 10155520,
          "addtime": "2021-09-06 01:11:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 01:10:14",
          "cod": 8.969908,
          "ph": 6.8420143,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1750,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 294.1645,
          "zs_curdayflow": 338.125,
          "zs_totalflow": 592340.5
        },
        {
          "id": 10155540,
          "addtime": "2021-09-06 01:13:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 01:12:14",
          "cod": 8.969908,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1763.8889,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 294.2076,
          "zs_curdayflow": 347.8125,
          "zs_totalflow": 592350.2
        },
        {
          "id": 10155560,
          "addtime": "2021-09-06 01:15:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 01:14:14",
          "cod": 8.969908,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1823.7847,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 280.01062,
          "zs_curdayflow": 357.5,
          "zs_totalflow": 592359.9
        },
        {
          "id": 10155592,
          "addtime": "2021-09-06 01:17:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 01:16:14",
          "cod": 8.969908,
          "ph": 6.8420143,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1641.4932,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 291.10654,
          "zs_curdayflow": 367,
          "zs_totalflow": 592369.4
        },
        {
          "id": 10155616,
          "addtime": "2021-09-06 01:19:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 01:18:14",
          "cod": 8.969908,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1813.368,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 302.9326,
          "zs_curdayflow": 377,
          "zs_totalflow": 592379.4
        },
        {
          "id": 10155644,
          "addtime": "2021-09-06 01:21:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 01:20:14",
          "cod": 8.969908,
          "ph": 6.8420143,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1845.4861,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 275.4152,
          "zs_curdayflow": 386.9375,
          "zs_totalflow": 592389.3
        },
        {
          "id": 10155680,
          "addtime": "2021-09-06 01:23:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 01:22:14",
          "cod": 8.969908,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1750.868,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 263.99673,
          "zs_curdayflow": 396.75,
          "zs_totalflow": 592399.1
        },
        {
          "id": 10155700,
          "addtime": "2021-09-06 01:25:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 01:24:14",
          "cod": 8.969908,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1724.8263,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 294.44257,
          "zs_curdayflow": 406.25,
          "zs_totalflow": 592408.6
        },
        {
          "id": 10155740,
          "addtime": "2021-09-06 01:27:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 01:26:14",
          "cod": 8.969908,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1880.2084,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 290.22324,
          "zs_curdayflow": 416.125,
          "zs_totalflow": 592418.5
        },
        {
          "id": 10155768,
          "addtime": "2021-09-06 01:29:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 01:28:14",
          "cod": 8.969908,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1833.3334,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 314.03128,
          "zs_curdayflow": 426.25,
          "zs_totalflow": 592428.6
        },
        {
          "id": 10155784,
          "addtime": "2021-09-06 01:31:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 01:30:14",
          "cod": 8.969908,
          "ph": 6.8420143,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1702.257,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 300.4224,
          "zs_curdayflow": 436.125,
          "zs_totalflow": 592438.5
        },
        {
          "id": 10155812,
          "addtime": "2021-09-06 01:33:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 01:32:14",
          "cod": 8.969908,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1805.5557,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 289.21237,
          "zs_curdayflow": 446.3125,
          "zs_totalflow": 592448.7
        },
        {
          "id": 10155860,
          "addtime": "2021-09-06 01:35:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 01:34:14",
          "cod": 8.969908,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1840.2777,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 305.10287,
          "zs_curdayflow": 456.25,
          "zs_totalflow": 592458.6
        },
        {
          "id": 10155868,
          "addtime": "2021-09-06 01:37:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 01:36:14",
          "cod": 8.969908,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1701.3888,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 314.75763,
          "zs_curdayflow": 466,
          "zs_totalflow": 592468.4
        },
        {
          "id": 10155904,
          "addtime": "2021-09-06 01:39:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 01:38:14",
          "cod": 8.969908,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1785.5903,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 285.71704,
          "zs_curdayflow": 475.9375,
          "zs_totalflow": 592478.3
        },
        {
          "id": 10155924,
          "addtime": "2021-09-06 01:41:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 01:40:14",
          "cod": 8.969908,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1814.2362,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 305.1286,
          "zs_curdayflow": 485.75,
          "zs_totalflow": 592488.1
        },
        {
          "id": 10155948,
          "addtime": "2021-09-06 01:43:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 01:42:14",
          "cod": 8.969908,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1789.9305,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 304.4926,
          "zs_curdayflow": 495.75,
          "zs_totalflow": 592498.1
        },
        {
          "id": 10155976,
          "addtime": "2021-09-06 01:45:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 01:44:14",
          "cod": 8.969908,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1835.9375,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 304.79224,
          "zs_curdayflow": 505.625,
          "zs_totalflow": 592508
        },
        {
          "id": 10156012,
          "addtime": "2021-09-06 01:47:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 01:46:14",
          "cod": 8.969908,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1855.0347,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 291.2315,
          "zs_curdayflow": 515.3125,
          "zs_totalflow": 592517.7
        },
        {
          "id": 10156036,
          "addtime": "2021-09-06 01:49:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 01:48:14",
          "cod": 8.969908,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1797.743,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 269.47607,
          "zs_curdayflow": 525.3125,
          "zs_totalflow": 592527.7
        },
        {
          "id": 10156084,
          "addtime": "2021-09-06 01:51:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 01:50:14",
          "cod": 8.969908,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1794.2709,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 272.00317,
          "zs_curdayflow": 534.9375,
          "zs_totalflow": 592537.3
        },
        {
          "id": 10156104,
          "addtime": "2021-09-06 01:53:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 01:52:15",
          "cod": 8.969908,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1770.8334,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 303.99197,
          "zs_curdayflow": 544.8125,
          "zs_totalflow": 592547.2
        },
        {
          "id": 10156120,
          "addtime": "2021-09-06 01:55:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 01:54:15",
          "cod": 8.969908,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1758.6807,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 282.3744,
          "zs_curdayflow": 554.3125,
          "zs_totalflow": 592556.7
        },
        {
          "id": 10156144,
          "addtime": "2021-09-06 01:57:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 01:56:15",
          "cod": 8.969908,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1698.7848,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 303.84192,
          "zs_curdayflow": 564,
          "zs_totalflow": 592566.4
        },
        {
          "id": 10156180,
          "addtime": "2021-09-06 01:59:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 01:58:15",
          "cod": 8.969908,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1901.9097,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 287.49994,
          "zs_curdayflow": 573.75,
          "zs_totalflow": 592576.1
        },
        {
          "id": 10156220,
          "addtime": "2021-09-06 02:01:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 02:00:15",
          "cod": 8.969908,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1867.1875,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 301.5482,
          "zs_curdayflow": 583.75,
          "zs_totalflow": 592586.1
        },
        {
          "id": 10156232,
          "addtime": "2021-09-06 02:03:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 02:02:15",
          "cod": 8.969908,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1844.618,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 303.44028,
          "zs_curdayflow": 593.3125,
          "zs_totalflow": 592595.7
        },
        {
          "id": 10156268,
          "addtime": "2021-09-06 02:05:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 02:04:15",
          "cod": 8.969908,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1815.1041,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 312.90454,
          "zs_curdayflow": 603.5,
          "zs_totalflow": 592605.9
        },
        {
          "id": 10156288,
          "addtime": "2021-09-06 02:07:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 02:06:15",
          "cod": 8.969908,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1871.5278,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 320.86862,
          "zs_curdayflow": 613.5,
          "zs_totalflow": 592615.9
        },
        {
          "id": 10156324,
          "addtime": "2021-09-06 02:09:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 02:08:15",
          "cod": 8.969908,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1909.7223,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 299.0855,
          "zs_curdayflow": 623.3125,
          "zs_totalflow": 592625.7
        },
        {
          "id": 10156344,
          "addtime": "2021-09-06 02:11:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 02:10:15",
          "cod": 8.969908,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1781.25,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 295.7451,
          "zs_curdayflow": 633.3125,
          "zs_totalflow": 592635.7
        },
        {
          "id": 10156372,
          "addtime": "2021-09-06 02:13:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 02:12:15",
          "cod": 8.969908,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1802.9514,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 301.03665,
          "zs_curdayflow": 643.25,
          "zs_totalflow": 592645.6
        },
        {
          "id": 10156396,
          "addtime": "2021-09-06 02:15:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 02:14:15",
          "cod": 8.969908,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1789.9305,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 283.04852,
          "zs_curdayflow": 653,
          "zs_totalflow": 592655.4
        },
        {
          "id": 10156428,
          "addtime": "2021-09-06 02:17:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 02:16:15",
          "cod": 8.969908,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1706.5972,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 286.74777,
          "zs_curdayflow": 662.9375,
          "zs_totalflow": 592665.3
        },
        {
          "id": 10156460,
          "addtime": "2021-09-06 02:19:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 02:18:15",
          "cod": 8.969908,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1776.9097,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 288.42566,
          "zs_curdayflow": 672.625,
          "zs_totalflow": 592675
        },
        {
          "id": 10156484,
          "addtime": "2021-09-06 02:21:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 02:20:15",
          "cod": 8.969908,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1711.8057,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 289.8964,
          "zs_curdayflow": 682.25,
          "zs_totalflow": 592684.6
        },
        {
          "id": 10156512,
          "addtime": "2021-09-06 02:23:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 02:22:15",
          "cod": 8.969908,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1761.2847,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 293.7232,
          "zs_curdayflow": 691.9375,
          "zs_totalflow": 592694.3
        },
        {
          "id": 10156560,
          "addtime": "2021-09-06 02:25:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 02:24:15",
          "cod": 8.969908,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1654.5138,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 292.4541,
          "zs_curdayflow": 701.5,
          "zs_totalflow": 592703.9
        },
        {
          "id": 10156572,
          "addtime": "2021-09-06 02:27:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 02:26:15",
          "cod": 8.969908,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1652.7777,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 294.5035,
          "zs_curdayflow": 711.25,
          "zs_totalflow": 592713.6
        },
        {
          "id": 10156596,
          "addtime": "2021-09-06 02:29:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 02:28:15",
          "cod": 8.969908,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1737.8472,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 292.5663,
          "zs_curdayflow": 721.125,
          "zs_totalflow": 592723.5
        },
        {
          "id": 10156628,
          "addtime": "2021-09-06 02:31:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 02:30:15",
          "cod": 8.969908,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1664.0625,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 264.6299,
          "zs_curdayflow": 730.625,
          "zs_totalflow": 592733
        },
        {
          "id": 10156664,
          "addtime": "2021-09-06 02:33:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 02:32:15",
          "cod": 8.969908,
          "ph": 6.8420143,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1657.118,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 306.23248,
          "zs_curdayflow": 740.5,
          "zs_totalflow": 592742.9
        },
        {
          "id": 10156688,
          "addtime": "2021-09-06 02:35:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 02:34:15",
          "cod": 8.969908,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1746.5277,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 297.2244,
          "zs_curdayflow": 750.3125,
          "zs_totalflow": 592752.7
        },
        {
          "id": 10156704,
          "addtime": "2021-09-06 02:37:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 02:36:15",
          "cod": 8.969908,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.09693287,
          "flow": 1823.7847,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 287.62704,
          "zs_curdayflow": 760.25,
          "zs_totalflow": 592762.6
        },
        {
          "id": 10156752,
          "addtime": "2021-09-06 02:39:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 02:38:15",
          "cod": 8.969908,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.09693287,
          "flow": 1839.4098,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 298.03372,
          "zs_curdayflow": 770.125,
          "zs_totalflow": 592772.5
        },
        {
          "id": 10156768,
          "addtime": "2021-09-06 02:41:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 02:40:15",
          "cod": 8.969908,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.09693287,
          "flow": 1921.875,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 295.34723,
          "zs_curdayflow": 779.9375,
          "zs_totalflow": 592782.3
        },
        {
          "id": 10156800,
          "addtime": "2021-09-06 02:43:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 02:42:15",
          "cod": 8.969908,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.09693287,
          "flow": 1849.8264,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 293.96127,
          "zs_curdayflow": 789.75,
          "zs_totalflow": 592792.1
        },
        {
          "id": 10156832,
          "addtime": "2021-09-06 02:45:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 02:44:15",
          "cod": 8.969908,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.09693287,
          "flow": 1949.6528,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 274.8775,
          "zs_curdayflow": 799.25,
          "zs_totalflow": 592801.6
        },
        {
          "id": 10156864,
          "addtime": "2021-09-06 02:47:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 02:46:15",
          "cod": 8.969908,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.09693287,
          "flow": 1997.3959,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 289.62302,
          "zs_curdayflow": 808.9375,
          "zs_totalflow": 592811.3
        },
        {
          "id": 10156872,
          "addtime": "2021-09-06 02:49:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 02:48:15",
          "cod": 8.043982,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.09693287,
          "flow": 2054.6875,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 298.9809,
          "zs_curdayflow": 818.75,
          "zs_totalflow": 592821.1
        },
        {
          "id": 10156904,
          "addtime": "2021-09-06 02:51:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 02:50:15",
          "cod": 8.101851,
          "ph": 6.8420143,
          "an": 0.011574075,
          "tp": 0.09693287,
          "flow": 2028.6459,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 294.07812,
          "zs_curdayflow": 828.5,
          "zs_totalflow": 592830.9
        },
        {
          "id": 10156944,
          "addtime": "2021-09-06 02:53:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 02:52:15",
          "cod": 8.101851,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.09693287,
          "flow": 2062.5,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 293.78403,
          "zs_curdayflow": 838.3125,
          "zs_totalflow": 592840.7
        },
        {
          "id": 10156956,
          "addtime": "2021-09-06 02:55:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 02:54:15",
          "cod": 8.101851,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.09693287,
          "flow": 2019.9653,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 287.65894,
          "zs_curdayflow": 848.125,
          "zs_totalflow": 592850.5
        },
        {
          "id": 10157008,
          "addtime": "2021-09-06 02:57:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 02:56:15",
          "cod": 8.101851,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.09693287,
          "flow": 2058.1597,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 308.13632,
          "zs_curdayflow": 858.125,
          "zs_totalflow": 592860.5
        },
        {
          "id": 10157032,
          "addtime": "2021-09-06 02:59:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 02:58:15",
          "cod": 8.101851,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.09693287,
          "flow": 2073.7847,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 298.6643,
          "zs_curdayflow": 867.75,
          "zs_totalflow": 592870.1
        },
        {
          "id": 10157044,
          "addtime": "2021-09-06 03:01:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 03:00:15",
          "cod": 8.101851,
          "ph": 6.8420143,
          "an": 0.011574075,
          "tp": 0.09693287,
          "flow": 2234.375,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 314.2295,
          "zs_curdayflow": 877.4375,
          "zs_totalflow": 592879.8
        },
        {
          "id": 10157076,
          "addtime": "2021-09-06 03:03:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 03:02:15",
          "cod": 8.101851,
          "ph": 6.8420143,
          "an": 0.011574075,
          "tp": 0.09693287,
          "flow": 2024.3055,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 293.25314,
          "zs_curdayflow": 887.3125,
          "zs_totalflow": 592889.7
        },
        {
          "id": 10157108,
          "addtime": "2021-09-06 03:05:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 03:04:15",
          "cod": 8.101851,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.09693287,
          "flow": 2118.0554,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 302.9989,
          "zs_curdayflow": 897.25,
          "zs_totalflow": 592899.6
        },
        {
          "id": 10157148,
          "addtime": "2021-09-06 03:07:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 03:06:15",
          "cod": 8.101851,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.09693287,
          "flow": 2082.4653,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 295.234,
          "zs_curdayflow": 907,
          "zs_totalflow": 592909.4
        },
        {
          "id": 10157168,
          "addtime": "2021-09-06 03:09:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 03:08:15",
          "cod": 8.101851,
          "ph": 6.8420143,
          "an": 0.011574075,
          "tp": 0.09693287,
          "flow": 2154.514,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 297.1031,
          "zs_curdayflow": 917.25,
          "zs_totalflow": 592919.6
        },
        {
          "id": 10157184,
          "addtime": "2021-09-06 03:11:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 03:10:15",
          "cod": 8.101851,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.09693287,
          "flow": 2127.6042,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 304.73465,
          "zs_curdayflow": 927.25,
          "zs_totalflow": 592929.6
        },
        {
          "id": 10157212,
          "addtime": "2021-09-06 03:13:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 03:12:15",
          "cod": 8.101851,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.09693287,
          "flow": 2063.3682,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 305.18256,
          "zs_curdayflow": 937,
          "zs_totalflow": 592939.4
        },
        {
          "id": 10157252,
          "addtime": "2021-09-06 03:15:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 03:14:15",
          "cod": 8.101851,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.09693287,
          "flow": 2004.3402,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 308.07544,
          "zs_curdayflow": 946.8125,
          "zs_totalflow": 592949.2
        },
        {
          "id": 10157268,
          "addtime": "2021-09-06 03:17:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 03:16:15",
          "cod": 8.101851,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.09693287,
          "flow": 2037.3264,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 296.5294,
          "zs_curdayflow": 956.625,
          "zs_totalflow": 592959
        },
        {
          "id": 10157296,
          "addtime": "2021-09-06 03:19:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 03:18:15",
          "cod": 8.101851,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.09693287,
          "flow": 1919.2708,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 290.2067,
          "zs_curdayflow": 966.4375,
          "zs_totalflow": 592968.8
        },
        {
          "id": 10157320,
          "addtime": "2021-09-06 03:21:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 03:20:15",
          "cod": 8.101851,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.09693287,
          "flow": 1840.2777,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 294.86023,
          "zs_curdayflow": 976.25,
          "zs_totalflow": 592978.6
        },
        {
          "id": 10157348,
          "addtime": "2021-09-06 03:23:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 03:22:15",
          "cod": 8.101851,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.09693287,
          "flow": 1927.0834,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 302.36548,
          "zs_curdayflow": 985.9375,
          "zs_totalflow": 592988.3
        },
        {
          "id": 10157388,
          "addtime": "2021-09-06 03:25:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 03:24:15",
          "cod": 8.101851,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.09693287,
          "flow": 1802.9514,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 282.10672,
          "zs_curdayflow": 995.8125,
          "zs_totalflow": 592998.2
        },
        {
          "id": 10157408,
          "addtime": "2021-09-06 03:27:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 03:26:15",
          "cod": 8.101851,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.09693287,
          "flow": 1980.9027,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 298.51285,
          "zs_curdayflow": 1005.75,
          "zs_totalflow": 593008.1
        },
        {
          "id": 10157444,
          "addtime": "2021-09-06 03:29:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 03:28:15",
          "cod": 8.101851,
          "ph": 6.8420143,
          "an": 0.011574075,
          "tp": 0.09693287,
          "flow": 1859.375,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 311.33624,
          "zs_curdayflow": 1015.5,
          "zs_totalflow": 593017.9
        },
        {
          "id": 10157460,
          "addtime": "2021-09-06 03:31:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 03:30:15",
          "cod": 8.101851,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.09693287,
          "flow": 1797.743,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 309.88672,
          "zs_curdayflow": 1025.3125,
          "zs_totalflow": 593027.7
        },
        {
          "id": 10157492,
          "addtime": "2021-09-06 03:33:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 03:32:15",
          "cod": 8.101851,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.09693287,
          "flow": 1802.0833,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 288.86423,
          "zs_curdayflow": 1035.4375,
          "zs_totalflow": 593037.8
        },
        {
          "id": 10157524,
          "addtime": "2021-09-06 03:35:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 03:34:15",
          "cod": 8.101851,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.09693287,
          "flow": 1819.4445,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 305.6064,
          "zs_curdayflow": 1044.8125,
          "zs_totalflow": 593047.2
        },
        {
          "id": 10157564,
          "addtime": "2021-09-06 03:37:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 03:36:15",
          "cod": 8.101851,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.09693287,
          "flow": 1865.4513,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 295.28412,
          "zs_curdayflow": 1055,
          "zs_totalflow": 593057.4
        },
        {
          "id": 10157580,
          "addtime": "2021-09-06 03:39:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 03:38:15",
          "cod": 8.101851,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.09693287,
          "flow": 1870.6597,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 280.736,
          "zs_curdayflow": 1064.75,
          "zs_totalflow": 593067.1
        },
        {
          "id": 10157600,
          "addtime": "2021-09-06 03:41:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 03:40:15",
          "cod": 8.101851,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.09693287,
          "flow": 1818.5763,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 273.06607,
          "zs_curdayflow": 1074.25,
          "zs_totalflow": 593076.6
        },
        {
          "id": 10157636,
          "addtime": "2021-09-06 03:43:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 03:42:15",
          "cod": 8.101851,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.09693287,
          "flow": 1878.4722,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 284.18927,
          "zs_curdayflow": 1080.625,
          "zs_totalflow": 593083
        },
        {
          "id": 10157656,
          "addtime": "2021-09-06 03:45:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 03:44:15",
          "cod": 8.101851,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.09693287,
          "flow": 1857.6389,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 316.8364,
          "zs_curdayflow": 1093.3125,
          "zs_totalflow": 593095.7
        },
        {
          "id": 10157688,
          "addtime": "2021-09-06 03:47:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 03:46:15",
          "cod": 8.101851,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.09693287,
          "flow": 1804.6875,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 295.53714,
          "zs_curdayflow": 1103.5,
          "zs_totalflow": 593105.9
        },
        {
          "id": 10157712,
          "addtime": "2021-09-06 03:49:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 03:48:15",
          "cod": 8.101851,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.09693287,
          "flow": 1820.3125,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 276.89154,
          "zs_curdayflow": 1113.5,
          "zs_totalflow": 593115.9
        },
        {
          "id": 10157760,
          "addtime": "2021-09-06 03:51:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 03:50:15",
          "cod": 8.101851,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.09693287,
          "flow": 1789.0625,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 298.11655,
          "zs_curdayflow": 1123.25,
          "zs_totalflow": 593125.6
        },
        {
          "id": 10157792,
          "addtime": "2021-09-06 03:53:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 03:52:15",
          "cod": 8.101851,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.09693287,
          "flow": 1895.8333,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 286.04514,
          "zs_curdayflow": 1133,
          "zs_totalflow": 593135.4
        },
        {
          "id": 10157812,
          "addtime": "2021-09-06 03:55:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 03:54:15",
          "cod": 8.101851,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.09693287,
          "flow": 1768.2291,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 288.83224,
          "zs_curdayflow": 1142.625,
          "zs_totalflow": 593145
        },
        {
          "id": 10157832,
          "addtime": "2021-09-06 03:57:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 03:56:15",
          "cod": 8.101851,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.09693287,
          "flow": 1774.3055,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 287.15,
          "zs_curdayflow": 1152.625,
          "zs_totalflow": 593155
        },
        {
          "id": 10157868,
          "addtime": "2021-09-06 03:59:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 03:58:15",
          "cod": 8.101851,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.09693287,
          "flow": 1792.5348,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 294.03604,
          "zs_curdayflow": 1162.5,
          "zs_totalflow": 593164.9
        },
        {
          "id": 10157900,
          "addtime": "2021-09-06 04:01:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 04:00:15",
          "cod": 8.101851,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.09693287,
          "flow": 2001.7362,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 290.31927,
          "zs_curdayflow": 1172.3125,
          "zs_totalflow": 593174.7
        },
        {
          "id": 10157928,
          "addtime": "2021-09-06 04:03:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 04:02:15",
          "cod": 8.101851,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.09693287,
          "flow": 1835.9375,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 283.5071,
          "zs_curdayflow": 1182.3125,
          "zs_totalflow": 593184.7
        },
        {
          "id": 10157960,
          "addtime": "2021-09-06 04:05:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 04:04:15",
          "cod": 8.101851,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.09693287,
          "flow": 1770.8334,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 307.1397,
          "zs_curdayflow": 1192,
          "zs_totalflow": 593194.4
        },
        {
          "id": 10157980,
          "addtime": "2021-09-06 04:07:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 04:06:15",
          "cod": 8.101851,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.09693287,
          "flow": 1880.2084,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 297.45462,
          "zs_curdayflow": 1201.625,
          "zs_totalflow": 593204
        },
        {
          "id": 10158008,
          "addtime": "2021-09-06 04:09:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 04:08:15",
          "cod": 8.101851,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.09693287,
          "flow": 1835.0695,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 299.05334,
          "zs_curdayflow": 1207,
          "zs_totalflow": 593209.4
        },
        {
          "id": 10158044,
          "addtime": "2021-09-06 04:11:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 04:10:15",
          "cod": 8.101851,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.09693287,
          "flow": 1884.5487,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 301.9783,
          "zs_curdayflow": 1221.5,
          "zs_totalflow": 593223.9
        },
        {
          "id": 10158056,
          "addtime": "2021-09-06 04:13:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 04:12:15",
          "cod": 8.101851,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.09693287,
          "flow": 1930.5555,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 296.59848,
          "zs_curdayflow": 1231.4375,
          "zs_totalflow": 593233.8
        },
        {
          "id": 10158080,
          "addtime": "2021-09-06 04:15:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 04:14:15",
          "cod": 8.101851,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.09693287,
          "flow": 1931.4237,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 266.76038,
          "zs_curdayflow": 1241.25,
          "zs_totalflow": 593243.6
        },
        {
          "id": 10158116,
          "addtime": "2021-09-06 04:17:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 04:16:15",
          "cod": 8.101851,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.09693287,
          "flow": 1839.4098,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 304.5658,
          "zs_curdayflow": 1251.25,
          "zs_totalflow": 593253.6
        },
        {
          "id": 10158136,
          "addtime": "2021-09-06 04:19:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 04:18:15",
          "cod": 8.101851,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.09693287,
          "flow": 1848.0903,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 265.14578,
          "zs_curdayflow": 1260.9375,
          "zs_totalflow": 593263.3
        },
        {
          "id": 10158172,
          "addtime": "2021-09-06 04:21:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 04:20:15",
          "cod": 8.101851,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.09693287,
          "flow": 1757.8125,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 301.88562,
          "zs_curdayflow": 1270.5,
          "zs_totalflow": 593272.9
        },
        {
          "id": 10158200,
          "addtime": "2021-09-06 04:23:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 04:22:15",
          "cod": 8.101851,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.09693287,
          "flow": 1823.7847,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 309.82382,
          "zs_curdayflow": 1280.3125,
          "zs_totalflow": 593282.7
        },
        {
          "id": 10158232,
          "addtime": "2021-09-06 04:25:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 04:24:15",
          "cod": 8.101851,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.09693287,
          "flow": 1884.5487,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 300.17926,
          "zs_curdayflow": 1290.125,
          "zs_totalflow": 593292.5
        },
        {
          "id": 10158268,
          "addtime": "2021-09-06 04:27:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 04:26:15",
          "cod": 8.101851,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.09693287,
          "flow": 1887.1527,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 285.3417,
          "zs_curdayflow": 1299.8125,
          "zs_totalflow": 593302.2
        },
        {
          "id": 10158276,
          "addtime": "2021-09-06 04:29:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 04:28:15",
          "cod": 8.101851,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.09693287,
          "flow": 1832.4653,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 301.81155,
          "zs_curdayflow": 1309.75,
          "zs_totalflow": 593312.1
        },
        {
          "id": 10158304,
          "addtime": "2021-09-06 04:31:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 04:30:15",
          "cod": 8.101851,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.09693287,
          "flow": 1828.125,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 277.27118,
          "zs_curdayflow": 1319.3125,
          "zs_totalflow": 593321.7
        },
        {
          "id": 10158332,
          "addtime": "2021-09-06 04:33:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 04:32:15",
          "cod": 8.101851,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.09693287,
          "flow": 1835.0695,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 266.8864,
          "zs_curdayflow": 1329.125,
          "zs_totalflow": 593331.5
        },
        {
          "id": 10158376,
          "addtime": "2021-09-06 04:35:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 04:34:15",
          "cod": 8.101851,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.09693287,
          "flow": 1809.8959,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 287.60995,
          "zs_curdayflow": 1338.8125,
          "zs_totalflow": 593341.2
        },
        {
          "id": 10158400,
          "addtime": "2021-09-06 04:37:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 04:36:15",
          "cod": 8.101851,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1861.9791,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 280.26978,
          "zs_curdayflow": 1348.75,
          "zs_totalflow": 593351.1
        },
        {
          "id": 10158420,
          "addtime": "2021-09-06 04:39:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 04:38:15",
          "cod": 8.101851,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1798.6111,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 304.44672,
          "zs_curdayflow": 1358.625,
          "zs_totalflow": 593361
        },
        {
          "id": 10158444,
          "addtime": "2021-09-06 04:41:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 04:40:15",
          "cod": 8.101851,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1914.9305,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 284.14972,
          "zs_curdayflow": 1368.3125,
          "zs_totalflow": 593370.7
        },
        {
          "id": 10158472,
          "addtime": "2021-09-06 04:43:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 04:42:15",
          "cod": 8.101851,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1857.6389,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 291.45157,
          "zs_curdayflow": 1378.25,
          "zs_totalflow": 593380.6
        },
        {
          "id": 10158516,
          "addtime": "2021-09-06 04:45:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 04:44:16",
          "cod": 8.043982,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1875.8682,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 295.64413,
          "zs_curdayflow": 1388.25,
          "zs_totalflow": 593390.6
        },
        {
          "id": 10158528,
          "addtime": "2021-09-06 04:47:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 04:46:16",
          "cod": 8.101851,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1848.9583,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 311.68695,
          "zs_curdayflow": 1398.3125,
          "zs_totalflow": 593400.7
        },
        {
          "id": 10158572,
          "addtime": "2021-09-06 04:49:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 04:48:16",
          "cod": 8.506945,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1946.1807,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 302.70334,
          "zs_curdayflow": 1407.8125,
          "zs_totalflow": 593410.2
        },
        {
          "id": 10158584,
          "addtime": "2021-09-06 04:51:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 04:50:16",
          "cod": 8.506945,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1933.1598,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 293.03998,
          "zs_curdayflow": 1417.625,
          "zs_totalflow": 593420
        },
        {
          "id": 10158612,
          "addtime": "2021-09-06 04:53:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 04:52:16",
          "cod": 8.506945,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1900.1736,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 293.29166,
          "zs_curdayflow": 1427.25,
          "zs_totalflow": 593429.6
        },
        {
          "id": 10158648,
          "addtime": "2021-09-06 04:55:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 04:54:16",
          "cod": 8.506945,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1895.8333,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 296.28058,
          "zs_curdayflow": 1436.75,
          "zs_totalflow": 593439.1
        },
        {
          "id": 10158676,
          "addtime": "2021-09-06 04:57:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 04:56:16",
          "cod": 8.506945,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1927.9514,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 306.25632,
          "zs_curdayflow": 1446.4375,
          "zs_totalflow": 593448.8
        },
        {
          "id": 10158700,
          "addtime": "2021-09-06 04:59:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 04:58:16",
          "cod": 8.506945,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1895.8333,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 285.77448,
          "zs_curdayflow": 1456.25,
          "zs_totalflow": 593458.6
        },
        {
          "id": 10158744,
          "addtime": "2021-09-06 05:01:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 05:00:16",
          "cod": 8.506945,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1822.0486,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 284.422,
          "zs_curdayflow": 1466,
          "zs_totalflow": 593468.4
        },
        {
          "id": 10158752,
          "addtime": "2021-09-06 05:03:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 05:02:16",
          "cod": 8.506945,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1932.2916,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 278.50656,
          "zs_curdayflow": 1475.625,
          "zs_totalflow": 593478
        },
        {
          "id": 10158784,
          "addtime": "2021-09-06 05:05:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 05:04:16",
          "cod": 8.506945,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1870.6597,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 301.44263,
          "zs_curdayflow": 1485.5,
          "zs_totalflow": 593487.9
        },
        {
          "id": 10158824,
          "addtime": "2021-09-06 05:07:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 05:06:16",
          "cod": 8.506945,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1858.507,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 301.1481,
          "zs_curdayflow": 1495.4375,
          "zs_totalflow": 593497.8
        },
        {
          "id": 10158844,
          "addtime": "2021-09-06 05:09:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 05:08:16",
          "cod": 8.506945,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1850.6943,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 302.1568,
          "zs_curdayflow": 1505.25,
          "zs_totalflow": 593507.6
        },
        {
          "id": 10158880,
          "addtime": "2021-09-06 05:11:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 05:10:16",
          "cod": 8.506945,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1902.7778,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 295.95068,
          "zs_curdayflow": 1515.3125,
          "zs_totalflow": 593517.7
        },
        {
          "id": 10158888,
          "addtime": "2021-09-06 05:13:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 05:12:16",
          "cod": 8.449074,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1871.5278,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 296.08594,
          "zs_curdayflow": 1525.3125,
          "zs_totalflow": 593527.7
        },
        {
          "id": 10158920,
          "addtime": "2021-09-06 05:15:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 05:14:16",
          "cod": 8.506945,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1958.3334,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 301.45422,
          "zs_curdayflow": 1535,
          "zs_totalflow": 593537.4
        },
        {
          "id": 10158952,
          "addtime": "2021-09-06 05:17:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 05:16:16",
          "cod": 8.506945,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1905.382,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 305.08368,
          "zs_curdayflow": 1544.9375,
          "zs_totalflow": 593547.3
        },
        {
          "id": 10158992,
          "addtime": "2021-09-06 05:19:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 05:18:16",
          "cod": 8.506945,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1772.5695,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 301.0255,
          "zs_curdayflow": 1554.9375,
          "zs_totalflow": 593557.3
        },
        {
          "id": 10159012,
          "addtime": "2021-09-06 05:21:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 05:20:16",
          "cod": 8.506945,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1941.8403,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 296.4164,
          "zs_curdayflow": 1564.5,
          "zs_totalflow": 593566.9
        },
        {
          "id": 10159044,
          "addtime": "2021-09-06 05:23:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 05:22:16",
          "cod": 8.506945,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1867.1875,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 321.8602,
          "zs_curdayflow": 1574.5,
          "zs_totalflow": 593576.9
        },
        {
          "id": 10159064,
          "addtime": "2021-09-06 05:25:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 05:24:16",
          "cod": 8.506945,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1993.0557,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 285.1277,
          "zs_curdayflow": 1584.4375,
          "zs_totalflow": 593586.8
        },
        {
          "id": 10159100,
          "addtime": "2021-09-06 05:27:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 05:26:16",
          "cod": 8.506945,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1804.6875,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 287.55392,
          "zs_curdayflow": 1594.125,
          "zs_totalflow": 593596.5
        },
        {
          "id": 10159120,
          "addtime": "2021-09-06 05:29:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 05:28:16",
          "cod": 8.506945,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1841.1459,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 308.454,
          "zs_curdayflow": 1603.9375,
          "zs_totalflow": 593606.3
        },
        {
          "id": 10159148,
          "addtime": "2021-09-06 05:31:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 05:30:16",
          "cod": 8.506945,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1801.2153,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 295.5354,
          "zs_curdayflow": 1613.75,
          "zs_totalflow": 593616.1
        },
        {
          "id": 10159188,
          "addtime": "2021-09-06 05:33:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 05:32:16",
          "cod": 8.506945,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1917.5347,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 297.7611,
          "zs_curdayflow": 1623.4375,
          "zs_totalflow": 593625.8
        },
        {
          "id": 10159212,
          "addtime": "2021-09-06 05:35:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 05:34:16",
          "cod": 8.506945,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1861.1112,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 286.25104,
          "zs_curdayflow": 1633.25,
          "zs_totalflow": 593635.6
        },
        {
          "id": 10159236,
          "addtime": "2021-09-06 05:37:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 05:36:16",
          "cod": 8.506945,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1904.5139,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 298.92316,
          "zs_curdayflow": 1642.8125,
          "zs_totalflow": 593645.2
        },
        {
          "id": 10159256,
          "addtime": "2021-09-06 05:39:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 05:38:16",
          "cod": 8.506945,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1861.9791,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 312.35507,
          "zs_curdayflow": 1652.8125,
          "zs_totalflow": 593655.2
        },
        {
          "id": 10159296,
          "addtime": "2021-09-06 05:41:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 05:40:16",
          "cod": 8.506945,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1913.1945,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 302.3155,
          "zs_curdayflow": 1662.625,
          "zs_totalflow": 593665
        },
        {
          "id": 10159320,
          "addtime": "2021-09-06 05:43:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 05:42:16",
          "cod": 8.506945,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1842.0138,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 267.81662,
          "zs_curdayflow": 1672.4375,
          "zs_totalflow": 593674.8
        },
        {
          "id": 10159348,
          "addtime": "2021-09-06 05:45:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 05:44:16",
          "cod": 8.506945,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1815.1041,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 304.8605,
          "zs_curdayflow": 1682.3125,
          "zs_totalflow": 593684.7
        },
        {
          "id": 10159388,
          "addtime": "2021-09-06 05:47:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 05:46:16",
          "cod": 8.506945,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1832.4653,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 280.67545,
          "zs_curdayflow": 1692.25,
          "zs_totalflow": 593694.6
        },
        {
          "id": 10159408,
          "addtime": "2021-09-06 05:49:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 05:48:16",
          "cod": 8.506945,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1915.7986,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 279.32025,
          "zs_curdayflow": 1701.75,
          "zs_totalflow": 593704.1
        },
        {
          "id": 10159428,
          "addtime": "2021-09-06 05:51:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 05:50:16",
          "cod": 8.506945,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1944.4443,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 273.67188,
          "zs_curdayflow": 1711.625,
          "zs_totalflow": 593714
        },
        {
          "id": 10159452,
          "addtime": "2021-09-06 05:53:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 05:52:16",
          "cod": 8.506945,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 2006.9445,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 293.20645,
          "zs_curdayflow": 1721.3125,
          "zs_totalflow": 593723.7
        },
        {
          "id": 10159480,
          "addtime": "2021-09-06 05:55:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 05:54:16",
          "cod": 8.506945,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1905.382,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 299.52264,
          "zs_curdayflow": 1731,
          "zs_totalflow": 593733.4
        },
        {
          "id": 10159512,
          "addtime": "2021-09-06 05:57:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 05:56:16",
          "cod": 8.506945,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1870.6597,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 294.35205,
          "zs_curdayflow": 1740.8125,
          "zs_totalflow": 593743.2
        },
        {
          "id": 10159552,
          "addtime": "2021-09-06 05:59:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 05:58:16",
          "cod": 8.506945,
          "ph": 6.850116,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1882.8125,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 293.15207,
          "zs_curdayflow": 1750.8125,
          "zs_totalflow": 593753.2
        },
        {
          "id": 10159560,
          "addtime": "2021-09-06 06:01:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 06:00:16",
          "cod": 8.506945,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1763.0209,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 294.11694,
          "zs_curdayflow": 1760.75,
          "zs_totalflow": 593763.1
        },
        {
          "id": 10159608,
          "addtime": "2021-09-06 06:03:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 06:02:16",
          "cod": 8.506945,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1802.9514,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 285.93716,
          "zs_curdayflow": 1770.5,
          "zs_totalflow": 593772.9
        },
        {
          "id": 10159640,
          "addtime": "2021-09-06 06:05:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 06:04:16",
          "cod": 8.506945,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1804.6875,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 297.7092,
          "zs_curdayflow": 1780.125,
          "zs_totalflow": 593782.5
        },
        {
          "id": 10159656,
          "addtime": "2021-09-06 06:07:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 06:06:16",
          "cod": 8.506945,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1746.5277,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 305.12073,
          "zs_curdayflow": 1789.9375,
          "zs_totalflow": 593792.3
        },
        {
          "id": 10159672,
          "addtime": "2021-09-06 06:09:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 06:08:16",
          "cod": 8.506945,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1614.5833,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 276.13766,
          "zs_curdayflow": 1799.75,
          "zs_totalflow": 593802.1
        },
        {
          "id": 10159712,
          "addtime": "2021-09-06 06:11:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 06:10:16",
          "cod": 8.506945,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1713.5417,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 294.46454,
          "zs_curdayflow": 1809.5,
          "zs_totalflow": 593811.9
        },
        {
          "id": 10159732,
          "addtime": "2021-09-06 06:13:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 06:12:16",
          "cod": 8.506945,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1722.2223,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 287.67023,
          "zs_curdayflow": 1819.5,
          "zs_totalflow": 593821.9
        },
        {
          "id": 10159760,
          "addtime": "2021-09-06 06:15:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 06:14:16",
          "cod": 8.506945,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1693.5764,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 303.7054,
          "zs_curdayflow": 1829.3125,
          "zs_totalflow": 593831.7
        },
        {
          "id": 10159792,
          "addtime": "2021-09-06 06:17:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 06:16:16",
          "cod": 8.506945,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1730.9028,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 291.89072,
          "zs_curdayflow": 1839.3125,
          "zs_totalflow": 593841.7
        },
        {
          "id": 10159816,
          "addtime": "2021-09-06 06:19:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 06:18:16",
          "cod": 8.506945,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1716.1459,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 300.1402,
          "zs_curdayflow": 1849,
          "zs_totalflow": 593851.4
        },
        {
          "id": 10159844,
          "addtime": "2021-09-06 06:21:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 06:20:16",
          "cod": 8.506945,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1714.4097,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 297.29758,
          "zs_curdayflow": 1858.8125,
          "zs_totalflow": 593861.2
        },
        {
          "id": 10159880,
          "addtime": "2021-09-06 06:23:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 06:22:16",
          "cod": 8.506945,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1810.7639,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 295.61832,
          "zs_curdayflow": 1868.5,
          "zs_totalflow": 593870.9
        },
        {
          "id": 10159916,
          "addtime": "2021-09-06 06:25:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 06:24:16",
          "cod": 8.506945,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1888.8888,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 299.48383,
          "zs_curdayflow": 1878.4375,
          "zs_totalflow": 593880.8
        },
        {
          "id": 10159944,
          "addtime": "2021-09-06 06:27:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 06:26:16",
          "cod": 8.506945,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1870.6597,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 276.45044,
          "zs_curdayflow": 1888.125,
          "zs_totalflow": 593890.5
        },
        {
          "id": 10159972,
          "addtime": "2021-09-06 06:29:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 06:28:16",
          "cod": 8.506945,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1980.0348,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 284.7784,
          "zs_curdayflow": 1897.75,
          "zs_totalflow": 593900.1
        },
        {
          "id": 10159992,
          "addtime": "2021-09-06 06:31:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 06:30:16",
          "cod": 8.506945,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1946.1807,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 296.75977,
          "zs_curdayflow": 1907.8125,
          "zs_totalflow": 593910.2
        },
        {
          "id": 10160024,
          "addtime": "2021-09-06 06:33:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 06:32:16",
          "cod": 8.506945,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 2011.2847,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 297.15958,
          "zs_curdayflow": 1917.4375,
          "zs_totalflow": 593919.8
        },
        {
          "id": 10160056,
          "addtime": "2021-09-06 06:35:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 06:34:16",
          "cod": 8.506945,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1976.5625,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 292.1922,
          "zs_curdayflow": 1927.25,
          "zs_totalflow": 593929.6
        },
        {
          "id": 10160076,
          "addtime": "2021-09-06 06:37:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 06:36:16",
          "cod": 8.506945,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 2101.5625,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 272.36246,
          "zs_curdayflow": 1936.9375,
          "zs_totalflow": 593939.3
        },
        {
          "id": 10160112,
          "addtime": "2021-09-06 06:39:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 06:38:16",
          "cod": 8.506945,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 2002.6041,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 299.575,
          "zs_curdayflow": 1946.625,
          "zs_totalflow": 593949
        },
        {
          "id": 10160144,
          "addtime": "2021-09-06 06:41:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 06:40:16",
          "cod": 8.506945,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 2070.3125,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 274.12646,
          "zs_curdayflow": 1956.3125,
          "zs_totalflow": 593958.7
        },
        {
          "id": 10160160,
          "addtime": "2021-09-06 06:43:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 06:42:16",
          "cod": 8.506945,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 2036.4583,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 296.29016,
          "zs_curdayflow": 1966.125,
          "zs_totalflow": 593968.5
        },
        {
          "id": 10160196,
          "addtime": "2021-09-06 06:45:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 06:44:16",
          "cod": 8.506945,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 2157.1182,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 306.61356,
          "zs_curdayflow": 1976.25,
          "zs_totalflow": 593978.6
        },
        {
          "id": 10160220,
          "addtime": "2021-09-06 06:47:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 06:46:16",
          "cod": 8.506945,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 2043.4028,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 279.02747,
          "zs_curdayflow": 1986,
          "zs_totalflow": 593988.4
        },
        {
          "id": 10160244,
          "addtime": "2021-09-06 06:49:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 06:48:16",
          "cod": 7.9282413,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 2019.0972,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 298.58612,
          "zs_curdayflow": 1996.125,
          "zs_totalflow": 593998.5
        },
        {
          "id": 10160260,
          "addtime": "2021-09-06 06:51:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 06:50:16",
          "cod": 7.9282413,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 2154.514,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 291.61316,
          "zs_curdayflow": 2005.9375,
          "zs_totalflow": 594008.3
        },
        {
          "id": 10160300,
          "addtime": "2021-09-06 06:53:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 06:52:16",
          "cod": 7.9282413,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 2027.7777,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 290.57568,
          "zs_curdayflow": 2015.625,
          "zs_totalflow": 594017.9
        },
        {
          "id": 10160324,
          "addtime": "2021-09-06 06:55:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 06:54:16",
          "cod": 7.9282413,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 2085.0693,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 293.47867,
          "zs_curdayflow": 2025.3125,
          "zs_totalflow": 594027.7
        },
        {
          "id": 10160364,
          "addtime": "2021-09-06 06:57:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 06:56:16",
          "cod": 7.9282413,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1993.0557,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 308.06512,
          "zs_curdayflow": 2035.3125,
          "zs_totalflow": 594037.7
        },
        {
          "id": 10160384,
          "addtime": "2021-09-06 06:59:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 06:58:16",
          "cod": 7.9282413,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 2110.2432,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 286.59216,
          "zs_curdayflow": 2045.25,
          "zs_totalflow": 594047.6
        },
        {
          "id": 10160400,
          "addtime": "2021-09-06 07:01:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 07:00:16",
          "cod": 7.9282413,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 2123.264,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 285.75998,
          "zs_curdayflow": 2055,
          "zs_totalflow": 594057.4
        },
        {
          "id": 10160444,
          "addtime": "2021-09-06 07:03:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 07:02:16",
          "cod": 7.9282413,
          "ph": 6.850116,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 2046.007,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 290.73654,
          "zs_curdayflow": 2064.5,
          "zs_totalflow": 594066.9
        },
        {
          "id": 10160456,
          "addtime": "2021-09-06 07:05:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 07:04:16",
          "cod": 7.9282413,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1907.118,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 271.37555,
          "zs_curdayflow": 2074.25,
          "zs_totalflow": 594076.6
        },
        {
          "id": 10160492,
          "addtime": "2021-09-06 07:07:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 07:06:16",
          "cod": 7.9282413,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1793.4027,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 289.99454,
          "zs_curdayflow": 2084,
          "zs_totalflow": 594086.4
        },
        {
          "id": 10160536,
          "addtime": "2021-09-06 07:09:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 07:08:16",
          "cod": 7.9282413,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1735.2432,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 273.90552,
          "zs_curdayflow": 2093.9375,
          "zs_totalflow": 594096.3
        },
        {
          "id": 10160564,
          "addtime": "2021-09-06 07:11:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 07:10:16",
          "cod": 7.9282413,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1793.4027,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 297.34418,
          "zs_curdayflow": 2103.9375,
          "zs_totalflow": 594106.3
        },
        {
          "id": 10160588,
          "addtime": "2021-09-06 07:13:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 07:12:16",
          "cod": 7.9282413,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1771.7013,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 307.76694,
          "zs_curdayflow": 2113.8125,
          "zs_totalflow": 594116.2
        },
        {
          "id": 10160596,
          "addtime": "2021-09-06 07:15:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 07:14:16",
          "cod": 7.9282413,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1809.8959,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 307.7888,
          "zs_curdayflow": 2124,
          "zs_totalflow": 594126.4
        },
        {
          "id": 10160636,
          "addtime": "2021-09-06 07:17:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 07:16:16",
          "cod": 7.9282413,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1743.9237,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 316.4179,
          "zs_curdayflow": 2134.3125,
          "zs_totalflow": 594136.7
        },
        {
          "id": 10160652,
          "addtime": "2021-09-06 07:19:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 07:18:16",
          "cod": 7.9282413,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1664.0625,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 316.78748,
          "zs_curdayflow": 2144.5,
          "zs_totalflow": 594146.9
        },
        {
          "id": 10160680,
          "addtime": "2021-09-06 07:21:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 07:20:16",
          "cod": 7.9282413,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1768.2291,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 321.69748,
          "zs_curdayflow": 2154.9375,
          "zs_totalflow": 594157.3
        },
        {
          "id": 10160712,
          "addtime": "2021-09-06 07:23:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 07:22:16",
          "cod": 7.9282413,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1740.4514,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 306.88885,
          "zs_curdayflow": 2165.5,
          "zs_totalflow": 594167.9
        },
        {
          "id": 10160744,
          "addtime": "2021-09-06 07:25:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 07:24:16",
          "cod": 7.9282413,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1709.2014,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 311.74707,
          "zs_curdayflow": 2175.75,
          "zs_totalflow": 594178.1
        },
        {
          "id": 10160780,
          "addtime": "2021-09-06 07:27:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 07:26:16",
          "cod": 7.9282413,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1624.132,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 316.34128,
          "zs_curdayflow": 2186.25,
          "zs_totalflow": 594188.8
        },
        {
          "id": 10160804,
          "addtime": "2021-09-06 07:29:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 07:28:16",
          "cod": 7.9282413,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1605.9027,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 316.84256,
          "zs_curdayflow": 2196.8125,
          "zs_totalflow": 594199.2
        },
        {
          "id": 10160828,
          "addtime": "2021-09-06 07:31:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 07:30:16",
          "cod": 7.9282413,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1736.9792,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 306.8382,
          "zs_curdayflow": 2207,
          "zs_totalflow": 594209.4
        },
        {
          "id": 10160860,
          "addtime": "2021-09-06 07:33:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 07:32:16",
          "cod": 7.9282413,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1800.3472,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 316.98895,
          "zs_curdayflow": 2217.25,
          "zs_totalflow": 594219.6
        },
        {
          "id": 10160880,
          "addtime": "2021-09-06 07:35:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 07:34:16",
          "cod": 7.9282413,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1845.4861,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 300.4343,
          "zs_curdayflow": 2227.125,
          "zs_totalflow": 594229.5
        },
        {
          "id": 10160908,
          "addtime": "2021-09-06 07:37:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 07:36:17",
          "cod": 7.9282413,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 2017.3611,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 285.89267,
          "zs_curdayflow": 2237.3125,
          "zs_totalflow": 594239.7
        },
        {
          "id": 10160956,
          "addtime": "2021-09-06 07:39:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 07:38:17",
          "cod": 7.9282413,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 2065.1042,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 277.74258,
          "zs_curdayflow": 2247.125,
          "zs_totalflow": 594249.5
        },
        {
          "id": 10160976,
          "addtime": "2021-09-06 07:41:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 07:40:17",
          "cod": 7.9282413,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 2154.514,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 338.0959,
          "zs_curdayflow": 2257.25,
          "zs_totalflow": 594259.6
        },
        {
          "id": 10161004,
          "addtime": "2021-09-06 07:43:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 07:42:17",
          "cod": 7.9282413,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 2166.6667,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 331.84653,
          "zs_curdayflow": 2267.5,
          "zs_totalflow": 594269.9
        },
        {
          "id": 10161027,
          "addtime": "2021-09-06 07:45:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 07:44:17",
          "cod": 7.9282413,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 2124.132,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 318.66028,
          "zs_curdayflow": 2273.75,
          "zs_totalflow": 594276.1
        },
        {
          "id": 10161056,
          "addtime": "2021-09-06 07:47:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 07:46:17",
          "cod": 7.9282413,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 2149.3057,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 339.21863,
          "zs_curdayflow": 2289.5,
          "zs_totalflow": 594291.9
        },
        {
          "id": 10161096,
          "addtime": "2021-09-06 07:49:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 07:48:17",
          "cod": 7.9282413,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 2219.6182,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 335.91946,
          "zs_curdayflow": 2300.8125,
          "zs_totalflow": 594303.2
        },
        {
          "id": 10161104,
          "addtime": "2021-09-06 07:51:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 07:50:17",
          "cod": 7.9282413,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 2084.2014,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 329.31357,
          "zs_curdayflow": 2312,
          "zs_totalflow": 594314.4
        },
        {
          "id": 10161136,
          "addtime": "2021-09-06 07:53:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 07:52:17",
          "cod": 7.9282413,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 2118.0554,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 343.63672,
          "zs_curdayflow": 2323.3125,
          "zs_totalflow": 594325.7
        },
        {
          "id": 10161172,
          "addtime": "2021-09-06 07:55:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 07:54:17",
          "cod": 7.9282413,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 2046.007,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 337.18314,
          "zs_curdayflow": 2334.3125,
          "zs_totalflow": 594336.7
        },
        {
          "id": 10161208,
          "addtime": "2021-09-06 07:57:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 07:56:17",
          "cod": 7.9282413,
          "ph": 6.850116,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 2117.1875,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 308.59448,
          "zs_curdayflow": 2345.75,
          "zs_totalflow": 594348.1
        },
        {
          "id": 10161220,
          "addtime": "2021-09-06 07:59:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 07:58:17",
          "cod": 7.9282413,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 2002.6041,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 331.84503,
          "zs_curdayflow": 2356.625,
          "zs_totalflow": 594359
        },
        {
          "id": 10161240,
          "addtime": "2021-09-06 08:01:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 08:00:17",
          "cod": 7.9282413,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1967.8818,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 311.8968,
          "zs_curdayflow": 2367.5,
          "zs_totalflow": 594369.9
        },
        {
          "id": 10161284,
          "addtime": "2021-09-06 08:03:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 08:02:17",
          "cod": 7.9282413,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1848.9583,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 313.55716,
          "zs_curdayflow": 2378.125,
          "zs_totalflow": 594380.5
        },
        {
          "id": 10161312,
          "addtime": "2021-09-06 08:05:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 08:04:17",
          "cod": 7.9282413,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1895.8333,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 318.74725,
          "zs_curdayflow": 2388.25,
          "zs_totalflow": 594390.6
        },
        {
          "id": 10161344,
          "addtime": "2021-09-06 08:07:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 08:06:17",
          "cod": 7.9282413,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1887.1527,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 290.9302,
          "zs_curdayflow": 2398.3125,
          "zs_totalflow": 594400.7
        },
        {
          "id": 10161360,
          "addtime": "2021-09-06 08:09:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 08:08:17",
          "cod": 7.9282413,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1930.5555,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 284.23492,
          "zs_curdayflow": 2408,
          "zs_totalflow": 594410.4
        },
        {
          "id": 10161384,
          "addtime": "2021-09-06 08:11:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 08:10:17",
          "cod": 7.9282413,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1859.375,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 312.25797,
          "zs_curdayflow": 2418.125,
          "zs_totalflow": 594420.5
        },
        {
          "id": 10161420,
          "addtime": "2021-09-06 08:13:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 08:12:17",
          "cod": 7.9282413,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1827.2568,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 282.14056,
          "zs_curdayflow": 2427.8125,
          "zs_totalflow": 594430.2
        },
        {
          "id": 10161440,
          "addtime": "2021-09-06 08:15:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 08:14:17",
          "cod": 7.9282413,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1944.4443,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 289.55264,
          "zs_curdayflow": 2437.75,
          "zs_totalflow": 594440.1
        },
        {
          "id": 10161480,
          "addtime": "2021-09-06 08:17:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 08:16:17",
          "cod": 7.9282413,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1937.5,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 300.956,
          "zs_curdayflow": 2448,
          "zs_totalflow": 594450.4
        },
        {
          "id": 10161496,
          "addtime": "2021-09-06 08:19:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 08:18:17",
          "cod": 7.9282413,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 2005.2084,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 321.00598,
          "zs_curdayflow": 2458.5,
          "zs_totalflow": 594460.9
        },
        {
          "id": 10161544,
          "addtime": "2021-09-06 08:21:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 08:20:17",
          "cod": 7.9282413,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1910.5902,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 319.0309,
          "zs_curdayflow": 2469.125,
          "zs_totalflow": 594471.5
        },
        {
          "id": 10161564,
          "addtime": "2021-09-06 08:23:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 08:22:17",
          "cod": 7.9282413,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1913.1945,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 331.95923,
          "zs_curdayflow": 2479.625,
          "zs_totalflow": 594482
        },
        {
          "id": 10161588,
          "addtime": "2021-09-06 08:25:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 08:24:17",
          "cod": 7.9282413,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1927.0834,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 343.5474,
          "zs_curdayflow": 2490.625,
          "zs_totalflow": 594493
        },
        {
          "id": 10161608,
          "addtime": "2021-09-06 08:27:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 08:26:17",
          "cod": 7.9282413,
          "ph": 6.846065,
          "an": 0.17650463,
          "tp": 0.08680556,
          "flow": 2013.8889,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 339.2293,
          "zs_curdayflow": 2501.5,
          "zs_totalflow": 594503.9
        },
        {
          "id": 10161632,
          "addtime": "2021-09-06 08:29:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 08:28:17",
          "cod": 7.9282413,
          "ph": 6.846065,
          "an": 0.17650463,
          "tp": 0.08680556,
          "flow": 2019.0972,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 319.2993,
          "zs_curdayflow": 2512.8125,
          "zs_totalflow": 594515.2
        },
        {
          "id": 10161664,
          "addtime": "2021-09-06 08:31:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 08:30:17",
          "cod": 7.9282413,
          "ph": 6.846065,
          "an": 0.17650463,
          "tp": 0.08680556,
          "flow": 2052.9514,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 294.8618,
          "zs_curdayflow": 2523.8125,
          "zs_totalflow": 594526.2
        },
        {
          "id": 10161712,
          "addtime": "2021-09-06 08:33:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 08:32:17",
          "cod": 7.9282413,
          "ph": 6.846065,
          "an": 0.17650463,
          "tp": 0.08680556,
          "flow": 2101.5625,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 326.5906,
          "zs_curdayflow": 2534.9375,
          "zs_totalflow": 594537.3
        },
        {
          "id": 10161724,
          "addtime": "2021-09-06 08:35:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 08:34:17",
          "cod": 7.9282413,
          "ph": 6.846065,
          "an": 0.17650463,
          "tp": 0.08680556,
          "flow": 1970.4861,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 320.38712,
          "zs_curdayflow": 2545.8125,
          "zs_totalflow": 594548.2
        },
        {
          "id": 10161768,
          "addtime": "2021-09-06 08:37:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 08:36:17",
          "cod": 7.9282413,
          "ph": 6.846065,
          "an": 0.17650463,
          "tp": 0.09693287,
          "flow": 2027.7777,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 313.05502,
          "zs_curdayflow": 2556.9375,
          "zs_totalflow": 594559.3
        },
        {
          "id": 10161776,
          "addtime": "2021-09-06 08:39:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 08:38:17",
          "cod": 7.9282413,
          "ph": 6.846065,
          "an": 0.17650463,
          "tp": 0.09693287,
          "flow": 2031.25,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 321.70212,
          "zs_curdayflow": 2567.625,
          "zs_totalflow": 594570
        },
        {
          "id": 10161804,
          "addtime": "2021-09-06 08:41:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 08:40:17",
          "cod": 7.9282413,
          "ph": 6.846065,
          "an": 0.17650463,
          "tp": 0.09693287,
          "flow": 1953.993,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 298.07443,
          "zs_curdayflow": 2577.625,
          "zs_totalflow": 594580
        },
        {
          "id": 10161832,
          "addtime": "2021-09-06 08:43:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 08:42:17",
          "cod": 7.9282413,
          "ph": 6.850116,
          "an": 0.17650463,
          "tp": 0.09693287,
          "flow": 2030.382,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 283.8481,
          "zs_curdayflow": 2587.625,
          "zs_totalflow": 594590
        },
        {
          "id": 10161876,
          "addtime": "2021-09-06 08:45:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 08:44:17",
          "cod": 7.9282413,
          "ph": 6.846065,
          "an": 0.17650463,
          "tp": 0.09693287,
          "flow": 1966.1458,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 293.64117,
          "zs_curdayflow": 2597.625,
          "zs_totalflow": 594600
        },
        {
          "id": 10161900,
          "addtime": "2021-09-06 08:47:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 08:46:17",
          "cod": 7.9282413,
          "ph": 6.846065,
          "an": 0.17650463,
          "tp": 0.09693287,
          "flow": 2140.625,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 299.9424,
          "zs_curdayflow": 2607.3125,
          "zs_totalflow": 594609.7
        },
        {
          "id": 10161920,
          "addtime": "2021-09-06 08:49:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 08:48:17",
          "cod": 8.391204,
          "ph": 6.846065,
          "an": 0.17650463,
          "tp": 0.09693287,
          "flow": 2032.9861,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 286.5975,
          "zs_curdayflow": 2617,
          "zs_totalflow": 594619.4
        },
        {
          "id": 10161964,
          "addtime": "2021-09-06 08:51:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 08:50:17",
          "cod": 8.391204,
          "ph": 6.846065,
          "an": 0.17650463,
          "tp": 0.09693287,
          "flow": 2114.5833,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 289.6926,
          "zs_curdayflow": 2626.5,
          "zs_totalflow": 594628.9
        },
        {
          "id": 10161976,
          "addtime": "2021-09-06 08:53:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 08:52:17",
          "cod": 8.391204,
          "ph": 6.846065,
          "an": 0.17650463,
          "tp": 0.09693287,
          "flow": 2109.375,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 306.3646,
          "zs_curdayflow": 2636.125,
          "zs_totalflow": 594638.5
        },
        {
          "id": 10161996,
          "addtime": "2021-09-06 08:55:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 08:54:17",
          "cod": 8.391204,
          "ph": 6.846065,
          "an": 0.17650463,
          "tp": 0.09693287,
          "flow": 1957.4652,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 297.73495,
          "zs_curdayflow": 2645.8125,
          "zs_totalflow": 594648.2
        },
        {
          "id": 10162028,
          "addtime": "2021-09-06 08:57:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 08:56:17",
          "cod": 8.391204,
          "ph": 6.846065,
          "an": 0.17650463,
          "tp": 0.09693287,
          "flow": 1970.4861,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 309.24866,
          "zs_curdayflow": 2655.9375,
          "zs_totalflow": 594658.3
        },
        {
          "id": 10162076,
          "addtime": "2021-09-06 08:59:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 08:58:17",
          "cod": 8.391204,
          "ph": 6.846065,
          "an": 0.17650463,
          "tp": 0.09693287,
          "flow": 2010.4166,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 301.76962,
          "zs_curdayflow": 2665.8125,
          "zs_totalflow": 594668.2
        },
        {
          "id": 10162084,
          "addtime": "2021-09-06 09:01:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 09:00:17",
          "cod": 8.391204,
          "ph": 6.846065,
          "an": 0.17650463,
          "tp": 0.09693287,
          "flow": 2079.861,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 299.25015,
          "zs_curdayflow": 2675.75,
          "zs_totalflow": 594678.1
        },
        {
          "id": 10162117,
          "addtime": "2021-09-06 09:03:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 09:02:17",
          "cod": 8.391204,
          "ph": 6.846065,
          "an": 0.17650463,
          "tp": 0.09693287,
          "flow": 2126.736,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 299.66367,
          "zs_curdayflow": 2685.75,
          "zs_totalflow": 594688.1
        },
        {
          "id": 10162140,
          "addtime": "2021-09-06 09:05:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 09:04:17",
          "cod": 8.391204,
          "ph": 6.846065,
          "an": 0.17650463,
          "tp": 0.09693287,
          "flow": 2046.007,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 273.807,
          "zs_curdayflow": 2695.75,
          "zs_totalflow": 594698.1
        },
        {
          "id": 10162176,
          "addtime": "2021-09-06 09:07:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 09:06:17",
          "cod": 8.391204,
          "ph": 6.846065,
          "an": 0.17650463,
          "tp": 0.09693287,
          "flow": 1993.9236,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 281.2523,
          "zs_curdayflow": 2705.3125,
          "zs_totalflow": 594707.7
        },
        {
          "id": 10162208,
          "addtime": "2021-09-06 09:09:24",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 09:08:17",
          "cod": 8.391204,
          "ph": 6.846065,
          "an": 0.17650463,
          "tp": 0.09693287,
          "flow": 1965.2778,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 307.9019,
          "zs_curdayflow": 2715.25,
          "zs_totalflow": 594717.6
        },
        {
          "id": 10162224,
          "addtime": "2021-09-06 09:11:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 09:10:17",
          "cod": 8.391204,
          "ph": 6.846065,
          "an": 0.17650463,
          "tp": 0.09693287,
          "flow": 2115.4514,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 292.05017,
          "zs_curdayflow": 2725.625,
          "zs_totalflow": 594728
        },
        {
          "id": 10162256,
          "addtime": "2021-09-06 09:13:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 09:12:17",
          "cod": 8.391204,
          "ph": 6.850116,
          "an": 0.17650463,
          "tp": 0.09693287,
          "flow": 2034.7222,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 349.25653,
          "zs_curdayflow": 2736.3125,
          "zs_totalflow": 594738.7
        },
        {
          "id": 10162276,
          "addtime": "2021-09-06 09:15:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 09:14:17",
          "cod": 8.391204,
          "ph": 6.846065,
          "an": 0.17650463,
          "tp": 0.09693287,
          "flow": 2028.6459,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 337.3228,
          "zs_curdayflow": 2747.4375,
          "zs_totalflow": 594749.8
        },
        {
          "id": 10162304,
          "addtime": "2021-09-06 09:17:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 09:16:17",
          "cod": 8.391204,
          "ph": 6.846065,
          "an": 0.17650463,
          "tp": 0.09693287,
          "flow": 2027.7777,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 326.4391,
          "zs_curdayflow": 2758.3125,
          "zs_totalflow": 594760.7
        },
        {
          "id": 10162348,
          "addtime": "2021-09-06 09:19:24",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 09:18:17",
          "cod": 8.391204,
          "ph": 6.846065,
          "an": 0.17650463,
          "tp": 0.09693287,
          "flow": 2018.2292,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 309.54898,
          "zs_curdayflow": 2769.625,
          "zs_totalflow": 594772
        },
        {
          "id": 10162360,
          "addtime": "2021-09-06 09:21:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 09:20:17",
          "cod": 8.391204,
          "ph": 6.846065,
          "an": 0.17650463,
          "tp": 0.09693287,
          "flow": 1934.8959,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 327.58182,
          "zs_curdayflow": 2780.4375,
          "zs_totalflow": 594782.8
        },
        {
          "id": 10162396,
          "addtime": "2021-09-06 09:23:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 09:22:17",
          "cod": 8.391204,
          "ph": 6.846065,
          "an": 0.17650463,
          "tp": 0.09693287,
          "flow": 1843.75,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 322.37436,
          "zs_curdayflow": 2791.5,
          "zs_totalflow": 594793.9
        },
        {
          "id": 10162428,
          "addtime": "2021-09-06 09:25:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 09:24:17",
          "cod": 8.391204,
          "ph": 6.846065,
          "an": 0.17650463,
          "tp": 0.09693287,
          "flow": 1826.3889,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 323.33115,
          "zs_curdayflow": 2802.125,
          "zs_totalflow": 594804.5
        },
        {
          "id": 10162460,
          "addtime": "2021-09-06 09:27:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 09:26:17",
          "cod": 8.391204,
          "ph": 6.846065,
          "an": 0.17650463,
          "tp": 0.09693287,
          "flow": 1789.0625,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 318.7504,
          "zs_curdayflow": 2812.75,
          "zs_totalflow": 594815.1
        },
        {
          "id": 10162484,
          "addtime": "2021-09-06 09:29:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 09:28:17",
          "cod": 8.391204,
          "ph": 6.846065,
          "an": 0.17650463,
          "tp": 0.09693287,
          "flow": 1867.1875,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 313.79565,
          "zs_curdayflow": 2823.4375,
          "zs_totalflow": 594825.8
        },
        {
          "id": 10162508,
          "addtime": "2021-09-06 09:31:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 09:30:17",
          "cod": 8.391204,
          "ph": 6.846065,
          "an": 0.17650463,
          "tp": 0.09693287,
          "flow": 1881.0764,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 307.62375,
          "zs_curdayflow": 2833.625,
          "zs_totalflow": 594836
        },
        {
          "id": 10162552,
          "addtime": "2021-09-06 09:33:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 09:32:17",
          "cod": 8.391204,
          "ph": 6.846065,
          "an": 0.17650463,
          "tp": 0.09693287,
          "flow": 1763.0209,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 274.20697,
          "zs_curdayflow": 2843.4375,
          "zs_totalflow": 594845.8
        },
        {
          "id": 10162576,
          "addtime": "2021-09-06 09:35:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 09:34:17",
          "cod": 8.391204,
          "ph": 6.846065,
          "an": 0.17650463,
          "tp": 0.09693287,
          "flow": 1735.2432,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 298.5726,
          "zs_curdayflow": 2853.3125,
          "zs_totalflow": 594855.7
        },
        {
          "id": 10162592,
          "addtime": "2021-09-06 09:37:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 09:36:17",
          "cod": 8.391204,
          "ph": 6.8420143,
          "an": 0.17650463,
          "tp": 0.09693287,
          "flow": 1706.5972,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 305.44757,
          "zs_curdayflow": 2863.3125,
          "zs_totalflow": 594865.7
        },
        {
          "id": 10162616,
          "addtime": "2021-09-06 09:39:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 09:38:17",
          "cod": 8.391204,
          "ph": 6.846065,
          "an": 0.17650463,
          "tp": 0.09693287,
          "flow": 1756.9443,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 289.54614,
          "zs_curdayflow": 2873.125,
          "zs_totalflow": 594875.5
        },
        {
          "id": 10162648,
          "addtime": "2021-09-06 09:41:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 09:40:17",
          "cod": 8.391204,
          "ph": 6.846065,
          "an": 0.17650463,
          "tp": 0.09693287,
          "flow": 1724.8263,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 297.96506,
          "zs_curdayflow": 2883.125,
          "zs_totalflow": 594885.5
        },
        {
          "id": 10162668,
          "addtime": "2021-09-06 09:43:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 09:42:17",
          "cod": 8.391204,
          "ph": 6.846065,
          "an": 0.17650463,
          "tp": 0.09693287,
          "flow": 1639.7568,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 302.89932,
          "zs_curdayflow": 2892.9375,
          "zs_totalflow": 594895.3
        },
        {
          "id": 10162704,
          "addtime": "2021-09-06 09:45:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 09:44:17",
          "cod": 8.391204,
          "ph": 6.846065,
          "an": 0.17650463,
          "tp": 0.09693287,
          "flow": 1698.7848,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 292.63675,
          "zs_curdayflow": 2902.75,
          "zs_totalflow": 594905.1
        },
        {
          "id": 10162736,
          "addtime": "2021-09-06 09:47:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 09:46:17",
          "cod": 8.391204,
          "ph": 6.846065,
          "an": 0.17650463,
          "tp": 0.09693287,
          "flow": 1652.7777,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 265.40927,
          "zs_curdayflow": 2912.3125,
          "zs_totalflow": 594914.7
        },
        {
          "id": 10162764,
          "addtime": "2021-09-06 09:49:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 09:48:17",
          "cod": 8.391204,
          "ph": 6.846065,
          "an": 0.17650463,
          "tp": 0.09693287,
          "flow": 1640.625,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 284.092,
          "zs_curdayflow": 2921.9375,
          "zs_totalflow": 594924.3
        },
        {
          "id": 10162780,
          "addtime": "2021-09-06 09:51:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 09:50:17",
          "cod": 8.391204,
          "ph": 6.846065,
          "an": 0.17650463,
          "tp": 0.09693287,
          "flow": 1529.5139,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 287.25638,
          "zs_curdayflow": 2931.625,
          "zs_totalflow": 594934
        },
        {
          "id": 10162832,
          "addtime": "2021-09-06 09:53:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 09:52:17",
          "cod": 8.391204,
          "ph": 6.846065,
          "an": 0.17650463,
          "tp": 0.09693287,
          "flow": 1558.1598,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 325.08948,
          "zs_curdayflow": 2941.5,
          "zs_totalflow": 594943.9
        },
        {
          "id": 10162844,
          "addtime": "2021-09-06 09:55:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 09:54:17",
          "cod": 8.391204,
          "ph": 6.846065,
          "an": 0.17650463,
          "tp": 0.09693287,
          "flow": 1606.7709,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 317.71432,
          "zs_curdayflow": 2951.625,
          "zs_totalflow": 594954
        },
        {
          "id": 10162888,
          "addtime": "2021-09-06 09:57:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 09:56:17",
          "cod": 8.391204,
          "ph": 6.846065,
          "an": 0.17650463,
          "tp": 0.09693287,
          "flow": 1696.1805,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 307.61316,
          "zs_curdayflow": 2962,
          "zs_totalflow": 594964.4
        },
        {
          "id": 10162908,
          "addtime": "2021-09-06 09:59:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 09:58:17",
          "cod": 8.391204,
          "ph": 6.846065,
          "an": 0.17650463,
          "tp": 0.09693287,
          "flow": 1654.5138,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 322.42426,
          "zs_curdayflow": 2972.5,
          "zs_totalflow": 594974.9
        },
        {
          "id": 10162936,
          "addtime": "2021-09-06 10:01:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 10:00:17",
          "cod": 8.391204,
          "ph": 6.846065,
          "an": 0.17650463,
          "tp": 0.09693287,
          "flow": 1574.6528,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 304.74323,
          "zs_curdayflow": 2982.625,
          "zs_totalflow": 594985
        },
        {
          "id": 10162948,
          "addtime": "2021-09-06 10:03:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 10:02:17",
          "cod": 8.391204,
          "ph": 6.846065,
          "an": 0.17650463,
          "tp": 0.09693287,
          "flow": 1677.0834,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 299.93274,
          "zs_curdayflow": 2993.25,
          "zs_totalflow": 594995.6
        },
        {
          "id": 10162988,
          "addtime": "2021-09-06 10:05:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 10:04:17",
          "cod": 8.391204,
          "ph": 6.846065,
          "an": 0.17650463,
          "tp": 0.09693287,
          "flow": 1559.8959,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 318.12503,
          "zs_curdayflow": 3003.75,
          "zs_totalflow": 595006.1
        },
        {
          "id": 10163024,
          "addtime": "2021-09-06 10:07:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 10:06:17",
          "cod": 8.391204,
          "ph": 6.8420143,
          "an": 0.17650463,
          "tp": 0.09693287,
          "flow": 1492.1875,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 319.1562,
          "zs_curdayflow": 3012.25,
          "zs_totalflow": 595014.6
        },
        {
          "id": 10163036,
          "addtime": "2021-09-06 10:09:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 10:08:17",
          "cod": 8.391204,
          "ph": 6.8420143,
          "an": 0.17650463,
          "tp": 0.09693287,
          "flow": 1626.7362,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 296.73087,
          "zs_curdayflow": 3024.5,
          "zs_totalflow": 595026.9
        },
        {
          "id": 10163064,
          "addtime": "2021-09-06 10:11:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 10:10:17",
          "cod": 8.391204,
          "ph": 6.846065,
          "an": 0.17650463,
          "tp": 0.09693287,
          "flow": 1590.2778,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 310.29135,
          "zs_curdayflow": 3034.5,
          "zs_totalflow": 595036.9
        },
        {
          "id": 10163088,
          "addtime": "2021-09-06 10:13:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 10:12:17",
          "cod": 8.391204,
          "ph": 6.846065,
          "an": 0.17650463,
          "tp": 0.09693287,
          "flow": 1539.9305,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 318.26477,
          "zs_curdayflow": 3040.9375,
          "zs_totalflow": 595043.3
        },
        {
          "id": 10163120,
          "addtime": "2021-09-06 10:15:21",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 10:14:17",
          "cod": 8.391204,
          "ph": 6.846065,
          "an": 0.17650463,
          "tp": 0.09693287,
          "flow": 1488.7153,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 356.33667,
          "zs_curdayflow": 3047.8125,
          "zs_totalflow": 595050.2
        },
        {
          "id": 10163164,
          "addtime": "2021-09-06 10:17:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 10:16:17",
          "cod": 8.391204,
          "ph": 6.846065,
          "an": 0.17650463,
          "tp": 0.09693287,
          "flow": 1572.9167,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 335.68008,
          "zs_curdayflow": 3067.4375,
          "zs_totalflow": 595069.8
        },
        {
          "id": 10163184,
          "addtime": "2021-09-06 10:19:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 10:18:17",
          "cod": 8.391204,
          "ph": 6.846065,
          "an": 0.17650463,
          "tp": 0.09693287,
          "flow": 1532.118,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 318.0724,
          "zs_curdayflow": 3078.5,
          "zs_totalflow": 595080.9
        },
        {
          "id": 10163204,
          "addtime": "2021-09-06 10:21:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 10:20:17",
          "cod": 8.391204,
          "ph": 6.846065,
          "an": 0.17650463,
          "tp": 0.09693287,
          "flow": 1631.9445,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 310.16623,
          "zs_curdayflow": 3089.25,
          "zs_totalflow": 595091.6
        },
        {
          "id": 10163240,
          "addtime": "2021-09-06 10:23:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 10:22:17",
          "cod": 8.391204,
          "ph": 6.846065,
          "an": 0.17650463,
          "tp": 0.09693287,
          "flow": 1598.0903,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 320.56393,
          "zs_curdayflow": 3099.9375,
          "zs_totalflow": 595102.3
        },
        {
          "id": 10163264,
          "addtime": "2021-09-06 10:25:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 10:24:17",
          "cod": 8.391204,
          "ph": 6.846065,
          "an": 0.17650463,
          "tp": 0.09693287,
          "flow": 1648.4375,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 306.31372,
          "zs_curdayflow": 3110.4375,
          "zs_totalflow": 595112.8
        },
        {
          "id": 10163296,
          "addtime": "2021-09-06 10:27:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 10:26:17",
          "cod": 8.391204,
          "ph": 6.846065,
          "an": 0.6221065,
          "tp": 0.09693287,
          "flow": 1563.368,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 318.85986,
          "zs_curdayflow": 3121.25,
          "zs_totalflow": 595123.6
        },
        {
          "id": 10163316,
          "addtime": "2021-09-06 10:29:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 10:28:17",
          "cod": 8.391204,
          "ph": 6.846065,
          "an": 0.6221065,
          "tp": 0.09693287,
          "flow": 1694.4445,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 308.07468,
          "zs_curdayflow": 3131.5,
          "zs_totalflow": 595133.9
        },
        {
          "id": 10163348,
          "addtime": "2021-09-06 10:31:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 10:30:18",
          "cod": 8.391204,
          "ph": 6.846065,
          "an": 0.6221065,
          "tp": 0.09693287,
          "flow": 1672.743,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 307.8065,
          "zs_curdayflow": 3141.75,
          "zs_totalflow": 595144.1
        },
        {
          "id": 10163372,
          "addtime": "2021-09-06 10:33:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 10:32:18",
          "cod": 8.391204,
          "ph": 6.846065,
          "an": 0.6221065,
          "tp": 0.09693287,
          "flow": 1677.0834,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 312.08676,
          "zs_curdayflow": 3151.8125,
          "zs_totalflow": 595154.2
        },
        {
          "id": 10163408,
          "addtime": "2021-09-06 10:35:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 10:34:18",
          "cod": 8.391204,
          "ph": 6.846065,
          "an": 0.6221065,
          "tp": 0.09693287,
          "flow": 1665.7986,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 284.59265,
          "zs_curdayflow": 3161.8125,
          "zs_totalflow": 595164.2
        },
        {
          "id": 10163440,
          "addtime": "2021-09-06 10:37:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 10:36:18",
          "cod": 8.391204,
          "ph": 6.846065,
          "an": 0.6221065,
          "tp": 0.09693287,
          "flow": 1758.6807,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 302.12296,
          "zs_curdayflow": 3171.625,
          "zs_totalflow": 595174
        },
        {
          "id": 10163460,
          "addtime": "2021-09-06 10:39:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 10:38:18",
          "cod": 8.391204,
          "ph": 6.846065,
          "an": 0.6221065,
          "tp": 0.09693287,
          "flow": 1739.5834,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 291.9703,
          "zs_curdayflow": 3181.5,
          "zs_totalflow": 595183.9
        },
        {
          "id": 10163480,
          "addtime": "2021-09-06 10:41:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 10:40:18",
          "cod": 8.391204,
          "ph": 6.846065,
          "an": 0.6221065,
          "tp": 0.09693287,
          "flow": 1815.1041,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 299.14258,
          "zs_curdayflow": 3191.5,
          "zs_totalflow": 595193.9
        },
        {
          "id": 10163512,
          "addtime": "2021-09-06 10:43:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 10:42:18",
          "cod": 8.391204,
          "ph": 6.846065,
          "an": 0.6221065,
          "tp": 0.09693287,
          "flow": 1757.8125,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 298.87027,
          "zs_curdayflow": 3201.125,
          "zs_totalflow": 595203.5
        },
        {
          "id": 10163544,
          "addtime": "2021-09-06 10:45:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 10:44:18",
          "cod": 8.391204,
          "ph": 6.846065,
          "an": 0.6221065,
          "tp": 0.09693287,
          "flow": 1809.8959,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 300.14087,
          "zs_curdayflow": 3211,
          "zs_totalflow": 595213.4
        },
        {
          "id": 10163572,
          "addtime": "2021-09-06 10:47:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 10:46:18",
          "cod": 8.391204,
          "ph": 6.846065,
          "an": 0.6221065,
          "tp": 0.09693287,
          "flow": 1798.6111,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 297.49652,
          "zs_curdayflow": 3221,
          "zs_totalflow": 595223.4
        },
        {
          "id": 10163604,
          "addtime": "2021-09-06 10:49:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 10:48:18",
          "cod": 8.159722,
          "ph": 6.846065,
          "an": 0.6221065,
          "tp": 0.09693287,
          "flow": 1801.2153,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 299.45557,
          "zs_curdayflow": 3230.75,
          "zs_totalflow": 595233.1
        },
        {
          "id": 10163628,
          "addtime": "2021-09-06 10:51:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 10:50:18",
          "cod": 8.159722,
          "ph": 6.846065,
          "an": 0.6221065,
          "tp": 0.09693287,
          "flow": 1822.0486,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 274.40054,
          "zs_curdayflow": 3240.4375,
          "zs_totalflow": 595242.8
        },
        {
          "id": 10163656,
          "addtime": "2021-09-06 10:53:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 10:52:18",
          "cod": 8.159722,
          "ph": 6.8420143,
          "an": 0.6221065,
          "tp": 0.09693287,
          "flow": 1857.6389,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 285.45963,
          "zs_curdayflow": 3250.125,
          "zs_totalflow": 595252.5
        },
        {
          "id": 10163692,
          "addtime": "2021-09-06 10:55:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 10:54:18",
          "cod": 8.159722,
          "ph": 6.846065,
          "an": 0.6221065,
          "tp": 0.09693287,
          "flow": 1837.6737,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 294.63794,
          "zs_curdayflow": 3260,
          "zs_totalflow": 595262.4
        },
        {
          "id": 10163724,
          "addtime": "2021-09-06 10:57:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 10:56:18",
          "cod": 8.159722,
          "ph": 6.846065,
          "an": 0.6221065,
          "tp": 0.09693287,
          "flow": 1874.1318,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 301.69955,
          "zs_curdayflow": 3269.8125,
          "zs_totalflow": 595272.2
        },
        {
          "id": 10163736,
          "addtime": "2021-09-06 10:59:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 10:58:18",
          "cod": 8.159722,
          "ph": 6.846065,
          "an": 0.6221065,
          "tp": 0.09693287,
          "flow": 1817.7084,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 308.9714,
          "zs_curdayflow": 3279.625,
          "zs_totalflow": 595282
        },
        {
          "id": 10163780,
          "addtime": "2021-09-06 11:01:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 11:00:18",
          "cod": 8.159722,
          "ph": 6.846065,
          "an": 0.6221065,
          "tp": 0.09693287,
          "flow": 1743.9237,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 274.6472,
          "zs_curdayflow": 3289.125,
          "zs_totalflow": 595291.5
        },
        {
          "id": 10163788,
          "addtime": "2021-09-06 11:03:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 11:02:18",
          "cod": 8.159722,
          "ph": 6.846065,
          "an": 0.6221065,
          "tp": 0.09693287,
          "flow": 1707.4653,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 300.82098,
          "zs_curdayflow": 3298.8125,
          "zs_totalflow": 595301.2
        },
        {
          "id": 10163820,
          "addtime": "2021-09-06 11:05:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 11:04:18",
          "cod": 8.159722,
          "ph": 6.846065,
          "an": 0.6221065,
          "tp": 0.09693287,
          "flow": 1745.6598,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 310.1856,
          "zs_curdayflow": 3308.625,
          "zs_totalflow": 595311
        },
        {
          "id": 10163856,
          "addtime": "2021-09-06 11:07:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 11:06:18",
          "cod": 8.159722,
          "ph": 6.8420143,
          "an": 0.6221065,
          "tp": 0.09693287,
          "flow": 1650.1737,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 291.04572,
          "zs_curdayflow": 3318.9375,
          "zs_totalflow": 595321.3
        },
        {
          "id": 10163880,
          "addtime": "2021-09-06 11:09:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 11:08:18",
          "cod": 8.159722,
          "ph": 6.846065,
          "an": 0.6221065,
          "tp": 0.09693287,
          "flow": 1620.6597,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 297.37784,
          "zs_curdayflow": 3329.5,
          "zs_totalflow": 595331.9
        },
        {
          "id": 10163914,
          "addtime": "2021-09-06 11:11:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 11:10:18",
          "cod": 8.159722,
          "ph": 6.846065,
          "an": 0.6221065,
          "tp": 0.09693287,
          "flow": 1631.0763,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 315.12833,
          "zs_curdayflow": 3339.8125,
          "zs_totalflow": 595342.2
        },
        {
          "id": 10163932,
          "addtime": "2021-09-06 11:13:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 11:12:18",
          "cod": 8.159722,
          "ph": 6.846065,
          "an": 0.6221065,
          "tp": 0.09693287,
          "flow": 1598.9584,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 298.53293,
          "zs_curdayflow": 3350,
          "zs_totalflow": 595352.4
        },
        {
          "id": 10163964,
          "addtime": "2021-09-06 11:15:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 11:14:18",
          "cod": 8.159722,
          "ph": 6.846065,
          "an": 0.6221065,
          "tp": 0.09693287,
          "flow": 1561.632,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 288.66122,
          "zs_curdayflow": 3360.25,
          "zs_totalflow": 595362.6
        },
        {
          "id": 10164000,
          "addtime": "2021-09-06 11:17:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 11:16:18",
          "cod": 8.159722,
          "ph": 6.846065,
          "an": 0.6221065,
          "tp": 0.09693287,
          "flow": 1622.3959,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 300.1484,
          "zs_curdayflow": 3370.75,
          "zs_totalflow": 595373.1
        },
        {
          "id": 10164036,
          "addtime": "2021-09-06 11:19:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 11:18:18",
          "cod": 8.159722,
          "ph": 6.846065,
          "an": 0.6221065,
          "tp": 0.09693287,
          "flow": 1553.8195,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 312.77078,
          "zs_curdayflow": 3381,
          "zs_totalflow": 595383.4
        },
        {
          "id": 10164052,
          "addtime": "2021-09-06 11:21:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 11:20:18",
          "cod": 8.159722,
          "ph": 6.846065,
          "an": 0.6221065,
          "tp": 0.09693287,
          "flow": 1641.4932,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 315.66052,
          "zs_curdayflow": 3391.8125,
          "zs_totalflow": 595394.2
        },
        {
          "id": 10164080,
          "addtime": "2021-09-06 11:23:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 11:22:18",
          "cod": 8.159722,
          "ph": 6.8420143,
          "an": 0.6221065,
          "tp": 0.09693287,
          "flow": 1631.9445,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 310.0671,
          "zs_curdayflow": 3402.3125,
          "zs_totalflow": 595404.7
        },
        {
          "id": 10164116,
          "addtime": "2021-09-06 11:25:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 11:24:18",
          "cod": 8.159722,
          "ph": 6.8420143,
          "an": 0.6221065,
          "tp": 0.09693287,
          "flow": 1593.75,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 294.42902,
          "zs_curdayflow": 3412.125,
          "zs_totalflow": 595414.5
        },
        {
          "id": 10164148,
          "addtime": "2021-09-06 11:27:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 11:26:18",
          "cod": 8.159722,
          "ph": 6.846065,
          "an": 0.6221065,
          "tp": 0.09693287,
          "flow": 1447.0486,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 288.1491,
          "zs_curdayflow": 3422.125,
          "zs_totalflow": 595424.5
        },
        {
          "id": 10164160,
          "addtime": "2021-09-06 11:29:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 11:28:18",
          "cod": 8.159722,
          "ph": 6.8420143,
          "an": 0.6221065,
          "tp": 0.09693287,
          "flow": 1502.6042,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 283.5991,
          "zs_curdayflow": 3432,
          "zs_totalflow": 595434.4
        },
        {
          "id": 10164184,
          "addtime": "2021-09-06 11:31:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 11:30:18",
          "cod": 8.159722,
          "ph": 6.8420143,
          "an": 0.6221065,
          "tp": 0.09693287,
          "flow": 1484.375,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 281.53256,
          "zs_curdayflow": 3441.8125,
          "zs_totalflow": 595444.2
        },
        {
          "id": 10164224,
          "addtime": "2021-09-06 11:33:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 11:32:18",
          "cod": 8.159722,
          "ph": 6.8420143,
          "an": 0.6221065,
          "tp": 0.09693287,
          "flow": 1494.7916,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 291.15442,
          "zs_curdayflow": 3451.9375,
          "zs_totalflow": 595454.3
        },
        {
          "id": 10164248,
          "addtime": "2021-09-06 11:35:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 11:34:18",
          "cod": 8.159722,
          "ph": 6.846065,
          "an": 0.6221065,
          "tp": 0.09693287,
          "flow": 1536.4584,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 302.28635,
          "zs_curdayflow": 3461.8125,
          "zs_totalflow": 595464.2
        },
        {
          "id": 10164272,
          "addtime": "2021-09-06 11:37:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 11:36:18",
          "cod": 8.159722,
          "ph": 6.8420143,
          "an": 0.6221065,
          "tp": 0.09693287,
          "flow": 1497.3959,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 291.20993,
          "zs_curdayflow": 3471.5,
          "zs_totalflow": 595473.9
        },
        {
          "id": 10164308,
          "addtime": "2021-09-06 11:39:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 11:38:18",
          "cod": 8.159722,
          "ph": 6.846065,
          "an": 0.6221065,
          "tp": 0.09693287,
          "flow": 1424.4791,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 285.2016,
          "zs_curdayflow": 3481.4375,
          "zs_totalflow": 595483.8
        },
        {
          "id": 10164320,
          "addtime": "2021-09-06 11:41:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 11:40:18",
          "cod": 8.159722,
          "ph": 6.846065,
          "an": 0.6221065,
          "tp": 0.09693287,
          "flow": 1481.7709,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 294.89432,
          "zs_curdayflow": 3491.125,
          "zs_totalflow": 595493.5
        },
        {
          "id": 10164352,
          "addtime": "2021-09-06 11:43:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 11:42:18",
          "cod": 8.159722,
          "ph": 6.846065,
          "an": 0.6221065,
          "tp": 0.09693287,
          "flow": 1527.7778,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 286.47128,
          "zs_curdayflow": 3500.75,
          "zs_totalflow": 595503.1
        },
        {
          "id": 10164384,
          "addtime": "2021-09-06 11:45:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 11:44:18",
          "cod": 8.159722,
          "ph": 6.8420143,
          "an": 0.6221065,
          "tp": 0.09693287,
          "flow": 1476.5625,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 290.28677,
          "zs_curdayflow": 3510.3125,
          "zs_totalflow": 595512.7
        },
        {
          "id": 10164408,
          "addtime": "2021-09-06 11:47:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 11:46:18",
          "cod": 8.159722,
          "ph": 6.846065,
          "an": 0.6221065,
          "tp": 0.09693287,
          "flow": 1474.8264,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 329.47845,
          "zs_curdayflow": 3520.8125,
          "zs_totalflow": 595523.2
        },
        {
          "id": 10164448,
          "addtime": "2021-09-06 11:49:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 11:48:18",
          "cod": 8.159722,
          "ph": 6.846065,
          "an": 0.6221065,
          "tp": 0.09693287,
          "flow": 1542.5347,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 343.3088,
          "zs_curdayflow": 3531.5,
          "zs_totalflow": 595533.9
        },
        {
          "id": 10164464,
          "addtime": "2021-09-06 11:51:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 11:50:18",
          "cod": 8.159722,
          "ph": 6.8420143,
          "an": 0.6221065,
          "tp": 0.09693287,
          "flow": 1455.7291,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 315.4527,
          "zs_curdayflow": 3542.25,
          "zs_totalflow": 595544.6
        },
        {
          "id": 10164488,
          "addtime": "2021-09-06 11:53:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 11:52:18",
          "cod": 8.159722,
          "ph": 6.846065,
          "an": 0.6221065,
          "tp": 0.09693287,
          "flow": 1510.4166,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 323.57187,
          "zs_curdayflow": 3552.625,
          "zs_totalflow": 595555
        },
        {
          "id": 10164520,
          "addtime": "2021-09-06 11:55:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 11:54:18",
          "cod": 8.159722,
          "ph": 6.8420143,
          "an": 0.6221065,
          "tp": 0.09693287,
          "flow": 1589.4097,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 304.6703,
          "zs_curdayflow": 3563.5,
          "zs_totalflow": 595565.9
        },
        {
          "id": 10164548,
          "addtime": "2021-09-06 11:57:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 11:56:18",
          "cod": 8.159722,
          "ph": 6.8420143,
          "an": 0.6221065,
          "tp": 0.09693287,
          "flow": 1496.5278,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 285.25925,
          "zs_curdayflow": 3573.8125,
          "zs_totalflow": 595576.2
        },
        {
          "id": 10164585,
          "addtime": "2021-09-06 11:59:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 11:58:18",
          "cod": 8.159722,
          "ph": 6.8420143,
          "an": 0.6221065,
          "tp": 0.09693287,
          "flow": 1518.2291,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 263.0783,
          "zs_curdayflow": 3583.5,
          "zs_totalflow": 595585.9
        },
        {
          "id": 10164608,
          "addtime": "2021-09-06 12:01:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 12:00:18",
          "cod": 8.159722,
          "ph": 6.8420143,
          "an": 0.6221065,
          "tp": 0.09693287,
          "flow": 1492.1875,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 298.01654,
          "zs_curdayflow": 3593.25,
          "zs_totalflow": 595595.6
        },
        {
          "id": 10164632,
          "addtime": "2021-09-06 12:03:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 12:02:18",
          "cod": 8.159722,
          "ph": 6.846065,
          "an": 0.6221065,
          "tp": 0.09693287,
          "flow": 1549.4792,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 294.0885,
          "zs_curdayflow": 3602.9375,
          "zs_totalflow": 595605.3
        },
        {
          "id": 10164660,
          "addtime": "2021-09-06 12:05:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 12:04:18",
          "cod": 8.159722,
          "ph": 6.846065,
          "an": 0.6221065,
          "tp": 0.09693287,
          "flow": 1526.9097,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 277.23788,
          "zs_curdayflow": 3612.625,
          "zs_totalflow": 595615
        },
        {
          "id": 10164696,
          "addtime": "2021-09-06 12:07:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 12:06:18",
          "cod": 8.159722,
          "ph": 6.846065,
          "an": 0.6221065,
          "tp": 0.09693287,
          "flow": 1549.4792,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 297.25375,
          "zs_curdayflow": 3622.25,
          "zs_totalflow": 595624.6
        },
        {
          "id": 10164720,
          "addtime": "2021-09-06 12:09:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 12:08:18",
          "cod": 8.159722,
          "ph": 6.846065,
          "an": 0.6221065,
          "tp": 0.09693287,
          "flow": 1481.7709,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 275.4697,
          "zs_curdayflow": 3632,
          "zs_totalflow": 595634.4
        },
        {
          "id": 10164748,
          "addtime": "2021-09-06 12:11:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 12:10:18",
          "cod": 8.159722,
          "ph": 6.846065,
          "an": 0.6221065,
          "tp": 0.09693287,
          "flow": 1510.4166,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 286.1043,
          "zs_curdayflow": 3641.3125,
          "zs_totalflow": 595643.7
        },
        {
          "id": 10164772,
          "addtime": "2021-09-06 12:13:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 12:12:18",
          "cod": 8.159722,
          "ph": 6.8420143,
          "an": 0.6221065,
          "tp": 0.09693287,
          "flow": 1529.5139,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 303.78128,
          "zs_curdayflow": 3651.25,
          "zs_totalflow": 595653.6
        },
        {
          "id": 10164812,
          "addtime": "2021-09-06 12:15:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 12:14:18",
          "cod": 8.159722,
          "ph": 6.8420143,
          "an": 0.6221065,
          "tp": 0.09693287,
          "flow": 1592.0139,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 281.63953,
          "zs_curdayflow": 3660.75,
          "zs_totalflow": 595663.1
        },
        {
          "id": 10164828,
          "addtime": "2021-09-06 12:17:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 12:16:18",
          "cod": 8.159722,
          "ph": 6.846065,
          "an": 0.6221065,
          "tp": 0.09693287,
          "flow": 1580.7291,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 301.6422,
          "zs_curdayflow": 3670.5,
          "zs_totalflow": 595672.9
        },
        {
          "id": 10164856,
          "addtime": "2021-09-06 12:19:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 12:18:18",
          "cod": 8.159722,
          "ph": 6.846065,
          "an": 0.6221065,
          "tp": 0.09693287,
          "flow": 1583.3334,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 306.54688,
          "zs_curdayflow": 3680.3125,
          "zs_totalflow": 595682.7
        },
        {
          "id": 10164904,
          "addtime": "2021-09-06 12:21:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 12:20:18",
          "cod": 8.159722,
          "ph": 6.8420143,
          "an": 0.6221065,
          "tp": 0.09693287,
          "flow": 1613.7153,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 303.18195,
          "zs_curdayflow": 3690,
          "zs_totalflow": 595692.4
        },
        {
          "id": 10164928,
          "addtime": "2021-09-06 12:23:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 12:22:18",
          "cod": 8.159722,
          "ph": 6.8420143,
          "an": 0.6221065,
          "tp": 0.09693287,
          "flow": 1553.8195,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 276.72958,
          "zs_curdayflow": 3699.75,
          "zs_totalflow": 595702.1
        },
        {
          "id": 10164936,
          "addtime": "2021-09-06 12:25:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 12:24:18",
          "cod": 8.159722,
          "ph": 6.846065,
          "an": 0.6221065,
          "tp": 0.09693287,
          "flow": 1629.3402,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 295.45795,
          "zs_curdayflow": 3709.625,
          "zs_totalflow": 595712
        },
        {
          "id": 10164964,
          "addtime": "2021-09-06 12:27:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 12:26:18",
          "cod": 8.159722,
          "ph": 6.8420143,
          "an": 0.8420139,
          "tp": 0.09693287,
          "flow": 1557.2916,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 278.88535,
          "zs_curdayflow": 3719.4375,
          "zs_totalflow": 595721.8
        },
        {
          "id": 10165004,
          "addtime": "2021-09-06 12:29:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 12:28:18",
          "cod": 8.159722,
          "ph": 6.846065,
          "an": 0.8420139,
          "tp": 0.09693287,
          "flow": 1658.8541,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 287.92838,
          "zs_curdayflow": 3729.25,
          "zs_totalflow": 595731.6
        },
        {
          "id": 10165028,
          "addtime": "2021-09-06 12:31:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 12:30:18",
          "cod": 8.159722,
          "ph": 6.846065,
          "an": 0.8420139,
          "tp": 0.09693287,
          "flow": 1581.5973,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 302.43286,
          "zs_curdayflow": 3738.75,
          "zs_totalflow": 595741.1
        },
        {
          "id": 10165056,
          "addtime": "2021-09-06 12:33:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 12:32:18",
          "cod": 8.159722,
          "ph": 6.846065,
          "an": 0.8420139,
          "tp": 0.09693287,
          "flow": 1658.8541,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 300.85352,
          "zs_curdayflow": 3748.75,
          "zs_totalflow": 595751.1
        },
        {
          "id": 10165096,
          "addtime": "2021-09-06 12:35:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 12:34:18",
          "cod": 8.159722,
          "ph": 6.846065,
          "an": 0.8420139,
          "tp": 0.09693287,
          "flow": 1658.8541,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 298.88266,
          "zs_curdayflow": 3758.3125,
          "zs_totalflow": 595760.7
        },
        {
          "id": 10165116,
          "addtime": "2021-09-06 12:37:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 12:36:18",
          "cod": 8.159722,
          "ph": 6.846065,
          "an": 0.8420139,
          "tp": 0.10706019,
          "flow": 1609.375,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 296.24924,
          "zs_curdayflow": 3768.25,
          "zs_totalflow": 595770.6
        },
        {
          "id": 10165136,
          "addtime": "2021-09-06 12:39:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 12:38:18",
          "cod": 8.159722,
          "ph": 6.846065,
          "an": 0.8420139,
          "tp": 0.10706019,
          "flow": 1611.1111,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 289.6512,
          "zs_curdayflow": 3777.9375,
          "zs_totalflow": 595780.3
        },
        {
          "id": 10165168,
          "addtime": "2021-09-06 12:41:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 12:40:18",
          "cod": 8.159722,
          "ph": 6.846065,
          "an": 0.8420139,
          "tp": 0.10706019,
          "flow": 1576.3889,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 302.10803,
          "zs_curdayflow": 3787.9375,
          "zs_totalflow": 595790.3
        },
        {
          "id": 10165192,
          "addtime": "2021-09-06 12:43:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 12:42:18",
          "cod": 8.159722,
          "ph": 6.846065,
          "an": 0.8420139,
          "tp": 0.10706019,
          "flow": 1577.257,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 298.8808,
          "zs_curdayflow": 3797.5,
          "zs_totalflow": 595799.9
        },
        {
          "id": 10165220,
          "addtime": "2021-09-06 12:45:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 12:44:18",
          "cod": 8.159722,
          "ph": 6.846065,
          "an": 0.8420139,
          "tp": 0.10706019,
          "flow": 1585.9375,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 282.11176,
          "zs_curdayflow": 3807.25,
          "zs_totalflow": 595809.6
        },
        {
          "id": 10165252,
          "addtime": "2021-09-06 12:47:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 12:46:18",
          "cod": 8.159722,
          "ph": 6.846065,
          "an": 0.8420139,
          "tp": 0.10706019,
          "flow": 1694.4445,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 301.50815,
          "zs_curdayflow": 3817.125,
          "zs_totalflow": 595819.5
        },
        {
          "id": 10165292,
          "addtime": "2021-09-06 12:49:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 12:48:18",
          "cod": 8.506945,
          "ph": 6.8420143,
          "an": 0.8420139,
          "tp": 0.10706019,
          "flow": 1690.1042,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 297.30707,
          "zs_curdayflow": 3826.625,
          "zs_totalflow": 595829
        },
        {
          "id": 10165304,
          "addtime": "2021-09-06 12:51:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 12:50:18",
          "cod": 8.506945,
          "ph": 6.846065,
          "an": 0.8420139,
          "tp": 0.10706019,
          "flow": 1696.1805,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 285.89398,
          "zs_curdayflow": 3836.5,
          "zs_totalflow": 595838.9
        },
        {
          "id": 10165352,
          "addtime": "2021-09-06 12:53:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 12:52:18",
          "cod": 8.506945,
          "ph": 6.8420143,
          "an": 0.8420139,
          "tp": 0.10706019,
          "flow": 1646.7014,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 300.31937,
          "zs_curdayflow": 3846.25,
          "zs_totalflow": 595848.6
        },
        {
          "id": 10165372,
          "addtime": "2021-09-06 12:55:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 12:54:18",
          "cod": 8.506945,
          "ph": 6.846065,
          "an": 0.8420139,
          "tp": 0.10706019,
          "flow": 1546.0068,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 277.82626,
          "zs_curdayflow": 3856,
          "zs_totalflow": 595858.4
        },
        {
          "id": 10165384,
          "addtime": "2021-09-06 12:57:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 12:56:18",
          "cod": 8.506945,
          "ph": 6.8420143,
          "an": 0.8420139,
          "tp": 0.10706019,
          "flow": 1626.7362,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 302.34662,
          "zs_curdayflow": 3865.5,
          "zs_totalflow": 595867.9
        },
        {
          "id": 10165416,
          "addtime": "2021-09-06 12:59:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 12:58:18",
          "cod": 8.506945,
          "ph": 6.8420143,
          "an": 0.8420139,
          "tp": 0.10706019,
          "flow": 1667.5347,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 296.1277,
          "zs_curdayflow": 3875.25,
          "zs_totalflow": 595877.6
        },
        {
          "id": 10165456,
          "addtime": "2021-09-06 13:01:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 13:00:18",
          "cod": 8.506945,
          "ph": 6.846065,
          "an": 0.8420139,
          "tp": 0.10706019,
          "flow": 1625,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 277.15628,
          "zs_curdayflow": 3884.9375,
          "zs_totalflow": 595887.3
        },
        {
          "id": 10165472,
          "addtime": "2021-09-06 13:03:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 13:02:18",
          "cod": 8.506945,
          "ph": 6.846065,
          "an": 0.8420139,
          "tp": 0.10706019,
          "flow": 1633.6805,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 301.4828,
          "zs_curdayflow": 3894.8125,
          "zs_totalflow": 595897.2
        },
        {
          "id": 10165500,
          "addtime": "2021-09-06 13:05:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 13:04:18",
          "cod": 8.506945,
          "ph": 6.8420143,
          "an": 0.8420139,
          "tp": 0.10706019,
          "flow": 1670.1389,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 306.66794,
          "zs_curdayflow": 3904.4375,
          "zs_totalflow": 595906.8
        },
        {
          "id": 10165540,
          "addtime": "2021-09-06 13:07:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 13:06:18",
          "cod": 8.506945,
          "ph": 6.8420143,
          "an": 0.8420139,
          "tp": 0.10706019,
          "flow": 1550.3472,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 298.5511,
          "zs_curdayflow": 3914.25,
          "zs_totalflow": 595916.6
        },
        {
          "id": 10165556,
          "addtime": "2021-09-06 13:09:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 13:08:18",
          "cod": 8.506945,
          "ph": 6.846065,
          "an": 0.8420139,
          "tp": 0.10706019,
          "flow": 1629.3402,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 294.33636,
          "zs_curdayflow": 3923.9375,
          "zs_totalflow": 595926.3
        },
        {
          "id": 10165584,
          "addtime": "2021-09-06 13:11:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 13:10:18",
          "cod": 8.506945,
          "ph": 6.846065,
          "an": 0.8420139,
          "tp": 0.10706019,
          "flow": 1657.9861,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 294.0102,
          "zs_curdayflow": 3933.4375,
          "zs_totalflow": 595935.8
        },
        {
          "id": 10165612,
          "addtime": "2021-09-06 13:13:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 13:12:18",
          "cod": 8.506945,
          "ph": 6.846065,
          "an": 0.8420139,
          "tp": 0.10706019,
          "flow": 1598.0903,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 293.8722,
          "zs_curdayflow": 3943,
          "zs_totalflow": 595945.4
        },
        {
          "id": 10165660,
          "addtime": "2021-09-06 13:15:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 13:14:18",
          "cod": 8.506945,
          "ph": 6.846065,
          "an": 0.8420139,
          "tp": 0.10706019,
          "flow": 1652.7777,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 266.79208,
          "zs_curdayflow": 3952.75,
          "zs_totalflow": 595955.1
        },
        {
          "id": 10165680,
          "addtime": "2021-09-06 13:17:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 13:16:18",
          "cod": 8.506945,
          "ph": 6.846065,
          "an": 0.8420139,
          "tp": 0.10706019,
          "flow": 1613.7153,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 274.0506,
          "zs_curdayflow": 3962.5,
          "zs_totalflow": 595964.9
        },
        {
          "id": 10165704,
          "addtime": "2021-09-06 13:19:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 13:18:18",
          "cod": 8.506945,
          "ph": 6.846065,
          "an": 0.8420139,
          "tp": 0.10706019,
          "flow": 1657.118,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 297.83786,
          "zs_curdayflow": 3972.125,
          "zs_totalflow": 595974.5
        },
        {
          "id": 10165728,
          "addtime": "2021-09-06 13:21:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 13:20:18",
          "cod": 8.506945,
          "ph": 6.8420143,
          "an": 0.8420139,
          "tp": 0.10706019,
          "flow": 1651.0416,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 297.04385,
          "zs_curdayflow": 3982,
          "zs_totalflow": 595984.4
        },
        {
          "id": 10165756,
          "addtime": "2021-09-06 13:23:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 13:22:19",
          "cod": 8.506945,
          "ph": 6.8420143,
          "an": 0.8420139,
          "tp": 0.10706019,
          "flow": 1551.2153,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 289.85114,
          "zs_curdayflow": 3991.75,
          "zs_totalflow": 595994.1
        },
        {
          "id": 10165796,
          "addtime": "2021-09-06 13:25:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 13:24:19",
          "cod": 8.506945,
          "ph": 6.8420143,
          "an": 0.8420139,
          "tp": 0.10706019,
          "flow": 1670.1389,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 297.70227,
          "zs_curdayflow": 4001.4375,
          "zs_totalflow": 596003.8
        },
        {
          "id": 10165808,
          "addtime": "2021-09-06 13:27:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 13:26:19",
          "cod": 8.506945,
          "ph": 6.846065,
          "an": 0.8420139,
          "tp": 0.10706019,
          "flow": 1701.3888,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 271.5923,
          "zs_curdayflow": 4011.4375,
          "zs_totalflow": 596013.8
        },
        {
          "id": 10165836,
          "addtime": "2021-09-06 13:29:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 13:28:19",
          "cod": 8.506945,
          "ph": 6.846065,
          "an": 0.8420139,
          "tp": 0.10706019,
          "flow": 1626.7362,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 284.1945,
          "zs_curdayflow": 4021.125,
          "zs_totalflow": 596023.5
        },
        {
          "id": 10165864,
          "addtime": "2021-09-06 13:31:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 13:30:19",
          "cod": 8.506945,
          "ph": 6.8420143,
          "an": 0.8420139,
          "tp": 0.10706019,
          "flow": 1640.625,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 302.0043,
          "zs_curdayflow": 4030.75,
          "zs_totalflow": 596033.1
        },
        {
          "id": 10165912,
          "addtime": "2021-09-06 13:33:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 13:32:19",
          "cod": 8.506945,
          "ph": 6.846065,
          "an": 0.8420139,
          "tp": 0.10706019,
          "flow": 1551.2153,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 310.87283,
          "zs_curdayflow": 4040.5,
          "zs_totalflow": 596042.9
        },
        {
          "id": 10165928,
          "addtime": "2021-09-06 13:35:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 13:34:19",
          "cod": 8.622685,
          "ph": 6.846065,
          "an": 0.8420139,
          "tp": 0.10706019,
          "flow": 1614.5833,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 293.91272,
          "zs_curdayflow": 4050.125,
          "zs_totalflow": 596052.5
        },
        {
          "id": 10165952,
          "addtime": "2021-09-06 13:37:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 13:36:19",
          "cod": 8.506945,
          "ph": 6.8420143,
          "an": 0.8420139,
          "tp": 0.10706019,
          "flow": 1707.4653,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 298.3774,
          "zs_curdayflow": 4059.9375,
          "zs_totalflow": 596062.3
        },
        {
          "id": 10165992,
          "addtime": "2021-09-06 13:39:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 13:38:19",
          "cod": 8.506945,
          "ph": 6.8420143,
          "an": 0.8420139,
          "tp": 0.10706019,
          "flow": 1606.7709,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 279.02676,
          "zs_curdayflow": 4069.625,
          "zs_totalflow": 596072
        },
        {
          "id": 10166004,
          "addtime": "2021-09-06 13:41:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 13:40:19",
          "cod": 8.622685,
          "ph": 6.846065,
          "an": 0.8420139,
          "tp": 0.10706019,
          "flow": 1613.7153,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 266.26813,
          "zs_curdayflow": 4079.125,
          "zs_totalflow": 596081.5
        },
        {
          "id": 10166028,
          "addtime": "2021-09-06 13:43:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 13:42:19",
          "cod": 8.622685,
          "ph": 6.846065,
          "an": 0.8420139,
          "tp": 0.10706019,
          "flow": 1571.1807,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 288.34427,
          "zs_curdayflow": 4088.75,
          "zs_totalflow": 596091.1
        },
        {
          "id": 10166060,
          "addtime": "2021-09-06 13:45:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 13:44:19",
          "cod": 8.622685,
          "ph": 6.846065,
          "an": 0.8420139,
          "tp": 0.10706019,
          "flow": 1575.5209,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 282.21515,
          "zs_curdayflow": 4098.4375,
          "zs_totalflow": 596100.8
        },
        {
          "id": 10166100,
          "addtime": "2021-09-06 13:47:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 13:46:19",
          "cod": 8.622685,
          "ph": 6.846065,
          "an": 0.8420139,
          "tp": 0.10706019,
          "flow": 1690.1042,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 285.71753,
          "zs_curdayflow": 4108.125,
          "zs_totalflow": 596110.5
        },
        {
          "id": 10166124,
          "addtime": "2021-09-06 13:49:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 13:48:19",
          "cod": 8.622685,
          "ph": 6.846065,
          "an": 0.8420139,
          "tp": 0.10706019,
          "flow": 1540.7986,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 265.69952,
          "zs_curdayflow": 4117.625,
          "zs_totalflow": 596120
        },
        {
          "id": 10166152,
          "addtime": "2021-09-06 13:51:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 13:50:19",
          "cod": 8.622685,
          "ph": 6.846065,
          "an": 0.8420139,
          "tp": 0.10706019,
          "flow": 1538.1945,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 286.424,
          "zs_curdayflow": 4127.4375,
          "zs_totalflow": 596129.8
        },
        {
          "id": 10166184,
          "addtime": "2021-09-06 13:53:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 13:52:19",
          "cod": 8.622685,
          "ph": 6.846065,
          "an": 0.8420139,
          "tp": 0.10706019,
          "flow": 1502.6042,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 298.08652,
          "zs_curdayflow": 4137.25,
          "zs_totalflow": 596139.6
        },
        {
          "id": 10166220,
          "addtime": "2021-09-06 13:55:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 13:54:19",
          "cod": 8.622685,
          "ph": 6.846065,
          "an": 0.8420139,
          "tp": 0.10706019,
          "flow": 1578.993,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 327.06277,
          "zs_curdayflow": 4147.4375,
          "zs_totalflow": 596149.8
        },
        {
          "id": 10166224,
          "addtime": "2021-09-06 13:57:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 13:56:19",
          "cod": 8.506945,
          "ph": 6.8420143,
          "an": 0.8420139,
          "tp": 0.10706019,
          "flow": 1428.8195,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 307.46698,
          "zs_curdayflow": 4157.8125,
          "zs_totalflow": 596160.2
        },
        {
          "id": 10166276,
          "addtime": "2021-09-06 13:59:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 13:58:19",
          "cod": 8.506945,
          "ph": 6.846065,
          "an": 0.8420139,
          "tp": 0.10706019,
          "flow": 1502.6042,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 316.89996,
          "zs_curdayflow": 4168.25,
          "zs_totalflow": 596170.6
        },
        {
          "id": 10166288,
          "addtime": "2021-09-06 14:01:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 14:00:19",
          "cod": 8.506945,
          "ph": 6.8420143,
          "an": 0.8420139,
          "tp": 0.10706019,
          "flow": 1444.4445,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 326.94992,
          "zs_curdayflow": 4178.4375,
          "zs_totalflow": 596180.8
        },
        {
          "id": 10166312,
          "addtime": "2021-09-06 14:03:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 14:02:19",
          "cod": 8.622685,
          "ph": 6.8420143,
          "an": 0.8420139,
          "tp": 0.10706019,
          "flow": 1406.25,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 308.2115,
          "zs_curdayflow": 4188.8125,
          "zs_totalflow": 596191.2
        },
        {
          "id": 10166336,
          "addtime": "2021-09-06 14:05:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 14:04:19",
          "cod": 8.506945,
          "ph": 6.8420143,
          "an": 0.8420139,
          "tp": 0.10706019,
          "flow": 1437.5,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 311.3992,
          "zs_curdayflow": 4199.3125,
          "zs_totalflow": 596201.7
        },
        {
          "id": 10166376,
          "addtime": "2021-09-06 14:07:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 14:06:19",
          "cod": 8.506945,
          "ph": 6.8420143,
          "an": 0.8420139,
          "tp": 0.10706019,
          "flow": 1440.1041,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 314.7684,
          "zs_curdayflow": 4209.75,
          "zs_totalflow": 596212.1
        },
        {
          "id": 10166400,
          "addtime": "2021-09-06 14:09:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 14:08:19",
          "cod": 8.622685,
          "ph": 6.8420143,
          "an": 0.8420139,
          "tp": 0.10706019,
          "flow": 1472.2223,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 298.78555,
          "zs_curdayflow": 4220.125,
          "zs_totalflow": 596222.5
        },
        {
          "id": 10166436,
          "addtime": "2021-09-06 14:11:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 14:10:19",
          "cod": 8.506945,
          "ph": 6.8420143,
          "an": 0.8420139,
          "tp": 0.10706019,
          "flow": 1361.9791,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 319.82977,
          "zs_curdayflow": 4230.75,
          "zs_totalflow": 596233.1
        },
        {
          "id": 10166452,
          "addtime": "2021-09-06 14:13:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 14:12:19",
          "cod": 8.622685,
          "ph": 6.8420143,
          "an": 0.8420139,
          "tp": 0.10706019,
          "flow": 1486.1111,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 298.67953,
          "zs_curdayflow": 4241.25,
          "zs_totalflow": 596243.6
        },
        {
          "id": 10166500,
          "addtime": "2021-09-06 14:15:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 14:14:19",
          "cod": 8.622685,
          "ph": 6.8420143,
          "an": 0.8420139,
          "tp": 0.10706019,
          "flow": 1398.4375,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 282.4445,
          "zs_curdayflow": 4251,
          "zs_totalflow": 596253.4
        },
        {
          "id": 10166508,
          "addtime": "2021-09-06 14:17:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 14:16:19",
          "cod": 8.622685,
          "ph": 6.8420143,
          "an": 0.8420139,
          "tp": 0.10706019,
          "flow": 1459.2014,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 280.58298,
          "zs_curdayflow": 4260.9375,
          "zs_totalflow": 596263.3
        },
        {
          "id": 10166536,
          "addtime": "2021-09-06 14:19:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 14:18:19",
          "cod": 8.622685,
          "ph": 6.846065,
          "an": 0.8420139,
          "tp": 0.10706019,
          "flow": 1520.8333,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 301.58743,
          "zs_curdayflow": 4270.625,
          "zs_totalflow": 596273
        },
        {
          "id": 10166572,
          "addtime": "2021-09-06 14:21:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 14:20:19",
          "cod": 8.506945,
          "ph": 6.8420143,
          "an": 0.8420139,
          "tp": 0.10706019,
          "flow": 1442.7084,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 314.69168,
          "zs_curdayflow": 4280.4375,
          "zs_totalflow": 596282.8
        },
        {
          "id": 10166608,
          "addtime": "2021-09-06 14:23:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 14:22:19",
          "cod": 8.506945,
          "ph": 6.846065,
          "an": 0.8420139,
          "tp": 0.10706019,
          "flow": 1447.0486,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 299.19223,
          "zs_curdayflow": 4290.125,
          "zs_totalflow": 596292.5
        },
        {
          "id": 10166616,
          "addtime": "2021-09-06 14:25:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 14:24:19",
          "cod": 8.506945,
          "ph": 6.8420143,
          "an": 0.8420139,
          "tp": 0.10706019,
          "flow": 1506.9445,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 297.54044,
          "zs_curdayflow": 4300,
          "zs_totalflow": 596302.4
        },
        {
          "id": 10166664,
          "addtime": "2021-09-06 14:27:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 14:26:19",
          "cod": 8.506945,
          "ph": 6.8420143,
          "an": 0.8217592,
          "tp": 0.10706019,
          "flow": 1448.7848,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 302.10474,
          "zs_curdayflow": 4309.8125,
          "zs_totalflow": 596312.2
        },
        {
          "id": 10166684,
          "addtime": "2021-09-06 14:29:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 14:28:19",
          "cod": 8.506945,
          "ph": 6.8420143,
          "an": 0.8217592,
          "tp": 0.10706019,
          "flow": 1428.8195,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 317.8231,
          "zs_curdayflow": 4320,
          "zs_totalflow": 596322.4
        },
        {
          "id": 10166708,
          "addtime": "2021-09-06 14:31:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 14:30:19",
          "cod": 8.506945,
          "ph": 6.8420143,
          "an": 0.8217592,
          "tp": 0.10706019,
          "flow": 1410.5902,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 308.00687,
          "zs_curdayflow": 4330.4375,
          "zs_totalflow": 596332.8
        },
        {
          "id": 10166732,
          "addtime": "2021-09-06 14:33:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 14:32:19",
          "cod": 8.506945,
          "ph": 6.846065,
          "an": 0.8217592,
          "tp": 0.10706019,
          "flow": 1493.9236,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 321.94986,
          "zs_curdayflow": 4340.8125,
          "zs_totalflow": 596343.2
        },
        {
          "id": 10166772,
          "addtime": "2021-09-06 14:35:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 14:34:19",
          "cod": 8.506945,
          "ph": 6.8420143,
          "an": 0.8217592,
          "tp": 0.10706019,
          "flow": 1376.7361,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 313.10864,
          "zs_curdayflow": 4351.125,
          "zs_totalflow": 596353.5
        },
        {
          "id": 10166788,
          "addtime": "2021-09-06 14:37:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 14:36:19",
          "cod": 8.506945,
          "ph": 6.8420143,
          "an": 0.8217592,
          "tp": 0.09693287,
          "flow": 1450.5209,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 329.51282,
          "zs_curdayflow": 4361.25,
          "zs_totalflow": 596363.6
        },
        {
          "id": 10166832,
          "addtime": "2021-09-06 14:39:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 14:38:19",
          "cod": 8.506945,
          "ph": 6.8420143,
          "an": 0.8217592,
          "tp": 0.09693287,
          "flow": 1453.125,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 321.6674,
          "zs_curdayflow": 4371.75,
          "zs_totalflow": 596374.1
        },
        {
          "id": 10166864,
          "addtime": "2021-09-06 14:41:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 14:40:19",
          "cod": 8.506945,
          "ph": 6.8420143,
          "an": 0.8217592,
          "tp": 0.09693287,
          "flow": 1463.5416,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 315.13953,
          "zs_curdayflow": 4382.4375,
          "zs_totalflow": 596384.8
        },
        {
          "id": 10166884,
          "addtime": "2021-09-06 14:43:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 14:42:19",
          "cod": 8.506945,
          "ph": 6.8420143,
          "an": 0.8217592,
          "tp": 0.09693287,
          "flow": 1453.993,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 304.29358,
          "zs_curdayflow": 4392.4375,
          "zs_totalflow": 596394.8
        },
        {
          "id": 10166912,
          "addtime": "2021-09-06 14:45:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 14:44:19",
          "cod": 8.506945,
          "ph": 6.8420143,
          "an": 0.8217592,
          "tp": 0.09693287,
          "flow": 1472.2223,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 270.3988,
          "zs_curdayflow": 4402,
          "zs_totalflow": 596404.4
        },
        {
          "id": 10166928,
          "addtime": "2021-09-06 14:47:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 14:46:19",
          "cod": 8.506945,
          "ph": 6.8420143,
          "an": 0.8217592,
          "tp": 0.09693287,
          "flow": 1551.2153,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 306.12973,
          "zs_curdayflow": 4411.625,
          "zs_totalflow": 596414
        },
        {
          "id": 10166960,
          "addtime": "2021-09-06 14:49:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 14:48:19",
          "cod": 8.506945,
          "ph": 6.8420143,
          "an": 0.8217592,
          "tp": 0.09693287,
          "flow": 1493.0555,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 285.17703,
          "zs_curdayflow": 4421.75,
          "zs_totalflow": 596424.1
        },
        {
          "id": 10166992,
          "addtime": "2021-09-06 14:51:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 14:50:19",
          "cod": 8.506945,
          "ph": 6.8420143,
          "an": 0.8217592,
          "tp": 0.09693287,
          "flow": 1462.6736,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 280.9831,
          "zs_curdayflow": 4431.625,
          "zs_totalflow": 596434
        },
        {
          "id": 10167012,
          "addtime": "2021-09-06 14:53:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 14:52:19",
          "cod": 8.506945,
          "ph": 6.8420143,
          "an": 0.8217592,
          "tp": 0.09693287,
          "flow": 1512.1527,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 295.47165,
          "zs_curdayflow": 4441.3125,
          "zs_totalflow": 596443.7
        },
        {
          "id": 10167060,
          "addtime": "2021-09-06 14:55:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 14:54:19",
          "cod": 8.506945,
          "ph": 6.8420143,
          "an": 0.8217592,
          "tp": 0.09693287,
          "flow": 1487.8472,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 300.62714,
          "zs_curdayflow": 4451,
          "zs_totalflow": 596453.4
        },
        {
          "id": 10167084,
          "addtime": "2021-09-06 14:57:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 14:56:19",
          "cod": 8.506945,
          "ph": 6.846065,
          "an": 0.8217592,
          "tp": 0.09693287,
          "flow": 1516.493,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 298.64417,
          "zs_curdayflow": 4460.9375,
          "zs_totalflow": 596463.3
        },
        {
          "id": 10167092,
          "addtime": "2021-09-06 14:59:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 14:58:19",
          "cod": 8.506945,
          "ph": 6.846065,
          "an": 0.8217592,
          "tp": 0.09693287,
          "flow": 1474.8264,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 299.3937,
          "zs_curdayflow": 4470.625,
          "zs_totalflow": 596473
        },
        {
          "id": 10167128,
          "addtime": "2021-09-06 15:01:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 15:00:19",
          "cod": 8.506945,
          "ph": 6.8420143,
          "an": 0.8217592,
          "tp": 0.09693287,
          "flow": 1525.1736,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 294.92728,
          "zs_curdayflow": 4480.4375,
          "zs_totalflow": 596482.8
        },
        {
          "id": 10167156,
          "addtime": "2021-09-06 15:03:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 15:02:19",
          "cod": 8.622685,
          "ph": 6.8420143,
          "an": 0.8217592,
          "tp": 0.09693287,
          "flow": 1453.125,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 282.83533,
          "zs_curdayflow": 4490.125,
          "zs_totalflow": 596492.5
        },
        {
          "id": 10167196,
          "addtime": "2021-09-06 15:05:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 15:04:19",
          "cod": 8.622685,
          "ph": 6.8420143,
          "an": 0.8217592,
          "tp": 0.09693287,
          "flow": 1545.1389,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 295.2661,
          "zs_curdayflow": 4500.125,
          "zs_totalflow": 596502.5
        },
        {
          "id": 10167216,
          "addtime": "2021-09-06 15:07:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 15:06:19",
          "cod": 8.506945,
          "ph": 6.8420143,
          "an": 0.8217592,
          "tp": 0.09693287,
          "flow": 1501.7361,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 299.83533,
          "zs_curdayflow": 4509.8125,
          "zs_totalflow": 596512.2
        },
        {
          "id": 10167252,
          "addtime": "2021-09-06 15:09:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 15:08:19",
          "cod": 8.506945,
          "ph": 6.8420143,
          "an": 0.8217592,
          "tp": 0.09693287,
          "flow": 1510.4166,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 296.06247,
          "zs_curdayflow": 4519.625,
          "zs_totalflow": 596522
        },
        {
          "id": 10167264,
          "addtime": "2021-09-06 15:11:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 15:10:19",
          "cod": 8.506945,
          "ph": 6.8420143,
          "an": 0.8217592,
          "tp": 0.09693287,
          "flow": 1597.2222,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 312.24545,
          "zs_curdayflow": 4529.5,
          "zs_totalflow": 596531.9
        },
        {
          "id": 10167288,
          "addtime": "2021-09-06 15:13:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 15:12:19",
          "cod": 8.506945,
          "ph": 6.8420143,
          "an": 0.8217592,
          "tp": 0.09693287,
          "flow": 1518.2291,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 309.21497,
          "zs_curdayflow": 4539.3125,
          "zs_totalflow": 596541.7
        },
        {
          "id": 10167332,
          "addtime": "2021-09-06 15:15:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 15:14:19",
          "cod": 8.622685,
          "ph": 6.8420143,
          "an": 0.8217592,
          "tp": 0.09693287,
          "flow": 1507.8125,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 294.19092,
          "zs_curdayflow": 4549.3125,
          "zs_totalflow": 596551.7
        },
        {
          "id": 10167356,
          "addtime": "2021-09-06 15:17:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 15:16:19",
          "cod": 8.506945,
          "ph": 6.8420143,
          "an": 0.8217592,
          "tp": 0.09693287,
          "flow": 1561.632,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 302.00333,
          "zs_curdayflow": 4559,
          "zs_totalflow": 596561.4
        },
        {
          "id": 10167384,
          "addtime": "2021-09-06 15:19:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 15:18:19",
          "cod": 8.506945,
          "ph": 6.8420143,
          "an": 0.8217592,
          "tp": 0.09693287,
          "flow": 1511.2848,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 290.4419,
          "zs_curdayflow": 4568.8125,
          "zs_totalflow": 596571.2
        },
        {
          "id": 10167408,
          "addtime": "2021-09-06 15:21:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 15:20:19",
          "cod": 8.506945,
          "ph": 6.8420143,
          "an": 0.8217592,
          "tp": 0.09693287,
          "flow": 1529.5139,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 315.241,
          "zs_curdayflow": 4578.8125,
          "zs_totalflow": 596581.2
        },
        {
          "id": 10167444,
          "addtime": "2021-09-06 15:23:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 15:22:19",
          "cod": 8.622685,
          "ph": 6.8420143,
          "an": 0.8217592,
          "tp": 0.09693287,
          "flow": 1652.7777,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 312.48965,
          "zs_curdayflow": 4589.3125,
          "zs_totalflow": 596591.7
        },
        {
          "id": 10167468,
          "addtime": "2021-09-06 15:25:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 15:24:19",
          "cod": 8.622685,
          "ph": 6.8420143,
          "an": 0.8217592,
          "tp": 0.09693287,
          "flow": 1548.6111,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 304.7691,
          "zs_curdayflow": 4599.8125,
          "zs_totalflow": 596602.2
        },
        {
          "id": 10167492,
          "addtime": "2021-09-06 15:27:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 15:26:19",
          "cod": 8.622685,
          "ph": 6.8420143,
          "an": 0.8217592,
          "tp": 0.09693287,
          "flow": 1618.0557,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 308.92996,
          "zs_curdayflow": 4610.3125,
          "zs_totalflow": 596612.7
        },
        {
          "id": 10167536,
          "addtime": "2021-09-06 15:29:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 15:28:19",
          "cod": 8.506945,
          "ph": 6.8420143,
          "an": 0.8217592,
          "tp": 0.09693287,
          "flow": 1585.0695,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 319.42252,
          "zs_curdayflow": 4620.4375,
          "zs_totalflow": 596622.8
        },
        {
          "id": 10167548,
          "addtime": "2021-09-06 15:31:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 15:30:19",
          "cod": 8.506945,
          "ph": 6.8420143,
          "an": 0.8217592,
          "tp": 0.09693287,
          "flow": 1628.4723,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 314.03275,
          "zs_curdayflow": 4630.8125,
          "zs_totalflow": 596633.2
        },
        {
          "id": 10167580,
          "addtime": "2021-09-06 15:33:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 15:32:19",
          "cod": 8.506945,
          "ph": 6.8420143,
          "an": 0.8217592,
          "tp": 0.09693287,
          "flow": 1694.4445,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 322.8654,
          "zs_curdayflow": 4641.3125,
          "zs_totalflow": 596643.7
        },
        {
          "id": 10167600,
          "addtime": "2021-09-06 15:35:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 15:34:19",
          "cod": 8.622685,
          "ph": 6.8420143,
          "an": 0.8217592,
          "tp": 0.09693287,
          "flow": 1661.4583,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 298.55908,
          "zs_curdayflow": 4651.75,
          "zs_totalflow": 596654.1
        },
        {
          "id": 10167628,
          "addtime": "2021-09-06 15:37:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 15:36:19",
          "cod": 8.506945,
          "ph": 6.8420143,
          "an": 0.8217592,
          "tp": 0.09693287,
          "flow": 1636.2847,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 294.48364,
          "zs_curdayflow": 4661.75,
          "zs_totalflow": 596664.1
        },
        {
          "id": 10167676,
          "addtime": "2021-09-06 15:39:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 15:38:19",
          "cod": 8.622685,
          "ph": 6.8420143,
          "an": 0.8217592,
          "tp": 0.09693287,
          "flow": 1644.0972,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 303.04605,
          "zs_curdayflow": 4671.625,
          "zs_totalflow": 596674
        },
        {
          "id": 10167704,
          "addtime": "2021-09-06 15:41:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 15:40:19",
          "cod": 8.506945,
          "ph": 6.8420143,
          "an": 0.8217592,
          "tp": 0.09693287,
          "flow": 1822.9166,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 288.17554,
          "zs_curdayflow": 4681.625,
          "zs_totalflow": 596684
        },
        {
          "id": 10167708,
          "addtime": "2021-09-06 15:43:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 15:42:19",
          "cod": 8.622685,
          "ph": 6.8420143,
          "an": 0.8217592,
          "tp": 0.09693287,
          "flow": 1842.0138,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 302.93033,
          "zs_curdayflow": 4691.4375,
          "zs_totalflow": 596693.8
        },
        {
          "id": 10167744,
          "addtime": "2021-09-06 15:45:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 15:44:19",
          "cod": 8.622685,
          "ph": 6.8420143,
          "an": 0.8217592,
          "tp": 0.09693287,
          "flow": 1882.8125,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 313.62576,
          "zs_curdayflow": 4701.25,
          "zs_totalflow": 596703.6
        },
        {
          "id": 10167768,
          "addtime": "2021-09-06 15:47:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 15:46:19",
          "cod": 8.622685,
          "ph": 6.8420143,
          "an": 0.8217592,
          "tp": 0.09693287,
          "flow": 1881.0764,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 282.30804,
          "zs_curdayflow": 4710.8125,
          "zs_totalflow": 596713.2
        },
        {
          "id": 10167792,
          "addtime": "2021-09-06 15:49:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 15:48:19",
          "cod": 8.506945,
          "ph": 6.8420143,
          "an": 0.8217592,
          "tp": 0.09693287,
          "flow": 2001.7362,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 299.20163,
          "zs_curdayflow": 4720.5,
          "zs_totalflow": 596722.9
        },
        {
          "id": 10167832,
          "addtime": "2021-09-06 15:51:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 15:50:19",
          "cod": 8.506945,
          "ph": 6.8420143,
          "an": 0.8217592,
          "tp": 0.09693287,
          "flow": 2043.4028,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 304.60083,
          "zs_curdayflow": 4730.5,
          "zs_totalflow": 596732.9
        },
        {
          "id": 10167848,
          "addtime": "2021-09-06 15:53:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 15:52:19",
          "cod": 8.622685,
          "ph": 6.846065,
          "an": 0.8217592,
          "tp": 0.09693287,
          "flow": 2109.375,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 310.78772,
          "zs_curdayflow": 4740.4375,
          "zs_totalflow": 596742.8
        },
        {
          "id": 10167892,
          "addtime": "2021-09-06 15:55:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 15:54:19",
          "cod": 8.622685,
          "ph": 6.8420143,
          "an": 0.8217592,
          "tp": 0.09693287,
          "flow": 2167.5347,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 318.76202,
          "zs_curdayflow": 4751,
          "zs_totalflow": 596753.4
        },
        {
          "id": 10167908,
          "addtime": "2021-09-06 15:57:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 15:56:19",
          "cod": 8.622685,
          "ph": 6.8420143,
          "an": 0.8217592,
          "tp": 0.09693287,
          "flow": 2173.611,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 311.54825,
          "zs_curdayflow": 4761.625,
          "zs_totalflow": 596764
        },
        {
          "id": 10167936,
          "addtime": "2021-09-06 15:59:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 15:58:19",
          "cod": 8.622685,
          "ph": 6.8420143,
          "an": 0.8217592,
          "tp": 0.09693287,
          "flow": 2203.9932,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 304.35797,
          "zs_curdayflow": 4772.125,
          "zs_totalflow": 596774.5
        },
        {
          "id": 10167960,
          "addtime": "2021-09-06 16:01:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 16:00:19",
          "cod": 8.622685,
          "ph": 6.8420143,
          "an": 0.8217592,
          "tp": 0.09693287,
          "flow": 2169.2708,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 325.83182,
          "zs_curdayflow": 4782.9375,
          "zs_totalflow": 596785.3
        },
        {
          "id": 10167996,
          "addtime": "2021-09-06 16:03:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 16:02:19",
          "cod": 8.622685,
          "ph": 6.8420143,
          "an": 0.8217592,
          "tp": 0.09693287,
          "flow": 2117.1875,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 314.8172,
          "zs_curdayflow": 4793.75,
          "zs_totalflow": 596796.1
        },
        {
          "id": 10168016,
          "addtime": "2021-09-06 16:05:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 16:04:19",
          "cod": 8.622685,
          "ph": 6.8420143,
          "an": 0.8217592,
          "tp": 0.09693287,
          "flow": 2210.9375,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 315.2407,
          "zs_curdayflow": 4803.8125,
          "zs_totalflow": 596806.2
        },
        {
          "id": 10168044,
          "addtime": "2021-09-06 16:07:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 16:06:19",
          "cod": 8.622685,
          "ph": 6.8420143,
          "an": 0.8217592,
          "tp": 0.09693287,
          "flow": 2282.986,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 312.6875,
          "zs_curdayflow": 4813.8125,
          "zs_totalflow": 596816.2
        },
        {
          "id": 10168076,
          "addtime": "2021-09-06 16:09:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 16:08:19",
          "cod": 8.622685,
          "ph": 6.846065,
          "an": 0.8217592,
          "tp": 0.09693287,
          "flow": 2305.5554,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 289.5413,
          "zs_curdayflow": 4824,
          "zs_totalflow": 596826.4
        },
        {
          "id": 10168100,
          "addtime": "2021-09-06 16:11:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 16:10:19",
          "cod": 8.622685,
          "ph": 6.8420143,
          "an": 0.8217592,
          "tp": 0.09693287,
          "flow": 2243.0557,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 267.93567,
          "zs_curdayflow": 4834,
          "zs_totalflow": 596836.4
        },
        {
          "id": 10168144,
          "addtime": "2021-09-06 16:13:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 16:12:19",
          "cod": 8.622685,
          "ph": 6.8420143,
          "an": 0.8217592,
          "tp": 0.09693287,
          "flow": 2245.6597,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 293.09338,
          "zs_curdayflow": 4843.625,
          "zs_totalflow": 596846
        },
        {
          "id": 10168156,
          "addtime": "2021-09-06 16:15:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 16:14:19",
          "cod": 8.622685,
          "ph": 6.8420143,
          "an": 0.8217592,
          "tp": 0.09693287,
          "flow": 2288.1946,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 267.97168,
          "zs_curdayflow": 4853.25,
          "zs_totalflow": 596855.6
        },
        {
          "id": 10168192,
          "addtime": "2021-09-06 16:17:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 16:16:20",
          "cod": 8.622685,
          "ph": 6.8420143,
          "an": 0.8217592,
          "tp": 0.09693287,
          "flow": 2252.6042,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 279.54083,
          "zs_curdayflow": 4862.9375,
          "zs_totalflow": 596865.3
        },
        {
          "id": 10168224,
          "addtime": "2021-09-06 16:19:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 16:18:20",
          "cod": 8.622685,
          "ph": 6.8420143,
          "an": 0.8217592,
          "tp": 0.09693287,
          "flow": 2417.5347,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 293.354,
          "zs_curdayflow": 4872.5,
          "zs_totalflow": 596874.9
        },
        {
          "id": 10168244,
          "addtime": "2021-09-06 16:21:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 16:20:20",
          "cod": 8.622685,
          "ph": 6.8420143,
          "an": 0.8217592,
          "tp": 0.09693287,
          "flow": 2649.3057,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 294.7103,
          "zs_curdayflow": 4882.5,
          "zs_totalflow": 596884.9
        },
        {
          "id": 10168272,
          "addtime": "2021-09-06 16:23:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 16:22:20",
          "cod": 8.506945,
          "ph": 6.8420143,
          "an": 0.8217592,
          "tp": 0.09693287,
          "flow": 2560.764,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 305.51758,
          "zs_curdayflow": 4892.5,
          "zs_totalflow": 596894.9
        },
        {
          "id": 10168296,
          "addtime": "2021-09-06 16:25:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 16:24:20",
          "cod": 8.506945,
          "ph": 6.8420143,
          "an": 0.8217592,
          "tp": 0.09693287,
          "flow": 2522.5696,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 313.87585,
          "zs_curdayflow": 4902.4375,
          "zs_totalflow": 596904.8
        },
        {
          "id": 10168324,
          "addtime": "2021-09-06 16:27:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 16:26:20",
          "cod": 8.506945,
          "ph": 6.8420143,
          "an": 0.82754624,
          "tp": 0.09693287,
          "flow": 2399.3054,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 257.21143,
          "zs_curdayflow": 4912,
          "zs_totalflow": 596914.4
        },
        {
          "id": 10168376,
          "addtime": "2021-09-06 16:29:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 16:28:20",
          "cod": 8.506945,
          "ph": 6.846065,
          "an": 0.82754624,
          "tp": 0.09693287,
          "flow": 2405.382,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 299.12088,
          "zs_curdayflow": 4921.75,
          "zs_totalflow": 596924.1
        },
        {
          "id": 10168404,
          "addtime": "2021-09-06 16:31:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 16:30:20",
          "cod": 8.506945,
          "ph": 6.8420143,
          "an": 0.82754624,
          "tp": 0.09693287,
          "flow": 2421.875,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 288.1354,
          "zs_curdayflow": 4931.3125,
          "zs_totalflow": 596933.7
        },
        {
          "id": 10168412,
          "addtime": "2021-09-06 16:33:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 16:32:20",
          "cod": 8.506945,
          "ph": 6.846065,
          "an": 0.82754624,
          "tp": 0.09693287,
          "flow": 2327.2568,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 302.95618,
          "zs_curdayflow": 4941.125,
          "zs_totalflow": 596943.5
        },
        {
          "id": 10168456,
          "addtime": "2021-09-06 16:35:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 16:34:20",
          "cod": 8.506945,
          "ph": 6.8420143,
          "an": 0.82754624,
          "tp": 0.09693287,
          "flow": 2360.2432,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 300.671,
          "zs_curdayflow": 4951.125,
          "zs_totalflow": 596953.5
        },
        {
          "id": 10168480,
          "addtime": "2021-09-06 16:37:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 16:36:20",
          "cod": 8.506945,
          "ph": 6.8420143,
          "an": 0.82754624,
          "tp": 0.08680556,
          "flow": 2280.3818,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 300.55228,
          "zs_curdayflow": 4960.9375,
          "zs_totalflow": 596963.3
        },
        {
          "id": 10168500,
          "addtime": "2021-09-06 16:39:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 16:38:20",
          "cod": 8.506945,
          "ph": 6.8420143,
          "an": 0.82754624,
          "tp": 0.08680556,
          "flow": 2429.6875,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 274.03754,
          "zs_curdayflow": 4970.625,
          "zs_totalflow": 596973
        },
        {
          "id": 10168524,
          "addtime": "2021-09-06 16:41:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 16:40:20",
          "cod": 8.506945,
          "ph": 6.8420143,
          "an": 0.82754624,
          "tp": 0.08680556,
          "flow": 2382.8125,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 292.2602,
          "zs_curdayflow": 4980.4375,
          "zs_totalflow": 596982.8
        },
        {
          "id": 10168552,
          "addtime": "2021-09-06 16:43:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 16:42:20",
          "cod": 8.506945,
          "ph": 6.8420143,
          "an": 0.82754624,
          "tp": 0.08680556,
          "flow": 2375,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 298.77792,
          "zs_curdayflow": 4990,
          "zs_totalflow": 596992.4
        },
        {
          "id": 10168588,
          "addtime": "2021-09-06 16:45:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 16:44:20",
          "cod": 8.506945,
          "ph": 6.8420143,
          "an": 0.82754624,
          "tp": 0.08680556,
          "flow": 2380.2083,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 308.65393,
          "zs_curdayflow": 5000.125,
          "zs_totalflow": 597002.5
        },
        {
          "id": 10168620,
          "addtime": "2021-09-06 16:47:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 16:46:20",
          "cod": 8.506945,
          "ph": 6.8420143,
          "an": 0.82754624,
          "tp": 0.08680556,
          "flow": 2335.9375,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 284.84164,
          "zs_curdayflow": 5009.75,
          "zs_totalflow": 597012.1
        },
        {
          "id": 10168632,
          "addtime": "2021-09-06 16:49:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 16:48:20",
          "cod": 9.085649,
          "ph": 6.8420143,
          "an": 0.82754624,
          "tp": 0.08680556,
          "flow": 2322.9167,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 259.945,
          "zs_curdayflow": 5019.5,
          "zs_totalflow": 597021.9
        },
        {
          "id": 10168664,
          "addtime": "2021-09-06 16:51:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 16:50:20",
          "cod": 9.085649,
          "ph": 6.8420143,
          "an": 0.82754624,
          "tp": 0.08680556,
          "flow": 2434.0278,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 287.99554,
          "zs_curdayflow": 5029.3125,
          "zs_totalflow": 597031.7
        },
        {
          "id": 10168688,
          "addtime": "2021-09-06 16:53:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 16:52:20",
          "cod": 9.085649,
          "ph": 6.8420143,
          "an": 0.82754624,
          "tp": 0.08680556,
          "flow": 2462.6736,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 300.3847,
          "zs_curdayflow": 5039.25,
          "zs_totalflow": 597041.6
        },
        {
          "id": 10168716,
          "addtime": "2021-09-06 16:55:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 16:54:20",
          "cod": 9.085649,
          "ph": 6.8420143,
          "an": 0.82754624,
          "tp": 0.08680556,
          "flow": 2283.8542,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 309.01297,
          "zs_curdayflow": 5049.125,
          "zs_totalflow": 597051.5
        },
        {
          "id": 10168748,
          "addtime": "2021-09-06 16:57:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 16:56:20",
          "cod": 9.085649,
          "ph": 6.8420143,
          "an": 0.82754624,
          "tp": 0.08680556,
          "flow": 2408.8542,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 305.48804,
          "zs_curdayflow": 5058.9375,
          "zs_totalflow": 597061.3
        },
        {
          "id": 10168776,
          "addtime": "2021-09-06 16:59:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 16:58:20",
          "cod": 9.085649,
          "ph": 6.846065,
          "an": 0.82754624,
          "tp": 0.08680556,
          "flow": 2313.3682,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 304.86804,
          "zs_curdayflow": 5068.5,
          "zs_totalflow": 597070.9
        },
        {
          "id": 10168808,
          "addtime": "2021-09-06 17:01:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 17:00:20",
          "cod": 9.085649,
          "ph": 6.846065,
          "an": 0.82754624,
          "tp": 0.08680556,
          "flow": 2348.9583,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 279.56097,
          "zs_curdayflow": 5078.4375,
          "zs_totalflow": 597080.8
        },
        {
          "id": 10168836,
          "addtime": "2021-09-06 17:03:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 17:02:20",
          "cod": 9.085649,
          "ph": 6.846065,
          "an": 0.82754624,
          "tp": 0.08680556,
          "flow": 2381.9446,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 301.5472,
          "zs_curdayflow": 5087.9375,
          "zs_totalflow": 597090.3
        },
        {
          "id": 10168872,
          "addtime": "2021-09-06 17:05:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 17:04:20",
          "cod": 9.085649,
          "ph": 6.846065,
          "an": 0.82754624,
          "tp": 0.08680556,
          "flow": 2339.4097,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 296.3909,
          "zs_curdayflow": 5097.9375,
          "zs_totalflow": 597100.3
        },
        {
          "id": 10168896,
          "addtime": "2021-09-06 17:07:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 17:06:20",
          "cod": 9.085649,
          "ph": 6.8420143,
          "an": 0.82754624,
          "tp": 0.08680556,
          "flow": 2401.0417,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 287.7745,
          "zs_curdayflow": 5107.75,
          "zs_totalflow": 597110.1
        },
        {
          "id": 10168928,
          "addtime": "2021-09-06 17:09:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 17:08:20",
          "cod": 9.085649,
          "ph": 6.8420143,
          "an": 0.82754624,
          "tp": 0.08680556,
          "flow": 2355.9028,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 301.31046,
          "zs_curdayflow": 5117.5,
          "zs_totalflow": 597119.9
        },
        {
          "id": 10168940,
          "addtime": "2021-09-06 17:11:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 17:10:20",
          "cod": 9.085649,
          "ph": 6.8420143,
          "an": 0.82754624,
          "tp": 0.08680556,
          "flow": 2319.4443,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 295.77997,
          "zs_curdayflow": 5127.3125,
          "zs_totalflow": 597129.7
        },
        {
          "id": 10168972,
          "addtime": "2021-09-06 17:13:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 17:12:20",
          "cod": 9.085649,
          "ph": 6.8420143,
          "an": 0.82754624,
          "tp": 0.08680556,
          "flow": 2240.4514,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 278.42673,
          "zs_curdayflow": 5136.9375,
          "zs_totalflow": 597139.3
        },
        {
          "id": 10169008,
          "addtime": "2021-09-06 17:15:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 17:14:20",
          "cod": 9.085649,
          "ph": 6.8420143,
          "an": 0.82754624,
          "tp": 0.08680556,
          "flow": 2131.9443,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 288.61826,
          "zs_curdayflow": 5146.625,
          "zs_totalflow": 597149
        },
        {
          "id": 10169036,
          "addtime": "2021-09-06 17:17:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 17:16:20",
          "cod": 9.085649,
          "ph": 6.8420143,
          "an": 0.82754624,
          "tp": 0.08680556,
          "flow": 2061.6318,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 285.13098,
          "zs_curdayflow": 5156.5,
          "zs_totalflow": 597158.9
        },
        {
          "id": 10169064,
          "addtime": "2021-09-06 17:19:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 17:18:20",
          "cod": 9.085649,
          "ph": 6.8420143,
          "an": 0.82754624,
          "tp": 0.08680556,
          "flow": 1976.5625,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 310.6858,
          "zs_curdayflow": 5166.3125,
          "zs_totalflow": 597168.7
        },
        {
          "id": 10169100,
          "addtime": "2021-09-06 17:21:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 17:20:20",
          "cod": 9.085649,
          "ph": 6.8420143,
          "an": 0.82754624,
          "tp": 0.08680556,
          "flow": 2002.6041,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 291.9439,
          "zs_curdayflow": 5176,
          "zs_totalflow": 597178.4
        },
        {
          "id": 10169112,
          "addtime": "2021-09-06 17:23:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 17:22:20",
          "cod": 9.085649,
          "ph": 6.8420143,
          "an": 0.82754624,
          "tp": 0.08680556,
          "flow": 2009.5486,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 308.53528,
          "zs_curdayflow": 5186.125,
          "zs_totalflow": 597188.5
        },
        {
          "id": 10169148,
          "addtime": "2021-09-06 17:25:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 17:24:20",
          "cod": 9.085649,
          "ph": 6.8420143,
          "an": 0.82754624,
          "tp": 0.08680556,
          "flow": 1930.5555,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 304.00775,
          "zs_curdayflow": 5196,
          "zs_totalflow": 597198.4
        },
        {
          "id": 10169180,
          "addtime": "2021-09-06 17:27:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 17:26:20",
          "cod": 9.085649,
          "ph": 6.846065,
          "an": 0.82754624,
          "tp": 0.08680556,
          "flow": 1872.3958,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 271.0767,
          "zs_curdayflow": 5205.3125,
          "zs_totalflow": 597207.7
        },
        {
          "id": 10169196,
          "addtime": "2021-09-06 17:29:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 17:28:20",
          "cod": 9.085649,
          "ph": 6.8420143,
          "an": 0.82754624,
          "tp": 0.08680556,
          "flow": 1891.493,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 303.5764,
          "zs_curdayflow": 5215.3125,
          "zs_totalflow": 597217.7
        },
        {
          "id": 10169240,
          "addtime": "2021-09-06 17:31:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 17:30:20",
          "cod": 9.085649,
          "ph": 6.8420143,
          "an": 0.82754624,
          "tp": 0.08680556,
          "flow": 1949.6528,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 307.55185,
          "zs_curdayflow": 5225.25,
          "zs_totalflow": 597227.6
        },
        {
          "id": 10169260,
          "addtime": "2021-09-06 17:33:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 17:32:20",
          "cod": 9.085649,
          "ph": 6.8420143,
          "an": 0.82754624,
          "tp": 0.08680556,
          "flow": 1882.8125,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 305.83344,
          "zs_curdayflow": 5234.8125,
          "zs_totalflow": 597237.2
        },
        {
          "id": 10169292,
          "addtime": "2021-09-06 17:35:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 17:34:20",
          "cod": 9.085649,
          "ph": 6.8420143,
          "an": 0.82754624,
          "tp": 0.08680556,
          "flow": 1956.5973,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 286.91562,
          "zs_curdayflow": 5244.625,
          "zs_totalflow": 597247
        },
        {
          "id": 10169324,
          "addtime": "2021-09-06 17:37:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 17:36:20",
          "cod": 9.085649,
          "ph": 6.8420143,
          "an": 0.82754624,
          "tp": 0.08680556,
          "flow": 1840.2777,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 270.0663,
          "zs_curdayflow": 5254.4375,
          "zs_totalflow": 597256.8
        },
        {
          "id": 10169336,
          "addtime": "2021-09-06 17:39:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 17:38:20",
          "cod": 9.085649,
          "ph": 6.8420143,
          "an": 0.82754624,
          "tp": 0.08680556,
          "flow": 1818.5763,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 288.17206,
          "zs_curdayflow": 5263.9375,
          "zs_totalflow": 597266.3
        },
        {
          "id": 10169362,
          "addtime": "2021-09-06 17:41:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 17:40:20",
          "cod": 9.085649,
          "ph": 6.8420143,
          "an": 0.82754624,
          "tp": 0.08680556,
          "flow": 1852.4307,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 291.48108,
          "zs_curdayflow": 5273.8125,
          "zs_totalflow": 597276.2
        },
        {
          "id": 10169392,
          "addtime": "2021-09-06 17:43:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 17:42:20",
          "cod": 9.085649,
          "ph": 6.8420143,
          "an": 0.82754624,
          "tp": 0.08680556,
          "flow": 1779.5139,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 297.4193,
          "zs_curdayflow": 5283.4375,
          "zs_totalflow": 597285.8
        },
        {
          "id": 10169432,
          "addtime": "2021-09-06 17:45:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 17:44:20",
          "cod": 9.085649,
          "ph": 6.8420143,
          "an": 0.82754624,
          "tp": 0.08680556,
          "flow": 1822.0486,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 286.56818,
          "zs_curdayflow": 5293,
          "zs_totalflow": 597295.4
        },
        {
          "id": 10169444,
          "addtime": "2021-09-06 17:47:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 17:46:20",
          "cod": 9.085649,
          "ph": 6.8420143,
          "an": 0.82754624,
          "tp": 0.08680556,
          "flow": 1872.3958,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 276.69055,
          "zs_curdayflow": 5302.75,
          "zs_totalflow": 597305.1
        },
        {
          "id": 10169472,
          "addtime": "2021-09-06 17:49:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 17:48:20",
          "cod": 9.085649,
          "ph": 6.8420143,
          "an": 0.82754624,
          "tp": 0.08680556,
          "flow": 1796.007,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 289.02148,
          "zs_curdayflow": 5312.4375,
          "zs_totalflow": 597314.8
        },
        {
          "id": 10169508,
          "addtime": "2021-09-06 17:51:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 17:50:20",
          "cod": 9.085649,
          "ph": 6.8420143,
          "an": 0.82754624,
          "tp": 0.08680556,
          "flow": 1907.118,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 287.7699,
          "zs_curdayflow": 5322.4375,
          "zs_totalflow": 597324.8
        },
        {
          "id": 10169532,
          "addtime": "2021-09-06 17:53:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 17:52:20",
          "cod": 9.085649,
          "ph": 6.8420143,
          "an": 0.82754624,
          "tp": 0.08680556,
          "flow": 1967.0139,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 301.3678,
          "zs_curdayflow": 5332.125,
          "zs_totalflow": 597334.5
        },
        {
          "id": 10169556,
          "addtime": "2021-09-06 17:55:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 17:54:20",
          "cod": 9.085649,
          "ph": 6.8420143,
          "an": 0.82754624,
          "tp": 0.08680556,
          "flow": 1892.3611,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 300.4392,
          "zs_curdayflow": 5342,
          "zs_totalflow": 597344.4
        },
        {
          "id": 10169584,
          "addtime": "2021-09-06 17:57:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 17:56:20",
          "cod": 9.085649,
          "ph": 6.846065,
          "an": 0.82754624,
          "tp": 0.08680556,
          "flow": 1901.0417,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 289.51962,
          "zs_curdayflow": 5351.625,
          "zs_totalflow": 597354
        },
        {
          "id": 10169616,
          "addtime": "2021-09-06 17:59:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 17:58:20",
          "cod": 9.085649,
          "ph": 6.8420143,
          "an": 0.82754624,
          "tp": 0.08680556,
          "flow": 1801.2153,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 290.31537,
          "zs_curdayflow": 5361.3125,
          "zs_totalflow": 597363.7
        },
        {
          "id": 10169640,
          "addtime": "2021-09-06 18:01:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 18:00:20",
          "cod": 9.085649,
          "ph": 6.8420143,
          "an": 0.82754624,
          "tp": 0.08680556,
          "flow": 1788.1945,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 292.0414,
          "zs_curdayflow": 5371.3125,
          "zs_totalflow": 597373.7
        },
        {
          "id": 10169692,
          "addtime": "2021-09-06 18:03:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 18:02:20",
          "cod": 9.085649,
          "ph": 6.8420143,
          "an": 0.82754624,
          "tp": 0.08680556,
          "flow": 1697.9166,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 276.5223,
          "zs_curdayflow": 5381,
          "zs_totalflow": 597383.4
        },
        {
          "id": 10169700,
          "addtime": "2021-09-06 18:05:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 18:04:20",
          "cod": 9.085649,
          "ph": 6.8420143,
          "an": 0.82754624,
          "tp": 0.08680556,
          "flow": 1755.2083,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 285.03732,
          "zs_curdayflow": 5390.625,
          "zs_totalflow": 597393
        },
        {
          "id": 10169741,
          "addtime": "2021-09-06 18:07:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 18:06:20",
          "cod": 9.085649,
          "ph": 6.8420143,
          "an": 0.82754624,
          "tp": 0.08680556,
          "flow": 1706.5972,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 292.16797,
          "zs_curdayflow": 5400.4375,
          "zs_totalflow": 597402.8
        },
        {
          "id": 10169756,
          "addtime": "2021-09-06 18:09:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 18:08:20",
          "cod": 9.085649,
          "ph": 6.8420143,
          "an": 0.82754624,
          "tp": 0.08680556,
          "flow": 1687.5,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 299.89468,
          "zs_curdayflow": 5410.125,
          "zs_totalflow": 597412.5
        },
        {
          "id": 10169780,
          "addtime": "2021-09-06 18:11:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 18:10:20",
          "cod": 9.085649,
          "ph": 6.8420143,
          "an": 0.82754624,
          "tp": 0.08680556,
          "flow": 1718.75,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 295.43408,
          "zs_curdayflow": 5419.9375,
          "zs_totalflow": 597422.3
        },
        {
          "id": 10169818,
          "addtime": "2021-09-06 18:13:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 18:12:20",
          "cod": 9.085649,
          "ph": 6.8420143,
          "an": 0.82754624,
          "tp": 0.08680556,
          "flow": 1732.6389,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 290.38333,
          "zs_curdayflow": 5429.8125,
          "zs_totalflow": 597432.2
        },
        {
          "id": 10169852,
          "addtime": "2021-09-06 18:15:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 18:14:20",
          "cod": 9.085649,
          "ph": 6.846065,
          "an": 0.82754624,
          "tp": 0.08680556,
          "flow": 1723.0902,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 294.61145,
          "zs_curdayflow": 5439.9375,
          "zs_totalflow": 597442.3
        },
        {
          "id": 10169888,
          "addtime": "2021-09-06 18:17:23",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 18:16:20",
          "cod": 9.085649,
          "ph": 6.8420143,
          "an": 0.82754624,
          "tp": 0.08680556,
          "flow": 1670.1389,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 269.42688,
          "zs_curdayflow": 5449.4375,
          "zs_totalflow": 597451.8
        },
        {
          "id": 10169908,
          "addtime": "2021-09-06 18:19:23",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 18:18:20",
          "cod": 9.085649,
          "ph": 6.8420143,
          "an": 0.82754624,
          "tp": 0.08680556,
          "flow": 1676.2152,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 302.66788,
          "zs_curdayflow": 5459.125,
          "zs_totalflow": 597461.5
        },
        {
          "id": 10169928,
          "addtime": "2021-09-06 18:21:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 18:20:20",
          "cod": 9.085649,
          "ph": 6.8420143,
          "an": 0.82754624,
          "tp": 0.08680556,
          "flow": 1575.5209,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 265.60303,
          "zs_curdayflow": 5469,
          "zs_totalflow": 597471.4
        },
        {
          "id": 10169968,
          "addtime": "2021-09-06 18:23:23",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 18:22:20",
          "cod": 9.085649,
          "ph": 6.8420143,
          "an": 0.82754624,
          "tp": 0.08680556,
          "flow": 1649.3055,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 271.1595,
          "zs_curdayflow": 5478.75,
          "zs_totalflow": 597481.1
        },
        {
          "id": 10169976,
          "addtime": "2021-09-06 18:25:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 18:24:20",
          "cod": 9.085649,
          "ph": 6.8420143,
          "an": 0.82754624,
          "tp": 0.08680556,
          "flow": 1576.3889,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 298.1579,
          "zs_curdayflow": 5488.25,
          "zs_totalflow": 597490.6
        },
        {
          "id": 10170020,
          "addtime": "2021-09-06 18:27:23",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 18:26:20",
          "cod": 9.085649,
          "ph": 6.8420143,
          "an": 0.46875,
          "tp": 0.08680556,
          "flow": 1649.3055,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 288.15143,
          "zs_curdayflow": 5498.125,
          "zs_totalflow": 597500.5
        },
        {
          "id": 10170040,
          "addtime": "2021-09-06 18:29:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 18:28:20",
          "cod": 9.085649,
          "ph": 6.846065,
          "an": 0.46875,
          "tp": 0.08680556,
          "flow": 1576.3889,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 288.76215,
          "zs_curdayflow": 5507.8125,
          "zs_totalflow": 597510.2
        },
        {
          "id": 10170072,
          "addtime": "2021-09-06 18:31:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 18:30:20",
          "cod": 9.085649,
          "ph": 6.8420143,
          "an": 0.46875,
          "tp": 0.08680556,
          "flow": 1568.5764,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 310.03384,
          "zs_curdayflow": 5517.75,
          "zs_totalflow": 597520.1
        },
        {
          "id": 10170096,
          "addtime": "2021-09-06 18:33:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 18:32:20",
          "cod": 9.085649,
          "ph": 6.8420143,
          "an": 0.46875,
          "tp": 0.08680556,
          "flow": 1657.118,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 292.08517,
          "zs_curdayflow": 5527.75,
          "zs_totalflow": 597530.1
        },
        {
          "id": 10170120,
          "addtime": "2021-09-06 18:35:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 18:34:20",
          "cod": 9.085649,
          "ph": 6.8420143,
          "an": 0.46875,
          "tp": 0.08680556,
          "flow": 1637.1528,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 323.7435,
          "zs_curdayflow": 5537.8125,
          "zs_totalflow": 597540.2
        },
        {
          "id": 10170144,
          "addtime": "2021-09-06 18:37:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 18:36:20",
          "cod": 9.085649,
          "ph": 6.8420143,
          "an": 0.46875,
          "tp": 0.08680556,
          "flow": 1661.4583,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 303.5197,
          "zs_curdayflow": 5547.625,
          "zs_totalflow": 597550
        },
        {
          "id": 10170180,
          "addtime": "2021-09-06 18:39:23",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 18:38:20",
          "cod": 9.085649,
          "ph": 6.8420143,
          "an": 0.46875,
          "tp": 0.08680556,
          "flow": 1776.0416,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 287.9825,
          "zs_curdayflow": 5557.4375,
          "zs_totalflow": 597559.8
        },
        {
          "id": 10170204,
          "addtime": "2021-09-06 18:41:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 18:40:20",
          "cod": 9.085649,
          "ph": 6.8420143,
          "an": 0.46875,
          "tp": 0.08680556,
          "flow": 1844.618,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 281.22592,
          "zs_curdayflow": 5567.25,
          "zs_totalflow": 597569.6
        },
        {
          "id": 10170232,
          "addtime": "2021-09-06 18:43:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 18:42:20",
          "cod": 9.085649,
          "ph": 6.8420143,
          "an": 0.46875,
          "tp": 0.08680556,
          "flow": 1835.9375,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 289.9073,
          "zs_curdayflow": 5577.125,
          "zs_totalflow": 597579.5
        },
        {
          "id": 10170264,
          "addtime": "2021-09-06 18:45:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 18:44:20",
          "cod": 9.085649,
          "ph": 6.8420143,
          "an": 0.46875,
          "tp": 0.08680556,
          "flow": 1782.9861,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 293.23102,
          "zs_curdayflow": 5586.8125,
          "zs_totalflow": 597589.2
        },
        {
          "id": 10170308,
          "addtime": "2021-09-06 18:47:23",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 18:46:20",
          "cod": 9.085649,
          "ph": 6.8420143,
          "an": 0.46875,
          "tp": 0.08680556,
          "flow": 1900.1736,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 288.31274,
          "zs_curdayflow": 5596.75,
          "zs_totalflow": 597599.1
        },
        {
          "id": 10170324,
          "addtime": "2021-09-06 18:49:23",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 18:48:20",
          "cod": 8.738426,
          "ph": 6.8420143,
          "an": 0.46875,
          "tp": 0.08680556,
          "flow": 1960.9375,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 312.4467,
          "zs_curdayflow": 5606.5,
          "zs_totalflow": 597608.9
        },
        {
          "id": 10170356,
          "addtime": "2021-09-06 18:51:23",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 18:50:20",
          "cod": 8.738426,
          "ph": 6.8420143,
          "an": 0.46875,
          "tp": 0.08680556,
          "flow": 1936.632,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 295.77808,
          "zs_curdayflow": 5616.3125,
          "zs_totalflow": 597618.7
        },
        {
          "id": 10170384,
          "addtime": "2021-09-06 18:53:23",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 18:52:20",
          "cod": 8.738426,
          "ph": 6.8420143,
          "an": 0.46875,
          "tp": 0.08680556,
          "flow": 2096.3542,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 289.27914,
          "zs_curdayflow": 5625.9375,
          "zs_totalflow": 597628.3
        },
        {
          "id": 10170404,
          "addtime": "2021-09-06 18:55:23",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 18:54:20",
          "cod": 8.738426,
          "ph": 6.8420143,
          "an": 0.46875,
          "tp": 0.08680556,
          "flow": 2261.2847,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 294.6663,
          "zs_curdayflow": 5635.8125,
          "zs_totalflow": 597638.2
        },
        {
          "id": 10170424,
          "addtime": "2021-09-06 18:57:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 18:56:20",
          "cod": 8.738426,
          "ph": 6.8420143,
          "an": 0.46875,
          "tp": 0.08680556,
          "flow": 2144.0972,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 306.75388,
          "zs_curdayflow": 5645.75,
          "zs_totalflow": 597648.1
        },
        {
          "id": 10170456,
          "addtime": "2021-09-06 18:59:23",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 18:58:20",
          "cod": 8.738426,
          "ph": 6.8420143,
          "an": 0.46875,
          "tp": 0.08680556,
          "flow": 2248.264,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 283.8988,
          "zs_curdayflow": 5655.5,
          "zs_totalflow": 597657.9
        },
        {
          "id": 10170492,
          "addtime": "2021-09-06 19:01:23",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 19:00:20",
          "cod": 8.738426,
          "ph": 6.846065,
          "an": 0.46875,
          "tp": 0.08680556,
          "flow": 2286.4583,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 290.55875,
          "zs_curdayflow": 5665.4375,
          "zs_totalflow": 597667.8
        },
        {
          "id": 10170528,
          "addtime": "2021-09-06 19:03:23",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 19:02:20",
          "cod": 8.738426,
          "ph": 6.846065,
          "an": 0.46875,
          "tp": 0.08680556,
          "flow": 2205.7292,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 280.8273,
          "zs_curdayflow": 5675.125,
          "zs_totalflow": 597677.5
        },
        {
          "id": 10170540,
          "addtime": "2021-09-06 19:05:23",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 19:04:20",
          "cod": 8.738426,
          "ph": 6.8420143,
          "an": 0.46875,
          "tp": 0.08680556,
          "flow": 2288.1946,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 290.8904,
          "zs_curdayflow": 5684.8125,
          "zs_totalflow": 597687.2
        },
        {
          "id": 10170572,
          "addtime": "2021-09-06 19:07:23",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 19:06:20",
          "cod": 8.738426,
          "ph": 6.8420143,
          "an": 0.46875,
          "tp": 0.08680556,
          "flow": 2134.5486,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 287.98547,
          "zs_curdayflow": 5694.625,
          "zs_totalflow": 597697
        },
        {
          "id": 10170596,
          "addtime": "2021-09-06 19:09:23",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 19:08:21",
          "cod": 8.738426,
          "ph": 6.8420143,
          "an": 0.46875,
          "tp": 0.08680556,
          "flow": 2018.2292,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 290.89838,
          "zs_curdayflow": 5704.5,
          "zs_totalflow": 597706.9
        },
        {
          "id": 10170620,
          "addtime": "2021-09-06 19:11:23",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 19:10:21",
          "cod": 8.738426,
          "ph": 6.8420143,
          "an": 0.46875,
          "tp": 0.08680556,
          "flow": 1988.7153,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 292.9811,
          "zs_curdayflow": 5714.4375,
          "zs_totalflow": 597716.8
        },
        {
          "id": 10170648,
          "addtime": "2021-09-06 19:13:23",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 19:12:21",
          "cod": 8.738426,
          "ph": 6.8420143,
          "an": 0.46875,
          "tp": 0.08680556,
          "flow": 2076.389,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 296.97345,
          "zs_curdayflow": 5724.25,
          "zs_totalflow": 597726.6
        },
        {
          "id": 10170680,
          "addtime": "2021-09-06 19:15:23",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 19:14:21",
          "cod": 8.738426,
          "ph": 6.8420143,
          "an": 0.46875,
          "tp": 0.08680556,
          "flow": 1984.375,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 300.38452,
          "zs_curdayflow": 5734.125,
          "zs_totalflow": 597736.5
        },
        {
          "id": 10170712,
          "addtime": "2021-09-06 19:17:23",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 19:16:21",
          "cod": 8.738426,
          "ph": 6.8420143,
          "an": 0.46875,
          "tp": 0.08680556,
          "flow": 1875,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 275.95593,
          "zs_curdayflow": 5743.75,
          "zs_totalflow": 597746.1
        },
        {
          "id": 10170732,
          "addtime": "2021-09-06 19:19:23",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 19:18:21",
          "cod": 8.738426,
          "ph": 6.846065,
          "an": 0.46875,
          "tp": 0.08680556,
          "flow": 1871.5278,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 302.00757,
          "zs_curdayflow": 5753.5,
          "zs_totalflow": 597755.9
        },
        {
          "id": 10170764,
          "addtime": "2021-09-06 19:21:23",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 19:20:21",
          "cod": 8.738426,
          "ph": 6.846065,
          "an": 0.46875,
          "tp": 0.08680556,
          "flow": 1871.5278,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 310.70697,
          "zs_curdayflow": 5763.4375,
          "zs_totalflow": 597765.8
        },
        {
          "id": 10170792,
          "addtime": "2021-09-06 19:23:23",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 19:22:21",
          "cod": 8.738426,
          "ph": 6.8420143,
          "an": 0.46875,
          "tp": 0.08680556,
          "flow": 1871.5278,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 293.41193,
          "zs_curdayflow": 5772.8125,
          "zs_totalflow": 597775.2
        },
        {
          "id": 10170816,
          "addtime": "2021-09-06 19:25:22",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 19:24:21",
          "cod": 8.738426,
          "ph": 6.846065,
          "an": 0.46875,
          "tp": 0.08680556,
          "flow": 1794.2709,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 258.04706,
          "zs_curdayflow": 5782.625,
          "zs_totalflow": 597785
        },
        {
          "id": 10170852,
          "addtime": "2021-09-06 19:27:23",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 19:26:21",
          "cod": 8.738426,
          "ph": 6.8420143,
          "an": 0.46875,
          "tp": 0.08680556,
          "flow": 1907.118,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 305.23657,
          "zs_curdayflow": 5792.5,
          "zs_totalflow": 597794.9
        },
        {
          "id": 10170872,
          "addtime": "2021-09-06 19:29:23",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 19:28:21",
          "cod": 8.738426,
          "ph": 6.846065,
          "an": 0.46875,
          "tp": 0.08680556,
          "flow": 1875.8682,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 299.35727,
          "zs_curdayflow": 5802.125,
          "zs_totalflow": 597804.5
        },
        {
          "id": 10170912,
          "addtime": "2021-09-06 19:31:23",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 19:30:21",
          "cod": 8.738426,
          "ph": 6.8420143,
          "an": 0.46875,
          "tp": 0.08680556,
          "flow": 1936.632,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 307.21048,
          "zs_curdayflow": 5812.25,
          "zs_totalflow": 597814.6
        },
        {
          "id": 10170932,
          "addtime": "2021-09-06 19:33:23",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 19:32:21",
          "cod": 8.738426,
          "ph": 6.8420143,
          "an": 0.46875,
          "tp": 0.08680556,
          "flow": 1866.3195,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 281.86472,
          "zs_curdayflow": 5821.9375,
          "zs_totalflow": 597824.3
        },
        {
          "id": 10170960,
          "addtime": "2021-09-06 19:35:23",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 19:34:21",
          "cod": 8.738426,
          "ph": 6.8420143,
          "an": 0.46875,
          "tp": 0.08680556,
          "flow": 1902.7778,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 298.77826,
          "zs_curdayflow": 5831.3125,
          "zs_totalflow": 597833.7
        },
        {
          "id": 10171008,
          "addtime": "2021-09-06 19:37:23",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 19:36:21",
          "cod": 8.738426,
          "ph": 6.8420143,
          "an": 0.46875,
          "tp": 0.08680556,
          "flow": 1969.6182,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 301.10016,
          "zs_curdayflow": 5841.25,
          "zs_totalflow": 597843.6
        },
        {
          "id": 10171024,
          "addtime": "2021-09-06 19:39:23",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 19:38:21",
          "cod": 8.738426,
          "ph": 6.8420143,
          "an": 0.46875,
          "tp": 0.08680556,
          "flow": 2001.7362,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 302.98257,
          "zs_curdayflow": 5851,
          "zs_totalflow": 597853.4
        },
        {
          "id": 10171040,
          "addtime": "2021-09-06 19:41:23",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 19:40:21",
          "cod": 8.738426,
          "ph": 6.8420143,
          "an": 0.46875,
          "tp": 0.08680556,
          "flow": 1975.6945,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 301.82382,
          "zs_curdayflow": 5860.75,
          "zs_totalflow": 597863.1
        },
        {
          "id": 10171072,
          "addtime": "2021-09-06 19:43:23",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 19:42:21",
          "cod": 8.738426,
          "ph": 6.8420143,
          "an": 0.46875,
          "tp": 0.08680556,
          "flow": 1926.2153,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 296.48633,
          "zs_curdayflow": 5870.4375,
          "zs_totalflow": 597872.8
        },
        {
          "id": 10171108,
          "addtime": "2021-09-06 19:45:23",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 19:44:21",
          "cod": 8.738426,
          "ph": 6.8420143,
          "an": 0.46875,
          "tp": 0.08680556,
          "flow": 1918.4028,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 297.38538,
          "zs_curdayflow": 5880.125,
          "zs_totalflow": 597882.5
        },
        {
          "id": 10171128,
          "addtime": "2021-09-06 19:47:23",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 19:46:21",
          "cod": 8.738426,
          "ph": 6.8420143,
          "an": 0.46875,
          "tp": 0.08680556,
          "flow": 1980.0348,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 296.48642,
          "zs_curdayflow": 5889.8125,
          "zs_totalflow": 597892.2
        },
        {
          "id": 10171160,
          "addtime": "2021-09-06 19:49:23",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 19:48:21",
          "cod": 8.738426,
          "ph": 6.8420143,
          "an": 0.46875,
          "tp": 0.08680556,
          "flow": 2022.5695,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 278.95706,
          "zs_curdayflow": 5899.75,
          "zs_totalflow": 597902.1
        },
        {
          "id": 10171184,
          "addtime": "2021-09-06 19:51:23",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 19:50:21",
          "cod": 8.738426,
          "ph": 6.8420143,
          "an": 0.46875,
          "tp": 0.08680556,
          "flow": 1935.7638,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 307.22562,
          "zs_curdayflow": 5909.125,
          "zs_totalflow": 597911.5
        },
        {
          "id": 10171228,
          "addtime": "2021-09-06 19:53:23",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 19:52:21",
          "cod": 8.738426,
          "ph": 6.8420143,
          "an": 0.46875,
          "tp": 0.08680556,
          "flow": 2031.25,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 293.037,
          "zs_curdayflow": 5918.8125,
          "zs_totalflow": 597921.2
        },
        {
          "id": 10171252,
          "addtime": "2021-09-06 19:55:23",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 19:54:21",
          "cod": 8.738426,
          "ph": 6.8420143,
          "an": 0.46875,
          "tp": 0.08680556,
          "flow": 1902.7778,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 319.09134,
          "zs_curdayflow": 5928.75,
          "zs_totalflow": 597931.1
        },
        {
          "id": 10171284,
          "addtime": "2021-09-06 19:57:23",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 19:56:21",
          "cod": 8.738426,
          "ph": 6.8420143,
          "an": 0.46875,
          "tp": 0.08680556,
          "flow": 1896.7014,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 298.56744,
          "zs_curdayflow": 5938.625,
          "zs_totalflow": 597941
        },
        {
          "id": 10171300,
          "addtime": "2021-09-06 19:59:23",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 19:58:21",
          "cod": 8.738426,
          "ph": 6.8420143,
          "an": 0.46875,
          "tp": 0.08680556,
          "flow": 1940.1041,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 306.54147,
          "zs_curdayflow": 5948.4375,
          "zs_totalflow": 597950.8
        },
        {
          "id": 10171344,
          "addtime": "2021-09-06 20:01:23",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 20:00:21",
          "cod": 8.738426,
          "ph": 6.8420143,
          "an": 0.46875,
          "tp": 0.08680556,
          "flow": 1952.257,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 294.5688,
          "zs_curdayflow": 5958.4375,
          "zs_totalflow": 597960.8
        },
        {
          "id": 10171348,
          "addtime": "2021-09-06 20:03:23",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 20:02:21",
          "cod": 8.738426,
          "ph": 6.8420143,
          "an": 0.46875,
          "tp": 0.08680556,
          "flow": 1973.9584,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 287.08807,
          "zs_curdayflow": 5968.125,
          "zs_totalflow": 597970.5
        },
        {
          "id": 10171380,
          "addtime": "2021-09-06 20:05:23",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 20:04:21",
          "cod": 8.738426,
          "ph": 6.8420143,
          "an": 0.46875,
          "tp": 0.08680556,
          "flow": 1857.6389,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 283.47034,
          "zs_curdayflow": 5977.75,
          "zs_totalflow": 597980.1
        },
        {
          "id": 10171412,
          "addtime": "2021-09-06 20:07:23",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 20:06:21",
          "cod": 8.738426,
          "ph": 6.8420143,
          "an": 0.46875,
          "tp": 0.08680556,
          "flow": 1917.5347,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 288.41956,
          "zs_curdayflow": 5987.4375,
          "zs_totalflow": 597989.8
        },
        {
          "id": 10171436,
          "addtime": "2021-09-06 20:09:23",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 20:08:21",
          "cod": 8.738426,
          "ph": 6.8420143,
          "an": 0.46875,
          "tp": 0.08680556,
          "flow": 1865.4513,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 306.11453,
          "zs_curdayflow": 5997.4375,
          "zs_totalflow": 597999.8
        },
        {
          "id": 10171464,
          "addtime": "2021-09-06 20:11:23",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 20:10:21",
          "cod": 8.738426,
          "ph": 6.8420143,
          "an": 0.46875,
          "tp": 0.08680556,
          "flow": 1875.8682,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 295.24628,
          "zs_curdayflow": 6007.25,
          "zs_totalflow": 598009.6
        },
        {
          "id": 10171500,
          "addtime": "2021-09-06 20:13:23",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 20:12:21",
          "cod": 8.738426,
          "ph": 6.846065,
          "an": 0.46875,
          "tp": 0.08680556,
          "flow": 1967.0139,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 291.41336,
          "zs_curdayflow": 6017,
          "zs_totalflow": 598019.4
        },
        {
          "id": 10171520,
          "addtime": "2021-09-06 20:15:23",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 20:14:21",
          "cod": 8.738426,
          "ph": 6.8420143,
          "an": 0.46875,
          "tp": 0.08680556,
          "flow": 1871.5278,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 287.1156,
          "zs_curdayflow": 6026.75,
          "zs_totalflow": 598029.1
        },
        {
          "id": 10171544,
          "addtime": "2021-09-06 20:17:23",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 20:16:21",
          "cod": 8.738426,
          "ph": 6.8420143,
          "an": 0.46875,
          "tp": 0.08680556,
          "flow": 1905.382,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 295.15765,
          "zs_curdayflow": 6036.125,
          "zs_totalflow": 598038.5
        },
        {
          "id": 10171588,
          "addtime": "2021-09-06 20:19:23",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 20:18:21",
          "cod": 8.738426,
          "ph": 6.8420143,
          "an": 0.46875,
          "tp": 0.08680556,
          "flow": 1979.1666,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 278.29675,
          "zs_curdayflow": 6045.75,
          "zs_totalflow": 598048.1
        },
        {
          "id": 10171600,
          "addtime": "2021-09-06 20:21:23",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 20:20:21",
          "cod": 8.738426,
          "ph": 6.846065,
          "an": 0.46875,
          "tp": 0.08680556,
          "flow": 1953.993,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 314.47702,
          "zs_curdayflow": 6055.5,
          "zs_totalflow": 598057.9
        },
        {
          "id": 10171640,
          "addtime": "2021-09-06 20:23:23",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 20:22:21",
          "cod": 8.738426,
          "ph": 6.846065,
          "an": 0.46875,
          "tp": 0.08680556,
          "flow": 1866.3195,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 282.374,
          "zs_curdayflow": 6065.3125,
          "zs_totalflow": 598067.7
        },
        {
          "id": 10171664,
          "addtime": "2021-09-06 20:25:23",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 20:24:21",
          "cod": 8.738426,
          "ph": 6.8420143,
          "an": 0.46875,
          "tp": 0.08680556,
          "flow": 1744.7916,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 302.0161,
          "zs_curdayflow": 6075.125,
          "zs_totalflow": 598077.5
        },
        {
          "id": 10171692,
          "addtime": "2021-09-06 20:27:23",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 20:26:21",
          "cod": 8.738426,
          "ph": 6.8420143,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1891.493,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 294.30762,
          "zs_curdayflow": 6084.9375,
          "zs_totalflow": 598087.3
        },
        {
          "id": 10171720,
          "addtime": "2021-09-06 20:29:23",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 20:28:21",
          "cod": 8.738426,
          "ph": 6.8420143,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1867.1875,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 285.0482,
          "zs_curdayflow": 6094.625,
          "zs_totalflow": 598097
        },
        {
          "id": 10171756,
          "addtime": "2021-09-06 20:31:23",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 20:30:21",
          "cod": 8.738426,
          "ph": 6.8420143,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1789.9305,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 282.02673,
          "zs_curdayflow": 6104.25,
          "zs_totalflow": 598106.6
        },
        {
          "id": 10171780,
          "addtime": "2021-09-06 20:33:23",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 20:32:21",
          "cod": 8.738426,
          "ph": 6.8420143,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1743.9237,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 297.316,
          "zs_curdayflow": 6114,
          "zs_totalflow": 598116.4
        },
        {
          "id": 10171800,
          "addtime": "2021-09-06 20:35:23",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 20:34:21",
          "cod": 8.738426,
          "ph": 6.8420143,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1735.2432,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 309.35873,
          "zs_curdayflow": 6123.8125,
          "zs_totalflow": 598126.2
        },
        {
          "id": 10171824,
          "addtime": "2021-09-06 20:37:23",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 20:36:21",
          "cod": 8.738426,
          "ph": 6.8420143,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1707.4653,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 301.6526,
          "zs_curdayflow": 6133.625,
          "zs_totalflow": 598136
        },
        {
          "id": 10171856,
          "addtime": "2021-09-06 20:39:23",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 20:38:21",
          "cod": 8.738426,
          "ph": 6.8420143,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1748.2638,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 295.6081,
          "zs_curdayflow": 6143.4375,
          "zs_totalflow": 598145.8
        },
        {
          "id": 10171896,
          "addtime": "2021-09-06 20:41:23",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 20:40:21",
          "cod": 8.738426,
          "ph": 6.8420143,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1711.8057,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 289.5859,
          "zs_curdayflow": 6153.3125,
          "zs_totalflow": 598155.7
        },
        {
          "id": 10171916,
          "addtime": "2021-09-06 20:43:23",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 20:42:21",
          "cod": 8.738426,
          "ph": 6.8420143,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1731.7708,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 282.64017,
          "zs_curdayflow": 6162.8125,
          "zs_totalflow": 598165.2
        },
        {
          "id": 10171956,
          "addtime": "2021-09-06 20:45:23",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 20:44:21",
          "cod": 8.738426,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1757.8125,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 296.5212,
          "zs_curdayflow": 6172.75,
          "zs_totalflow": 598175.1
        },
        {
          "id": 10171972,
          "addtime": "2021-09-06 20:47:23",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 20:46:21",
          "cod": 8.738426,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1753.4722,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 281.17667,
          "zs_curdayflow": 6182.5,
          "zs_totalflow": 598184.9
        },
        {
          "id": 10172004,
          "addtime": "2021-09-06 20:49:23",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 20:48:21",
          "cod": 8.506945,
          "ph": 6.8420143,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1704.8611,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 270.77304,
          "zs_curdayflow": 6192.3125,
          "zs_totalflow": 598194.7
        },
        {
          "id": 10172036,
          "addtime": "2021-09-06 20:51:23",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 20:50:21",
          "cod": 8.506945,
          "ph": 6.8420143,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1728.2986,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 282.9144,
          "zs_curdayflow": 6201.8125,
          "zs_totalflow": 598204.2
        },
        {
          "id": 10172048,
          "addtime": "2021-09-06 20:53:23",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 20:52:21",
          "cod": 8.506945,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1802.0833,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 303.77722,
          "zs_curdayflow": 6211.75,
          "zs_totalflow": 598214.1
        },
        {
          "id": 10172096,
          "addtime": "2021-09-06 20:55:23",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 20:54:21",
          "cod": 8.506945,
          "ph": 6.8420143,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1780.3818,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 294.3107,
          "zs_curdayflow": 6221.5,
          "zs_totalflow": 598223.9
        },
        {
          "id": 10172112,
          "addtime": "2021-09-06 20:57:23",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 20:56:21",
          "cod": 8.506945,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1772.5695,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 287.12323,
          "zs_curdayflow": 6231.125,
          "zs_totalflow": 598233.5
        },
        {
          "id": 10172140,
          "addtime": "2021-09-06 20:59:23",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 20:58:21",
          "cod": 8.506945,
          "ph": 6.8420143,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1741.3195,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 278.92624,
          "zs_curdayflow": 6241.125,
          "zs_totalflow": 598243.5
        },
        {
          "id": 10172180,
          "addtime": "2021-09-06 21:01:23",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 21:00:21",
          "cod": 8.506945,
          "ph": 6.8420143,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1818.5763,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 275.46854,
          "zs_curdayflow": 6250.8125,
          "zs_totalflow": 598253.2
        },
        {
          "id": 10172192,
          "addtime": "2021-09-06 21:03:23",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 21:02:21",
          "cod": 8.506945,
          "ph": 6.8420143,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1742.1875,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 292.7878,
          "zs_curdayflow": 6260.8125,
          "zs_totalflow": 598263.2
        },
        {
          "id": 10172224,
          "addtime": "2021-09-06 21:05:23",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 21:04:21",
          "cod": 8.506945,
          "ph": 6.8420143,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1757.8125,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 285.5115,
          "zs_curdayflow": 6270.625,
          "zs_totalflow": 598273
        },
        {
          "id": 10172244,
          "addtime": "2021-09-06 21:07:23",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 21:06:21",
          "cod": 8.506945,
          "ph": 6.8420143,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1729.1666,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 283.5481,
          "zs_curdayflow": 6280.25,
          "zs_totalflow": 598282.6
        },
        {
          "id": 10172276,
          "addtime": "2021-09-06 21:09:23",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 21:08:21",
          "cod": 8.506945,
          "ph": 6.8420143,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1820.3125,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 283.9626,
          "zs_curdayflow": 6289.9375,
          "zs_totalflow": 598292.3
        },
        {
          "id": 10172324,
          "addtime": "2021-09-06 21:11:23",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 21:10:21",
          "cod": 8.506945,
          "ph": 6.8420143,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1789.9305,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 287.0066,
          "zs_curdayflow": 6299.75,
          "zs_totalflow": 598302.1
        },
        {
          "id": 10172352,
          "addtime": "2021-09-06 21:13:23",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 21:12:21",
          "cod": 8.506945,
          "ph": 6.8420143,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1827.2568,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 281.1717,
          "zs_curdayflow": 6309.4375,
          "zs_totalflow": 598311.8
        },
        {
          "id": 10172376,
          "addtime": "2021-09-06 21:15:23",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 21:14:21",
          "cod": 8.506945,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1774.3055,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 281.66037,
          "zs_curdayflow": 6318.8125,
          "zs_totalflow": 598321.2
        },
        {
          "id": 10172388,
          "addtime": "2021-09-06 21:17:23",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 21:16:21",
          "cod": 8.506945,
          "ph": 6.8420143,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1875.8682,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 295.73328,
          "zs_curdayflow": 6328.625,
          "zs_totalflow": 598331
        },
        {
          "id": 10172420,
          "addtime": "2021-09-06 21:19:23",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 21:18:21",
          "cod": 8.506945,
          "ph": 6.8420143,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1843.75,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 287.11328,
          "zs_curdayflow": 6338.25,
          "zs_totalflow": 598340.6
        },
        {
          "id": 10172460,
          "addtime": "2021-09-06 21:21:23",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 21:20:21",
          "cod": 8.506945,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1774.3055,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 290.00604,
          "zs_curdayflow": 6348,
          "zs_totalflow": 598350.4
        },
        {
          "id": 10172472,
          "addtime": "2021-09-06 21:23:23",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 21:22:21",
          "cod": 8.506945,
          "ph": 6.8420143,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1723.9584,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 289.98657,
          "zs_curdayflow": 6357.9375,
          "zs_totalflow": 598360.3
        },
        {
          "id": 10172496,
          "addtime": "2021-09-06 21:25:23",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 21:24:21",
          "cod": 8.506945,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1635.4166,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 296.17352,
          "zs_curdayflow": 6367.625,
          "zs_totalflow": 598370
        },
        {
          "id": 10172548,
          "addtime": "2021-09-06 21:27:23",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 21:26:21",
          "cod": 8.506945,
          "ph": 6.8420143,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1702.257,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 313.51065,
          "zs_curdayflow": 6377.4375,
          "zs_totalflow": 598379.8
        },
        {
          "id": 10172552,
          "addtime": "2021-09-06 21:29:23",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 21:28:21",
          "cod": 8.506945,
          "ph": 6.8420143,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1702.257,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 278.30197,
          "zs_curdayflow": 6387.3125,
          "zs_totalflow": 598389.7
        },
        {
          "id": 10172596,
          "addtime": "2021-09-06 21:31:23",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 21:30:21",
          "cod": 8.506945,
          "ph": 6.8420143,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1766.493,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 269.68903,
          "zs_curdayflow": 6396.75,
          "zs_totalflow": 598399.1
        },
        {
          "id": 10172612,
          "addtime": "2021-09-06 21:33:23",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 21:32:21",
          "cod": 8.506945,
          "ph": 6.8420143,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1818.5763,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 279.72345,
          "zs_curdayflow": 6406.3125,
          "zs_totalflow": 598408.7
        },
        {
          "id": 10172652,
          "addtime": "2021-09-06 21:35:23",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 21:34:21",
          "cod": 8.506945,
          "ph": 6.8420143,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1960.9375,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 288.365,
          "zs_curdayflow": 6416.125,
          "zs_totalflow": 598418.5
        },
        {
          "id": 10172688,
          "addtime": "2021-09-06 21:37:23",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 21:36:21",
          "cod": 8.506945,
          "ph": 6.8420143,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1979.1666,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 285.7261,
          "zs_curdayflow": 6425.9375,
          "zs_totalflow": 598428.3
        },
        {
          "id": 10172704,
          "addtime": "2021-09-06 21:39:23",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 21:38:21",
          "cod": 8.506945,
          "ph": 6.8420143,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 2043.4028,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 278.77835,
          "zs_curdayflow": 6435.625,
          "zs_totalflow": 598438
        },
        {
          "id": 10172740,
          "addtime": "2021-09-06 21:41:23",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 21:40:21",
          "cod": 8.506945,
          "ph": 6.8420143,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1970.4861,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 300.15768,
          "zs_curdayflow": 6445.4375,
          "zs_totalflow": 598447.8
        },
        {
          "id": 10172764,
          "addtime": "2021-09-06 21:43:23",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 21:42:21",
          "cod": 8.506945,
          "ph": 6.8420143,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 2047.743,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 292.1805,
          "zs_curdayflow": 6455.25,
          "zs_totalflow": 598457.6
        },
        {
          "id": 10172780,
          "addtime": "2021-09-06 21:45:23",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 21:44:21",
          "cod": 8.506945,
          "ph": 6.8420143,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 2035.5903,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 289.48322,
          "zs_curdayflow": 6464.8125,
          "zs_totalflow": 598467.2
        },
        {
          "id": 10172804,
          "addtime": "2021-09-06 21:47:23",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 21:46:21",
          "cod": 8.506945,
          "ph": 6.8420143,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 2049.4792,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 291.22357,
          "zs_curdayflow": 6474.625,
          "zs_totalflow": 598477
        },
        {
          "id": 10172840,
          "addtime": "2021-09-06 21:49:23",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 21:48:21",
          "cod": 8.506945,
          "ph": 6.8420143,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 2124.132,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 303.09747,
          "zs_curdayflow": 6484.3125,
          "zs_totalflow": 598486.7
        },
        {
          "id": 10172860,
          "addtime": "2021-09-06 21:51:23",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 21:50:21",
          "cod": 8.506945,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 2100.6946,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 302.2493,
          "zs_curdayflow": 6494.25,
          "zs_totalflow": 598496.6
        },
        {
          "id": 10172896,
          "addtime": "2021-09-06 21:53:23",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 21:52:21",
          "cod": 8.506945,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 2075.5208,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 292.1949,
          "zs_curdayflow": 6504,
          "zs_totalflow": 598506.4
        },
        {
          "id": 10172924,
          "addtime": "2021-09-06 21:55:23",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 21:54:21",
          "cod": 8.506945,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1992.1875,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 278.42432,
          "zs_curdayflow": 6513.8125,
          "zs_totalflow": 598516.2
        },
        {
          "id": 10172948,
          "addtime": "2021-09-06 21:57:23",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 21:56:21",
          "cod": 8.506945,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 2011.2847,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 293.52176,
          "zs_curdayflow": 6523.75,
          "zs_totalflow": 598526.1
        },
        {
          "id": 10172980,
          "addtime": "2021-09-06 21:59:23",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 21:58:21",
          "cod": 8.506945,
          "ph": 6.8420143,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 2197.9167,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 295.5699,
          "zs_curdayflow": 6533.75,
          "zs_totalflow": 598536.1
        },
        {
          "id": 10173000,
          "addtime": "2021-09-06 22:01:23",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 21:59:21",
          "cod": 8.506945,
          "ph": 6.8420143,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 2132.8125,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 294.72714,
          "zs_curdayflow": 6543.5,
          "zs_totalflow": 598545.9
        },
        {
          "id": 10173032,
          "addtime": "2021-09-06 22:03:23",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 22:01:21",
          "cod": 8.506945,
          "ph": 6.8420143,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 2102.4307,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 300.36127,
          "zs_curdayflow": 6553.125,
          "zs_totalflow": 598555.5
        },
        {
          "id": 10173072,
          "addtime": "2021-09-06 22:05:23",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 22:03:21",
          "cod": 8.506945,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 2119.7917,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 287.38013,
          "zs_curdayflow": 6562.8125,
          "zs_totalflow": 598565.2
        },
        {
          "id": 10173104,
          "addtime": "2021-09-06 22:07:23",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 22:05:21",
          "cod": 8.506945,
          "ph": 6.8420143,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 2143.2292,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 265.47668,
          "zs_curdayflow": 6572.4375,
          "zs_totalflow": 598574.8
        },
        {
          "id": 10173128,
          "addtime": "2021-09-06 22:09:23",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 22:07:21",
          "cod": 8.506945,
          "ph": 6.8420143,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 2005.2084,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 281.27823,
          "zs_curdayflow": 6582.125,
          "zs_totalflow": 598584.5
        },
        {
          "id": 10173158,
          "addtime": "2021-09-06 22:11:23",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 22:09:21",
          "cod": 8.506945,
          "ph": 6.8420143,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 2075.5208,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 305.36765,
          "zs_curdayflow": 6592.125,
          "zs_totalflow": 598594.5
        },
        {
          "id": 10173192,
          "addtime": "2021-09-06 22:13:23",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 22:11:21",
          "cod": 8.506945,
          "ph": 6.850116,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1998.2639,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 294.51477,
          "zs_curdayflow": 6601.75,
          "zs_totalflow": 598604.1
        },
        {
          "id": 10173208,
          "addtime": "2021-09-06 22:15:23",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 22:13:21",
          "cod": 8.506945,
          "ph": 6.8420143,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 2014.7568,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 299.15988,
          "zs_curdayflow": 6611.4375,
          "zs_totalflow": 598613.8
        },
        {
          "id": 10173228,
          "addtime": "2021-09-06 22:17:23",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 22:15:21",
          "cod": 8.506945,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1973.9584,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 300.71573,
          "zs_curdayflow": 6621.25,
          "zs_totalflow": 598623.6
        },
        {
          "id": 10173260,
          "addtime": "2021-09-06 22:19:23",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 22:17:21",
          "cod": 8.506945,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1885.4166,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 288.98932,
          "zs_curdayflow": 6630.75,
          "zs_totalflow": 598633.1
        },
        {
          "id": 10173280,
          "addtime": "2021-09-06 22:21:23",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 22:19:21",
          "cod": 8.506945,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1871.5278,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 287.8763,
          "zs_curdayflow": 6640.5,
          "zs_totalflow": 598642.9
        },
        {
          "id": 10173316,
          "addtime": "2021-09-06 22:23:23",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 22:21:21",
          "cod": 8.506945,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1823.7847,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 288.79416,
          "zs_curdayflow": 6650.3125,
          "zs_totalflow": 598652.7
        },
        {
          "id": 10173348,
          "addtime": "2021-09-06 22:25:23",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 22:23:21",
          "cod": 8.506945,
          "ph": 6.8420143,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1697.0487,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 292.34686,
          "zs_curdayflow": 6660.3125,
          "zs_totalflow": 598662.7
        },
        {
          "id": 10173384,
          "addtime": "2021-09-06 22:27:23",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 22:25:21",
          "cod": 8.506945,
          "ph": 6.8420143,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1724.8263,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 293.5319,
          "zs_curdayflow": 6670.125,
          "zs_totalflow": 598672.5
        },
        {
          "id": 10173392,
          "addtime": "2021-09-06 22:29:23",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 22:27:21",
          "cod": 8.506945,
          "ph": 6.8420143,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1628.4723,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 290.2532,
          "zs_curdayflow": 6679.8125,
          "zs_totalflow": 598682.2
        },
        {
          "id": 10173428,
          "addtime": "2021-09-06 22:31:23",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 22:29:21",
          "cod": 8.506945,
          "ph": 6.8420143,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1735.2432,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 302.86493,
          "zs_curdayflow": 6689.8125,
          "zs_totalflow": 598692.2
        },
        {
          "id": 10173456,
          "addtime": "2021-09-06 22:33:23",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 22:31:21",
          "cod": 8.506945,
          "ph": 6.8420143,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1639.7568,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 295.8122,
          "zs_curdayflow": 6699.3125,
          "zs_totalflow": 598701.7
        },
        {
          "id": 10173484,
          "addtime": "2021-09-06 22:35:23",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 22:33:21",
          "cod": 8.506945,
          "ph": 6.8420143,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1644.9653,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 296.54245,
          "zs_curdayflow": 6709.125,
          "zs_totalflow": 598711.5
        },
        {
          "id": 10173524,
          "addtime": "2021-09-06 22:37:23",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 22:35:21",
          "cod": 8.506945,
          "ph": 6.8420143,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1736.1111,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 293.80658,
          "zs_curdayflow": 6719,
          "zs_totalflow": 598721.4
        },
        {
          "id": 10173536,
          "addtime": "2021-09-06 22:39:23",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 22:37:21",
          "cod": 8.506945,
          "ph": 6.8420143,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1740.4514,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 279.67438,
          "zs_curdayflow": 6728.5,
          "zs_totalflow": 598730.9
        },
        {
          "id": 10173560,
          "addtime": "2021-09-06 22:41:23",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 22:39:21",
          "cod": 8.506945,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1837.6737,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 311.8925,
          "zs_curdayflow": 6738.4375,
          "zs_totalflow": 598740.8
        },
        {
          "id": 10173600,
          "addtime": "2021-09-06 22:43:23",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 22:41:21",
          "cod": 8.506945,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1861.9791,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 290.18652,
          "zs_curdayflow": 6747.9375,
          "zs_totalflow": 598750.3
        },
        {
          "id": 10173636,
          "addtime": "2021-09-06 22:45:23",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 22:43:21",
          "cod": 8.506945,
          "ph": 6.8420143,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1894.0972,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 306.36816,
          "zs_curdayflow": 6757.8125,
          "zs_totalflow": 598760.2
        },
        {
          "id": 10173648,
          "addtime": "2021-09-06 22:47:23",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 22:45:21",
          "cod": 8.506945,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1952.257,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 285.3937,
          "zs_curdayflow": 6767.625,
          "zs_totalflow": 598770
        },
        {
          "id": 10173696,
          "addtime": "2021-09-06 22:49:23",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 22:47:21",
          "cod": 7.4652777,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 2071.1804,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 285.2588,
          "zs_curdayflow": 6777.3125,
          "zs_totalflow": 598779.7
        },
        {
          "id": 10173700,
          "addtime": "2021-09-06 22:51:23",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 22:49:21",
          "cod": 7.4652777,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 2134.5486,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 294.29147,
          "zs_curdayflow": 6787.125,
          "zs_totalflow": 598789.5
        },
        {
          "id": 10173732,
          "addtime": "2021-09-06 22:53:23",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 22:51:21",
          "cod": 7.4652777,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 2114.5833,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 293.65408,
          "zs_curdayflow": 6796.8125,
          "zs_totalflow": 598799.2
        },
        {
          "id": 10173764,
          "addtime": "2021-09-06 22:55:23",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 22:53:21",
          "cod": 7.4652777,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 2222.2222,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 292.6488,
          "zs_curdayflow": 6806.625,
          "zs_totalflow": 598809
        },
        {
          "id": 10173804,
          "addtime": "2021-09-06 22:57:23",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 22:55:21",
          "cod": 7.4652777,
          "ph": 6.8420143,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 2134.5486,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 287.79227,
          "zs_curdayflow": 6816.3125,
          "zs_totalflow": 598818.7
        },
        {
          "id": 10173820,
          "addtime": "2021-09-06 22:59:23",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 22:57:21",
          "cod": 7.4652777,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 2206.5972,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 283.38,
          "zs_curdayflow": 6826,
          "zs_totalflow": 598828.4
        },
        {
          "id": 10173844,
          "addtime": "2021-09-06 23:01:23",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 22:59:21",
          "cod": 7.4652777,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 2115.4514,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 274.76303,
          "zs_curdayflow": 6835.8125,
          "zs_totalflow": 598838.2
        },
        {
          "id": 10173880,
          "addtime": "2021-09-06 23:03:23",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 23:01:21",
          "cod": 7.4652777,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 2165.7986,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 290.96783,
          "zs_curdayflow": 6845.625,
          "zs_totalflow": 598848
        },
        {
          "id": 10173912,
          "addtime": "2021-09-06 23:05:23",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 23:03:21",
          "cod": 7.4652777,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 2058.1597,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 276.94452,
          "zs_curdayflow": 6855.25,
          "zs_totalflow": 598857.6
        },
        {
          "id": 10173940,
          "addtime": "2021-09-06 23:07:23",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 23:05:21",
          "cod": 7.4652777,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 2056.4236,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 300.24658,
          "zs_curdayflow": 6864.9375,
          "zs_totalflow": 598867.3
        },
        {
          "id": 10173968,
          "addtime": "2021-09-06 23:09:23",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 23:07:21",
          "cod": 7.4652777,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1945.3125,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 302.363,
          "zs_curdayflow": 6874.75,
          "zs_totalflow": 598877.1
        },
        {
          "id": 10173984,
          "addtime": "2021-09-06 23:11:23",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 23:09:21",
          "cod": 7.4652777,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 2023.4375,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 295.64124,
          "zs_curdayflow": 6884.25,
          "zs_totalflow": 598886.6
        },
        {
          "id": 10174016,
          "addtime": "2021-09-06 23:13:23",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 23:11:21",
          "cod": 7.4652777,
          "ph": 6.8420143,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1869.7916,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 293.24557,
          "zs_curdayflow": 6893.9375,
          "zs_totalflow": 598896.3
        },
        {
          "id": 10174048,
          "addtime": "2021-09-06 23:15:23",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 23:13:21",
          "cod": 7.4652777,
          "ph": 6.8420143,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1845.4861,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 288.0143,
          "zs_curdayflow": 6903.75,
          "zs_totalflow": 598906.1
        },
        {
          "id": 10174080,
          "addtime": "2021-09-06 23:17:23",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 23:15:21",
          "cod": 7.4652777,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1811.632,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 282.15363,
          "zs_curdayflow": 6913.3125,
          "zs_totalflow": 598915.7
        },
        {
          "id": 10174096,
          "addtime": "2021-09-06 23:19:23",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 23:17:21",
          "cod": 7.4652777,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1878.4722,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 308.5776,
          "zs_curdayflow": 6923.125,
          "zs_totalflow": 598925.5
        },
        {
          "id": 10174128,
          "addtime": "2021-09-06 23:21:23",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 23:19:21",
          "cod": 7.4652777,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1878.4722,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 285.64963,
          "zs_curdayflow": 6933,
          "zs_totalflow": 598935.4
        },
        {
          "id": 10174156,
          "addtime": "2021-09-06 23:23:23",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 23:21:21",
          "cod": 7.4652777,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1846.3541,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 302.83334,
          "zs_curdayflow": 6942.9375,
          "zs_totalflow": 598945.3
        },
        {
          "id": 10174180,
          "addtime": "2021-09-06 23:25:23",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 23:23:21",
          "cod": 7.4652777,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1783.8542,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 294.83594,
          "zs_curdayflow": 6952.4375,
          "zs_totalflow": 598954.8
        },
        {
          "id": 10174224,
          "addtime": "2021-09-06 23:27:23",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 23:25:21",
          "cod": 7.4652777,
          "ph": 6.8420143,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1862.8473,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 300.56165,
          "zs_curdayflow": 6962.125,
          "zs_totalflow": 598964.5
        },
        {
          "id": 10174240,
          "addtime": "2021-09-06 23:29:23",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 23:27:21",
          "cod": 7.4652777,
          "ph": 6.8420143,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1863.7152,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 288.7802,
          "zs_curdayflow": 6971.9375,
          "zs_totalflow": 598974.3
        },
        {
          "id": 10174268,
          "addtime": "2021-09-06 23:31:23",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 23:29:21",
          "cod": 7.4652777,
          "ph": 6.8420143,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1875.8682,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 289.86673,
          "zs_curdayflow": 6981.75,
          "zs_totalflow": 598984.1
        },
        {
          "id": 10174308,
          "addtime": "2021-09-06 23:33:23",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 23:31:21",
          "cod": 7.4652777,
          "ph": 6.8420143,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1863.7152,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 291.2046,
          "zs_curdayflow": 6991.5,
          "zs_totalflow": 598993.9
        },
        {
          "id": 10174340,
          "addtime": "2021-09-06 23:35:23",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 23:33:21",
          "cod": 7.4652777,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1831.5972,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 282.13266,
          "zs_curdayflow": 7001.25,
          "zs_totalflow": 599003.6
        },
        {
          "id": 10174360,
          "addtime": "2021-09-06 23:37:23",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 23:35:21",
          "cod": 7.4652777,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1866.3195,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 280.96387,
          "zs_curdayflow": 7010.9375,
          "zs_totalflow": 599013.3
        },
        {
          "id": 10174380,
          "addtime": "2021-09-06 23:39:23",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 23:37:21",
          "cod": 7.4652777,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1802.0833,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 303.7704,
          "zs_curdayflow": 7020.625,
          "zs_totalflow": 599023
        },
        {
          "id": 10174400,
          "addtime": "2021-09-06 23:41:23",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 23:39:21",
          "cod": 7.4652777,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1868.0555,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 309.83624,
          "zs_curdayflow": 7030.25,
          "zs_totalflow": 599032.6
        },
        {
          "id": 10174452,
          "addtime": "2021-09-06 23:43:23",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 23:41:21",
          "cod": 7.4652777,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1883.6805,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 300.4139,
          "zs_curdayflow": 7040.125,
          "zs_totalflow": 599042.5
        },
        {
          "id": 10174472,
          "addtime": "2021-09-06 23:45:23",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 23:43:21",
          "cod": 7.4652777,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1888.8888,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 288.3469,
          "zs_curdayflow": 7049.9375,
          "zs_totalflow": 599052.3
        },
        {
          "id": 10174488,
          "addtime": "2021-09-06 23:47:23",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 23:45:21",
          "cod": 7.4652777,
          "ph": 6.8420143,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1792.5348,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 295.2263,
          "zs_curdayflow": 7059.625,
          "zs_totalflow": 599062
        },
        {
          "id": 10174527,
          "addtime": "2021-09-06 23:49:23",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 23:47:21",
          "cod": 7.4652777,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1934.8959,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 294.06003,
          "zs_curdayflow": 7069.5,
          "zs_totalflow": 599071.9
        },
        {
          "id": 10174564,
          "addtime": "2021-09-06 23:51:23",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 23:49:21",
          "cod": 7.4652777,
          "ph": 6.8420143,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1765.625,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 317.85776,
          "zs_curdayflow": 7079.3125,
          "zs_totalflow": 599081.7
        },
        {
          "id": 10174572,
          "addtime": "2021-09-06 23:53:23",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 23:51:21",
          "cod": 7.4652777,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1828.125,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 281.51978,
          "zs_curdayflow": 7089.125,
          "zs_totalflow": 599091.5
        },
        {
          "id": 10174600,
          "addtime": "2021-09-06 23:55:23",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 23:53:21",
          "cod": 7.4652777,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1767.3612,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 292.13937,
          "zs_curdayflow": 7098.5,
          "zs_totalflow": 599100.9
        },
        {
          "id": 10174624,
          "addtime": "2021-09-06 23:57:23",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 23:55:21",
          "cod": 7.4652777,
          "ph": 6.8420143,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1793.4027,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 292.71692,
          "zs_curdayflow": 7108,
          "zs_totalflow": 599110.4
        },
        {
          "id": 10174668,
          "addtime": "2021-09-06 23:59:23",

          "sewagecode": "LSQY_Out",
          "recordtime": "2021-09-06 23:57:21",
          "cod": 7.4652777,
          "ph": 6.846065,
          "an": 0.011574075,
          "tp": 0.08680556,
          "flow": 1763.0209,
          "curdayflow": 0,
          "totalflow": 2932041,

          
          "zs_flow": 286.56876,
          "zs_curdayflow": 7118,
          "zs_totalflow": 599120.4
        },
      ];

      this.jsk_codList = []
      this.jsk_anList = []
      this.jsk_tpList = []
      this.jsk_phList = []



      this.GetCBJSZHistory("IN", this.data_in)
      this.GetCBJSZHistory("OUT", this.data_out)
    },
    // 更多
    moreData(val) {
      this.showdetail = true;
      bus.$emit("emitMoreModel", val, this.data_in, this.data_out)
    },
    getTimeset(date, type) {
      var t;
      if (type == 0) {
        t = new Date(new Date().setDate(date.getDate() - 7));
      } else {
        t = date;
      }
      var year = t.getFullYear();
      var month = t.getMonth() + 1;
      var day = t.getDate();
      return year + "-" + month + "-" + day;
    },
    GetCBJSZHistory(name, source) {
      var _this = this;

      var timeList = [];
      var jsk_codList = [];
      var jsk_anList = [];
      var jsk_tpList = [];
      var jsk_phList = [];
      //--组织cod-an数据
      for (var i = 0; i < source.length; i++) {
        var item = source[i];

        timeList.push(
          new Date(item.recordtime).getMonth() + 1 + "-" +
          new Date(item.recordtime).getDate() + "\n" +
          new Date(item.recordtime).getHours() +
          ":" +
          new Date(item.recordtime).getMinutes()
        );
        jsk_codList.push(Number(item.cod).toFixed(3));
        jsk_anList.push(Number(item.an).toFixed(3));
        jsk_tpList.push(Number(item.tp).toFixed(3));
        jsk_phList.push(Number(item.ph).toFixed(3));
      }

      if (name == 'IN') {
        _this.jsk_codList['进水COD'] = jsk_codList;
        _this.jsk_anList['进水氨氮'] = jsk_anList;
        _this.jsk_tpList['进水总磷'] = jsk_tpList;
        _this.jsk_phList['进水PH'] = jsk_phList;
      } else {
        _this.jsk_codList['出水COD'] = jsk_codList;
        _this.jsk_anList['出水氨氮'] = jsk_anList;
        _this.jsk_tpList['出水总磷'] = jsk_tpList;
        _this.jsk_phList['出水PH'] = jsk_phList;
      }

      var jsphmin = parseInt(Math.min.apply(Math, this.jsk_phList['出水PH'])) //设置值
      var csphmin = parseInt(Math.min.apply(Math, this.jsk_phList['进水PH'])) //设置值
      var phmin = 4;
      if (jsphmin < 4 || csphmin < 4) {
        phmin = 0;
      }

      if (name == 'OUT') {
        this.initCharts(timeList, _this.jsk_codList, '进出水COD', '(mg/l)', 1, 600, 0);
        this.initCharts(timeList, _this.jsk_anList, '进出水氨氮', '(mg/l)', 2, 50, 0);
        this.initCharts(timeList, _this.jsk_phList, '进出水PH', '(mg/l)', 3, 10, phmin);
        this.initCharts(timeList, _this.jsk_tpList, '进出水总磷', '(mg/l)', 4, 10, 0);
      }
    },
    initCharts(timeList, list, name, yname, index, ymax, ymin) {
      var _this = this;
      var legend = [],
        series = [];
      for (var key in list) {
        legend.push(key);
        series.push({
          name: key,
          type: "line",
          smooth: true,
          markLine: this.GetMarkLine(name, list[key].length - 1),
          data: list[key],
          // itemStyle: {
          // 	normal: {
          // 		color: "rgb(122,216,127)",
          // 		areaStyle: {
          // 			color: "#f00"
          // 		}
          // 	}
          // },
          areaStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: "rgba(97,221,42,0.5)"
              },
              {
                offset: 1,
                color: "rgba(255,255,255,0)"
              }
              ])
            }
          },
        })
      }

      let Option = {
        color: this.colorlist,
        tooltip: {
          trigger: "axis",
          backgroundColor: 'rgba(0,0,0,0.5)',
          borderColor: 'gray',
          color: '#fff',
          textStyle: {
            color: '#fff',
          },
          axisPointer: {
            type: "cross",
            crossStyle: {
              color: "#999"
            }
          }
        },
        toolbox: {
          show: false,
          feature: {
            saveAsImage: {}
          }
        },
        legend: {
          y: "top",
          textStyle: {
            color: "#ffffffb5"
          },
          data: legend
        },
        grid: {
          top: "23%",
          left: "3%",
          right: "5%",
          bottom: "2%",
          containLabel: true
        },
        xAxis: [{
          type: "category",
          data: timeList,
          boundaryGap: false,
          axisLine: {
            show: true,
            lineStyle: {
              color: "#115db0"
            }
          },
          axisTick: {
            show: false,
            lineStyle: {
              color: "#115db0"
            }
          },
          axisLabel: {
            textStyle: {
              color: "#c2defd"
            }
          },
          splitLine: {
            show: false,
            lineStyle: {
              color: "#115db0"
            }
          }
        }],
        yAxis: [{
          name: yname,
          max: ymax == undefined ? 'dataMax' : ymax,
          min: ymin == undefined ? 'dataMax' : ymin,
          axisLine: {
            show: true,
            lineStyle: {
              color: "#115db0"
            }
          },
          axisTick: {
            show: false,
            lineStyle: {
              color: "#115db0"
            }
          },
          axisLabel: {
            textStyle: {
              color: "#00cffe"
            }
          },
          splitLine: {
            show: false,
            lineStyle: {
              color: "#115db0"
            }
          },
          type: "value",
          nameTextStyle: {
            color: "#ffffffb5",
            fontSize: 12
          }
        }],
        series: series
      };
      var myChart = echarts.init(document.getElementById("wsclcCharts_" + index));
      myChart.setOption(Option, true);
      myChart.resize();
      window.addEventListener("resize", function () {
        myChart.resize();
      });
    },
    GetMarkLine(val_1, elength) {
      if (val_1 == "进出水COD") {
        var markline = {
          large: true,
          data: [{
            name: "出水COD",
            xAxis: -1,
            yAxis: 60,
            lineStyle: {
              type: "dashed",
              color: "#57a3f3"
            },
            label: {
              show: false
            }
          },
          {
            name: "出水COD",
            xAxis: elength,
            yAxis: 60,
            lineStyle: {
              type: "dashed",
              color: "#57a3f3"
            },
            label: {
              show: true,
              color: "#57a3f3",
              position: "middle",
              formatter: '出水COD上限:50'
            }
          },
          {
            name: "进水COD上限",
            xAxis: -1,
            yAxis: 400,
            lineStyle: {
              type: "dashed",
              color: "#57a3f3"
            },
            label: {
              show: false
            }
          },
          {
            name: "进水COD上限",
            xAxis: elength,
            yAxis: 400,
            lineStyle: {
              type: "dashed",
              color: "#57a3f3"
            },
            label: {
              show: true,
              color: "#57a3f3",
              position: "middle",
              formatter: '进水COD上限:400'
            }
          }
          ]
        };
        return markline;
      } else if (val_1 == "进出水氨氮") {
        var markline = {
          large: true,
          data: [{
            name: "出水氨氮",
            xAxis: -1,
            yAxis: 8,
            lineStyle: {
              type: "dashed",
              color: "#57a3f3"
            },
            label: {
              show: false
            }
          },
          {
            name: "出水氨氮",
            xAxis: elength,
            yAxis: 8,
            lineStyle: {
              type: "dashed",
              color: "#57a3f3"
            },
            label: {
              show: true,
              color: "#57a3f3",
              position: "middle",
              formatter: '出水氨氮上限:6'
            }
          },
          {
            name: "进水氨氮",
            xAxis: -1,
            yAxis: 30,
            lineStyle: {
              type: "dashed",
              color: "#57a3f3"
            },
            label: {
              show: false
            }

          },
          {
            name: "进水氨氮",
            xAxis: elength,
            yAxis: 30,
            lineStyle: {
              type: "dashed",
              color: "#57a3f3"
            },
            label: {
              show: true,
              color: "#57a3f3",
              position: "middle",
              formatter: '进水氨氮上限:30'
            }
          }
          ]
        };
        return markline;
      } else if (val_1 == "进出水PH") {
        var markline = {
          large: true,
          data: [{
            name: "进、出水PHT",
            xAxis: -1,
            yAxis: 9,
            lineStyle: {
              type: "dashed",
              color: "#57a3f3"
            },
            label: {
              show: false
            }
          },
          {
            name: "进、出水PHT",
            xAxis: elength,
            yAxis: 9,
            lineStyle: {
              type: "dashed",
              color: "#57a3f3"
            },
            label: {
              show: true,
              color: "#57a3f3",
              position: "middle",
              formatter: '进、出水PH上限:9'
            }
          },
          {
            name: "进、出水PHM",
            xAxis: -1,
            yAxis: 6,
            lineStyle: {
              type: "dashed",
              color: "#57a3f3"
            },
            label: {
              show: false
            }

          },
          {
            name: "进、出水PHM",
            xAxis: elength,
            yAxis: 6,
            lineStyle: {
              type: "dashed",
              color: "#57a3f3"
            },
            label: {
              show: true,
              color: "#57a3f3",
              position: "middle",
              formatter: '进、出水PH下限:6'
            }
          }
          ]
        };
        return markline;
      } else if (val_1 == "进出水总磷") {
        var markline = {
          large: true,
          data: [{
            name: "进水总磷上限",
            xAxis: -1,
            yAxis: 4,
            lineStyle: {
              type: "dashed",
              color: "#57a3f3"
            },
            label: {
              show: false
            }
          },
          {
            name: "进水总磷上限",
            xAxis: elength,
            yAxis: 4,
            lineStyle: {
              type: "dashed",
              color: "#57a3f3"
            },
            label: {
              show: true,
              color: "#57a3f3",
              position: "middle",
              formatter: '进水总磷上限:4'
            }
          },
          {
            name: "出水总磷上限",
            xAxis: -1,
            yAxis: 0.5,
            lineStyle: {
              type: "dashed",
              color: "#57a3f3"
            },
            label: {
              show: false
            }
          },
          {
            name: "出水总磷上限",
            xAxis: elength,
            yAxis: 0.5,
            lineStyle: {
              type: "dashed",
              color: "#57a3f3"
            },
            label: {
              show: true,
              color: "#57a3f3",
              position: "middle",
              formatter: '出水总磷上限:0.5'
            }
          }
          ]
        };
        return markline;
      } else {
        return null;
      }

    }
  },
  mounted() {
    this.initial();
  },
  beforeDestroy() {

  },
};
</script>

<style lang="less" scoped="scoped">
.sewageDivRight {
  // padding: 0.15rem 0.1rem 0 0;

  .leftBg {
    width: 100%;
    height: calc(~"(100% / 4)");
    // margin-bottom: 0.1rem;
  }

  .homeTitle {
    font-size: 0.14rem;
    color: #ffffff;
    padding: 0.03rem 0.1rem;
    float: none;
    background-image: url(../../../../assets/static/img/newhome/01/bg_侧边标题.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
}
</style>
