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
    
    describe('toArray', function() {
      it('req 1', function() {
        expect(1).to.equal(2)
      });
    });
    
    describe('remove', function() {
      it('req 1', function() {
        expect(1).to.equal(2)
      });
    });
    

    describe('removeAt', function() {
      it('req 1', function() {
        expect(1).to.equal(2)
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


