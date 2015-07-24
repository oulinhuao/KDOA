
var server_address = "www.kingdonsoft.com:8003";
var virtualdir_user = "KDOAWeb";
var interface_user = "webservice/mobile.asmx";

//var function get


function getWorklogPaged(count){
		var data = '<?xml version="1.0" encoding="UTF-8"?>';
	    data = data + '<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">';
	    data = data + '<soap:Body>';
	    
	    data = data + '<Login xmlns="http://tempuri.org/">';
	    
	    data = data + '<GetWorkTypeList xmlns="http://tempuri.org/">';
	    data = data + '<updateTime>string</updateTime>';
	    data = data + '<userId>int</userId>';
	    data = data + '<token>string</token>';
	    data = data + '</GetWorkTypeList>';
	    data = data + '</soap:Body>';
	    data = data + '</soap:Envelope>';   
	
		var xhr;
		if(window.ActiveXObject){
			xhr = new ActiveXObject("Microsoft.XMLHTTP");
		}else if(window.XMLHttpRequest){
			xhr = new XMLHttpRequest()
		}
		xhr.open("POST","http://kingdonsoft.com:88/KDOAWeb/webservice/mobile.asmx/GetWorkTypeList", false);
		xhr.setRequestHeader("CONTENT-TYPE","text/xml; charset=utf-8");
	    xhr.setRequestHeader ("SOAPAction","http://tempuri.org/Login");
	    xhr.send(data);
	    
	    var xmlDoc = xmlhttp.responseXML;
	
}