mui('.mui-scroll-wrapper').scroll({
	deceleration: 0.0005 //减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006  
});
/*mui.init({
	pullRefresh: {
		container: '.mui-scroll-wrapper',
		down: {
			style: 'circle',
			color: '#2BD009', //可选，默认“#2BD009” 下拉刷新控件颜色
			height: '50px', //可选,默认50px.下拉刷新控件的高度,
			range: '200px', //可选 默认100px,控件可下拉拖拽的范围
			offset: '0px', //可选 默认0px,下拉刷新控件的起始位置
			auto: false, //可选,默认false.首次加载自动上拉刷新一次
			callback: pulldownRefresh
		},
	}
});

function pulldownRefresh() {
	setTimeout(function() {
		mui('.mui-scroll-wrapper').pullRefresh().endPulldown();
	}, 1500);
}*/