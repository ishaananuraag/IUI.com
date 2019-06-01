var fs=require('fs');
var path=require('path');

try{
	var example = fs.readFileSync(path.join(__dirname, 'examples/mainExample.html')).toString();

	module.exports = {
		widgetName:'Combobox',
		widgetType: 'Widget',
		description: '',
		attributeList:["enable","isattached","validateoninput","validateonblur","value","idfield","textfield"],
		eventList: ["validate","change"],
		apiList: [],
		onservables: ["Option","data","enable","isattached","value","validate","change"],
		example: example
	};
}catch(err){
	console.log(err);
}