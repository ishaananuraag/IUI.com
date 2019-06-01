var fs=require('fs');
var path=require('path');

try{
	var example = fs.readFileSync(path.join(__dirname, 'examples/mainExample.html')).toString();

	module.exports = {
		widgetName:'SubmitButton',
		widgetType: 'Widget',
		description: '',
		attributeList:["enable","isattached","text"],
		eventList: ["validate","click"],
		apiList: [],
		onservables: ["Option","data","enable","isattached","value","text","validate","click"],
		example: example
	};
}catch(err){
	console.log(err);
}