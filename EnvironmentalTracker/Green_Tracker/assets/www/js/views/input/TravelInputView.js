window.TravelInputView = InputView.extend({

    viewType: 6,

    events: {
        "click #input-6-item0":   "chooseProduct",
        "click #input-6-item1":   "chooseProduct",
        "click #input-6-item2":   "chooseProduct",
        "click #input-6-item3":   "chooseProduct",
        "click #input-6-add":     "augmentItem",
        "click #input-6-remove":  "decrementItem"
    },

    render: function() {
        InputView.prototype.render.call(this);
        $(this.el.getElementsByClassName("input-radio-group")).html(new RadioGroupView({model: this.model.toJSON()}).el);
        $(this.el.getElementsByClassName("input-add-remove")).html(new AddRemoveView({model: this.model.toJSON()}).el);
        return this;
    },

})
