// 云函数入口文件
const cloud = require('wx-server-sdk')
const got = require('got'); 
cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  console.log(event.url)
  console.log(event.postdata)
  let postResponse = await got.post(event.url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8'
    },
    body:JSON.stringify({
      sessionId: event.sessionId,
      text: event.chattext
    })
  })  

  return postResponse.body
}