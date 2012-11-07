window.ProductInputModel = InputModel.extend({
    defaults: _.extend({},InputModel.prototype.defaults,{
		"dataType": 2,
		"names": ["Bags", "Bottles", "Other1", "Other2"]
	})
});