// pages/zhuanli/zhuanli.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    result_show: false, //查询结果
    keyword: "" //搜索词
  },
  inputKeyword (e) {
    this.setData({
      keyword: e.detail.value
    })
  },
  // 查询结果
  bindResult() {
    if (this.data.keyword) {
      wx.navigateTo({
        url: '../../patent/patentQuery/patentQuery',
      })
    } else {
      this.setData({
        result_show: true
      })
    }
  },
  resultHide(e) {
    this.setData({
      result_show: e.detail.show
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})