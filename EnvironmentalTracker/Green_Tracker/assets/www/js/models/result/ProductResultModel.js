window.ProductResultModel = ResultModel.extend({
    defaults: _.extend({},ResultModel.prototype.defaults,{
		"dataType": 2,
		"names": ["Bags", "Bottles", "Other1", "Other2"]
	})
});