// pages/component/bindMobile.js
var util = require('../../../utils/util.js');
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    show: {
      type: Boolean,
      value: false
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    mobile: '15872909954', //手机号
    code: '1234',  //验证码
    finished: true,  //获取验证码计时结束
    code_txt: '获取验证码'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 关闭
    bindCancel() {
      this.triggerEvent('myevent', { show: false });
      this.setData({
        show: false
      })
    },
    bindDefault() {
      return false;
    },
    //手机号输入
    inputMobile(e) {
      this.setData({
        mobile: e.detail.value.replace(/[^\d]/g, '')
      })
    },
    inputCode(e) {
      this.setData({
        code: e.detail.value.replace(/\s+/g, '')
      })
    },
    // 获取验证码
    getCode() {
      var time = 60;
      var that = this;
      if (!that.data.finished) {
        return false;
      }
      var timer = setInterval(function () {
        if(time >1) {
          time--;
          that.setData({
            code_txt: time+'s',
            finished: false
          })
        } else {
          clearInterval(timer);
          that.setData({
            code_txt: '获取验证码',
            finished: true 
          })
        }
      },1000)
    },
    // 提交
    bindConfirm() {
      if(!this.data.mobile.trim()) {
        wx.showToast({
          title: '手机号不能为空',
          icon: 'none'
        })
      }
      if (!util.isPhone(this.data.mobile)) {
        wx.showToast({
          title: '手机号格式错误',
          icon: 'none'
        })
      }
      if (!this.data.code.trim()) {
        wx.showToast({
          title: '验证码不能为空',
          icon: 'none'
        })
      }
      console.log('mobile:' + this.data.mobile + '---code:' + this.data.code);
    }
  }
})
