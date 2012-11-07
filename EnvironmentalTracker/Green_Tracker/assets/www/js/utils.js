window.utils = {

    // Asynchronously load templates located in separate .html files
    // and load model
    loadTemplate: function(views, callback) {

        var deferreds = [];

        $.each(views, function(index, view) {
        	var arr = view.split("/");
        	var test = arr[arr.length-1];
        	
        	if (window[test]) {
                deferreds.push($.get('tpl/' + view + '.html', function(data) {
                    window[test].prototype.template = _.template(data);
                }));
            } else {
                alert(view + " not found");
            }
        });
      
	  headerModel = new HeaderModel();
	  authModel = new AuthModel();
	  
	  syncedDatastoreMap = {};
	  localDatastoreMap = {};
	  inputViewModels = {};
	  resultViewModels = {};
	  
	  this.initializeViewModels();
	  
	  // add defensive coding
	  Controller.modActiveAjaxConnections(2);
	  
	  var curDatastore = Controller.getCurDatastore(syncedDatastoreMap);
	  Controller.loadDatastore(curDatastore, function(){
		
		Controller.modActiveAjaxConnections(-1);
		if (Controller.activeAjaxConnections == 0){
			$.when.apply(null, deferreds).done(callback);
		}
	  });
	  
	  var prevDatastore = Controller.getPrevDatastore(syncedDatastoreMap);
	  Controller.loadDatastore(prevDatastore, function(){
		
	    Controller.modActiveAjaxConnections(-1);
		if (Controller.activeAjaxConnections == 0){
			$.when.apply(null, deferreds).done(callback);
		}
	  });
	  
    },
	
	initializeViewModels: function(){
		inputViewModels[0] = new CompostInputModel();
		inputViewModels[1] = new PowerInputModel();
		inputViewModels[2] = new ProductInputModel();
		inputViewModels[3] = new RecyclingInputModel();
		inputViewModels[4] = new ShowerInputModel();
		inputViewModels[5] = new TrashInputModel();
		inputViewModels[6] = new TravelInputModel();
		
		resultViewModels[0] = new CompostResultModel();
		resultViewModels[1] = new PowerResultModel();
		resultViewModels[2] = new ProductResultModel();
		resultViewModels[3] = new RecyclingResultModel();
		resultViewModels[4] = new ShowerResultModel();
		resultViewModels[5] = new TrashResultModel();
		resultViewModels[6] = new TravelResultModel();
	},

    uploadFile: function (file, callbackSuccess) {
        var self = this;
        var data = new FormData();
        data.append('file', file);
        $.ajax({
            url: 'api/upload.php',
            type: 'POST',
            data: data,
            processData: false,
            cache: false,
            contentType: false
        })
        .done(function () {
            console.log(file.name + " uploaded successfully");
            callbackSuccess();
        })
        .fail(function () {
            self.showAlert('Error!', 'An error occurred while uploading ' + file.name, 'alert-error');
        });
    },

    displayValidationErrors: function (messages) {
        for (var key in messages) {
            if (messages.hasOwnProperty(key)) {
                this.addValidationError(key, messages[key]);
            }
        }
        this.showAlert('Warning!', 'Fix validation errors and try again', 'alert-warning');
    },

    addValidationError: function (field, message) {
        var controlGroup = $('#' + field).parent().parent();
        controlGroup.addClass('error');
        $('.help-inline', controlGroup).html(message);
    },

    removeValidationError: function (field) {
        var controlGroup = $('#' + field).parent().parent();
        controlGroup.removeClass('error');
        $('.help-inline', controlGroup).html('');
    },

    showAlert: function(title, text, klass) {
        $('.alert').removeClass("alert-error alert-warning alert-success alert-info");
        $('.alert').addClass(klass);
        $('.alert').html('<strong>' + title + '</strong> ' + text);
        $('.alert').show();
    },

    hideAlert: function() {
        $('.alert').hide();
    }

};