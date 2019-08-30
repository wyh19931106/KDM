// pages/component/exportWin/exportWin.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    show: {
      type: Boolean,
      value: false
    },
    email: {
      type: String,
      value: ''
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 关闭
    exportHide() {
      this.triggerEvent('exportHide', { show: false });
    },
    bindDefault() {
      return false;
    },
    // 输入
    emailInput(e) {
      this.triggerEvent('exportInput', { email: e.detail.value });
      this.setData({
        email: e.detail.value
      })
    }
  }
})
