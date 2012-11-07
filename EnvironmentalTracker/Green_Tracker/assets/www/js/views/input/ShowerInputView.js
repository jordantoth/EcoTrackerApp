window.ShowerInputView = InputView.extend({
	
	viewType: 4,
	
	events: {
		"click input#input-shower-start": "start",
		"click input#input-shower-stop": "stop",
		"click input#input-shower-reset": "reset",
		"click input#input-shower-log": "log"
	},
	
	initialize: function() {
		InputView.prototype.initialize.call(this);
		this.w;
		this.render();
	},

    render: function () {
		InputView.prototype.render.call(this);
        this.w = new Stopwatch($.proxy(this.updateClock, this), 50);
        return this;
    },
			 
	updateClock: function() {
		var display = this.w.toString() + "." + parseInt(this.w.getElapsed().milliseconds/100);
		document.getElementById('input-shower-watchdisplay').innerHTML = display;
	},
	
	log: function(ev){
		// 0 - total time, 1 - numberShowers
		InputView.prototype.modItems.call(this, ev, [0,1], [this.w.totalElapsed, 1]);
		this.reset();
	},
	
	start: function(){
		this.w.start();
	},
	
	stop: function(){
		this.w.stop();
	},
	
	reset: function(){
		this.w.reset(); 
		this.updateClock();
	}
	
})