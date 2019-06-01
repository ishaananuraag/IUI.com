var fs=require('fs');
var path=require('path');

try{
var example = fs.readFileSync(path.join(__dirname, 'examples/mainExample.html')).toString();
console.log(example);
module.exports = {
	widgetName:'Toggle Button',
	widgetType: 'Widget',
	description: 'It renderes a Togglable button widget.',
	attributeList:['text','value'],
	eventList: ['click', 'toggle'],
	apiList: ['enable', 'toggle'],
	example: example
};
}catch(err){
	console.log(err);
}