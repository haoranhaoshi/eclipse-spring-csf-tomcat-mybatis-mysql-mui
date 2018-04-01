mui.init({
	swipeBack: false,
	swipeup: true,
		swipedown: true,
});
document.getElementById("content").addEventListener("swipedown",function(){
	document.getElementsByClassName("loader-1")[0].style.display = "inline-block";
	setTimeout(function(){
		document.getElementsByClassName("loader-1")[0].style.display = "none";
		mui.toast("已刷新");
	},2000);	
});
document.getElementById("content").addEventListener("swipeup",function(){
	document.getElementsByClassName("loader-14")[0].style.display = "inline-block";
	setTimeout(function(){
		document.getElementsByClassName("loader-14")[0].style.display = "none";
		mui.toast("已加载");
	},2000);	
});
mui.plusReady(function() {
	//console.log(document.body.clientWidth);
	//阻拦式状态栏
	//plus.navigator.setFullscreen(true);
	//getForums();
});

var getForums = function() {
	var soap = '<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body>' +
		'	<ns2:getForums xmlns:ns2="http://webservice.jobWanted.com/">' +

		'</ns2:getForums></soap:Body></soap:Envelope>';

	$.ajax({
		type: "POST",
		url: localStorage.url,
		data: soap,
		datatype: "xml",
		contentType: "text/xml;charset=utf-8",
		success: function(result) {
			var nodes = result.getElementsByTagName("return");
			var value = nodes[0].firstChild.nodeValue;
			console.log(value);
			//console.log(value.parseJSON()[0].name);
		},
		error: function(msg) {
			alert("Fail：" + msg);
		}
	});

}

mui("#content").on("tap", ".item", function() {
	plus.webview.open("forumItem.html", "forumItem.html");
	plus.webview.currentWebview().hide();
});

var inRecText = ["百度2018年面试新体验", "阿里2018年面试新体验", "腾讯2018年面试新体验", "京东2018年面试新体验"];
var inRecNum = 0;
document.getElementsByClassName("mui-slider-group")[0].addEventListener("swipeleft", function() {
	if(inRecNum == 3) {
		inRecNum = 0;
	} else {
		inRecNum++;
	}
	document.getElementById("inRec").innerHTML = inRecText[inRecNum];
});

document.getElementsByClassName("mui-slider-group")[0].addEventListener("swiperight", function() {
	if(inRecNum == 0) {
		inRecNum = 3;
	} else {
		inRecNum--;
	}
	document.getElementById("inRec").innerHTML = inRecText[inRecNum];
});

mui("#content").on("tap", ".collect", function(event) {
	var span = this.getElementsByTagName("span")[0];
	span.classList.toggle("mui-icon-extra-heart");
	span.classList.toggle("mui-icon-extra-heart-filled");
	event.stopPropagation();
	if(span.classList.contains("mui-icon-extra-heart-filled")) {
		mui.toast("收藏成功");
	} else {
		mui.toast("收藏取消");
	}
});
document.getElementById("upload").addEventListener("tap", function(e) {
	e.detail.gesture.preventDefault(); //修复iOS 8.x平台存在的bug，使用plus.nativeUI.prompt会造成输入法闪一下又没了
	var btnArray = ['取消', '确定'];
	mui.prompt('请输入你的发帖内容：', '发帖内容', '发帖', btnArray, function(e) {
		if(e.index == 1) {
			console.log(e.value);
		} else {
			console.log("cancel");
		}
	});
});

/*mui.fire(plus.webview.getWebviewById("index.html"), "abc"); //出发去父页的pageflowrefresh方法
window.addEventListener("abc", function(e) {
	location.reload();
});*/