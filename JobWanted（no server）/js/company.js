mui.init({
	beforeback:function(){
		plus.webview.show(plus.webview.currentWebview().webView);
		plus.webview.currentWebview().close();
	}
});
document.getElementsByTagName("a")[0].addEventListener("tap", function() {
	plus.webview.show(plus.webview.currentWebview().webView);
	plus.webview.currentWebview().close();
});