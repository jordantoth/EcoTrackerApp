// datastore model maps
var localDatastoreMap;
var syncedDatastoreMap;

// view models
var headerModel;
var authModel;
var inputViewModels; // map of viewModels
var resultViewModels; // map of viewModels


var AppRouter = Backbone.Router.extend({

    routes: {
    	"login"             : "login",
        ""					: "home",
        "home"         		: "home",
        "input/list"        : "inputDataList",
        "input/:id"         : "inputDataObject",
        "result/list"       : "resultDataList",
        "result/:id"        : "resultDataObject",
    },

    initialize: function () {
    	this.headerView = new HeaderView({model: headerModel});
		$('.header').html(this.headerView.el);
		this.footerView = new FooterView();
		$('.footer').html(this.footerView.el);
    },

	home: function(){
	  headerModel.setIndices(2,0);
	  $("#content").html(new HomeView({model: authModel}).el);
	},
	
	inputDataList: function(){
		headerModel.setIndices(0,7);
		$("#content").html(new DataListInputView().el);
	},
	
	resultDataList: function(){
		headerModel.setIndices(1,7);
		$("#content").html(new DataListResultView().el);
	},
	
	// 0-Compost, 1-Power, 2-Product, 3-Recycling, 4-Shower, 5-Trash, 6-Travel
	inputDataObject: function(dataObjectType){
		var dataType = parseInt(dataObjectType);
		var model = inputViewModels[dataType];
		var view;
		headerModel.setIndices(0, dataType);
		switch(dataType){
			case 0:
				view = new CompostInputView({model: model});
				break;
			case 1:
				view = new PowerInputView({model: model});
				break;
			case 2:
				view = new ProductInputView({model: model});
				break;
			case 3:
				view = new RecyclingInputView({model: model});
				break;
			case 4:
				view = new ShowerInputView({model: model});
				break;
			case 5:
				view = new TrashInputView({model: model});
				break;	
			case 6:
				view = new TravelInputView({model: model});
				break;
			default: // fail
		}
		$("#content").html(view.el);
	},
	
	// 0-Compost, 1-Power, 2-Product, 3-Recycling, 4-Shower, 5-Trash, 6-Travel
	resultDataObject: function(dataObjectType){
		var dataType = parseInt(dataObjectType);
		var model = resultViewModels[dataType];
		var view;
		headerModel.setIndices(1,dataType);
		switch(dataType){
			case 0:
				view = new CompostResultView({model: model});
				break;
			case 1:
				view = new CompostResultView({model: model});
				break;
			case 2:
				view = new ProductResultView({model: model});
				break;
			case 3:
				view = new RecyclingResultView({model: model});
				break;
			case 4:
				view = new ShowerResultView({model: model});
				break;
			case 5:
				view = new TrashResultView({model: model});
				break;	
			case 6:
				view = new TravelResultView({model: model});
				break;
			default: // fail
		}
		$("#content").html(view.el);
	}

});

utils.loadTemplate(['AddRemoveView','RadioGroupView', 'FooterView', 'TipsView', 'HeaderView', 'HomeView', 
	'input/DataListInputView', 'input/TravelInputView', 'input/PowerInputView', 'input/ShowerInputView', 
	'input/ProductInputView', 'input/CompostInputView', 'input/RecyclingInputView', 'input/TrashInputView',
	'result/DataListResultView', 'result/TravelResultView', 'result/PowerResultView', 'result/ShowerResultView', 
	'result/ProductResultView', 'result/CompostResultView', 'result/RecyclingResultView', 'result/TrashResultView'
	], function() {
		localDatastoreMap = syncedDatastoreMap;
		
		app = new AppRouter();
		Backbone.history.start();
});

function accessInputDataObjectView(dataType){
	inputDataObject(dataType);
}