mui.init({
	swipeBack: false,
	swipeup: true,
		swipedown: true,
});
document.getElementById("items").addEventListener("swipedown",function(){
	document.getElementsByClassName("loader-1")[0].style.display = "inline-block";
	setTimeout(function(){
		document.getElementsByClassName("loader-1")[0].style.display = "none";
		mui.toast("已刷新");
	},2000);	
});
document.getElementById("items").addEventListener("swipeup",function(){
	document.getElementsByClassName("loader-14")[0].style.display = "inline-block";
	setTimeout(function(){
		document.getElementsByClassName("loader-14")[0].style.display = "none";
		mui.toast("已加载");
	},2000);	
});
var choice;
document.getElementsByClassName("mui-icon-arrowdown")[2].addEventListener('tap', function() {
	var dDate = new Date();
	dDate.setFullYear(dDate.getFullYear(), dDate.getMonth(), dDate.getDate());
	var minDate = new Date();
	minDate.setFullYear(2010, 0, 1);
	var maxDate = new Date();
	maxDate.setFullYear(2030, 11, 31);
	plus.nativeUI.pickDate(function(e) {
		var d = e.date;
		choice = d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate();
		console.log(choice);
	}, function(e) {
		choice = "no choice";
	}, {
		title: "请选择宣讲日期",
		date: dDate,
		minDate: minDate,
		maxDate: maxDate
	});
});

mui("#items").on("tap", ".item", function() {
	plus.webview.create("jobItem.html", "jobItem.html", {}, {
		webView: plus.webview.currentWebview().id
	}).show();
	plus.webview.currentWebview().hide();
});

document.getElementById("industry").getElementsByTagName("span")[0].addEventListener("tap", function() {
	plus.webview.create("industry.html", "industry.html", {}, {
		webView: plus.webview.currentWebview().id
	}).show();
	plus.webview.currentWebview().hide();
});
document.getElementById("company").getElementsByTagName("span")[0].addEventListener("tap", function() {
	plus.webview.create("company.html", "company.html", {}, {
		webView: plus.webview.currentWebview().id
	}).show();
	plus.webview.currentWebview().hide();
});
document.getElementById("city").getElementsByTagName("span")[0].addEventListener("tap", function() {
	plus.webview.create("city.html", "city.html", {}, {
		webView: plus.webview.currentWebview().id
	}).show();
	plus.webview.currentWebview().hide();
});
mui("#items").on("tap", ".collect", function(event) {
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