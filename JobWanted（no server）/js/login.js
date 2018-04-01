mui.init({
  /*preloadPages:[
    {
      url:"index.html",
      id:"index.html",
      styles:{},//窗口参数
      extras:{},//自定义扩展参数
      subpages:[{}]//预加载页面的子页面
    }
  ],
  preloadLimit:6//预加载窗口数量限制(一旦超出,先进先出)默认不限制*/
});
document.getElementsByClassName("mui-btn-primary")[0].addEventListener("tap",function(){
	plus.webview.create("index.html", "index.html",{},{}).show();	
	plus.webview.currentWebview().close();
});
