function getNewContent() {
	var request = getHTTPObject();
	if (request) {
		request.open("GET","example.txt",true)  ;
		request.onreadystatechange = function() {
			if (request.readyState ==4) {    
//服务器在向XMLHTTPRequest对象回响应时，该对象有许多属性可用，浏览器会在不同阶段更新readyStates属性的值，它有5个可能值：0表示未初始化，1表示正在加载，2表示加载完毕，3表示正在交互，4表示完成。
				var para =document.createElement("p");
				var txt = document.createTextNode(request.responseText);
				para.appendChild(txt);
				document.getElementById("new").appendChild(para);
			}
		};    //处理响应
		request.send(null);
	} else {
		alert("sorry, your browser doesn't support XMLHttpRequest")
	}
}
addLoadEvent(getNewContent);
//跨域请求chrome不支持file://协议