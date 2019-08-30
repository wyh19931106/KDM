// pages/component/countryWin/countryWin.js
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
    current: 0,   //当前页
    count_current: 2,  //总页数
    list: [['中国', '欧盟', '美国', '印度', '日本', '英国', '德国', '澳大利亚', '加拿大', '墨西哥', '法国', '意大利', '中国', '欧盟', '美国', '印度', '日本', '英国', '德国', '澳大利亚', '加拿大'], ['墨西哥', '法国', '意大利']]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 关闭弹窗
    countryHide() {
      this.triggerEvent('countryHide', { show: false });
    },
    bindDefault() {
      return false;
    },
    // 上一页
    bindPrev() {
      if (this.data.current < 1) {
        return false;
      }
      this.setData({
        current: this.data.current-1
      })
    },
    // 下一页
    bindNext() {
      if (this.data.current >= this.data.count_current - 1) {
        return false;
      }
      this.setData({
        current: this.data.current + 1
      })
    },
    // 改变页数
    bindCountryChange(e) {
      this.setData({
        current: e.detail.current
      })
    },
  }
})
