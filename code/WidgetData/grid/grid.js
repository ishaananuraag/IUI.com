var fs=require('fs');
var path=require('path');

try{
	var example = fs.readFileSync(path.join(__dirname, 'examples/mainExample.html')).toString();

	module.exports = {
		widgetName:'Grid',
		widgetType: 'Container',
		description: '',
		attributeList:["async","sortable"],
		eventList: ["validate","create"],
		apiList: ["load","initialize","on","trigger","bindModels","destroy","getContainerById","detach","attach","enable","makeUI","onDataFetch","onDataChange","sort"],
		onservables: ["Option","isattached","validate","create"],
		example: example
	};
}catch(err){
	console.log(err);
}