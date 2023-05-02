//your JS code here. If required.
var pro = function(){
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			document.getElementById("output").innerText="Hello, world!";

		},1000)
	})
}