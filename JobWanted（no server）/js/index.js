mui.init();
var subpages = ['forum.html', 'preach.html', 'fullTime.html', 'partTime.html', 'setting.html'];
var subpage_style = {
	top: '0px',
	bottom: '51px'
};

mui.plusReady(function() {
	document.getElementsByClassName("loader-1")[0].style.display = "inline-block";
	var self = plus.webview.currentWebview();
		for(var i = 4; i >= 0; i--) {
			var temp = {};
			var sub = plus.webview.create(subpages[i], subpages[i], subpage_style);
			
			if(i > 0){
				sub.hide();				
			}else{
				document.getElementsByClassName("loader-1")[0].style.display = "none";
			}
			self.append(sub);
			
			/*if(i > 0) {
				sub.hide();
			} else {
				temp[subpages[i]] = "true";
				mui.extend(aniShow, temp); //将temp对象合并到aniShow对象上
			}*/			
		}
		
	/*setTimeout(function() {		
		document.getElementsByClassName("loader-1")[0].style.display = "none";
		plus.webview.show("forum.html");		
	}, 1500);*/
});
var isFirstShow = [false,true,true,true,true];
var activeTab = subpages[0];
var a = document.getElementsByTagName("a")[0];
a.getElementsByClassName("mui-icon")[0].style.color = "red";
a.getElementsByClassName("mui-tab-label")[0].style.color = "red";
mui('.mui-bar-tab').on('tap', 'a', function(e) {	
	var targetTab = this.getAttribute('href');
	if(targetTab == activeTab) {
		return;
	}
		
	if(isFirstShow[$(this).index()] == true){
		plus.webview.show(targetTab,"fade-in", 300);//第一次显示避免闪动
		isFirstShow[$(this).index()] = false;
	}else{
		plus.webview.show(targetTab);
	}
	plus.webview.hide(activeTab);	
	
	activeTab = targetTab;
	/*if(mui.os.ios || aniShow[targetTab]) {
		plus.webview.show(targetTab);
	} else {
		var temp = {};
		temp[targetTab] = "true";
		mui.extend(aniShow, temp);
		plus.webview.show(targetTab, "fade-in", 300);
	}*/	
	a.getElementsByClassName("mui-icon")[0].style.color = "rgb(120,173,192)";
	a.getElementsByClassName("mui-tab-label")[0].style.color = "rgb(120,173,192)";
	this.getElementsByClassName("mui-icon")[0].style.color = "red";
	this.getElementsByClassName("mui-tab-label")[0].style.color = "red";
	a = this;
});
localStorage.url = "http://192.168.1.107:8080/JobWanted/ScmWebService";
