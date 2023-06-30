function requestFullScreen() {
    let el = document.documentElement;
    let rfs = el.requestFullScreen || el.webkitRequestFullScreen ||
        el.mozRequestFullScreen || el.msRequestFullScreen;
    if (rfs) { //typeof rfs != "undefined" && rfs
        rfs.call(el);
    } else if (typeof window.ActiveXObject != 'undefined') {
        //for IE，这里其实就是模拟了按下键盘的F11，使浏览器全屏
        let wscript = new ActiveXObject('WScript.Shell');
        if (wscript != null) {
            wscript.SendKeys('{F11}');
        }
    }
}

function cancelFullScreen() {
    let el = document;
    let cfs = el.cancelFullScreen || el.webkitCancelFullScreen ||
        el.mozCancelFullScreen || el.exitFullScreen;
    if (cfs) { //typeof cfs != "undefined" && cfs
        cfs.call(el);
    } else if (typeof window.ActiveXObject != 'undefined') {
        //for IE，这里和fullScreen相同，模拟按下F11键退出全屏
        let wscript = new ActiveXObject('WScript.Shell');
        if (wscript != null) {
            wscript.SendKeys('{F11}');
        }
    }
}

export default {
    requestFullScreen,
    cancelFullScreen
}