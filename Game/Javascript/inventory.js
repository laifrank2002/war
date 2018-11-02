/*
	Inventory management system stolen straight off of Tilepaper. 
	
	# Save Load Number/Count Bug
*/
var Inventory = (
	function() 
	{
		var panel = document.getElementById("resourcesPanel");
		var resource = {};
		var storage = 100;
		
		function createDOMResource(name,count)
		{
			var class_attribute = document.createAttribute('class');
			class_attribute.value = 'army_unit_display';

			var id_attribute = document.createAttribute('id');
			id_attribute.value = 'unit_' + name;

			var unit_element = document.createElement('div');
			unit_element.setAttributeNode(class_attribute);
			unit_element.setAttributeNode(id_attribute);
			
			var id_attribute = document.createAttribute('id');
			id_attribute.value = 'unit_' + name + '_span';
			
			var unit_span = document.createElement('span');
			unit_span.setAttributeNode(id_attribute);
			unit_span.innerHTML = name + " " + resource[name].number + " " + resource[name].change + "/h";
			
			unit_element.appendChild(unit_span);
			
			panel.appendChild(unit_element);
			return unit_element;
		}
		// functions, note the parenthesis is on the same line  
		// This is because of how weird the javascript parser is. 
		// Otherwise it would return null!
		return {
			addResource: function(name, count) 
			{
				if (resource[name] && document.getElementById('unit_' + name) != null)
				{
					var unit_element = document.getElementById('unit_' + name);
					var unit_span = document.getElementById('unit_' + name + '_span');
					// check if number is less than 0, adds object by that amount, then rounds
					if (resource[name].number + count >= 0)
					{
						// reset negative flag for other applications
						resource[name].number = roundTwo(resource[name].number + count);
						resource[name].negativeFlag = false;
					}
					else
					{
						// set negative flag for other applications
						resource[name].number = 0;
						resource[name].negativeFlag = true;
					}
					unit_span.innerHTML = name + " " + resource[name].number + " " + resource[name].change + "/h";
				}
				else
				{
					// check if unit exists in units dictionary. if not, don't add
					resource[name] = new Resource(name,name,count,0)

					createDOMResource(name,count);
					
				}

				return count;
			},
			
			addResourceChange: function(name, change) 
			{
				if (resource[name])
				{
					var unit_element = document.getElementById('resource_' + name);
					var unit_span = document.getElementById('resource_' + name + '_span');
					// adds object by that amount, then rounds
					resource[name].change = roundTwo(resource[name].change + change);
					
					unit_span.innerHTML = name + " " + resource[name].number + " " + resource[name].change + "/h";
				}

				return change;
			},
			
			toggleDisplay: function(name)
			{
				if(resource[name])
				{
					if(resource[name].display)
					{
						resource[name].display = false;
					}
					else
					{
						resource[name].display = true;
					}
				}
			},
			
			registerResource: function(name,num,weight,type,isDisplayed)
			{
				// remove any duplicates
				if (resource[name])
				{	
					Inventory.removeResource(name);
				}
				resource[name] = new Resource(name,name,num,weight,type,isDisplayed);
				
				// create a new element in DOM for the new unit
				var class_attribute = document.createAttribute('class');
				class_attribute.value = 'resource__display';

				var id_attribute = document.createAttribute('id');
				id_attribute.value = 'resource_' + name;

				var unit_element = document.createElement('div');
				unit_element.setAttributeNode(class_attribute);
				unit_element.setAttributeNode(id_attribute);
				
				var id_attribute = document.createAttribute('id');
				id_attribute.value = 'resource_' + name + '_span';
				
				var unit_span = document.createElement('span');
				unit_span.setAttributeNode(id_attribute);
				unit_span.innerHTML = name + " " + resource[name].number + " " + resource[name].change + "/h";
				
				unit_element.appendChild(unit_span);
				
				panel.appendChild(unit_element);
				
				return resource[name];
			},
			
			registerResourceObject: function(resourceObject)
			{
				// remove any duplicates
				if (resource[name])
				{	
					Inventory.removeResource(name);
				}
				
				resource[resourceObject.name] = resourceObject;
				Engine.log(JSON.stringify(resourceObject));
				Engine.log(JSON.stringify(resource[resourceObject.name]));
				// create a new element in DOM for the new unit
				var class_attribute = document.createAttribute('class');
				class_attribute.value = 'resource__display';

				var id_attribute = document.createAttribute('id');
				id_attribute.value = 'resource_' + resourceObject.name;

				var unit_element = document.createElement('div');
				unit_element.setAttributeNode(class_attribute);
				unit_element.setAttributeNode(id_attribute);
				
				var id_attribute = document.createAttribute('id');
				id_attribute.value = 'resource_' + resourceObject.name + '_span';
				
				var unit_span = document.createElement('span');
				unit_span.setAttributeNode(id_attribute);
				unit_span.innerHTML = resourceObject.name + " " + resource[resourceObject.name].number + " " + resource[resourceObject.name].change + "/h";
				
				unit_element.appendChild(unit_span);
				
				panel.appendChild(unit_element);
				
				return resource[resourceObject.name];
			},
			
			getResource: function(name)
			{
				if (resource[name])
				{
					return resource[name];
				}
			},
			
			getResourceCount: function(name)
			{
				if (resource[name])
				{
					return resource[name].number;
				}
				else
				{
					return 0;
				}
			},
			
			removeResource: function(name)
			{
				if (resource[name])
				{
					panel.removeChild(document.getElementById("resource_" + name));
					delete resource[name];
				}
			},
			
			clearInventory: function()
			{
				panel.innerHTML = "";
				resource = {};
			},
			
			update: function()
			{
				// do all
				for (let name in resource)
				{
					var unit_element = document.getElementById('unit_' + name);
					var unit_span = document.getElementById('unit_' + name + '_span');
					
					unit_span.innerHTML = name + " " + resource[name].number + " " + resource[name].change + "/h";
					
				}
			},
			
			tick: function()
			{
				// add all
				for (let name in resource)
				{
					Inventory.addResource(name,resource[name].change);
				}
			},
			
			// exports data as JSON
			exportData: function()
			{
				var saveData = {resource_data: resource, storage_data: storage};
				
				return JSON.stringify(saveData);
				
				//return null;
			},
			
			// imports data as JSON
			importData: function(save_object)
			{
				
				var saveData = JSON.parse(save_object);
				if (saveData != null)
				{
					if (saveData.resource_data === {})
					{
						// do nothing
					}
					else
					{
						// add back all the resources, but first purge the data already present
						for (let name in saveData.resource_data) // BUG HERE! BIG BUG!!!
						{
							// DOM
							panel.innerHTML = "";
							
							//Engine.log(name + JSON.stringify(saveData.resource_data[name]));
							Inventory.registerResourceObject(saveData.resource_data[name]);
						}
					}
					if (saveData.storage_data != null)
					{
						storage = saveData.storage_data;
					}
				}
				
				
			},
		} // end of return
	} // end of function()
)(); // end of army
