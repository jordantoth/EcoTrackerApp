window.TravelResultModel = ResultModel.extend({
    
	defaults: _.extend({},ResultModel.prototype.defaults,{
		"dataType": 6,
		"names": ["Walking", "Biking", "Public Transit", "Driving"],
	})
    
});