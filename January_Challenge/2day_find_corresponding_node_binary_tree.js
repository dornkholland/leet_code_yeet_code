// Let's plan out exactly what we are going to do here
// Psueduocode

/*
start with original root node 
we are going to use a recursive implementation and recursively call until we find the clone
base case: 
if original = null then return null;
if original = target then return cloned original
if left is null then we want to recursively call only right
if right is null we want to recursively call only left
the side that doesn't contain the node will return null after the recursive call

*/

const getTargetCopy = function(original, cloned, target) {
if (original === null) return null
else if (original === target) return cloned;
const rightCall = getTargetCopy(original.right, cloned.right, target)
const leftCall = getTargetCopy(original.left, cloned.left, target)

if (rightCall === null) return leftCall 
else return rightCall;

};
