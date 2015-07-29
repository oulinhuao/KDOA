
var server_address = "www.kingdonsoft.com:8003";
var virtualdir_user = "KDOAWeb";
var interface_user = "webservice/mobile.asmx";

function getActionUrl(methord){
	return "http://"
		+ server_address
		+ "/"
		+ virtualdir_user 
		+ "/" 
		+ interface_user 
		+ "/" 
		+ methord;
}


	function getWorklogPaged(count){
//		var soapMessage =
//	　　'<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"> \
//		　　<soap:Body> \
//		　　<Login xmlns="http://tempuri.org/"> \
//			　　<UserName>lhou</UserName> \
//			　　<Pswd>ou852723</Pswd> \
//		　　</Login> \
//		　　</soap:Body> \
//	　　</soap:Envelope>';
	
//		$.ajax({
//			type:"post",
//			url:getActionUrl("Login"),
////	　　　　 contentType: "Application/Json",
//	　　　　 contentType: "jsonp",
//	　　　　	data:{UserName:"lhou",Pswd:"ou852723"},
//	
//			success: function(data) {
//				var jsonValue = data;
//              alert(jsonValue.d);// 输出Json
//			},
//			error: function(xhr, type, errorThrown) {
//				//异常处理；
////				alert("error");
//			},
//			complete: function(XMLHttpRequest, textStatus) {
//              var returnText = XMLHttpRequest.responseText;
//              alert("complete \n" + returnText);
//          }
//		});


$.ajax({
type: 'GET',
url: 'http://www.pm25.in/api/querys/aqi_details.json?city=wenzhou&token=', 
dataType: 'jsonp',
success: function(msg){
alert(JSON.stringify(msg));
},
error:function(){
alert('error');
}
});
		
	}

