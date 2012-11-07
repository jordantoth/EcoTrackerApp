var Controller = {

	activeAjaxConnections: 0,
	
	modActiveAjaxConnections: function(num){
		this.activeAjaxConnections += num;
	},
	
	getPrevDatastore: function(datastoreMap){
	  var d = new Date();
	  var prevMonthKey = Controller.getPrevMonthKey(d);
	  if (typeof datastoreMap[prevMonthKey] === "undefined"){
		datastoreMap[prevMonthKey] = new DBModel();
	  }
	  return datastoreMap[prevMonthKey];
	},

	getCurDatastore: function(datastoreMap){
	  var d = new Date();
	  var curMonthKey = Controller.getCurMonthKey(d);
	  if (typeof datastoreMap[curMonthKey] === "undefined"){
		datastoreMap[curMonthKey] = new DBModel();
	  }
	  return datastoreMap[curMonthKey];
	},
	
	loadDatastore: function(datastore, callback){
	  datastore.fetch({success: function (response) { callback()}});
	},
	
	getCurMonthKey: function(d){
	  // set to beginning of month
	  d = new Date(d.getFullYear(), d.getMonth(), 0, 0, 0, 0, 0);
	  // adjust to timezone
	  d.setTime(d.getTime() + d.getTimezoneOffset()*60*1000);
	  return d.getTime();
	},
	
	getPrevMonthKey: function(d){
	  // set to beginning of month
	  d = new Date(d.getFullYear(), d.getMonth()-1, 0, 0, 0, 0, 0);
	  // adjust to timezone
	  d.setTime(d.getTime() + d.getTimezoneOffset()*60*1000);
	  return d.getTime();
	},
	
	dataNames: ["compostData", "powerData", "productData", "recyclingData", "showerData", "trashData", "travelData"],
	
	modCurLocalDatastoreItem: function(dataType, itemIndex, modValue){
		this.getCurDatastore(localDatastoreMap).modItem(dataType, itemIndex, modValue);
	},

	modPrevLocalDatastoreItem: function(dataType, itemIndex, modValue){
		this.getPrevDatastore(localDatastoreMap).modItem(dataType, itemIndex, modValue);
	},

	setCurLocalDatastoreItem: function(dataType, itemIndex, value){
		this.getCurDatastore(localDatastoreMap).setItem(dataType, itemIndex, value);
	},

	setPrevLocalDatastoreItem: function(dataType, itemIndex, value){
		this.getPrevDatastore(localDatastoreMap).setItem(dataType, itemIndex, value);
	},
	
} 

