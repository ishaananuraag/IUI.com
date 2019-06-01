var fs=require('fs');
var path=require('path');

try{
	var example = fs.readFileSync(path.join(__dirname, 'examples/mainExample.html')).toString();

	module.exports = {
		widgetName:'VerticalScroller',
		widgetType: 'Container',
		description: '',
		attributeList:["async","height","autohide","scrollinside","nativescrollbar"],
		eventList: ["validate","create"],
		apiList: ["load","initialize","on","trigger","bindModels","destroy","getContainerById","detach","attach","enable","makeUI"],
		onservables: ["Option","isattached","validate","create"],
		example: example
	};
}catch(err){
	console.log(err);
}