//functional-shared
var makeQueue = function(){
 // Use an object with numeric keys to store values
  var queue = {
    _storage : {},
    _first : 0,
    _last : 0
  };

  _.extend(queue, queueMethods);
  return queue;
};

var queueMethods = {
  enqueue : function(value){
    this._storage[this._last] = value;
    this._last++;
  },

  dequeue : function(){
    var result = this._storage[this._first];
    if(this._first < this._last){
      this._first++;
    }
    return result;
  },

  size : function(){
    return this._last - this._first;
  }
};