var fs=require('fs');
var path=require('path');

try{
	var example = fs.readFileSync(path.join(__dirname, 'examples/mainExample.html')).toString();

	module.exports = {
		widgetName:'InputBox',
		widgetType: 'Widget',
		description: '',
		attributeList:["enable","isattached","validateoninput","validateonblur","value"],
		eventList: ["validate","change"],
		apiList: [],
		onservables: ["Option","data","enable","isattached","value","validate","change"],
		example: example
	};
}catch(err){
	console.log(err);
}