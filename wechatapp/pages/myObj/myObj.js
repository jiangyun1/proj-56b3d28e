// pages/myObj/myObj.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    lat: '29.600073',
    lng: '106.236894',
    address:"重庆璧山区璧铜路4号"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.data.lng = options.lng;
    this.data.lat = options.lat;
    this.data.address = options.address;
    wx.openLocation({
      type: 'gcj02',
      longitude: Number(this.data.lng),
      latitude: Number(this.data.lat),
      name: this.data.address,
      address: this.data.address
    })
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