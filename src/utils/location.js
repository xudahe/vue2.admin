import store from "../store/index"

/**
 * 高德地图定位
 * 参考手册：https://lbs.amap.com/api/javascript-api/reference/location#m_AMap.Geolocation
 * @type {{}}
 */
export const location = {
  initMap(id) {
    let mapObj = new AMap.Map(id, {})
    mapObj.plugin(['AMap.Geolocation'], function () {
      let geolocation = new AMap.Geolocation({
        enableHighAccuracy: true, //  是否使用高精度定位，默认:true
        timeout: 10000, //  超过10秒后停止定位，默认：无穷大
        maximumAge: 0, // 定位结果缓存0毫秒，默认：0
        convert: true, // 自动偏移坐标，偏移后的坐标为高德坐标，默认：true
        showButton: true, //  显示定位按钮，默认：true
        buttonPosition: 'RB', // 定位按钮停靠位置，'LB'表示左下角
        buttonOffset: new AMap.Pixel(10, 20), //  定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
        showMarker: true, //  定位成功后在定位到的位置显示点标记，默认：true
        showCircle: true, //  定位成功后用圆圈表示定位精度范围，默认：true
        panToLocation: true, //  定位成功后将定位到的位置作为地图中心点，默认：true
        zoomToAccuracy: true //  定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
      })
      geolocation.getCurrentPosition();

      AMap.event.addListener(geolocation, "complete", function (result) {
        console.log("定位成功信息：", result);
        getWeather(result.addressComponent.adcode)
      });
      AMap.event.addListener(geolocation, "error", function (result) {
        console.log("定位失败错误：", result);

        //使用CitySearch插件获取当前所在城市信息
        AMap.plugin("AMap.CitySearch", function () {
          var citySearch = new AMap.CitySearch();
          citySearch.getLocalCity(function (status, result) {
            if (status === "complete" && result.info === "OK") {
              console.log("通过ip获取当前城市：", result);
              getWeather(result.adcode)
            }
          });
        });
      });

      function getWeather(adcode) {
        //加载天气查询插件 https://lbs.amap.com/api/javascript-api/guide/services/weather/
        AMap.plugin('AMap.Weather', function () {
          //创建天气查询实例
          var weather = new AMap.Weather();
          //执行实时天气信息查询
          weather.getLive(adcode, function (err, data) {
            console.log("天气信息：", data)
            store.state.weather = [data]
          });
        });
      }

    })
  }
}
