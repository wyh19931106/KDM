const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

function request(url, data = {}, callback) {
  // let header = {
  //   'content-type': 'application/json',
  // };
  // let token = wx.getStorageSync('token') || '';
  // if (token) {
  //   header['AUTH-TOKEN'] = token
  // }
  // data['user_id'] = wx.getStorageSync('member_id');
  wx.request({
    url: url,
    method: 'POST',
    data: data,
    header: header,
    success: function (res) {
      callback(res.data)
    },
    fail: function (res) {
      console.log(url + '请求失败')
    },
    complete: function (res) {
      console.log(url + '请求完成')
      console.log(res);
    },
  })
}
// 手机号验证
function isPhone(str) {
  var reg = /^1(3|4|5|6|7|8|9)\d{9}$/;
  return reg.test(str.trim());
}
module.exports = {
  formatTime: formatTime,
  request: request,
  isPhone: isPhone
}
