// pages/user/user.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    mobile_show: false,
    pic: '../../../images/icon_avatar.png',
  },
  // 跳转页面
  openWin(e) {
    wx.navigateTo({
      url: e.currentTarget.dataset.to,
    })
  },
  // 绑定手机号
  mobileShow() {
    this.setData({
      mobile_show: true
    })
  },
  changeShow(e) {
    this.setData({
      mobile_show: e.detail.show
    })
  },
  // 选择头像
  selectImg() {
    var that = this;
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'],
      success: ret => {
        console.log(ret.tempFilePaths);
        that.setData({
          pic: ret.tempFilePaths[0]
        })
        // upload(that, ret.tempFilePaths);
      },
      fail: err => {
        console.log("error:" + err);
      }
    })
  },
  // 上传头像
  upload (obj, path) {
    wx.showToast({
      icon: "loading",
      title: "正在上传"
    }),
      wx.uploadFile({
        url: "服务器上传地址",
        filePath: path[0],
        name: 'file',
        header: {
          "Content-Type": "multipart/form-data",
          "Authorization": wx.getStorageSync('Authorization'),
        },
        formData: {
          //服务器需要的额外参数
          'type': 'base'
        },
        success: function (res) {
          let data = res.data;
          let pic = data.data.path
          console.log(pic)
          if (res.statusCode != 200) {
            wx.showModal({
              title: '提示',
              content: '上传失败',
              showCancel: false
            })
            return;
          }
          //将图片存起来
          obj.setData({
            pic: pic
          })
        },
        fail: function (e) {
          console.log(e);
          wx.showModal({
            title: '提示',
            content: '上传失败',
            showCancel: false
          })
        },
        complete: function () {
          wx.hideToast(); //隐藏Toast
        }
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