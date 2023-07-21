/**
 * npm run build打包前执行此段代码
 *
 * 
 * 版本号自加使用fs修改文件来实现
 * 体思路是：在执行打包命令npm run build时，同时执行一段js代码，该代码通过调用fs来自加修改version.json中的version，然后再进行打包操作。
 */

const fs = require('fs');

//返回version的json数据
function getVersionJson() {
    let data = fs.readFileSync('./public/data/version.json') //fs读取文件
    return JSON.parse(data) //转换为json对象
}

let versionData = getVersionJson(); //获取version的json
let arr = versionData.version.split('.'); //切割后的版本号数组
arr[2] = parseInt(arr[2]) + 1;
versionData.version = arr.join('.') //转换为以"."分割的字符串

console.log(versionData, 'versionData+++++++++++++++++++')
//用versionData覆盖version.json内容
fs.writeFile('./public/data/version.json', JSON.stringify(versionData, null, '\t'), err => { })


// 命名规范
// 主版本号.子版本号.修正版本号

// 命名原则
// （1）项目初版本时，版本号可以为 0.1.0；
// （2）当项目在进行了局部修改或 bug 修正时，主版本号和子版本号都不变，修正版本号加 1;
// （3）当项目在原有的基础上增加了部分功能时，主版本号不变，子版本号加 1，修正版本号复位为 0；
// （4）当项目在进行了重大修改或局部修正累积较多，而导致项目整体发生全局变化时，主版本号加 1;

// 案例
// 主版本号改动：一期项目用0.1.0；二期项目用1.1.0；三期项目用2.1.0；
// 子版本号改动：增加了权限管理功能模块，版本号由0.1.3改为0.2.0；
// 修正版本号改动：修正了一个页面显示字符串，版本号由0.1.3改为0.1.4
