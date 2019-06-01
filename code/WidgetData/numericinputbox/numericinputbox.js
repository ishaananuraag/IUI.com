var fs=require('fs');
var path=require('path');

try{
	var example = fs.readFileSync(path.join(__dirname, 'examples/mainExample.html')).toString();

	module.exports = {
		widgetName:'NumericInputBox',
		widgetType: 'Widget',
		description: '',
		attributeList:["enable","isattached","validateoninput","validateonblur","value","step","decimal","precision"],
		eventList: ["validate","change","spin"],
		apiList: [],
		onservables: ["Option","data","enable","isattached","value","validate","change","spin"],
		example: example
	};
}catch(err){
	console.log(err);
}