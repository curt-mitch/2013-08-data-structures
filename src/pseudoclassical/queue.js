//prototypal
var Queue = function() {
 // Use an object with numeric keys to store values
    this._storage = {};
    this._first = 0;
    this._last = 0;

};

Queue.prototype.enqueue = function(value){
  this._storage[this._last] = value;
  this._last++;
};

Queue.prototype.dequeue = function(){
  var result = this._storage[this._first];
  if(this._first < this._last){
    this._first++;
  }
  return result;
};

Queue.prototype.size = function(){
  return this._last - this._first;
};

var newQueue = new Queue();