window.MainModel = Backbone.Model.extend({
	urlRoot: "api/main",

	parse: function(response){
		var set = {};
		set.CurrentMonthModel = new MonthModel();
		set.PrevMonthModel = new MonthModel();
		return set;
	}
});
