function getHTTPObject() {
	if (typeof XMLHttpRequest == "undefined")
		XMLHttpRequest = function () {
			try { return new ActiveXObject("Msxml2.XMLHTTP.6.0");}
				catch (e) {};
			try { return new ActiveXObject("Msxml2.XMLHTTP.3.0");}
				catch (e) {};
			try { return new ActiveXObject("Msxml2.XMLHTTP");}
				catch (e) {};
				return false;
		}
		return new XMLHttpRequest();
}
//通过对象检测技术检测XMLHTTPRequest。如果失败，则继续检测其他方式，最终返回false或者一个新的XMLHTTPRequest(或者XMLHTTP)对象;