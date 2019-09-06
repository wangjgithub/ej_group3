$(function(){
	//为导航添加事件
	$("ul.left_nav").on("click","li",function(){
		var url = $(this).attr("url");
		$("ul.left_nav > li" ).removeClass("current");
		$(this).addClass("current");
		if($(this).text() == '顾客管理'){
			$('#guke').load('../pages/guke/guke.html');
		}else if($(this).text() == '分类管理'){
			$('#guke').load('../pages/fenlei/fenlei.html');
		}else if($(this).text() == '商品管理'){
			$('#guke').load('../pages/shangpin/shangpin.html');
		}else if($(this).text() == '评价管理'){
			$('#guke').load('../pages/pingjia/pingjia.html');
		}else{($(this).text() == '订单管理')
			$('#guke').load('../pages/dingdan/dingdan.html');
		}
	})

	//模拟点击第一个li,自动默认为顾客管理
	$("ul.left_nav > li:first-child").trigger("click");
});