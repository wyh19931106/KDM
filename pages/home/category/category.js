// pages/category/category.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    type: 1,    //类别
    keyword: '', //商品名称
    result_show: false, //查询结果
    country_show: false  //国家弹窗
  },
  // input输入
  inputChange(e) {
    this.setData({
      keyword: e.detail.value
    })
  },
  // 查询结果
  bindResult() {
    if ( this.data.keyword ) {
      wx.navigateTo({
        url: '../../category/product/product?key=' + this.data.keyword,
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
  // 切换
  bindChange(e) {
    this.setData({
      type: e.currentTarget.dataset.type
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
  // 跳转分类
  toTrademark(ev) {
    wx.navigateTo({
      url: '../../category/trademark/trademark?type=' + ev.currentTarget.dataset.id
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