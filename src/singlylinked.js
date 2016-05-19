
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

  valueAt: function(index) {
    var pointer = this.head;
    
    if (index < 0 || index >= this.length) { //edge con
      return 'Invalid index'
    }

    for (var i = 0; i < index; i++) { //edge here
      pointer = pointer.next;
    }
    return pointer.value;
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
        pointer = pointer.next || pointer;
    }
  },
  // Removes node at user-specified index
  removeAt: function(index) {
    var pointer = this.head;

    if (index < 0 || index >= this.length) { 
      return 'Invalid index'
    }
    
    this.length -= 1;
    
    if (index === 0) {
      this.head = pointer.next;
    }
    for (var i = 0; i < index-1; i++) {
      pointer = pointer.next
    }
    pointer.next = pointer.next.next;
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

