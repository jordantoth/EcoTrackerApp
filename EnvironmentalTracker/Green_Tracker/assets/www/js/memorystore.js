// The in-memory Store. Encapsulates logic to access data.
window.store = {

	monthModel: {},

    populate: function () {
    	
    	this.monthModel = {
			compostData : 	[0,0,0,0],
			powerData : 	[1,0,0,0],
    		productData : 	[2,0,0,0],
			recyclingData : [3,0,0,0],
			showerData : 	[4,0,0,0],
			trashData : 	[5,0,0,0],
			travelData : 	[6,0,0,0],
        }
    },

    find: function () {
        return this.monthModel;
    },

    create: function (model) {
        this.monthModel.productModel = model;
        return model;
    },

    update: function (model) {
        this.monthModel.productModel = model;
        return model;
    },

    destroy: function (model) {
        delete this.wines[model.id];
        return model;
    }

};

store.populate();

// Overriding Backbone's sync method. Replace the default RESTful services-based implementation
// with a simple in-memory approach.
Backbone.sync = function (method, model, options) {

    var resp;

    switch (method) {
        case "read":
            var oldObject = store.find();
			resp = jQuery.extend(true, {}, oldObject);
            break;
        case "create":
            resp = store.create(model);
            break;
        case "update":
            resp = store.update(model);
            break;
        case "delete":
            resp = store.destroy(model);
            break;
    }

    if (resp) {
        options.success(resp);
    } else {
        options.error("Record not found");
    }
};