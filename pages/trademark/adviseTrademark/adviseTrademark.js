// pages/trademark/adviseTrademark/adviseTrademark.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    result_show: false, //查询结果
    alert_show: false, //弹窗
    list: ['01 化学制剂、肥料 ', '39 运输贮藏', '40 材料加工', '27类 地毯席垫', '32类 啤酒饮料', '37 建筑修理', '41类 教育娱乐', '44类 医疗园艺', '43餐饮住宿', '43餐饮住宿'],
    country_show: false,  //国家弹窗
    trademark_show: false //商标类别弹窗
  },
  // 查询结果
  bindResult() {
    this.setData({
      result_show: true
    })
  },
  resultHide(e) {
    this.setData({
      result_show: e.detail.show
    })
  },
  // 收藏类别
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