var Brownies = function(id) {
	
   this.storage = [];
   //initialize the storage name;
   this.name = id;


}
Brownies.prototype ={
	
	add:function(string){
         this.storage.push(string);
	},
	remove:function(string){
         for (var node, i = 0; node = this.getItem(i); i++) {
         if (node == string) {
   			 this.storage.splice(i, 1);
   			 return true;
  		 }
   
   		if (node.remove(string) {
    	    return true;
   		}
  		}
 
     return false;
	},
	getItem: function(i){
		return this.storage[i];

	},
	save: function(){
		//save this.storage
		localStorage.setItem(this.name,JSON.stringify(this.storage));
	},
	load: function(){
		var obj = new Object;
		obj = JSON.parse(localStorage.getItem(this.name));
		return obj;
	}

}