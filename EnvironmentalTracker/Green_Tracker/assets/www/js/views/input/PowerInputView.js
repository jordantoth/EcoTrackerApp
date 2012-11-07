window.PowerInputView = InputView.extend({
  
    viewType: 1,
  
    events: {
        "click input#log": "log",
        "click input#current-month-button": "selectCurrentMonth",
        "click input#previous-month-button": "selectPreviousMonth",
    },

    log: function(ev) {
        this.setItem(ev, $("#power").attr("value"));
    },

    setItem: function(ev, val) {
        var itemIndex = this.model.get("itemIndex");
        if (this.model.get("monthIndex")) {
            Controller.setPrevLocalDatastoreItem(this.viewType, itemIndex, val);
        } else {
            Controller.setCurLocalDatastoreItem(this.viewType, itemIndex, val);
        }
        this.model.populate();
        this.render();
    },

    selectCurrentMonth: function(ev) {
        this.model.set("monthIndex", 0);
        this.render();
    },

    selectPreviousMonth: function(ev) {
        this.model.set("monthIndex", 1);
        this.render();
    },

})
