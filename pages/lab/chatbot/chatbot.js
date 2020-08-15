// pages/lab/chatbot/chatbot.js
const defaultText =
``

Page({

  /**
   * 页面的初始数据
   */
  data: {
    defaultText,
    text:"",
    hasResponse:false,
    chatText:"",
    chatResponse:"",
    chatSessionId:4396,
  },
  chatHistory: [],
  bindKeyInput: function (e) {
    this.setData({
      chatText: e.detail.value
    })
  },
  bindSessionId: function (e) {
    this.setData({
      chatSessionId: Number(e.detail.value)
    })
  },
  chat:function(){
    wx.cloud.init({
      traceUser:true,
      env:"yuzhenjiang-test-ug2nu"
    })
    wx.cloud.callFunction({
      name: 'httppost',
      data: {
        url:"http://49.232.76.51:10008/api/chatroom/v1",
        sessionId: this.data["chatSessionId"],
        chattext: this.data["chatText"]
      }
    }).then( res => {
      this.setData({
        hasResponse:true,
        chatResponse:JSON.parse(res.result)["data"]["output"]
      })
      this.chatHistory.push(this.data["chatResponse"])
      
    })
  },
  

  renderChat() {
    this.chatHistory.push(this.data["chatText"])
    this.chat()
    console.log(this.chatHistory)
    // this.setData({
    //   text:this.chatHistory.join('\n')
    // })
  },
})