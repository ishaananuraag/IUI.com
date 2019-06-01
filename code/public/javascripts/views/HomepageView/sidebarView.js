define(function(){
	
	var _handleHeaderClickEvent = function(e){
		var icon =$(e.currentTarget).find('.sidebar-icon').find('.fa'),
			expanded = icon.hasClass('fa-plus');
		if(expanded){
			icon.removeClass('fa-plus').addClass('fa-minus');
		}else{
			icon.animate({
				transform: 'rotate(180deg)'
			}, function(){
				icon.removeClass('fa-minus').addClass('fa-plus');
			});
		}
		$(e.currentTarget).next().slideToggle(expanded);
	
	}
	
	
	var handleWidgetItemClicked = function(name){
		require(['documentView'],function(documentView){
			$.ajax({
				url:'/data/'+name,
				success: function(model){
					documentView.updateModel(model);
					IUI.View.renderViewInViewport('document-view','contents-viewport');
				},error: function(){
					IUI.View.renderViewInViewport('under-construction-view','contents-viewport');	
				}
				
				
			})
			
		})
	}
	
	var events = new IUI.EventGroup({
		name: 'sidebar-events',
		render: function(e){
			this.$el.on('click','.sidebar-list-item',function(e){
				if($(e.currentTarget).attr('ii-model')){
					handleWidgetItemClicked($(e.currentTarget).attr('ii-model'));
				}else if($(e.currentTarget).attr('ii-view')){
					IUI.View.renderViewInViewport($(e.currentTarget).attr('ii-view'),'contents-viewport');
				}else{
					IUI.View.renderViewInViewport('under-construction-view','contents-viewport');	
				}
			});
			this.$el.on('click','.sidebar-sub-heading',_handleHeaderClickEvent);
		}
	});
	
	new IUI.ViewModel({
		name: 'sidebar-model',
		model: {
			widgets : ['Button','Toggle Button','Submit Button','Grid','Cell','HeaderCell','Input Box','Numeric Input Box','Dropdown','Combobox',		 	 'Form Label','ListView','Radio','Slider','Switch','Division','ViewPort'],
			
			containers : ['Container','Radio Group','Row','Container Cell','Container Header Cell','View','Vertical Scroller','Footer','Layout','Navbar','Exhibit','Sidebar','Header','Context Menu'],
			bindings: ['Attribute Bindings','EventGroups','DataMarts','Style Bindings']
		}
	});
	
	IUI.makeUI($('<div><view name="sidebar-view" eventgroup="sidebar-events" viewmodel="sidebar-model" templateurl="/views/sidebarView.html"></view><div>'));
	
});