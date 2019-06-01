var express = require('express');
var router = express.Router();



/* GET users listing. */
router.get('/*', function(req, res, next) {
	var _widget = req.url.split('/')[1];
	try{
		if(_widget){
			var _module = require('../WidgetData/'+_widget+'/'+_widget+'.js');
			res.status(200).send(_module);
		}
	}catch(err){
	}
	
	res.sendStatus(404)
	
});


module.exports = router;
