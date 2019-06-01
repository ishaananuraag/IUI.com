var fs=require('fs');
var path=require('path');

try{
var example = fs.readFileSync(path.join(__dirname, 'examples/mainExample.html')).toString();
console.log(example);
module.exports = {
	widgetName:'Submit Button',
	widgetType: 'Widget',
	description: 'It renderes a Clickable submit button. This button will submit the form in which it is contained.',
	attributeList:['text'],
	eventList: ['click', 'toggle'],
	apiList: ['enable'],
	example: example
};
}catch(err){
	console.log(err);
}