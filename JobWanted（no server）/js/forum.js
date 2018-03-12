new_element=document.createElement("script");
　　new_element.setAttribute("type","text/javascript");
　　new_element.setAttribute("src","js/mui.min.js");// 在这里引入了a.js
　　document.body.appendChild(new_element);
			mui.plusReady(function() {
				//console.log(document.body.clientWidth);
				//阻拦式状态栏
				//plus.navigator.setFullscreen(true);
			});	