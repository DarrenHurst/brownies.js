var brownie = new Brownies("MyApp");

var obj = new Object;
obj.name = "Darren";
obj.project = "Brownies";

brownie.addObject("info",obj);

brownie.save();

var info = brownie.getKey("info");


$(document).ready(function() {
	$("#data").append(JSON.stringify(info));

});
