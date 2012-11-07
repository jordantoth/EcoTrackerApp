window.RecyclingInputView = InputView.extend({

    viewType: 3,
  
    events: {
        "click #input-3-item0":   "chooseProduct",
        "click #input-3-item1":   "chooseProduct",
        "click #input-3-item2":   "chooseProduct",
        "click #input-3-item3":   "chooseProduct",
        "click #input-3-add":     "augmentItem",
        "click #input-3-remove":  "decrementItem"
    },

    render: function() {
        InputView.prototype.render.call(this);
        $(this.el.getElementsByClassName("input-radio-group")).html(new RadioGroupView({model: this.model.toJSON()}).el);
        $(this.el.getElementsByClassName("input-add-remove")).html(new AddRemoveView({model: this.model.toJSON()}).el);
        return this;
    },
})