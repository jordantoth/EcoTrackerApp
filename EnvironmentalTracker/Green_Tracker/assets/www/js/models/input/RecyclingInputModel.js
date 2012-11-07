window.RecyclingInputModel = InputModel.extend({
    defaults: _.extend({},InputModel.prototype.defaults,{
		"dataType": 3,
		"names": ["Cans", "Bottles", "Other1", "Other2"],
	})
});