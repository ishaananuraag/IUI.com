var fs=require('fs');
var path=require('path');

try{
	var example = fs.readFileSync(path.join(__dirname, 'examples/mainExample.html')).toString();

	module.exports = {
		widgetName:'Sidebar',
		widgetType: 'Container',
		description: '',
		attributeList:["async","width","position"],
		eventList: ["validate","create"],
		apiList: ["load","initialize","on","trigger","bindModels","destroy","getContainerById","detach","attach","enable","makeUI","processSubcontainer"],
		onservables: ["Option","isattached","width","validate","create"],
		example: example
	};
}catch(err){
	console.log(err);
}