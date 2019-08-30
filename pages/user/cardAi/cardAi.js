// pages/user/cardAi/cardAi.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    user_id: 7,
    export_show: false, //导出
    email: '',
    share_show: false   //分享
  },
  openWin(e) {
    wx.navigateTo({
      url: e.currentTarget.dataset.to,
    })
  },
  // 导出
  exportShow() {
    this.setData({
      export_show: true
    })
  },
  exportHide(e) {
    this.setData({
      export_show: e.detail.show
    })
  },
  exportInput(e) {
    this.setData({
      email: e.detail.email
    })
  },
  // 分享
  shareShow() {
    this.setData({
      share_show: true
    })
  },
  shareHide(e) {
    this.setData({
      share_show: e.detail.show
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