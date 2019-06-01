var fs=require('fs');
var path=require('path');

try{
	var example = fs.readFileSync(path.join(__dirname, 'examples/mainExample.html')).toString();

	module.exports = {
		widgetName:'RadioGroup',
		widgetType: 'Container',
		description: '',
		attributeList:["async","group","orientation"],
		eventList: ["change"],
		apiList: ["load","initialize","on","trigger","bindModels","destroy","getContainerById","detach","attach","enable","makeUI","value"],
		onservables: ["Option","isattached","value","change"],
		example: example
	};
}catch(err){
	console.log(err);
}