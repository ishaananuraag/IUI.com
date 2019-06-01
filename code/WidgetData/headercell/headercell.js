var fs=require('fs');
var path=require('path');

try{
	var example = fs.readFileSync(path.join(__dirname, 'examples/mainExample.html')).toString();

	module.exports = {
		widgetName:'HeaderCell',
		widgetType: 'Widget',
		description: '',
		attributeList:["enable","isattached","text"],
		eventList: ["validate"],
		apiList: [],
		onservables: ["Option","data","enable","isattached","value","validate"],
		example: example
	};
}catch(err){
	console.log(err);
}