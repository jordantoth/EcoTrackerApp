window.ResultView = Backbone.View.extend({
  
  viewType: -1,

  initialize: function() {
	this.model.populate();
	this.render();
  },

  render: function() {
    $(this.el).html(this.template(this.model.toJSON()));
	$(this.el.getElementsByClassName("tips")).html(new TipsView({model: this.model.toJSON()}).el);
    return this;
  },

})
