window.ResultModel = Backbone.Model.extend({

    defaults:{
		"dataType":  -1,
		"curMonthItems": [0,0,0,0],
		"prevMonthItems": [0,0,0,0],
		"tips": [ "tip 0", "tip 1", "tip 2" ]
    },
	
	populate: function(){
		var curDatastore = Controller.getCurDatastore(localDatastoreMap);
		this.set("curMonthItems", curDatastore.get(Controller.dataNames[this.get("dataType")]));
		var prevDatastore = Controller.getPrevDatastore(localDatastoreMap);
		this.set("prevMonthItems", prevDatastore.get(Controller.dataNames[this.get("dataType")]));
	},
	
});