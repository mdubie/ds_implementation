
 var List = function() {
   this.length = 0;
   this.head = null;
 }

 var Node = function(value) {
   this.value = value;
   this.next = null;
 }

 List.prototype.add = function(value) {
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
 }

 List.prototype.valueAt = function(index) {
   var pointer = this.head;
   
   if (index < 0 || index >= this.length) { //edge con
     return 'Invalid index'
   }

   for (var i = 0; i < index; i++) { //edge here
     pointer = pointer.next;
   }
   return pointer.value;
 }

 List.prototype.insertAt = function(index, value) {  //index of 0 === this.head
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
   pointer.next.next = ref;   //<==removed a line of code here
 }

 var listInsertAt1 = new List();
 listInsertAt1.add('pizza');
 listInsertAt1.add('rain');
 listInsertAt1.insertAt(0, 'potatoe')
 console.log('1',listInsertAt1)
 var listInsertAt2 = new List();
 listInsertAt2.add('pizza');
 listInsertAt2.add('rain');
 listInsertAt2.insertAt(2, 'potatoe')
 console.log('2', listInsertAt2)

 List.prototype.toArray = function() {
 	var result = [];
 	var pointer = this.head;
 	while(pointer) {
 		result.push(pointer.value);
 		pointer = pointer.next;
 	}
 	return result;
 }

 // var list = new List();
 // list.add('pizza');
 // list.add('cheese');
 // list.add('veggies');
 // list.add('pasta');
 // console.log(list);
 // console.log(list.toArray())
 

List.prototype.removeAt = function(index) {
	this.length -= 1;
	var pointer = this.head;

	if (index < 0 || index >= this.length) { 
	  return 'Invalid index'
	}

	for (var i = 0; i < index-1; i++) { 
	  pointer = pointer.next;
	}

	var ref = pointer.next.next;
	pointer.next = ref;
};

// var list = new List();
// list.add('pizza');
// list.add('cheese');
// list.add('veggies');
// list.add('pasta');
// console.log(list.head);
// list.removeAt(1)
// console.log(list.head);





