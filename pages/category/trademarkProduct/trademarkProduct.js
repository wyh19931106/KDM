// pages/category/trademarkProduct/trademarkProduct.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [
      {
        fav: true,
        txt: '氨*010061'
      },
      {
        fav: false,
        txt: '无水氨010066'
      },
      {
        fav: false,
        txt: '氩010082'
      },
      {
        fav: false,
        txt: '氮010092'
      },
      {
        fav: false,
        txt: '一氧化二氮010093'
      },
      {
        fav: false,
        txt: '氯气010183'
      },
      {
        fav: false,
        txt: '氟010302'
      },
      {
        fav: false,
        txt: '焊接用保护气体010326'
      },
      {
        fav: false,
        txt: '工业用固态气体010328'
      },
      {
        fav: false,
        txt: '干冰（二氧化碳）010333'
      },
      {
        fav: false,
        txt: '氦010344'
      },
      {
        fav: false,
        txt: '氢010359'
      },
      {
        fav: false,
        txt: '氪010372'
      }
    ]
  },
  bindSelect(e) {
    var list = this.data.list;
    list[e.currentTarget.dataset.ind].fav = !list[e.currentTarget.dataset.ind].fav;
    this.setData({
      list: list
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