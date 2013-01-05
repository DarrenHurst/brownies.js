vvar Brownies = function(id) {
   this.storage =  new Array(1);
   this.name = id;
}
Brownies.prototype ={
  add:function(string){
         this.storage.push(string);
  },
  addObject:function(name,obj){
    if (this.storage == null){
         this.storage = [];
    }
    if (!this.hasKey(name)){
    this.storage.push('{"'+name+'":'+JSON.stringify(obj)+'}');
    }
    else{
      var i = this.getIndex(name);
      this.storage[i] = '{"'+name+'":'+JSON.stringify(obj)+'}';
    }
    this.save();
  },
  remove:function(string){
         for (var node, i = 0; node = this.getItem(i); i++) {
         if (node == string) {
         this.storage.splice(i, 1);
         return true;
       }
   
      if (node.remove(string)) {
          return true;
      }
      }
 
     return false;
  },
  hasKey:function(key){
  for (var node, i = 0; node = this.getItem(i); i++) {
          //console.log(node);
          var obj = JSON.parse(this.storage[i]);
            for (var x in obj){
              //console.log(x);
          if (x == key){
            return true;
          }
      }

        }
       return false;
  },
  getIndex:function(key){
  for (var node, i = 0; node = this.getItem(i); i++) {
          //console.log(node);
          var obj = JSON.parse(this.storage[i]);
            for (var x in obj){
              //console.log(x);
          if (x == key){
            return i;
          }
      }

        }
       return false;
  },
  getKey: function(key){
        for (var node, i = 0; node = this.getItem(i); i++) {
          //console.log(node);
          var obj = JSON.parse(this.storage[i]);
            for (var x in obj){
              //console.log(x);
          if (x == key){
            return this.storage[i];
          }
      }

        }
       return "ERROR NO KEY";
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
    this.storage = JSON.parse(localStorage.getItem(this.name));
    return obj;
  }

}
  