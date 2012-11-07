window.InputModel = Backbone.Model.extend({
    defaults: {
		"dataType": -1,
		"itemIndex": 0,
		"monthIndex": 0,
		"items": [0,0,0,0],
		"itemsLocal": [0,0,0,0],
		"tips": [ "tip 0", "tip 1", "tip 2" ]
    },

	populate: function() {
        var datastore = Controller.getCurDatastore(localDatastoreMap);
        this.set("items", datastore.get(Controller.dataNames[this.get("dataType")]));
	},
	
    modItem: function(diff) {
        this.get("itemsLocal")[this.get("itemIndex")] += diff;
        this.get("items")[this.get("itemIndex")] += diff;
    },
	
	modLocalItem: function(diff, itemIndex) {
		if (typeof itemIndex == "undefined"){
			var itemIndex = this.get("itemIndex");
		}
		if (this.get("itemsLocal")[itemIndex] + diff <= this.get("items")[itemIndex]){
			this.get("itemsLocal")[itemIndex] += diff;
		}
	},
    
    clearLocalChanges: function() {
        this.set("itemsLocal", [0,0,0,0]);
    }

});