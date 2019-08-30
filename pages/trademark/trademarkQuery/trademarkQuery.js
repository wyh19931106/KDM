// pages/trademark/trademarkQuery/trademarkQuery.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[1,2,3,4,5,6,7],
    country_show: false,  //国家弹窗
    trademark_show: false, //商标类别弹窗
    result_show: false  //结果弹出
  },
  // 搜索
  bindSearch() {
    this.setData({
      result_show: true
    })
  },
  resultHide(e) {
    this.setData({
      result_show: e.detail.show
    })
  },
  // 跳转商标详情
  toDetails(e) {
    wx.navigateTo({
      url: '../trademarkDetails/trademarkDetails?id=' + e.currentTarget.dataset.id,
    })
  },
  // 跳转建议注册类别
  toAdvise() {
    wx.navigateTo({
      url: '../adviseTrademark/adviseTrademark',
    })
  },
  //选择商标类别
  trademarkShow() {
    this.setData({
      trademark_show: true
    })
  },
  trademarkHide(e) {
    this.setData({
      trademark_show: e.detail.show
    })
  },
  //选择国家
  countryShow() {
    this.setData({
      country_show: true
    })
  },
  countryHide(e) {
    this.setData({
      country_show: e.detail.show
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