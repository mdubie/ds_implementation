(function() {
  'use strict';

  describe('[singly linked lists]', function() {
     
    var nums = new LinkedList();
    nums.append('zero');

    describe('LinkedList Class', function() {

      //test groupings:
      //linked list constructor
      it('should initiate a Linked List Class with length 0', function() {
        expect(nums.length).to.equal(1);
      });

    });

    describe('append', function() {
      it('should append new keys to linked list', function() {
        expect(nums.head.key).to.equal('zero');
        expect(nums.length).to.equal(1);
        expect(nums.append('one')).to.equal(true);
        expect(nums.length).to.equal(2);
        expect(nums.toArray()[1]).to.equal('one');
      });

    });

    describe('indexOf', function() {
      it('should return index position of key', function() {
        expect(nums.indexOf('zero')).to.equal(0);
        expect(nums.indexOf('four')).to.equal(-1);
      });  
    });

    describe('remove', function() {
      it('should remove last element', function() {
        expect(nums.remove()).to.equal(true);
        expect(nums.length).to.equal(1);
        expect(nums.indexOf('one')).to.equal(-1);
      });

    });

    describe('insert', function() {
      it('should insert new key at end of list', function() {
        expect(nums.insert(0, 'six')).to.equal(true);
        expect(nums.indexOf('six')).to.equal(0);
      }); 

    });
    

    describe('removeAt', function() {
      it('should remove a key at a specified index position', function() {
        expect(nums.removeAt(0)).to.equal(true);
        expect(nums.length).to.equal(1);
      });  
    });

    describe('toArray', function() {
      it('should return an array of keys', function() {
        expect(Array.isArray(nums.toArray())).to.equal(true);
        expect(nums.toArray()).to.deep.equal(['zero']);
      });
    });

    describe('isEmpty', function() {
      it('should return a boolean whether linked list is empty', function() {
        expect(nums.isEmpty()).to.equal(false);
      });
    });

    describe('size', function() {
      it('should return current size of linked list', function() {
        expect(nums.size()).to.equal(1);
      });
    });

  });

  describe('[doubly linked lists]', function() {

  });

  describe('[binary trees]', function() {

  });

  describe('[trees]', function() {

  });
}());


