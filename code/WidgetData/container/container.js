var fs=require('fs');
var path=require('path');

try{
	var example = fs.readFileSync(path.join(__dirname, 'examples/mainExample.html')).toString();

	module.exports = {
		widgetName:'Container',
		widgetType: 'Container',
		description: '',
		attributeList:["async"],
		eventList: ["validate","create"],
		apiList: ["load","initialize","on","trigger","bindModels","destroy","getContainerById","detach","attach","enable","makeUI"],
		onservables: ["Option","isattached","validate","create"],
		example: example
	};
}catch(err){
	console.log(err);
}