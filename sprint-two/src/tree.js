var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.addChild = treeMethods.addChild;
  newTree.contains = treeMethods.contains;
  // your code here
  newTree.children = [];  // fix me (WAS null at first)
  
  return newTree;
};

var treeMethods = {

};

// I.O.C.E.
// input - an array value that represents the child we should add to the tree
// output - no output; a side effect of the tree having children added to it;
// constraints - none;
// edge cases - the tree is not defined;

// Diagram of Data Structure:
// children ---> an array that's declared as a property on the tree, representing all children, 
// which is accessed with newTree.children.
// children[0] ---> an object that's added to the children array which represents a single child of the tree, and
// is accessed with a numerical index.
// .value ---> a numerical value that's declared as a property on the object-members of that children array, 
// representing the values of the trees child, as in children[0].value

// Pseudocode:
// 1.) create a child object that will be added to the tree's children array
// 2.) declare the pushed in value on that new child object 
// 3.) push that augmented child object onto the tree's children array

treeMethods.addChild = function(value) {
  debugger;
  var newChild = {};
  newChild.value = value;
  this.children.push(newChild);
};

// input -
// output - a boolean that describes whether or not the tree has this value;
// constraints - 
// edge cases - 

treeMethods.contains = function(target) {

};



/*
 * Complexity: What is the time complexity of the above functions?
 */
