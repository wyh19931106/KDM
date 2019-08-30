// pages/trademark/trademarkDetails/trademarkDetails.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    alert_show: false
  },
  // 跳转类别
  toCate() {
    wx.navigateTo({
      url: '../trademarkCate/trademarkCate',
    })
  },
  // 跳转进度
  toPlan() {
    wx.navigateTo({
      url: '../trademarkPlan/trademarkPlan',
    })
  },
  // 收藏弹窗
  alertShow() {
    this.setData({
      alert_show: true
    })
  },
  alertHide() {
    this.setData({
      alert_show: false
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.id);
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