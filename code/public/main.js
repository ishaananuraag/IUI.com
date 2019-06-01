/************** This will move to LibraryLoader.js ******************/
require.config({
    paths:{
		'IUI':'/javascripts/vendors/IUI',
		'jquery':'/javascripts/vendors/jquery',
		'require':'/javascripts/vendors/require',
		'text':'/javascripts/vendors/text',
		'tpl':'/javascripts/vendors/tpl',
		'sidebarView':'/javascripts/views/HomepageView/sidebarView',
		'documentView':'/javascripts/views/HomepageView/documentView',
	},	
	shim:{
		
		"jquery": {
			exports: "$",
		},
		"IUI": {
			exports: "IUI",
			deps: ['jquery']
		},
	}
});


require(['jquery','IUI'],function($,IUI){
	window.$=$;
	window.IUI=IUI;
	
	IUI.makeUI();	
	
	var animateStyle = function(element, style, value, time, callback){
		var obj={}
			obj[style]=value;
			
		element.css(style,element.css(style)).animate(obj,time || 500, callback);
	}
	
	var _animateOutOfHome= function(handler){
		
		animateStyle($('.backdrop'),'height', '4rem');
		setTimeout(function(){
			animateStyle($('.header-big-text'),'margin-left', '0', 250);
		}, 400);

		setTimeout(function(){
				animateStyle($('.front-text'),'opacity', '0',150, function(){
					handler && handler();
				});
				$('#content-exhibit').css('display','block');
				animateStyle($('#content-exhibit'),'height', $(window).outerHeight()- 4*parseInt($('body').css('font-size')) ,450)
				animateStyle($('#front-section').find('.section-item').eq(1),'padding-top', '5rem',200);
				animateStyle($('#front-section').find('.section-item').eq(3),'padding-top', '5rem',200);
				animateStyle($('#front-section').find('.section-item').eq(0),'margin-top', '-5rem',200);
				animateStyle($('#front-section').find('.section-item').eq(2),'margin-top', '-5rem',200);
		}, 50);
		
	}
	
	$('.front-text').on('click','.section-item', function(e){
		_animateOutOfHome(function(){
			require(['sidebarView'],function(){
				IUI.View.renderViewInViewport('contents-view','application-viewport');
				IUI.View.renderViewInViewport($(e.currentTarget).data('view'),'contents-viewport');
				IUI.View.renderViewInViewport('sidebar-view','sidebar-viewport');		
				setTimeout(function(){
						$('.contents-viewport').show();
						$('.sidebar-viewport').show();
				},500);
			});
		})
	});
	
	
	
	
	var welcomeModel = {
		features:['17 Ready to use Widgets which can be directly plugged into your HTML.',
    			  '7 Ready to use Layout container tags to help you design your HTML quickly.',
    			  'Two-way data binding updates the binded IUI Component directly on setting a value of the model.',
    			  'Handle multitude of events triggered by IUI Widgets to customize your application flow seemlesly.',
    			  'De-coupled data and event binding with widgets to take control of the loading of the Components',
    			  'Define Viewport regions inside your HTML to define placeholders for dynamic loaded Views',
    			  'Create View templates directly in View tag or load then from HTML url.',
    			  'Link every module with a single API Call - <b class="color-dark">IUI.makeUI()</b>']
	}
	
	
	
	new IUI.ViewModel({
		name: 'welcome-model',
		model: welcomeModel
	});
	
	

});