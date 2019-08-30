// pages/patent/patentQuery/patentQuery.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [1,2,3,4,5,6], 
    result_show: false, //查询结果
    country_show: false,  //国家弹窗
    type: {
      China: ['发明公开', '发明授权', '实用新型', '外观设计'],
      USA: ['发明申请', '发明授权', '再颁专利', '植物专利', '依法登记发明','外观授权'],
      EU: ['发明公开', '发明授权'],
      WIPO: ['发明申请'],
      Japan: ['发明专利','实用新型', '外观设计'],
      Korea: ['发明公开', '发明授权', '实用新型', '外观设计'],
      Other: ['发明专利']
    },
    type_index: 0
  },
  // 跳转页面
  openWin(e) {
    wx.navigateTo({
      url: '../patentDetails/patentDetails?id=' + e.currentTarget.dataset.id,
    })
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
  // 选择类别
  bindTypeChange: function (e) {
    this.setData({
      type_index: e.detail.value
    })
  },
  // 查看大图
  previewImage() {
    wx.previewImage({
      current: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1564051819664&di=c88c9b63cfdf52e976bf75a377f2d729&imgtype=0&src=http%3A%2F%2Fimg.redocn.com%2Fsheji%2F20141219%2Fzhongguofengdaodeliyizhanbanzhijing_3744115.jpg', // 当前显示图片的http链接  
      urls: ['https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1564051819664&di=c88c9b63cfdf52e976bf75a377f2d729&imgtype=0&src=http%3A%2F%2Fimg.redocn.com%2Fsheji%2F20141219%2Fzhongguofengdaodeliyizhanbanzhijing_3744115.jpg', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1564051819664&di=cc61a293c0c1de0e22f8a42c0e3ca1ab&imgtype=0&src=http%3A%2F%2Fpic31.nipic.com%2F20130801%2F11604791_100539834000_2.jpg','https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1564051819663&di=871ad62be574286c9cf16180b5fbdc4a&imgtype=0&src=http%3A%2F%2Fpic41.nipic.com%2F20140508%2F18609517_112216473140_2.jpg'] // 需要预览的图片http链接列表  
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