window.HeaderView = Backbone.View.extend({

	events: {
		"click #header-history":   "back",
	},

    initialize: function () {
		this.model.on('setIndices', $.proxy(function() {
			this.render();
		}, this));
        this.render();
    },

    render: function () {
        $(this.el).html(this.template(this.model.toJSON()));
        return this;
    },
	
	back: function (){
		window.history.back();
	}

});