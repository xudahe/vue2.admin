/**
 * Description: 全局工具方法
 */
export const getObjType = obj => {
  var toString = Object.prototype.toString;
  var map = {
    '[object Boolean]': 'boolean',
    '[object Number]': 'number',
    '[object String]': 'string',
    '[object Function]': 'function',
    '[object Array]': 'array',
    '[object Date]': 'date',
    '[object RegExp]': 'regExp',
    '[object Undefined]': 'undefined',
    '[object Null]': 'null',
    '[object Object]': 'object'
  };
  if (obj instanceof Element) {
    return 'element';
  }
  return map[toString.call(obj)];
};
// 深度复制
export function deepClone(obj) {
  var type = getObjType(data);
  var obj;
  if (type === 'array') {
    obj = [];
  } else if (type === 'object') {
    obj = {};
  } else {
    //不再具有下一层次
    return data;
  }
  if (type === 'array') {
    for (var i = 0, len = data.length; i < len; i++) {
      obj.push(deepClone(data[i]));
    }
  } else if (type === 'object') {
    for (var key in data) {
      obj[key] = deepClone(data[key]);
    }
  }
  return obj;
}

// 随机生成由字母+数字的字符串
export function randomWord(randomFlag, min, max) {
  // randomFlag: Boolean 是否随机个数
  // min 最少个数
  // max 最大个数
  var str = ""
  var range = min
  var arr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
  ]

  // 随机产生
  if (randomFlag) {
    range = Math.round(Math.random() * (max - min)) + min
  }
  var pos = ""
  for (var i = 0; i < range; i++) {
    pos = Math.round(Math.random() * (arr.length - 1))
    str += arr[pos]
  }
  return str
}

export function createGuid() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (e) {
    var t = 16 * Math.random() | 0;
    return ("x" == e ? t : 3 & t | 8).toString(16)
  }).toUpperCase()
}

/**
 * 设置主题
 */
export function setTheme(name) {
  document.body.className = name;
}


/**
 * 设置灰色
 */
export function toggleGrayMode(status) {
  if (status) {
    document.body.className = document.body.className + ' grayMode';
  } else {
    document.body.className = document.body.className.replace(' grayMode', '');
  }
};

/**
 * 打开小窗口
 */
export function openWindow(url, title, w, h) {
  // Fixes dual-screen position                            Most browsers       Firefox
  const dualScreenLeft = window.screenLeft !== undefined ? window.screenLeft : screen.left
  const dualScreenTop = window.screenTop !== undefined ? window.screenTop : screen.top

  const width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width
  const height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height

  const left = ((width / 2) - (w / 2)) + dualScreenLeft
  const top = ((height / 2) - (h / 2)) + dualScreenTop
  const newWindow = window.open(url, title, 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=yes, copyhistory=no, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left)

  // Puts focus on the newWindow
  if (window.focus) {
    newWindow.focus()
  }
}