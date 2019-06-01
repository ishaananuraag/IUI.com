var fs=require('fs');
var path=require('path');

try{
	var example = fs.readFileSync(path.join(__dirname, 'examples/mainExample.html')).toString();

	module.exports = {
		widgetName:'Widget',
		widgetType: 'Widget',
		description: '',
		attributeList:["enable","isattached"],
		eventList: ["validate"],
		apiList: [],
		onservables: ["Option","data","enable","isattached","validate"],
		example: example
	};
}catch(err){
	console.log(err);
}