var fs=require('fs');
var path=require('path');

try{
	var example = fs.readFileSync(path.join(__dirname, 'examples/mainExample.html')).toString();

	module.exports = {
		widgetName:'ContextMenu',
		widgetType: 'Container',
		description: '',
		attributeList:["async","height","width","direction","placement","autoclose","autoopen"],
		eventList: ["validate","create"],
		apiList: ["load","initialize","on","trigger","bindModels","destroy","getContainerById","detach","attach","enable","makeUI"],
		onservables: ["Option","isattached","validate","create"],
		example: example
	};
}catch(err){
	console.log(err);
}