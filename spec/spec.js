<<<<<<< HEAD
=======

// add
// valueAt
// insertAt
// toArray
// removeAt

>>>>>>> refs/remotes/origin/master
(function() {
  'use strict';

  describe('singly linked lists', function() {

    describe('add', function() {
      it('if list is empty, it should add first node', function() {
        var listAdd1 = new LinkedList();
        listAdd1.add('pizza');

        var refAdd1 = {length:1, head:{ value:'pizza', next: null } };

        expect(listAdd1.head).to.deep.eql(refAdd1.head)
      });

      it('if list is not empty, it should add at end of list', function() {
        var listAdd2 = new LinkedList();
        listAdd2.add('pizza');
        listAdd2.add('veggies');

        var refAdd2 = { length: 2, head: { value: 'pizza', next: { value: 'veggies', next: null } } }

        expect(listAdd2.head).to.deep.eql(refAdd2.head)
      });

      it('it should properly increment length counter', function() {
        var listAdd3 = new LinkedList();
        expect(listAdd3.length).to.equal(0)

        listAdd3.add('chocolate');
        expect(listAdd3.length).to.equal(1)
      });
    });

    describe('valueAt', function() {
      it('if list length is 1, should return first item', function() {
        var listValueAt1 = new LinkedList();
        listValueAt1.add('pizza');

        expect(listValueAt1.valueAt(0)).to.equal('pizza')
      });

      it('if list length is greater than 1, should return that item', function() {
        var listValueAt2 = new LinkedList();
        listValueAt2.add('pizza');
        listValueAt2.add('rain');
        listValueAt2.add('cheese');

        expect(listValueAt2.valueAt(2)).to.equal('cheese')
      });

      it('if invalid index is given, should let user know there is an error', function() {
        var listValueAt3 = new LinkedList();
        listValueAt3.add('pizza');
        listValueAt3.add('rain');
        listValueAt3.add('cheese');

        expect(listValueAt3.valueAt(5)).to.equal('Invalid index')
      });
    });

    describe('insertAt', function() {
      it('when called at index 0, should insert node at beginning of list', function() {
        var listInsertAt1 = new LinkedList();
        listInsertAt1.add('pizza');
        listInsertAt1.add('rain');
        listInsertAt1.insertAt(0, 'potatoe')

        var refHead = { value: 'pizza', next: { value: 'potatoe', next: { value: 'rain', next: null } } }

        expect(listInsertAt1.head).to.deep.eql(refHead)
      });

      it('when called with a middle index, should insert node into list at given index', function() {
        var listInsertAt1 = new LinkedList();
        listInsertAt1.add('pizza');
        listInsertAt1.add('rain');
        listInsertAt1.insertAt(1, 'potatoe')

        var refHead = { value: 'pizza', next: { value: 'potatoe', next: { value: 'rain', next: null } } }

        expect(listInsertAt1.head).to.deep.eql(refHead)
      });

      it('when called with the last index, should insert node onto the end of the list', function() {
        var listInsertAt1 = new LinkedList();
        listInsertAt1.add('pizza');
        listInsertAt1.add('rain');
        listInsertAt1.insertAt(1, 'potatoe')

        var refHead = { value: 'pizza', next: { value: 'potatoe', next: { value: 'rain', next: null } } }

        expect(listInsertAt1.head).to.deep.eql(refHead)
      });

      it('should increment the length of the list accordingly', function() {
        var listInsertAt1 = new LinkedList();
        listInsertAt1.add('pizza');
        listInsertAt1.add('rain');
        listInsertAt1.insertAt(1, 'potatoe')

        var refHead = { value: 'pizza', next: { value: 'potatoe', next: { value: 'rain', next: null } } }

        expect(listInsertAt1.head).to.deep.eql(refHead)
      });

    });
    
    describe('remove', function() {

      it('should not return any value', function() {   //added to singlylinked.js to account for pointer.next===null
        var listInsertAt1 = new LinkedList();
        listInsertAt1.add('bumblebee');
        listInsertAt1.add('honey');
        var noHoney = listInsertAt1.remove('honey');
        expect(noHoney).to.equal(undefined)
      });

      it('should not alter list when provided non-existent/invalid value in the list', function() {
        var listInsertAt2 = new LinkedList();
        listInsertAt2.add('zoo');
        listInsertAt2.add('elephants');
        listInsertAt2.add('sea lions');
        listInsertAt2.remove('orangutans');
        
        var noOrangutans = { value: 'zoo', next: { value: 'elephants', next: { value: 'sea lions', next: null}}}

        expect(listInsertAt2.head).to.deep.eql(noOrangutans);
        expect(listInsertAt2.length).to.deep.eql(3)
      });

      it('should remove all nodes with matching value', function() {  //TO DO: add second parameter to specific how many values to remove 
        var listInsertAt3 = new LinkedList();
        listInsertAt3.add('zucchini');
        listInsertAt3.add('squash');
        listInsertAt3.add('quinoa');
        listInsertAt3.add('zucchini');
        listInsertAt3.remove('zucchini');

        var teenyZucchini = { value: 'squash', next: { value: 'quinoa', next: null}}

        expect(JSON.stringify(listInsertAt3.head)).to.deep.eql(JSON.stringify(teenyZucchini));
        expect(listInsertAt3.length).to.deep.eql(2)
      });

      it('should decrease list length by 1', function() {  
        var listInsertAt4 = new LinkedList();
        listInsertAt4.add('green eggs');
        listInsertAt4.add('ham');
        listInsertAt4.remove('ham');
        expect(listInsertAt4.length).to.deep.eql(1)
      });
    });

    describe('removeAt', function() {

      it('should not return any value', function() {   
        var listInsertAt1 = new LinkedList();
        listInsertAt1.add('bumblebee');
        listInsertAt1.add('honey');
        var noHoney = listInsertAt1.removeAt(0);
        expect(noHoney).to.equal(undefined)
      });

      it('should not alter list when provided invalid index value', function() {
        var listInsertAt2 = new LinkedList();
        listInsertAt2.add('zoo');
        listInsertAt2.add('elephants');
        listInsertAt2.add('sea lions');
        listInsertAt2.removeAt('orangutans');
        listInsertAt2.removeAt(-1);
        
        var noOrangutans = { value: 'zoo', next: { value: 'elephants', next: { value: 'sea lions', next: null}}}

        expect(listInsertAt2.head).to.deep.eql(noOrangutans);
        expect(listInsertAt2.length).to.deep.eql(3)
      });

      it('should remove correct node at given index using zero-based indexing', function() {  //TO DO: add second parameter to specific how many values to remove 
        var listInsertAt3 = new LinkedList();
        listInsertAt3.add('zucchini');
        listInsertAt3.add('squash');
        listInsertAt3.add('quinoa');
        listInsertAt3.add('zucchini');
        listInsertAt3.removeAt(0);

        var teenyZucchini = { value: 'squash', next: { value: 'quinoa', next: { value: 'zucchini', next: null }}}

        expect(JSON.stringify(listInsertAt3.head)).to.deep.eql(JSON.stringify(teenyZucchini));
        expect(listInsertAt3.length).to.deep.eql(3)
      });

      it('should decrease list length by 1', function() {  
        var listInsertAt4 = new LinkedList();
        listInsertAt4.add('green eggs');
        listInsertAt4.add('ham');
        listInsertAt4.removeAt(1);
        expect(listInsertAt4.length).to.deep.eql(1)
      });
    });
    
    describe('toArray', function() {
      it('should return an array', function() {   
        var listInsertAt1 = new LinkedList();
        listInsertAt1.add('bumblebee');
        listInsertAt1.add('honey');
        var noHoney = listInsertAt1.toArray();
        expect(Array.isArray(noHoney)).to.equal(true)
      });

      it('should include all list values in an array', function() {
        var listInsertAt2 = new LinkedList();
        listInsertAt2.add('zoo');
        listInsertAt2.add('elephants');
        listInsertAt2.add('sea lions');
        listInsertAt2.add('orangutans');
        var listToArray = listInsertAt2.toArray();
        
        var zooAnimals = ['zoo', 'elephants', 'sea lions', 'orangutans']

        expect(listToArray).to.deep.eql(zooAnimals);
      });

      it('should not alter original list', function() {  //TO DO: add second parameter to specific how many values to remove 
        var listInsertAt3 = new LinkedList();
        listInsertAt3.add('zucchini');
        listInsertAt3.add('squash');
        listInsertAt3.add('quinoa');
        listInsertAt3.toArray();

        var teenyZucchini = { value: 'zucchini', next: { value: 'squash', next: { value: 'quinoa', next: null}}}

        expect(JSON.stringify(listInsertAt3.head)).to.deep.eql(JSON.stringify(teenyZucchini));
        expect(listInsertAt3.length).to.deep.eql(3)
      });
    });
  });




  describe('doubly linked lists', function() {
    describe('fn1', function() {
      it('req 1', function() {
        //expectation 1
      });
    });
  });

  describe('binary trees', function() {
    describe('fn1', function() {
      it('req 1', function() {
        //expectation 1
      });
    });
  });

  describe('trees', function() {
    describe('fn1', function() {
      it('req 1', function() {
        //expectation 1
      });
    });
  });

}());


