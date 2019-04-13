

var HashTable = function() {
  this._limit = 8; // a numerical value declared on the boject
  this._storage = LimitedArray(this._limit); // an object
};

// I.O.C.E.
// input - a key string and a value string;
// output - none; adds a string value to the storage array
// constraint - none
// edge - if the same key is inserted with a different value; not enough arguments

HashTable.prototype.insert = function(key, value) {
  var index = getIndexBelowMaxForKey(key, this._limit);
  var bucket = [];
  if (this._storage[index] === undefined) {
    this._storage[index] = bucket;
    bucket.push([key, value])
    this._storage.set(index, bucket);
  } else {
    for (var i = 0; i < this._storage[index][0].length; i++) {
      if (this._storage[index][0][i] === key) {
        this._storage[index][0].pop();
        this._storage[index][0].push(value);
      } else if (this._storage[index] !== undefined) {
        bucket.push(key, value);
        this._storage[index].push(bucket)
      }
    }
  }
};

HashTable.prototype.retrieve = function(key) {
  var index = getIndexBelowMaxForKey(key, this._limit);
  var bucket = this._storage[index];
  if (bucket === undefined) {
    return undefined;
  }
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === key) {
      return bucket[i][1];
    }
  }
  return undefined;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage[index] !== undefined) {
    delete this._storage[index]
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


