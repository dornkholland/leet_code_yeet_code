var createSortedArray = (instructions) => {
  let nums = [];
  let totalCost = 0;
  let visited = {};

  const binarySearch = (array, target) => {
    const length = array.length;
    if (length === 0) return 0;
    else {
      const midPoint = Math.floor(length / 2);
      const val = array[midPoint];
      if (val === target) return midPoint;
      else if (val > target) return binarySearch(array.slice(0, midPoint));
      else return midPoint + binarySearch(array.slice(midPoint + 1));
    }
  };
  for (let i = 0; i < instructions.length; i++) {
    const insertionPoint = binarySearch(nums, instructions[i]);
    let thisCount = 0;
    if (count[instructions[i]]) {
      thisCount = count[instructions[i]];
      count[instructions[i]]++;
    } else {
      count[instructions[i]] === 1;
    }
    nums.splice(index, 0, instructions[i]);
    const currentCount = count;
  }
  return result % (1000000000 + 7);
};
