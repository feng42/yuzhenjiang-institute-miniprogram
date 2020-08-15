// 云函数入口文件
const cloud = require('wx-server-sdk')
const got = require('got'); //引用 got
cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  let getResponse = await got('http://httpbin.org/get') 
  console.log(getResponse.body)
  return getResponse.body
}