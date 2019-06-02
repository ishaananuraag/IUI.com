define(function(){


	var obj={
			widget:{
					widgetName:'',
					widgetType: '',
					description: ''
			}
		};

	var model = new IUI.ViewModel({
		name: 'document-model',
		model: obj
	})

	new IUI.EventGroup({
		name: 'document-events',
		render: function(){
			this.$el.find('.example-output-frame').on('load', function(){
				var _body = $(this).contents();
				
				setTimeout(function(){
					_body.find('.example-html').text(obj.widget.example);
					_body.find('.example-output').html(obj.widget.example);					
				});
			});
		}
		
	})


	IUI.makeUI($('<div><view name="document-view" eventgroup="document-events" viewmodel="document-model" templateurl="/views/documentView.html"></view><div>'));

	var updateModel = function(model){
		obj.widget=model;
	}
	
	return {updateModel:updateModel};

});