import * as assert from 'assert';
import  {multipleOfNums, findMultiple, findSumOfArray} from '../problem1.js';
import  {findEvenNumbers, fibonacciSequence} from '../problem2.js';
describe('Problem 1 Multiples of 3 or 5', function () {
  describe('Verify Multiple of 3 and 5', function () {
    it('6, 9, 18 should be multiple of 3 ', function () {
      assert.equal(multipleOfNums(6,[3]), true);
      assert.equal(multipleOfNums(9,[3]), true);
      assert.equal(multipleOfNums(18,[3]), true);
    });
    
    it('3, 5, 6 and 9 are mutiple of 3 or 5 ', function () {
      assert.equal(multipleOfNums(3,[3,5]), true);
      assert.equal(multipleOfNums(5,[3,5]), true);
      assert.equal(multipleOfNums(6,[3,5]), true);
      assert.equal(multipleOfNums(9,[3,5]), true);
    });

    it('Sum of 3, 5, 6 and 9 should be 23 ', function () {
      assert.equal(findSumOfArray([3,5,6,9]), 23);
    });

    it('Multiples of 3 and 5 less then 10 should be  3, 5, 6, 9 and sum should be 23 ', function () {
      const multiples = findMultiple(10,[3,5]);
      assert.deepEqual( multiples, [3, 5, 6, 9]);
      assert.equal( multiples.length, 4);
      assert.equal( findSumOfArray(multiples), 23);
    });
    
    it('Multiples of 3 and 5 less then 1000 and sum should be 233168 ', function () {
      const multiples = findMultiple(1000,[3,5]);
      assert.equal( multiples.length, 466);
      assert.equal( findSumOfArray(multiples), 233168);
    });
  });
});


describe('Problem 2 Even Fibonacci numbers', function () {
  describe('Verify Fibonacci numbers', function () {
    it('First 10 Fibonacci numbers should be 1, 2, 3, 5, 8, 13, 21, 34, 55, 89', function () {
      assert.deepEqual(fibonacciSequence(90),[1, 2, 3, 5, 8, 13, 21, 34, 55, 89]);
    });

    it('Even numbers in first 10 Fibonacci numbers should be 2, 8, 34', function () {
      assert.deepEqual(findEvenNumbers(fibonacciSequence(90)),[2, 8, 34]);
    });

    it('Even numbers in Fibonacci numbers not exceding 4000000 should be 2,8,34,144,610,2584,10946,46368,196418,832040,3524578 ', function () {
      assert.deepEqual(findEvenNumbers(fibonacciSequence(4000000)),[2,8,34,144,610,2584,10946,46368,196418,832040,3524578]);
    });
  });
});

describe('Helper Functions', function () {
  describe('Verify Ever Number functions', function () {
    it('2,4,6,8, 122 should be maked as even number', function () {
      assert.deepEqual(findEvenNumbers([2,4,6,8,122]), [2,4,6,8,122]);
    });

    it('1,3,5,7 should\'t be maked as even number', function () {
      assert.deepEqual(findEvenNumbers([1,3,5,7]), []);
    });
  });

  describe('Verify Summ of Array functions', function () {
    it('Sum of 2,4,6 should be 12', function () {
      assert.equal(findSumOfArray([2,4,6]), 12);
    });

    it('5,3,5  should be 13', function () {
      assert.equal(findSumOfArray([5,3,5]), 13);
    });
  });
});