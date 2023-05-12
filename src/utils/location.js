import store from "../store/index"

var publicPath = process.env.BASE_URL;

const weatherList = [{
    id: 1,
    name: '晴',
    url: 'image/weather/weather01.png'
  },
  {
    id: 2,
    name: '少云',
    url: 'image/weather/weather02.png'
  },
  {
    id: 3,
    name: '晴间多云',
    url: 'image/weather/weather03.png'
  },
  {
    id: 4,
    name: '多云',
    url: 'image/weather/weather04.png'
  },
  {
    id: 5,
    name: '阴',
    url: 'image/weather/weather05.png'
  },
  {
    id: 6,
    name: '有风',
    url: 'image/weather/weather06.png'
  },
  {
    id: 7,
    name: '平静',
    url: 'image/weather/weather07.png'
  },
  {
    id: 8,
    name: '微风',
    url: 'image/weather/weather08.png'
  },
  {
    id: 9,
    name: '和风',
    url: 'image/weather/weather09.png'
  },
  {
    id: 10,
    name: '清风',
    url: 'image/weather/weather10.png'
  },
  {
    id: 11,
    name: '强风/劲风',
    url: 'image/weather/weather11.png'
  },
  {
    id: 12,
    name: '疾风',
    url: 'image/weather/weather12.png'
  },
  {
    id: 13,
    name: '大风',
    url: 'image/weather/weather13.png'
  },
  {
    id: 14,
    name: '烈风',
    url: 'image/weather/weather14.png'
  },
  {
    id: 15,
    name: '风暴',
    url: 'image/weather/weather15.png'
  },
  {
    id: 16,
    name: '狂爆风',
    url: 'image/weather/weather16.png'
  },
  {
    id: 17,
    name: '飓风',
    url: 'image/weather/weather17.png'
  },
  {
    id: 18,
    name: '热带风暴',
    url: 'image/weather/weather18.png'
  },
  {
    id: 19,
    name: '霾',
    url: 'image/weather/weather19.png'
  },
  {
    id: 20,
    name: '中度霾',
    url: 'image/weather/weather20.png'
  },
  {
    id: 21,
    name: '重度霾',
    url: 'image/weather/weather21.png'
  },
  {
    id: 22,
    name: '严重霾',
    url: 'image/weather/weather22.png'
  },
  {
    id: 23,
    name: '阵雨',
    url: 'image/weather/weather23.png'
  },
  {
    id: 24,
    name: '雷阵雨',
    url: 'image/weather/weather24.png'
  },
  {
    id: 25,
    name: '雷阵雨并伴有冰雹',
    url: 'image/weather/weather25.png'
  },
  {
    id: 26,
    name: '小雨',
    url: 'image/weather/weather26.png'
  },
  {
    id: 27,
    name: '中雨',
    url: 'image/weather/weather27.png'
  },
  {
    id: 28,
    name: '大雨',
    url: 'image/weather/weather28.png'
  },
  {
    id: 29,
    name: '暴雨',
    url: 'image/weather/weather29.png'
  },
  {
    id: 30,
    name: '大暴雨',
    url: 'image/weather/weather30.png'
  },
  {
    id: 31,
    name: '特大暴雨',
    url: 'image/weather/weather31.png'
  },
  {
    id: 32,
    name: '强阵雨',
    url: 'image/weather/weather32.png'
  },
  {
    id: 33,
    name: '强雷阵雨',
    url: 'image/weather/weather33.png'
  },
  {
    id: 34,
    name: '极端降雨',
    url: 'image/weather/weather34.png'
  },
  {
    id: 35,
    name: '毛毛雨/细雨',
    url: 'image/weather/weather35.png'
  },
  {
    id: 36,
    name: '雨',
    url: 'image/weather/weather36.png'
  },
  {
    id: 37,
    name: '小雨-中雨',
    url: 'image/weather/weather37.png'
  },
  {
    id: 38,
    name: '中雨-大雨',
    url: 'image/weather/weather38.png'
  },
  {
    id: 39,
    name: '大雨-暴雨',
    url: 'image/weather/weather39.png'
  },
  {
    id: 40,
    name: '暴雨-大暴雨',
    url: 'image/weather/weather40.png'
  },
  {
    id: 41,
    name: '大暴雨-特大暴雨',
    url: 'image/weather/weather41.png'
  },
  {
    id: 42,
    name: '雨雪天气',
    url: 'image/weather/weather42.png'
  },
  {
    id: 43,
    name: '雨夹雪',
    url: 'image/weather/weather43.png'
  },
  {
    id: 44,
    name: '阵雨夹雪',
    url: 'image/weather/weather44.png'
  },
  {
    id: 45,
    name: '冻雨',
    url: 'image/weather/weather45.png'
  },
  {
    id: 46,
    name: '雪',
    url: 'image/weather/weather46.png'
  },
  {
    id: 47,
    name: '阵雪',
    url: 'image/weather/weather47.png'
  },
  {
    id: 48,
    name: '小雪',
    url: 'image/weather/weather48.png'
  },
  {
    id: 49,
    name: '中雪',
    url: 'image/weather/weather49.png'
  },
  {
    id: 50,
    name: '大雪',
    url: 'image/weather/weather50.png'
  },
  {
    id: 51,
    name: '暴雪',
    url: 'image/weather/weather51.png'
  },
  {
    id: 52,
    name: '小雪-中雪',
    url: 'image/weather/weather52.png'
  },
  {
    id: 53,
    name: '中雪-大雪',
    url: 'image/weather/weather53.png'
  },
  {
    id: 54,
    name: '大雪-暴雪',
    url: 'image/weather/weather54.png'
  },
  {
    id: 55,
    name: '浮尘',
    url: 'image/weather/weather55.png'
  },
  {
    id: 56,
    name: '扬沙',
    url: 'image/weather/weather56.png'
  },
  {
    id: 57,
    name: '沙尘暴',
    url: 'image/weather/weather57.png'
  },
  {
    id: 58,
    name: '强沙尘暴',
    url: 'image/weather/weather58.png'
  },
  {
    id: 59,
    name: '龙卷风',
    url: 'image/weather/weather59.png'
  },
  {
    id: 60,
    name: '雾',
    url: 'image/weather/weather60.png'
  },
  {
    id: 61,
    name: '浓雾',
    url: 'image/weather/weather61.png'
  },
  {
    id: 62,
    name: '强浓雾',
    url: 'image/weather/weather62.png'
  },
  {
    id: 63,
    name: '轻雾',
    url: 'image/weather/weather63.png'
  },
  {
    id: 64,
    name: '大雾',
    url: 'image/weather/weather64.png'
  },
  {
    id: 65,
    name: '特强浓雾',
    url: 'image/weather/weather65.png'
  },
  {
    id: 66,
    name: '热',
    url: 'image/weather/weather66.png'
  },
  {
    id: 67,
    name: '冷',
    url: 'image/weather/weather67.png'
  },
  {
    id: 68,
    name: '未知',
    url: 'image/weather/weather68.png'
  }
]

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
            for (let i = 0; i < weatherList.length; i++) {
              if (weatherList[i].name === data.weather) {
                data.imgUrl = publicPath + weatherList[i].url
                break
              }
            }
            console.log("实时天气：", data)
            store.state.weather = [data]
          });

          //执行天气预报信息查询
          weather.getForecast(adcode, function (err, data) {
            console.log("天气预报：", data)
          });
        });
      }

    })
  }
}