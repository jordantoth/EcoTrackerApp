window.ProductInputView = InputView.extend({

    viewType: 2,

    events: {
        "click #input-2-item0":   "chooseProduct",
        "click #input-2-item1":   "chooseProduct",
        "click #input-2-item2":   "chooseProduct",
        "click #input-2-item3":   "chooseProduct",
        "click #input-2-add":     "augmentItem",
        "click #input-2-remove":  "decrementItem"
    },

    render: function() {
        InputView.prototype.render.call(this);
        $(this.el.getElementsByClassName("input-radio-group")).html(new RadioGroupView({model: this.model.toJSON()}).el);
        $(this.el.getElementsByClassName("input-add-remove")).html(new AddRemoveView({model: this.model.toJSON()}).el);
        return this;
    },

})
