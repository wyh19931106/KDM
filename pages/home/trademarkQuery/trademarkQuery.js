// pages/trademarkQuery/trademarkQuery.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show_tel: false,  //拨打电话
    camera_show: false, //拍照
    result_show: false, //查询结果
    keyword: '',  //关键词
    country_show: false,  //国家弹窗
    trademark_show: false //商标类别弹窗
  },
  // 客服
  handleContact(e) {
    console.log(e.path)
    console.log(e.query)
  },
  // 输入关键词
  inputKeyword(e) {
    this.setData({
      keyword: e.detail.value
    })
  },
  // 查询结果
  bindResult() {
    if (this.data.keyword) {
      wx.navigateTo({
        url: '../../trademark/trademarkQuery/trademarkQuery',
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
  // 拍照
  bindCamera() {
    this.setData({
      camera_show: true
    })
  },
  bindCameraCancel() {
    this.setData({
      camera_show: false
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
  //拨打电话
  bindTel: function () {
    this.setData({
      show_tel: true
    })
  },
  bindCall: function () {
    wx.makePhoneCall({
      phoneNumber: '03123688777',
    })
  },
  bindCancel: function () {
    this.setData({
      show_tel: false
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