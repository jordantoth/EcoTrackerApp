window.RecyclingResultModel = ResultModel.extend({
    defaults: _.extend({},ResultModel.prototype.defaults,{
		"dataType": 3,
		"names": ["Cans", "Bottles", "Other1", "Other2"],
	})
});