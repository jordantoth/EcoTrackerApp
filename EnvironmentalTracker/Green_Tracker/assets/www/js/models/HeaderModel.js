// keeps current state of header
window.HeaderModel = Backbone.Model.extend({
    defaults: {
		"index": 0,
		"type": 0,
		"headers": [["Input Compost View", 
						"Input Power View", 
						"Input Product View",
						"Input Recycling View",
						"Input Shower View",
						"Input Trash View",
						"Input Travel View",
						"Input List View" ],
					["Result Compost View", 
						"Result Power View", 
						"Result Product View",
						"Result Recycling View",
						"Result Shower View",
						"Result Trash View",
						"Result Travel View",
						"Result List View" ],
					["HomeView"]]
	},
	setIndices: function(i, t){
		this.set("index", i);
		this.set("type", t);
		this.trigger('setIndices');
	}
});