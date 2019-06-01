var fs=require('fs');
var path=require('path');

try{
	var example = fs.readFileSync(path.join(__dirname, 'examples/mainExample.html')).toString();

	module.exports = {
		widgetName:'View',
		widgetType: 'Container',
		description: '',
		attributeList:["async","context"],
		eventList: ["validate","create","render","append"],
		apiList: ["load","initialize","on","trigger","bindModels","destroy","getContainerById","detach","attach","enable","makeUI","render"],
		onservables: ["Option","isattached","viewmodel","validate","create","render","append"],
		example: example
	};
}catch(err){
	console.log(err);
}