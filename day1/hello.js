
var XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
var https = function(){
var GetRequest = function(){
	var httpReq = new XMLHttpRequest();
	httpReq.open("GET","https://swapi.co/api/starships/",false);
	httpReq.onReadyStateChange = function(response){
	if (httpReq.readyState == 4 && httpReq.status == 200)
				console.log("hello");		
	};
	httpReq.send();
return httpReq.responseText;	
}
return {
	res : GetRequest
}
}
console.log("Getting all starships");
console.log(https().res());
