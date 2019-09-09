var $ = {
	get : function(url,handler) {
		// 1. 实例化对象
		var xhr = new XMLHttpRequest();
		// 2. 设置请求行
		xhr.open("get",url);
		// 3. 设置请求头
		xhr.responseType = "json";
		// 4. 设置请求体，并发送
		xhr.send();
		// 监听
		xhr.onreadystatechange = function(){
			if(this.readyState === 4){
				if(this.status === 200){
					var response = this.response;
					handler.call(this,response);
				}
			}
		}
	}
	//post
	post : function(url,data,handler,type){
		var xhr = new XMLHttpRequest();
		xhr.open("post",url);
		xhr.responseType = "json";
		if(!type) {
			type = "application/x-www-form-urlencoded";
		}
		xhr.setRequestHeader("Content-Type",type);
		xhr.send(data);
		xhr.onreadystatechange = function(){
			if(this.readyState === 4){
				if(this.status === 200){
					var response = this.response;
					handler.call(this,response)
				}
			}
		}
	}
}