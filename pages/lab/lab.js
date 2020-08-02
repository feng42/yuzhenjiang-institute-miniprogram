// pages/lab/lab.js
const texts = [
  '姜姜，记得发两百万福利呀',
  '已经发了呀',
  '啊？那就是两百万福利吗',
  '嗯~~',
  '晚上吃什么',
  '吃火锅',
  '现在去吧',
  '嗯~'
]

Page({

  /**
   * 页面的初始数据
   */
  data: {
    nbFrontColor: '#000000',
    nbBackgroundColor: '#ffffff',
    text: '',
    canAdd: true,
    canRemove: false
  },
  extraLine: [],
  onShareAppMessage: function () {
    return {
      title: 'text',
      path: 'page/component/pages/text/text'
    }
  },
  add() {
    this.extraLine.push(texts[this.extraLine.length % 12])
    this.extraLine.push(texts[this.extraLine.length % 12])
    this.setData({
      text: this.extraLine.join('\n'),
      canAdd: this.extraLine.length < 12,
      canRemove: this.extraLine.length > 0
    })
    setTimeout(() => {
      this.setData({
        scrollTop: 99999
      })
    }, 0)
  },
})