/************** This will move to LibraryLoader.js ******************/
require.config({
    paths:{
		'marionette':'/javascripts/vendors/marionette',
		'backbone':'/javascripts/vendors/backbone',
		'backbone.radio':'/javascripts/vendors/backbone.radio',
		'IUI':'/javascripts/vendors/IUI',
		'jquery':'/javascripts/vendors/jquery',
		'require':'/javascripts/vendors/require',
		'text':'/javascripts/vendors/text',
		'tpl':'/javascripts/vendors/tpl',
		'underscore':'/javascripts/vendors/underscore',
	},	
	shim:{
		"marionette": {
			exports: "Marionette",
			deps: ['backbone','backbone.radio']
		},
		"underscore": {
			exports: "_",
		},
		"backbone": {
			exports: "Backbone",
		},
		"jquery": {
			exports: "$",
		},
		"IUI": {
			exports: "IUI",
			deps: ['jquery']
		},
	}
});


require(['marionette','jquery','IUI'],function(Marionette,$,IUI){
	window.$=$;
	window.IUI=IUI;
	
	IUI.makeUI();
	
	
	
	
	
	
	
	
	
	

});