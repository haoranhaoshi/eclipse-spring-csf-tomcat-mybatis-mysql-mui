mui.init({
	beforeback:function(){
		plus.webview.show(plus.webview.currentWebview().webView);
		plus.webview.currentWebview().close();
	}
});
mui.plusReady(function() {
	var jobItemWV = plus.webview.create("http://campus.51job.com/cpic/","http://campus.51job.com/cpic/",{top:"60px",bottom:"46px"});
	jobItemWV.setStyle({scalable: true,});	
	plus.webview.currentWebview().append(jobItemWV);
});
document.getElementsByTagName("a")[0].addEventListener("tap", function() {	
	plus.webview.show(plus.webview.currentWebview().webView);
	plus.webview.currentWebview().close();
});
document.getElementById("collect").addEventListener("tap", function() {		
	if(this.innerText == "收藏"){
		mui.toast("收藏成功");
		this.innerText = "取消收藏";
	}else{
		mui.toast("收藏取消");
		this.innerText = "收藏";
	}
});