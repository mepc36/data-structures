// ***Declared using the pseudoclassical style

var BinarySearchTree = function(value) {
  var newBinaryTree = {};
  newBinaryTree.insert = binarySearchTreeMethods.insert;
  newBinaryTree.contains = binarySearchTreeMethods.contains;
  newBinaryTree.depthFirstLog = binarySearchTreeMethods.depthFirstLog;
  newBinaryTree.storage = [];
  newBinaryTree.insert(value)

  return newBinaryTree;
};

var binarySearchTreeMethods = {};
// input - a node
// output - none; a side effect of a crated node; a new node attached to the tree
// constraint - 
// edge - 

// BinarySearchTree(newNode);

binarySearchTreeMethods.insert = function(node) {
  var newNode = {};
  newNode.node = node;
  newNode.left = null;
  newNode.right = null;
  if (this.storage.length === 0) {
    this.storage.push(newNode);
  } else {
    if (this.storage[0].left === undefined || this.storage[0].left === null) {
      this.storage[0].left = newNode;
      this.storage.push(newNode);
    } else if (this.storage[0].left !== undefined && node < this.storage[0].left) {
      debugger;
    }
  }
};

// Plain English 
// Add a new node to the tree by finding a valid place for it;
// A valid place is if 

// input - a numerical value
// output - none, but a side effect of a node being added to the tree
// constraint - 
// edge case - 
// binarySearchTreeMethods.insert = function(node) {
//   var newNode = {};
//   newNode.node = node;
//   newNode.left = null;
//   newNode.right = null;
//   // base case - the node has no children
//   // no children means that both .left and .right are null, if the tree has members;
//   // it means that 
//   if (!this.storage.left && !this.storage.right) {
//     debugger;
//     this.storage.push(newNode);
//   }
//   // recursive case - the node has children
// };

binarySearchTreeMethods.contains = function(node) {

};

binarySearchTreeMethods.depthFirstLog = function(cb) {

};




/*
 * Complexity: What is the time complexity of the above functions?
 */
