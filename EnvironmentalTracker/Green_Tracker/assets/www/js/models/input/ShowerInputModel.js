window.ShowerInputModel = InputModel.extend({

	defaults: _.extend({},InputModel.prototype.defaults,{
		"dataType":  4
	}),
			   
	initialize: function() {
		this.bind("change:counter", function() {});
	},
	
});