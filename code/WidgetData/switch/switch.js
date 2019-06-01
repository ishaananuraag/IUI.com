var fs=require('fs');
var path=require('path');

try{
	var example = fs.readFileSync(path.join(__dirname, 'examples/mainExample.html')).toString();

	module.exports = {
		widgetName:'Switch',
		widgetType: 'Widget',
		description: '',
		attributeList:["enable","isattached"],
		eventList: ["validate","click","toggle"],
		apiList: [],
		onservables: ["Option","data","enable","isattached","validate","click","toggle"],
		example: example
	};
}catch(err){
	console.log(err);
}