var _objects=[];
	
	
	Object.keys(IUI.uiWidgets).forEach(function(key){
		obserbavleOptions = Object.keys(IUI.uiWidgets[key].prototype).filter(function(elem){
			return elem.match(/_handle(.*?)Change/g);
		}).map(function(elem){
			return elem.slice(7,-6)
		});
		APIs = Object.keys(IUI.uiWidgets[key].prototype).filter(function(elem){
			debugger;
			return (elem.indexOf('_') === -1 && typeof IUI.uiWidgets[key].prototype[elem] === 'function')
		});
		
		_objects.push({
			widgetType: 'Widget',
			name: IUI.uiWidgets[key].prototype.name,
			options: Object.keys(IUI.uiWidgets[key].prototype.options) || [],
			events: IUI.uiWidgets[key].prototype.events || [],
			obserbavleOptions: obserbavleOptions.concat(IUI.uiWidgets[key].prototype.events)  || [],
			APIs: IUI.uiWidgets[key].prototype.APIs || []
		});	
	});
	
	Object.keys(IUI.uiContainers).forEach(function(key){
		obserbavleOptions = Object.keys(IUI.uiContainers[key].prototype).filter(function(elem){
			return elem.match(/_handle(.*?)Change/g);
		}).map(function(elem){
			return elem.slice(7,-6)
		});
		APIs = Object.keys(IUI.uiContainers[key].prototype).filter(function(elem){
			return (elem.indexOf('_') === -1 && typeof IUI.uiContainers[key].prototype[elem] === 'function')
		});
		
		_objects.push({
			widgetType: 'Container',
			name: IUI.uiContainers[key].prototype.name,
			options: Object.keys(IUI.uiContainers[key].prototype.options) || [],
			events: IUI.uiContainers[key].prototype.events || [],
			obserbavleOptions: obserbavleOptions.concat(IUI.uiContainers[key].prototype.events) || [],
			APIs: APIs || []
		});	
	});
	
	$.ajax({
		url :'/create',
		type:'POST',
		data: {data : JSON.stringify({objcts: _objects})},
		success: function(data){
		}
	});