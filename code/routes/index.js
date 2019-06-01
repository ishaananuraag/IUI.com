var express = require('express');
var router = express.Router();
var ejs=require('ejs');
var path=require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'IUIjs' });
});

router.get('/demoframe', function(req, res, next) {
  res.render('demoframe', {});
});


var fs= require('fs');

router.post('/create', function(req, res, next) {
	var data = JSON.parse(req.body.data).objcts;
	console.log(JSON.parse(req.body.data));
	try{
	var html= fs.readFileSync(path.join(__dirname, './html.ejs')).toString();
	var js= fs.readFileSync(path.join(__dirname, './js.ejs')).toString();
		for(var i=0;i<data.length;++i){
			var _obj=data[i];
			console.log(_obj);
			fs.mkdirSync(path.join(__dirname, '../WidgetData/'+_obj.name.toLowerCase()));
			fs.mkdirSync(path.join(__dirname, '../WidgetData/'+_obj.name.toLowerCase()+'/examples'));
			fs.writeFileSync(path.join(__dirname, '../WidgetData/'+_obj.name.toLowerCase()+'/'+_obj.name.toLowerCase()+'.js'), ejs.render(js,_obj));
			fs.writeFileSync(path.join(__dirname, '../WidgetData/'+_obj.name.toLowerCase()+'/examples/mainExample.html'), ejs.render(html,_obj));			
		}
	}catch(err){
		console.log(err);
	}
	
	res.sendStatus(200);
	
});

module.exports = router;
