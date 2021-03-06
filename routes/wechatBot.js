var router = require('express').Router();
// 引用 wechat 库，详细请查看 https://github.com/node-webot/wechat

var appid = 'wx3a4584de6e938e83';
var appSecret = '7bd278c548bf3a09d964bcdc57bea108';
var encodingAESKey = 'c2wBQpbDxf2hk6iR1jXR9nrlw8SGUJIvk57qddUF1H0';
var token = 'xusijiaandlusijunstoken';

var wechat = require('wechat');
var config = {
	token: token,
	appid: appid,
	encodingAESKey: encodingAESKey
};

var WechatAPI = require('wechat-api');
var api = new WechatAPI(appid, appSecret);

router.use('/', wechat(token).text(function(message, req, res, next) {
	// message为文本内容
	// FromUserName: 'oPKu7jgOibOA-De4u8J2RuNKpZRw',
	// CreateTime: '1359125035',
	// MsgType: 'text',
	// Content: 'http',
	// MsgId: '5837397576500011341' }
	var keyArray = ['你好', '约吗', '芝麻开门'];
	var content = message.Content;
	var keyIndex = keyArray.indexOf(content);
	switch (keyIndex) {
		case 0:
			{
				res.reply({
					type: "text",
					content: '您好，大家好才是真的好！'
				});

			}
			break;
		case 1:
			{
				res.reply({
					type: "text",
					content: '不约，不约，叔叔我们不约！'
				});

			}
			break;
		case 2:
			{
				res.reply({
					type: "text",
					content: '吱~~~ “请进！” <a href="http://xusijiawork.leanapp.cn">点击进入</a>'
				});

			}
			break;
		default:
			res.reply({
				type: "text",
				content: '服务器挂掉了，你的要求暂时无法满足……'
			});
			break;
	}
}).image(function(message, req, res, next) {
	// message为图片内容
	// { ToUserName: 'gh_d3e07d51b513',
	// FromUserName: 'oPKu7jgOibOA-De4u8J2RuNKpZRw',
	// CreateTime: '1359124971',
	// MsgType: 'image',
	// PicUrl: 'http://mmsns.qpic.cn/mmsns/bfc815ygvIWcaaZlEXJV7NzhmA3Y2fc4eBOxLjpPI60Q1Q6ibYicwg/0',
	// MediaId: 'media_id',
	// MsgId: '5837397301622104395' }}).voice(function(message, req, res, next) {
	// TODO
}).voice(function(message, req, res, next) {
	// message为音频内容
	// { ToUserName: 'gh_d3e07d51b513',
	// FromUserName: 'oPKu7jgOibOA-De4u8J2RuNKpZRw',
	// CreateTime: '1359125022',
	// MsgType: 'voice',
	// MediaId: 'OMYnpghh8fRfzHL8obuboDN9rmLig4s0xdpoNT6a5BoFZWufbE6srbCKc_bxduzS',
	// Format: 'amr',
	// MsgId: '5837397520665436492' }
}).video(function(message, req, res, next) {
	// message为视频内容
	// { ToUserName: 'gh_d3e07d51b513',
	// FromUserName: 'oPKu7jgOibOA-De4u8J2RuNKpZRw',
	// CreateTime: '1359125022',
	// MsgType: 'video',
	// MediaId: 'OMYnpghh8fRfzHL8obuboDN9rmLig4s0xdpoNT6a5BoFZWufbE6srbCKc_bxduzS',
	// ThumbMediaId: 'media_id',
	// MsgId: '5837397520665436492' }
	// TODO
}).shortvideo(function(message, req, res, next) {
	// message为短视频内容
	// { ToUserName: 'gh_d3e07d51b513',
	// FromUserName: 'oPKu7jgOibOA-De4u8J2RuNKpZRw',
	// CreateTime: '1359125022',
	// MsgType: 'shortvideo',
	// MediaId: 'OMYnpghh8fRfzHL8obuboDN9rmLig4s0xdpoNT6a5BoFZWufbE6srbCKc_bxduzS',
	// ThumbMediaId: 'media_id',
	// MsgId: '5837397520665436492' }
	// TODO
}).location(function(message, req, res, next) {
	// message为链接内容
	// { ToUserName: 'gh_d3e07d51b513',
	// FromUserName: 'oPKu7jgOibOA-De4u8J2RuNKpZRw',
	// CreateTime: '1359125022',
	// MsgType: 'link',
	// Title: '公众平台官网链接',
	// Description: '公众平台官网链接',
	// Url: 'http://1024.com/',
	// MsgId: '5837397520665436492' }
	// TODO
}).link(function(message, req, res, next) {
	// message为链接内容
	// { ToUserName: 'gh_d3e07d51b513',
	// FromUserName: 'oPKu7jgOibOA-De4u8J2RuNKpZRw',
	// CreateTime: '1359125022',
	// MsgType: 'link',
	// Title: '公众平台官网链接',
	// Description: '公众平台官网链接',
	// Url: 'http://1024.com/',
	// MsgId: '5837397520665436492' }
	// TODO
}).event(function(message, req, res, next) {
	// message为事件内容
	// { ToUserName: 'gh_d3e07d51b513',
	// FromUserName: 'oPKu7jgOibOA-De4u8J2RuNKpZRw',
	// CreateTime: '1359125022',
	// MsgType: 'event',
	// Event: 'LOCATION',
	// Latitude: '23.137466',
	// Longitude: '113.352425',
	// Precision: '119.385040',
	// MsgId: '5837397520665436492' }
	// TODO
}).device_text(function(message, req, res, next) {
	// message为设备文本消息内容
	// { ToUserName: 'gh_d3e07d51b513',
	// FromUserName: 'oPKu7jgOibOA-De4u8J2RuNKpZRw',
	// CreateTime: '1359125022',
	// MsgType: 'device_text',
	// DeviceType: 'gh_d3e07d51b513'
	// DeviceID: 'dev1234abcd',
	// Content: 'd2hvc3lvdXJkYWRkeQ==',
	// SessionID: '9394',
	// MsgId: '5837397520665436492',
	// OpenID: 'oPKu7jgOibOA-De4u8J2RuNKpZRw' }
	// TODO
}).device_event(function(message, req, res, next) {
	// message为设备事件内容
	// { ToUserName: 'gh_d3e07d51b513',
	// FromUserName: 'oPKu7jgOibOA-De4u8J2RuNKpZRw',
	// CreateTime: '1359125022',
	// MsgType: 'device_event',
	// Event: 'bind'
	// DeviceType: 'gh_d3e07d51b513'
	// DeviceID: 'dev1234abcd',
	// OpType : 0, //Event为subscribe_status/unsubscribe_status时存在
	// Content: 'd2hvc3lvdXJkYWRkeQ==', //Event不为subscribe_status/unsubscribe_status时存在
	// SessionID: '9394',
	// MsgId: '5837397520665436492',
	// OpenID: 'oPKu7jgOibOA-De4u8J2RuNKpZRw' }
	// TODO
}).middlewarify());

module.exports = router;