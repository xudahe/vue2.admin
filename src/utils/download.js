/**
 * 下载文件
 * @param {String} path - 文件地址
 * @param {String} name - 文件名,eg: test.png
 */
export const downloadFileBlob = (path, name) => {
  const xhr = new XMLHttpRequest();
  xhr.open('get', path);
  xhr.responseType = 'blob';
  xhr.send();
  xhr.onload = function () {
    if (this.status === 200 || this.status === 304) {
      // 如果是IE10及以上，不支持download属性，采用msSaveOrOpenBlob方法，但是IE10以下也不支持msSaveOrOpenBlob
      if ('msSaveOrOpenBlob' in navigator) {
        navigator.msSaveOrOpenBlob(this.response, name);
        return;
      }
      const url = URL.createObjectURL(this.response);
      const a = document.createElement('a');
      a.style.display = 'none';
      a.href = url;
      a.download = name;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }
  };
}

/**
 * 下载文件
 * @param {String} path - 文件地址
 * @param {String} name - 文件名,eg: test.png
 */
export const downloadFileBase64 = (path, name) => {
  const xhr = new XMLHttpRequest();
  xhr.open('get', path);
  xhr.responseType = 'blob';
  xhr.send();
  xhr.onload = function () {
    if (this.status === 200 || this.status === 304) {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(this.response);
      fileReader.onload = function () {
        const a = document.createElement('a');
        a.style.display = 'none';
        a.href = this.result;
        a.download = name;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      };
    }
  };
}

/**
 * 下载excel
 * @param {blob} fileArrayBuffer 文件流
 * @param {String} filename 文件名称
 */
export const downloadXls = (fileArrayBuffer, filename) => {
  let data = new Blob([fileArrayBuffer], {
    type: 'application/vnd.ms-excel,charset=utf-8'
  });
  if (typeof window.chrome !== 'undefined') {
    // Chrome
    var link = document.createElement('a');
    link.href = window.URL.createObjectURL(data);
    link.download = filename;
    link.click();
  } else if (typeof window.navigator.msSaveBlob !== 'undefined') {
    // IE
    var blob = new Blob([data], {
      type: 'application/force-download'
    });
    window.navigator.msSaveBlob(blob, filename);
  } else {
    // Firefox
    var file = new File([data], filename, {
      type: 'application/force-download'
    });
    window.open(URL.createObjectURL(file));
  }
}