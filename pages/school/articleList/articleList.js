// pages/school/articleList/articleList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [1,2,3,4,5,6,7],
    keyword: '',           //搜索关键词
    result_show: false    //结果弹窗
  },
  //跳转页面
  openWin(e) {
    wx.navigateTo({
      url: e.currentTarget.dataset.to,
    })
  },
  // 查询结果
  bindResult() {
    if(this.data.keyword) {
      console.log(this.data.keyword);
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