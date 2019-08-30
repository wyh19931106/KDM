// pages/category/product/product.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    country_show: false,  //国家弹窗
    result_show: false, //结果弹出
    list: [
      {
        fav: true,
        category_id: '05类',
        id: '0503',
        txt: '服装用除臭剂'
      },
      {
        fav: false,
        category_id: '07类',
        id: '0713',
        txt: '服装用电压熨机'
      },
      {
        fav: false,
        category_id: '09类',
        id: '0919',
        txt: '防事故用服装'
      },
      {
        fav: false,
        category_id: '09类',
        id: '0919',
        txt: '防辐射用服装'
      },
      {
        fav: false,
        category_id: '09类',
        id: '0919',
        txt: '防事故或防伤害用绝缘服装'
      },
      {
        fav: false,
        category_id: '09类',
        id: '0919',
        txt: '防事故、防辐射、防火用服装'
      },
      {
        fav: false,
        category_id: '09类',
        id: '0919',
        txt: '防火服装'
      },
      {
        fav: false,
        category_id: '09类',
        id: '0919',
        txt: '实验室用特制服装'
      },
      {
        fav: false,
        category_id: '11类',
        id: '1111',
        txt: '电热服装'
      },
      {
        fav: false,
        category_id: '09类',
        id: '0919',
        txt: '实验室用特制服装'
      },
      {
        fav: false,
        category_id: '11类',
        id: '1111',
        txt: '电热服装'
      }
    ]
  },
  // 搜索
  bindSearch(e) {
    if (e.detail.value) {
      console.log(e.detail.value);
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
  // 选择
  bindSelect(e) {
    var list = this.data.list;
    list[e.currentTarget.dataset.ind].fav = !list[e.currentTarget.dataset.ind].fav;
    this.setData({
      list: list
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
    console.log(options.key);
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