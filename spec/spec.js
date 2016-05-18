(function() {
  'use strict';

  describe('singly linked lists', function() {
     
    var nums = new LinkedList();

    describe('LinkedList Class', function() {

      //test groupings:
      //linked list constructor
      it('should initiate a Linked List Class with length 0', function() {
        expect(nums.length).to.equal(0);
      });

    });

    describe('append', function() {
      it('should append new keys to linked list', function() {
        nums.append('zero');

        expect(nums.head.key).to.equal('zero');
        expect(nums.length).to.equal(1);
        expect(nums.append('one')).to.equal(true);
        expect(nums.length).to.equal(2);
      });

    });

    describe('remove', function() {


    });

    describe('insert', function() {

    });
    

    describe('removeAt', function() {
      
    });


    describe('insertAt', function() {
      
    });


    describe('indexOf', function() {
      
    });


    describe('toArray', function() {
      
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


