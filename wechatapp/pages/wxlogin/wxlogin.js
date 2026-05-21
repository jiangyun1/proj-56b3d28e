//js
Page({
  data: {
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  onLoad: function () {
    var that = this;
    // 查看是否授权
    wx.getSetting({
      success: function (res) {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          wx.getUserInfo({
            success: function (res) {
              that.wxLogin(function(rstr){
                console.log(rstr);
              },res);
            }
          })
        }
      }
    })
  },
  bindGetUserInfo: function (event) {
    console.log(event.detail.userInfo)
    this.wxLogin(function(res){
      console.log(res);
      wx.redirectTo({//失败的话，直接重定向到页面，并且不带任何参数
        url: '../index/index?uid=' + res.id
      })
    },event.detail);
    //使用
  },
  /**
   * 登录
   */
  wxLogin: function (func,info) {
    //调用登录接口
    //1.小程序调用wx.login得到code.
    wx.login({
      success: function (res) {
        var code = res['code'];
        //2.小程序调用wx.getUserInfo得到rawData, signatrue, encryptData.
        console.log(info);
        var rawData = info['rawData'];
        var signature = info['signature'];
        var encryptData = info['encryptData'];
        var encryptedData = info['encryptedData']; //注意是encryptedData不是encryptData...坑啊
        var iv = info['iv'];

        //3.小程序调用server获取token接口, 传入code, rawData, signature, encryptData.
        wx.request({
          url: "http://192.168.31.207:8080/shoppay2021shops/WeChatLogin!login",
          data: {
            "code": code,
            "rawData": rawData,
            "signature": signature,
            "encryptData": encryptData,
            'iv': iv,
            'encryptedData': encryptedData
          },
          success: function (res) {
            if (res.statusCode != 200) {
              wx.showModal({
                title: '登录失败'
              });
            }
            typeof func == "function" && func(res.data);
          }
        });
      }
    });
  }
})