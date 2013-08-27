var makeQueue = function(){
  // Use an object with numeric keys to store values
  var storage = {};

  var size; // Hint: set an initial value here
  var first = 0;
  var last = 0;

  // Implement the methods below
  var queue = {};

  queue.enqueue = function(value){
    storage[last] = value;
    last++;
  };

  queue.dequeue = function(){
    var result = storage[first]
    if(first < last){
      first++;
    }
    return result;
  };

  queue.size = function(){
    return last - first;
  };

  return queue;
};
