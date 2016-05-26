//<-- Classes --> //
function DoublyLinkedList() {
  this.length = 0;
  this.head = null;
  this.tail = null; //new: last node in list
}
function Node(value) {
  this.value = value;
  this.next = null;
  this.prev = null;  //new: added class in Node; each node points to previous node in list
}




DoublyLinkedList.prototype = {

  add: function(pos, value) {

    if (pos < 0 || pos > this.length) {
      return false;
    }
    else {
      var node = new Node(value);
      var pointer = this.head;
      var pointerPrev;
      var index = 0;

      if (pos === 0) {  // insert as first value
        if (!this.head) {   // if there isn't a head value already present
          this.head = node;
          this.tail = node;  //new
        }
        else {   // insert node between pointer and head node
          node.next = pointer;
          pointer.prev = node;   //new
          this.head = node;  
        }
      } 

      else if (pos === this.length) {   //add to the end as last item
        pointer = this.tail;  //moving pointer to last node (tail)
        pointer.next = node;
        node.prev = pointer;
        this.tail = node;
      }

      else {  //insert somewhere inside linked list
        while (index++ < pos) {
          pointerPrev = pointer;
          pointer = pointer.next;
        }
        node.next = pointer; // node will be inserted between pointer & pointerPrev
        pointerPrev.next = node;

        pointer.prev = node;  //new 
        node.prev = pointerPrev;  //new
      }
      this.length++;
      return value;
    }
  },

  removeAt: function(pos) {

    if (pos < 0 || pos >= this.length) {
      return null;
    }
    else {
      var pointer = this.head;
      var pointerPrev;
      var index = 0;

      if (pos === 0) {

        this.head = pointer.next; //null for length == 1

        if (this.length === 1) {
          this.tail = null;
        }
        else {
          pointer.next.prev = null;  //alternative is setting this.head.prev to null
        }
      }

    else if (pos === this.length-1) {
      pointer = this.tail;
      pointer = pointer.prev;
      pointer.next = null;
    }

    else {
      while (index++ < pos) {
        pointerPrev = pointer;
        pointer = pointer.next;
      }
      pointerPrev.next = pointer.next;
      pointer.next.prev = pointerPrev; //new

    }

      this.length--;
      return pointer.value;
    }
  },

  toArray: function() {
    var array = [];
    var pointer = this.head;
    var index = 0
    while (index++ < this.length) {
      array.push(pointer.value);
      pointer = pointer.next;
    }
    return array;
  }, 

  toString: function() {
    var arr = this.toArray(); 
    return arr.reduce(function(prev, cur) {
      return (prev.length === 0) ? (cur) : prev + ' -> ' + cur
    }, '')
  }
};

var dll = new DoublyLinkedList();
dll.add(0, 'a');
dll.add(1, 'b');
dll.add(2, 'c')
// dll.removeAt(0);
// dll.add(2, 'c');

