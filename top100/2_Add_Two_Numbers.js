// we need one function to translate l1 and l2 into numbers
// helper function takes in one tree
// returns val + recursive call on next node
// base case when it is called on null return 0

// then, we add the two numbers together

// second function
// we mod 10 the number and get the last digit
// we make a new node as the last number
// take number, subtract remainder, divide by 10
// recursive call
// base case when arg is 0
// return null


var addTwoNumbers = function (l1, l2) {
  const translateToNumber = (tree) => {
    if (tree === null) return 0;
    else return tree.val + 10 * translateToNumber(tree.next);
  };
  const sum = translateToNumber(l1) + translateToNumber(l2);

  const secondFunction = (num) => {
    if (num === 0) return null;
    const remainder = num % 10;
    const ourNode = new ListNode(remainder);
    nextNumber = (num - remainder) / 10;
    ourNode.next = secondFunction(nextNumber);
    return ourNode;
  };
  return secondFunction(sum);
};