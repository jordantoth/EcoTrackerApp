window.DBModel = Backbone.Model.extend({
	urlRoot: "api/db",

	modItem: function(dataID, itemID, modVal){
		this.get(Controller.dataNames[dataID])[itemID] += modVal;
	},

	setItem: function(dataID, itemID, val){
		this.get(Controller.dataNames[dataID])[itemID] = val;
	},
		
	defaults:{
		"compostData": 		[0,0,0,0],
		"powerData":  		[0,0,0,0],
		"productData":  	[0,0,0,0],
		"recyclingData":	[0,0,0,0],
		"showerData":  		[0,0,0,0],
		"trashData":  		[0,0,0,0],
		"travelData":  		[0,0,0,0],
    },
	

});
