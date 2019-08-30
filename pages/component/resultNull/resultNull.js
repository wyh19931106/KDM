// pages/component/resultNull/resultNull.js
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
    
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 关闭弹窗
    resultHide() {
      this.triggerEvent('resultHide', { show: false });
    },
    bindDefault() {
      return false;
    }
  }
})
