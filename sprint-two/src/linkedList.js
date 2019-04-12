var LinkedList = function() {
  
  var list = {};

  list.head = null;
  list.tail = null;
  
  // input - the value that will be declared on the object
  // output - a side effect of having a new tail be added
  // constraint - no constraint
  // edge cases - if the value is undefined, 

  list.addToTail = function(value) {
    //
    //
    //
    // declare list.tail.next to be the 
    var newNode = new Node (value);
    if (list.head === null) {
      list.head = newNode;
      list.tail = newNode;
    } else {
      list.tail = newNode;
      list.tail.value
      list.tail.next = list.head.value;
    }
  }; 
  // input - none
  // output - side effect of the head being removed
  // constraint - no constraint
  // edge cases - if list.head = und, or if list.head.next is und.

  list.removeHead = function() {
    // check list.head if it is undefined
    if (list.head === undefined) {
      return undefined;
    }
    // if list.head is not undefined
    else {
    // if list.head.next is undefined
      if (list.head.next === undefined) {
        return undefined;
      } else {
    // list.head becomes list.head.next
        var current = list.head.value;
        list.head.value = list.tail.value
        list.tail.next = null;
        return current;
      }
    }
  };

  // input - the passed in target that we're looking for
  // output - a boolean
  // constraint - none
  // edge case - no arguments, undefined, 
  
  list.contains = function(target) {
    // Check if the value of the tail is equal to target
    // If the value of the tail is equal to the target, return true
    // If the value doesn't equal the target, check if .next is null
    // If .next is null, and this.tail is not null, then return false
    // If .next is not null, recursively call this .contains function again 
    if (this.tail.value === target) {
      return true;
    } else {
      if (this.tail.next === null) {
        return false;
      } else {
        if (this.tail.next === target) {
          return true;
        } else {
          return target === this.contains(this.tail.next);
        }
      }
    }
  };
  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null; // this is the default setting
    // when we add a node, we have to set node.next; 

  return node;
};

// var newLinkedList = LinkedList();
// newLinkedList.addToTail(5);

/*
 * Complexity: What is the time complexity of the above functions?
 */

// new Node