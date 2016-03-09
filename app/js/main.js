'use strict';

var $ = require('jquery');


$(function() {


	$('#btn-login').click(function(){

		console.log('btn-login click');

		$.ajax({
		  'url': 'http://api.topka.cn/topdeals/users/login',
		  'accepts': 'application/vnd.topka.v2.0+json',
		  'dataType': 'json',
		  'method': 'POST',
		  'data': {
		    'username': 'anonymous',
		    'password': '',
		    'client_secret': 'HWk2m5dU6u88cdOYVqa6S0488WNSX0L9',
		    'device_token': ''
		  }
		  
		}).done(function(data) {

			console.log(data);

			var user = data.data.user;

			var token = data.data.token;

			$('#userinfo').html('<ul class="am-list">'
			  + '<li>ID：' + user.id + '</li>'
			  + '<li>姓名：' + user.name + '</li>'
			  + '<li>昵称：' + user.nickname + '</li>'
			  + '<li>access_token：' + token.access_token + '</li>'
			  + '<li>phone：' + user.phone + '</li>'
			+ '</ul>');

		  
		   
		  
		});



	});
 

// token: Object
// access_token: "GNBVaYtuxYVORofgOQsgO2JAnbgw0hdw7QC6ZVEi"
// expires: 1772878920
// expires_in: 315360000
// refresh_token: "xmgqjOUlwacLCLCteTUrK4Rsae8KUhfOw6MreYVJ"
// token_type: "bearer"
// __proto__: Object
// user: Object
// avatar: ""
// city_name: ""
// edit_nickname: 0
// gender: 1
// id: 4453610
// name: "匿名用户101249146"
// nickname: "匿名用户101249146"
// phone: ""
// verified: 0
// __proto__: Object

	return '';

	






});
