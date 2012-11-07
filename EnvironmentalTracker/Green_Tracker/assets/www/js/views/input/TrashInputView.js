window.TrashInputView = InputView.extend({
  
    viewType: 5,
  
    events: {
        "click #input-5-add":     "augmentItem",
        "click #input-5-remove":  "decrementItem"
    },
  
    render: function() {
        InputView.prototype.render.call(this);
        $(this.el.getElementsByClassName("input-add-remove")).html(new AddRemoveView({model: this.model.toJSON()}).el);
        return this;
    },
  
})
