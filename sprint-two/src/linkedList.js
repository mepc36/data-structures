var LinkedList = function() {
  
  var list = {};

  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newNode = new Node ();
    newNode.value = value; // add a value;
    this.tail = newNode; // set the tail
    newNode.next = list.value // tell it what should become the head if we delete the current head
    return value;
  };

  list.removeHead = function() {
    
    delete this.head.value;
    this.head = newNode.next; // set a new head
  };

  list.contains = function(target) {
    
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