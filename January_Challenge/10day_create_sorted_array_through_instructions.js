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
    if (visited[instructions[i]]) {
      thisCount = visited[instructions[i]];
      visited[instructions[i]]++;
    } else {
      visited[instructions[i]] === 1;
    }
    totalCost += Math.min(
      insertionPoint - thisCount,
      nums.length - insertionPoint
    );
    nums.splice(insertionPoint, 0, instructions[i]);
  }
  return totalCost % (1000000000 + 7);
};
