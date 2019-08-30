// pages/component/trademarkWin/trademarkWin.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    show: {
      type: Boolean,
      value: true
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    current: 0,   //当前页
    count_current: 2,  //总页数
    list: [['01 化学原料', '02 颜料油漆', '03 日化用品', '04 燃料油脂', '05 医药', '06 金属材料', '07 机械设备', '08 手工器械', '09 科学仪器', '10 医疗器械', '11 灯具空调', '12 运输工具', '13 军火烟火', '14 珠宝钟表', '15 乐器', '16 办公用品', '17 橡胶制品', '18 皮革皮具', '19 建筑材料', '20 家具', '21 厨房洁具'], ['22 化学原料', '23 颜料油漆', '24 日化用品']]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 关闭弹窗
    trademarkHide() {
      this.triggerEvent('trademarkHide', { show: false });
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
        current: this.data.current - 1
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
    bindTrademarkChange(e) {
      this.setData({
        current: e.detail.current
      })
    },
  }
})
