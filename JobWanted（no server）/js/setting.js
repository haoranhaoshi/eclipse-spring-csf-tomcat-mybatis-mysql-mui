document.getElementById("account").addEventListener("tap",function(){
	plus.webview.create("account.html", "account.html",{},{webView:plus.webview.currentWebview().id}).show();
	plus.webview.currentWebview().hide();
});
document.getElementById("about").addEventListener("tap",function(){
	plus.webview.create("about.html", "about.html",{},{webView:plus.webview.currentWebview().id}).show();
	plus.webview.currentWebview().hide();
});
document.getElementById("out").addEventListener("tap",function(){
	plus.webview.create("login.html", "login.html",{},{webView:plus.webview.currentWebview().id}).show();
	plus.webview.getWebviewById("index.html").close();
});