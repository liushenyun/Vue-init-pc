import md5 from 'md5'
import GibberishAES from '../plugins/gibberish-aes'
import {
  MD5_KEY,
  PASS_KEY
} from './cons'

// aes加密
export const aesEncrypt = item => GibberishAES.aesEncrypt(item, PASS_KEY).trim()
// aes解密
export const aesDecrypt = item => GibberishAES.aesDecrypt(item, PASS_KEY)

// 计算数据签名
export const getSign = data => {
  let arr = []
  for (let kv of Object.entries(data)) {
    arr.push(kv.join('='))
  }
  return md5(arr.sort().join('&') + `&key=${MD5_KEY}`)
}
