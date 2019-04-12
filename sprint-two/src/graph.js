

// Instantiate a new graph
var Graph = function() {
  this.nodes = [];
};


// Add a node to the graph, passing in the node's value.

// I.O.C.E.
// input -  a node
// output - no output; side effect: a new node is added to the graph
// constraint - none
// edge case - no node is passed in
//
// Pseudocode
// 1.) instantiate an object
// 2.) add the passed in node-value to the object;
// 3.)

Graph.prototype.addNode = function(node) {
  this.newNode = {};
  this.newNode.node = node;
  this.nodes.push(this.newNode);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.

// I.O.C.E.
// input - a numerical value that we're checking to see if the graph contains
// output - boolean
// constraint - none
// edge case - nothing passed in, or if the same node has been added twice

// Pseudocode:
// 1.) Declare for loop on the this.nodes array;
// 2.) Check to see if this.nodes[i] is equal to the passed in node
// 3.) If it is, return true;
// 4.) If it's not, just keep checking
// 5.) Add a return false at the very end of the program 
// edge case - 

Graph.prototype.contains = function(node) {
  // iterate over all nodes
  for (var i = 0; i < this.nodes.length; i++) {
    if (this.nodes[i].node === node) {
      return true;
    }
  }
  return false;
};

// Removes a node from the graph.

// I.O.C.E.
// input - a numerical value that will be removed from the graph
// output - nothing; side effect of a node being removed from the graph
// constraint - none
// edge case - nothing passed in, or if the graph does not contain the value

Graph.prototype.removeNode = function(node) {
  if (this.contains(node)) {
    for (var i = 0; i < this.nodes.length;i++) {
      if (this.nodes[i].node === node) {
        this.nodes.splice(i, 1);
      }
    }
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.

// I.O.C.E.
// input - 2 numerical values
// output - a boolean
// constraint - none
// edge case - doesn't contain both;

// Pseudocode:
// 1.)

Graph.prototype.hasEdge = function(fromNode, toNode) {
  // check if it contains both
  if (this.contains(fromNode) && this.contains(toNode)) {
  // if it does, 
    for (var i = 0; i < this.nodes.length; i++) {
      if (this.nodes[i].node === fromNode) {
        if (this.nodes[i].edge === toNode) {
          return true;
        } else {
          return false;
        }
      }
    }
  } else {
    return false;
  }
};

// Connects two nodes in a graph by adding an edge between them.

// I.O.C.E.
// input - a numerical node value
// output - none; side effect of adding a new property on an object;
// constraint - none;
// edge case - doesn't contain both values;

// Pseudocode:
// 1.) Check if it has both nodes
// 2.) if it does, iterate over the nodes
// 3.) Check if a node member value is equal to fromNode
// 4.) Declare the edge as a property on that node

Graph.prototype.addEdge = function(fromNode, toNode) {
  if (this.contains(fromNode) && this.contains(toNode)) {
    for (var i = 0; i < this.nodes.length; i++) {
      if (this.nodes[i].node === fromNode) {
        this.nodes[i].edge = toNode;
      }
      if (this.nodes[i].node === toNode) {
        this.nodes[i].edge = fromNode;
      }
    }
  }
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  if (this.contains(fromNode) && this.contains(toNode)) {
    for (var i = 0; i < this.nodes.length; i++) {
      if (this.nodes[i].node === fromNode) {
        delete this.nodes[i].edge;
      }
      if (this.nodes[i].node === toNode) {
        delete this.nodes[i].edge;
      }
    }
  }
};

// I.O.C.E.
// input - a function
// output - none; the function gets applied to every node in the graph
// constraint - none
// edge case - if the graph has no nodes;

// Pass in a function
// Pass in every node to that function
// That function will change the graph's nodes in some way

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  // make a for loop to iterate over every node in the graph's node array
  // apply the function to each node

  for (var i = 0; i < this.nodes.length; i++ ) {
    var newValue = cb(this.nodes[i].node);
    this.nodes[i].node = newValue;
    debugger;
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


