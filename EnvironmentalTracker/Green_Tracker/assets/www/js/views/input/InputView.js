window.InputView = Backbone.View.extend({
  
  viewType: -1,

  initialize: function() {
	this.model.populate();
    this.model.clearLocalChanges();
	this.render();
  },

  render: function() {
    $(this.el).html(this.template(this.model.toJSON()));
	$(this.el.getElementsByClassName("tips")).html(new TipsView({model: this.model.toJSON()}).el);
    return this;
  },

  chooseProduct: function(ev) {
    var itemIndex = parseInt(ev.currentTarget.getAttribute("name"));
    this.model.set("itemIndex", itemIndex);
    this.render();
  },
  
  modItem: function(ev, modVal) {
    var itemIndex = this.model.get("itemIndex");
	Controller.modCurLocalDatastoreItem(this.viewType, itemIndex, modVal);
	this.model.populate();
	this.model.modLocalItem(modVal);
	this.render();
  },
  
  modItems: function(ev, itemIndex, modVal) {
	for(i=0;i<itemIndex.length;i++) {
  		if (this.model.get("monthIndex") == 0) {
  		  Controller.modCurLocalDatastoreItem(this.viewType, itemIndex[i], modVal[i]);
  		} else if (this.model.get("monthIndex") == 1) {
    		Controller.modPrevLocalDatastoreItem(this.viewType, itemIndex[i], modVal[i]);
  		}
  	}
  	this.model.populate();
	for(i=0;i<itemIndex.length;i++) {
  		if (this.model.get("monthIndex") == 0) {
			this.model.modLocalItem(modVal[i], itemIndex[i]);
		}
	}
  	this.render();
  },
  
  augmentItem: function(ev) {
    this.modItem(ev,1);
  },
  
  decrementItem: function(ev) {
    this.modItem(ev,-1);
  },

})
