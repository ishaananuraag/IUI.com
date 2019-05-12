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
	
	var animateStyle = function(element, style, value, time, callback){
		var obj={}
			obj[style]=value;
			
		element.css(style,element.css(style)).animate(obj,time || 500, callback);
	}
	
	var _animateOutOfHome= function(){
		
		$('#front-section').css({
			top:$('#front-section')[0].getClientRects()[0].y,
			position: 'fixed'
		});
		
		animateStyle($('.backdrop'),'height', '4rem');
		setTimeout(function(){
			animateStyle($('.header-big-text'),'margin-left', '0', 250);
		
		}, 400)
		animateStyle($('.home-exhibit'),'height', '4rem');
		$('.home-exhibit').css('padding-top', '4rem');
		animateStyle($('.header'),'padding-top', '1rem');
		
	//	$('#front-section').css({'overflow':'hidden', 'white-space': 'nowrap'});

		setTimeout(function(){
				animateStyle($('.front-text'),'opacity', '0',150, function(){
					$('.front-exhibit').remove();
				});
				$('#content-exhibit').css('display','block');
				animateStyle($('#content-exhibit'),'height', $(window).outerHeight()- 4*parseInt($('body').css('font-size')) ,450)
				animateStyle($('#front-section').find('.section-item').eq(1),'padding-top', '5rem',200);
				animateStyle($('#front-section').find('.section-item').eq(3),'padding-top', '5rem',200);
				animateStyle($('#front-section').find('.section-item').eq(0),'margin-top', '-5rem',200);
				animateStyle($('#front-section').find('.section-item').eq(2),'margin-top', '-5rem',200);
		}, 50);
	}
	
	$('.front-text').on('click','.section-item', function(){
		_animateOutOfHome()
	})
	
	

});