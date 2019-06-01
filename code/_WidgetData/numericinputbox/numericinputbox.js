var fs=require('fs');
var path=require('path');

try{
var example = fs.readFileSync(path.join(__dirname, 'examples/mainExample.html')).toString();
console.log(example);
module.exports = {
	widgetName:'Numeric Input Box',
	widgetType: 'Widget',
	description: 'NumericInputBox is an extension to InputBox. It is used to create a input box with attached spinners. It can input both Integer and Decimal numbers.',
	attributeList:['value','precision','step','decimal'],
	eventList: ['change','spin'],
	apiList: ['value'],
	example: example
};
}catch(err){
	console.log(err);
}