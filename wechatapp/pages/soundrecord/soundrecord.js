// pages/soundrecord/soundrecord.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    btntext:'开始倾听'
  },
  startRecord: function () {
    var that = this;
    this.setData({
      btntext: '倾听中...'
    });
    if (this.recorderManager == null) {
      
      this.recorderManager = wx.getRecorderManager();

      this.options = {
        duration: 50000,

        sampleRate: 16000,

        numberOfChannels: 1,

        encodeBitRate: 64000,

        format: 'mp3',

        frameSize: 50

      }

    }

    this.recorderManager.start(this.options);

    this.recorderManager.onStop((res) => {
      console.log(res)
      that.setData({
        btntext: '识别中...'
      });
      wx.uploadFile({
        url: 'http://192.168.31.207:8080/InfoVideoLuntanTest/Wehall!speechReco', //将录音文件传到后台服务器
        filePath: res.tempFilePath,
        method: 'POST',
        name: 'file',
        header: {
          'content-type': 'multipart/form-data'
        },
        success: function (res) {
          console.log(res.data);
          wx.redirectTo({//失败的话，直接重定向到页面，并且不带任何参数
            url: '../index/index?ercode=' + res.data
          })
          that.setData({
            btntext: '开始倾听...'
          });
        },
        fail: function () {
          console.log("语音识别失败");
          that.setData({
            btntext: '开始倾听...'
          });
        }
      })

    });

  },

  stopRecord: function () {
    this.recorderManager.stop()

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