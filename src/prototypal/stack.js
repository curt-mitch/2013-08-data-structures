//prototypal
var Stack = function() {
  // Use an object with numeric keys to store values
  var stack = Object.create(stackMethods);
  stack._storage = {};
  stack._size = 0;

  return stack;
};

var stackMethods = {
  push : function(value){
    this._storage[this._size] = value;
    this._size++;
  },

  pop : function(){
    if(this._size){
      this._size--;
    }
    return this._storage[this._size];
  },

  size : function(){
    return this._size;
  }

};