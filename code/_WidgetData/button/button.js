var fs=require('fs');
var path=require('path');

try{
var example = fs.readFileSync(path.join(__dirname, 'examples/mainExample.html')).toString();
console.log(example);
module.exports = {
	widgetName:'Button',
	widgetType: 'Widget',
	description: 'It renderes a Clickable button widget.',
	attributeList:['text'],
	eventList: ['click'],
	apiList: ['enable'],
	example: example
};
}catch(err){
	console.log(err);
}