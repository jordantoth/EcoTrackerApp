window.PowerInputModel = InputModel.extend({

    defaults: _.extend({},InputModel.prototype.defaults,{
        "dataType": 1,
		"itemsLastMonth": [0,0,0,0],
    }),
	
	populate: function() {
		InputModel.prototype.populate.call(this);
		var prevDatastore = Controller.getPrevDatastore(localDatastoreMap);
        this.set("itemsLastMonth", prevDatastore.get(Controller.dataNames[this.get("dataType")]));
	}
	
});