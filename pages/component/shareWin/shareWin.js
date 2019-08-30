// pages/component/shareWin/shareWin.js
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
    // 关闭
    shareHide() {
      this.triggerEvent('shareHide', { show: false });
    },
    bindDefault() {
      return false;
    }
  }
})
