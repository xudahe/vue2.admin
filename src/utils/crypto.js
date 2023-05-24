import CryptoJS from "crypto-js" //引用AES源码js

// AES 高级加密标准，是下一代的加密算法标准，速度快，安全级别高
// DES 数据加密标准，适用于大量数据加密
// TripleDES 是DES的增强版
// RC4 流加密算法，密钥长度可变
// HmacSHA1 键控哈希算法（密钥与消息数据混合）

// encrypt加密 / decrypt解密
// srcs 加密的字符串
// key 密钥 值得注意的是密钥的长度，对称加密算法AES-128-CBC算法，数据采用 PKCS#7 填充 ， 因此这里的 key 需要为16位！
// iv 密钥偏移量
// mode 加密模式 【CBC ECB CFB OFB CTRGladman(CTR)】
// paddig 填充方式 【 NoPadding ZeroPadding Pkcs7(Pkcs5) Iso10126 Iso97971 AnsiX923
// srcs值 有四种方法

// 5.1. parse
// var srcs = CryptoJS.enc.Utf8.parse(utf8String)
// var srcs = CryptoJS.enc.Latin1.parse(latin1String)
// var srcs = CryptoJS.enc.Hex.parse(hexString)
// var srcs = CryptoJS.enc.Base64.parse(base64String)

// 5.2  stringify
// var srcs = CryptoJS.enc.Utf8.stringify(utf8Array)
// var srcs = CryptoJS.enc.Latin1.stringify(Latin1Array)
// var srcs = CryptoJS.enc.Hex.stringify(HexArray)
// var srcs = CryptoJS.enc.Base64.stringify(Base64Array)

// 5.3 对称加密算法 
// var ciphertext = CryptoJS.AES.encrypt(message, key, config)
// var ciphertext = CryptoJS.DES.encrypt(message, key, config)
// var ciphertext = CryptoJS.TripleDES.encrypt(message, key, config)
// var ciphertext = CryptoJS.RC4.encrypt(message, key, config)



const key = CryptoJS.enc.Utf8.parse("1234123412ABCDEF"); //十六位十六进制数作为密钥
const iv = CryptoJS.enc.Utf8.parse('ABCDEF1234123412'); //十六位十六进制数作为密钥偏移量

//解密方法
export function Decrypt(word) {
  // 如果加密时候用了 ciphertext.toString() 就得加上下面这两行
  let encryptedHexStr = CryptoJS.enc.Hex.parse(word);
  let srcs = CryptoJS.enc.Base64.stringify(encryptedHexStr);
  let decrypted = CryptoJS.AES.decrypt(srcs, key, {
    iv: iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
  });

  let decryptedStr = decrypted.toString(CryptoJS.enc.Utf8);
  return decryptedStr.toString();
}

//加密方法
export function Encrypt(word) {
  let srcs = CryptoJS.enc.Utf8.parse(word);
  let encrypted = CryptoJS.AES.encrypt(srcs, key, {
    iv: iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
  });

  // 加上 ciphertext 就变成十六进制的了
  return encrypted.ciphertext.toString();
}