mui.init({
	beforeback:function(){
		plus.webview.show("forum.html","forum.html");
		plus.webview.currentWebview().close();
	}
});
document.getElementsByTagName("a")[0].addEventListener("tap", function() {
	plus.webview.show("forum.html","forum.html");
	plus.webview.currentWebview().close();
});

document.getElementById("collect").addEventListener("tap",function(){
	mui.toast("已收藏");
});
document.getElementById("reply").addEventListener("tap", function(e) {
	e.detail.gesture.preventDefault(); //修复iOS 8.x平台存在的bug，使用plus.nativeUI.prompt会造成输入法闪一下又没了
	var btnArray = ['取消', '确定'];
	mui.prompt('请输入你的回帖内容：', '回帖内容', '回帖', btnArray, function(e) {
		if(e.index == 1) {
			console.log(e.value);
		} else {
			console.log("cancel");
		}
	})
});