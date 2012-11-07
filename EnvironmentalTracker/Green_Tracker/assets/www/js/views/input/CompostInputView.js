window.CompostInputView = InputView.extend({
  
    viewType: 0,
  
    events: {
        "click #input-0-add":     "augmentItem",
        "click #input-0-remove":  "decrementItem"
    },
  
    render: function() {
        InputView.prototype.render.call(this);
        $(this.el.getElementsByClassName("input-add-remove")).html(new AddRemoveView({model: this.model.toJSON()}).el);
        return this;
    },
  
})
