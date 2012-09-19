var Brownies = function(id) {
	
   this.storage = [];
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
		localStorage.setItem(this.name,this.storage);
	},
	load: function(){
        localStorage.getItem(this.name);
	}

}