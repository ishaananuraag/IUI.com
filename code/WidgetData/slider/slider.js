var fs=require('fs');
var path=require('path');

try{
	var example = fs.readFileSync(path.join(__dirname, 'examples/mainExample.html')).toString();

	module.exports = {
		widgetName:'Slider',
		widgetType: 'Widget',
		description: '',
		attributeList:["enable","isattached","min","max","value","step"],
		eventList: ["validate","change"],
		apiList: [],
		onservables: ["Option","data","enable","isattached","validate","change"],
		example: example
	};
}catch(err){
	console.log(err);
}