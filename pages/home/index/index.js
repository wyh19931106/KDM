// pages/index/index.js
var app = getApp();//获取应用实例
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show_tel: false,  //拨打电话
  },
  // 客服
  handleContact(e) {
    console.log(e)
    console.log(e.query)
  },
  // 切换tab
  changeTab(e) {
    wx.switchTab({
      url: e.currentTarget.dataset.to,
    })
  },
  // 打开页面
  openWin(e){
    wx.navigateTo({
      url: e.currentTarget.dataset.to,
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