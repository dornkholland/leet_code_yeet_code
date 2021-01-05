// we start by checking which root node val is smaller
// we start with that
// check if that.next or othertree root is greater
// which ever is smaller becomes next of that.next

// however, we then need to make sure that we keep track of the other tree

const mergeTwoLists = function (l1, l2) {
  // check whether l1 or l2 is smaller and set that as start
  const start;
  const otherTree;
  if (l1.val < l2.val) {
    start = l1;
    otherTree = l2;
  } else {
    start = l2;
    otherTree = l1;
  }

  // check whether start.next or other tree is larger
};
