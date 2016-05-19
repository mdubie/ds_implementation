/**
 * Brain storm of methods and standard array methods
 * add
 * addN
 * index (access n value)
 * remove
 * replace (change value)
 * toArray
 * fromArray
 * length
 * print (in user friendly manner)
 * concat()
 * every()
 * fill()
 * filter()
 * find()
 * findIndex()
 * forEach()
 * indexOf()
 * isArray()
 * join()
 * lastIndexOf()
 * map()
 * pop()
 * push()
 * reduce()
 * reduceRight()
 * reverse()
 * shift()
 * slice()
 * some()
 * sort()
 * splice()
 * unshift()
 * removeDuplicates
 *
 * 
 */



function LinkedList() {
  this.length = 0;
  this.head = null;
}

function Node(value) {
  this.value = value;
  this.next = null;
}

LinkedList.prototype = {

add: function(value) {
  var curNode = new Node(value);
  var pointer = this.head;
  
  this.length += 1;
  
  if (!pointer) {
    this.head = curNode;
  } else {
    while (pointer.next) {
      pointer = pointer.next;
    }
    pointer.next = curNode;
  }
}, 
  
  // Retrieves the node value at a given index
  // Indices are zero-based

find: function(index) {
  var pointer = this.head;
  
  if (index < 0 || index >= this.length) { //edge con
    return 'Invalid index'
  }

  for (var i = 0; i < index; i++) { //edge here
    pointer = pointer.next;
  }
  return pointer.value;
},

  // Creates a node based on user-input value and inserts at the head of the node
insertFirst: function(value) {
  var pointer = this.head;
  var curNode = new Node(value);
  if (!pointer) {
    this.head = curNode;
  } else {
    curNode.next = this.head;
    this.head = curNode;
  }
  this.length += 1
},

insertAt: function(index, value) {  //index of 0 === this.head
  var pointer = this.head;
  
  if (index < 0 || index >= this.length) { 
    return 'Invalid index'
  }

  for (var i = 0; i < index-1; i++) { 
    pointer = pointer.next;
  }

  this.length += 1;
  var ref = pointer.next;
  var insertNode = new Node(value);
  pointer.next = insertNode;
  pointer.next.next = ref;
},

//Removes first node that matches user-input value
remove: function(value) { 
  var pointer = this.head;

  if (pointer.value === value) {
    this.length -= 1;
    var tail = pointer.next;
    this.head = tail;
  }
  
  while (pointer.next) {
    if (pointer.next.value === value) {
      this.length -= 1;
      pointer.next = pointer.next.next;
    }
      pointer = pointer.next || pointer
  }
},
// Removes node at user-specified index
removeAt: function(index) {  
  var pointer = this.head;

  if (typeof index === 'number') {
    if (index < 0 || index >= this.length) { 
      return;
    }

    this.length -= 1;
    
    if (index === 0) {
      this.head = pointer.next;
    }
    for (var i = 0; i < index-1; i++) {
      pointer = pointer.next
    }
    pointer.next = pointer.next.next;
  }
},

toArray: function() {   
  var pointer = this.head;
  var values = [];

  while (pointer) {
    values.push(pointer.value);
    pointer = pointer.next
  }
  return values;
}
} 

var list = new LinkedList();
console.log(list)
// list.add('1'); //index: 0
// list.add('2'); //index: 1
// list.add('3');  //2
list.insertAt(2, 'inserted');
console.log(list.toArray())