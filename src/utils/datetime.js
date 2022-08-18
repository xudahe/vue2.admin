// 秒转换时分秒
export function transverterMss(result) {
  var h = Math.floor(result / 3600) < 10 ? "0" + Math.floor(result / 3600) : Math.floor(result / 3600)
  var m = Math.floor((result / 60 % 60)) < 10 ? "0" + Math.floor((result / 60 % 60)) : Math.floor((result / 60 % 60))
  var s = Math.floor((result % 60)) < 10 ? "0" + Math.floor((result % 60)) : Math.floor((result % 60))
  return h + ":" + m + ":" + s
}

/**
 * 计算两个时间差经历的时间的文字描述
 * @param {*} timestamp - 毫秒
 */
export function timeCalculate(start, end) {
  const label = ['分钟', '小时', '天', '月', '年']
  const unit = [60, 60, 24, 30, 12]
  let restTime = Math.floor((end - start) / 1000)
  let res = ''
  for (let i = 0, len = unit.length; i < len; i++) {
    const pos = len - i // 从年开始算，分钟换算成年 === Math.pow(60, 4)
    const temp = unit.slice(0, pos).reduce((p, c) => p * c, 1)
    const time = Math.floor(restTime / temp)
    time > 0 && (res += time + label[pos - 1])
    restTime -= time * temp
  }
  return res;
}

//时间差,返回格式：0天10时4分50秒
export function dateDiff(stime, etime) {
  if (stime == "") return "";

  var begin = new Date(stime);
  var end = etime != "" ? new Date(etime) : new Date();

  //时间相差毫秒数
  var span = end.getTime() - begin.getTime();
  //计算相差天数
  var result = '';
  var days = Math.floor(span / (24 * 3600 * 1000));
  result += days + '天';
  //相差小时数
  var leave1 = span % (24 * 3600 * 1000);
  var hours = Math.floor(leave1 / (3600 * 1000))
  result += (hours < 10 ? '0' + hours : hours) + '时';
  //相差分钟
  var leave2 = leave1 % (3600 * 1000)
  var minutes = Math.floor(leave2 / (60 * 1000));
  result += (minutes < 10 ? '0' + minutes : minutes) + '分';
  //相差秒
  var level3 = leave2 % (60 * 1000)
  var seconds = Math.round(level3 / 1000);
  result += (seconds < 10 ? '0' + seconds : seconds) + '秒';

  return result; //0天10时4分50秒
}

// 获取日期时间戳
export function getTime(dayNum) {
  var myDate = new Date()
  var lw = new Date(myDate - 1000 * 60 * 60 * 24 * dayNum) // 最后一个数字多少天前的意思
  var lastY = lw.getFullYear()
  var lastM = lw.getMonth() + 1
  var lastD = lw.getDate()
  var startdate = lastY + "-" + (lastM < 10 ? "0" + lastM : lastM) + "-" + (lastD < 10 ? "0" + lastD : lastD)
  var b = startdate.split(/\D/)
  var date = new Date(b[0], b[1] - 1, b[2])
  var time = date.getTime()
  return time
}

// 获取几天之前日期
export function getData(dayNum) {
  var myDate = new Date()
  var lw = new Date(myDate - 1000 * 60 * 60 * 24 * dayNum) // 最后一个数字多少天前的意思
  var lastY = lw.getFullYear()
  var lastM = lw.getMonth() + 1
  var lastD = lw.getDate()
  var startdate = lastY + "-" + (lastM < 10 ? "0" + lastM : lastM) + "-" + (lastD < 10 ? "0" + lastD : lastD)
  return startdate
}

// 获取几天之前或之后的日期, getRecentDay(-15) 或getRecentDay(15)
export function getRecentDay(day) {
  var today = new Date();
  var targetday_milliseconds = today.getTime() + 1000 * 60 * 60 * 24 * day;
  today.setTime(targetday_milliseconds);
  var tYear = today.getFullYear();
  var tMonth = today.getMonth();
  var tDate = today.getDate();
  tMonth = doHandleMonth(tMonth + 1);
  tDate = doHandleMonth(tDate);
  return tYear + "-" + tMonth + "-" + tDate; // YYYY-MM-DD

  function doHandleMonth(month) {
    var m = month;
    if (month.toString().length == 1) {
      m = "0" + month;
    }
    return m;
  }
}

// 日期转换时间戳
export function getNewTime(dayNum) {
  var b = dayNum.split(/\D/)
  var date = new Date(b[0], b[1] - 1, b[2])
  var time = date.getTime()
  return time
}

// 获取当月第一天
export function getCurrentMonthFirst() {
  var date = new Date();
  date.setDate(1);
  return date;
}

// 获取当月最后一天
export function getCurrentMonthLast() {
  var date = new Date();
  var currentMonth = date.getMonth();
  var nextMonth = ++currentMonth;
  var nextMonthFirstDay = new Date(date.getFullYear(), nextMonth, 1);
  var oneDay = 1000 * 60 * 60 * 24;
  return new Date(nextMonthFirstDay - oneDay);
}

/**
 * JS判定一个给定的时间在某个时间范围内
 * 
 * console.log(judge('16:00', true, true));
 * 同时算两个时间区间内，比如 16:00 ，既算做位于 ["15:00","16:00"]，也算做位于 ["16:00","17:00"] 区间；
 * leftEquals  临界时间作为结束时间，比如 16:00 ，那么就只算做位于 ["15:00","16:00"] 区间；
 * rightEquals 临界时间作为起始时间，比如 16:00 ，那么就只算做位于 ["16:00","17:00"] 区间；
 * @returns ["15:00","16:00"]
 */
export function judge(time, leftEquals, rightEquals) {
  // 生成24小时时间区间，跨度为1小时
  let timeArrays = new Array(24).fill(['', '']).map((item, index) => [(index < 10 ? '0' + index : index) + ':00', ((index + 1) < 10 ? '0' + (index + 1) : (index + 1)) + ':00']);

  return timeArrays.filter(item => compare(time, item[0], leftEquals) && compare(item[1], time, rightEquals));


  function compare(startTime, endTime, equals) {
    // 将时间转换为分钟，再进行比较
    let startTimes = startTime.split(':');
    let endTimes = endTime.split(':');
    let startTimeVal = startTimes[0] * 60 + Number(startTimes[1]);
    let endTimeVal = endTimes[0] * 60 + Number(endTimes[1]);

    return equals ? startTimeVal >= endTimeVal : startTimeVal > endTimeVal;
  }
}