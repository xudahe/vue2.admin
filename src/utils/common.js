export const common = {};


//全局通用的某个接口，比如日志
common.apiLog = function (vm, data) {
  vm.$ajax(vm.$apiSet.getDeptInfo, data)
    .then(res => {
      if (!res.data.success) {
        vm.$errorMsg(res.data.message)
      } else {

      }
    }).catch(err => {})
};
F
//全局通用的天气接口
common.apiWeather = function (vm, city = '南京') {
  //code：南京--320100   鼓楼区--320106
  // vm.$ajax({
  //   url: 'https://restapi.amap.com/v3/weather/weatherInfo?parameters&key=6c87cc38e8c451572bfefcf7175197a4&city=320106',
  //   method: 'get'
  // }).then(
  //   res => {
  //     if (res.status == 200) {

  //     }
  //   }
  // )

  vm.$ajax({
      url: 'http://wthrcdn.etouch.cn/weather_mini?city=' + encodeURI(city),
      dataType: 'jsonp',
      headers: {
        'Accept-Encoding': 'gzip'
      },
      method: 'get'
    })
    .then(res => {
      if (res && res.data) {
        console.log(res.data.data)
      }
    }).catch(err => {})
};

//把字符串作为 URI 组件进行编码
common.urlencode = function (str) {
  str = (str + '').toString();
  return encodeURIComponent(str).replace(/!/g, '%21').replace(/'/g, '%27').replace(/\(/g, '%28').
  replace(/\)/g, '%29').replace(/\*/g, '%2A').replace(/%20/g, '+');
}