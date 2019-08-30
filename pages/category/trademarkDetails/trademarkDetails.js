// pages/category/trademarkDetails/trademarkDetails.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [
      {
        no: '0101',
        txt: '工业气体，单质'
      }, {
        no: '0102',
        txt: '用于工业、科学、农业、园艺、林业的工业化工原料 '
      }, {
        no: '0103',
        txt: '放射性元素及其化学品'
      }, {
        no: '0104',
        txt: '用于工业、科学的化学品、化学制剂，不属于其他类别的产品用的化学制品用于工业、科学的化学品、化学制剂，不属于其他类别的产品用的化学制品'
      }, {
        no: '0105',
        txt: '用于农业、园艺、林业的化学品、化学制剂 '
      }, {
        no: '0106',
        txt: '化学试剂'
      }, {
        no: '0107',
        txt: '摄影用化学用品及材料 '
      }, {
        no: '0108',
        txt: '未加工的人造合成树脂，未加工塑料物质（不包括未加工的天然树脂）'
      }
      ]
  },
  toTrademarkProduct(e) {
    wx.navigateTo({
      url: '../trademarkProduct/trademarkProduct?type=' + e.currentTarget.dataset.type,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.type);
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