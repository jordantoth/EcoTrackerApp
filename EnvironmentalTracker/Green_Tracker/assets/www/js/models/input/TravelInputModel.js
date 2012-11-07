window.TravelInputModel = InputModel.extend({
    
	defaults: _.extend({},InputModel.prototype.defaults,{
		"dataType": 6,
		"names": ["Walking", "Biking", "Public Transit", "Driving"],
	})
    
});