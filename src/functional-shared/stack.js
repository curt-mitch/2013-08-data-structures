//functional-shared
var makeStack = function(){
  // Use an object with numeric keys to store values
  var stack = {
  _storage : {},

  _size : 0 // Hint: set an initial value here
  };
  // Implement the methods below
  _.extend(stack, stackMethods);
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