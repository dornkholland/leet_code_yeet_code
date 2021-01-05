// we need a visited set

const twoSum = function(nums, target) {
    const visited = new Object();
    // we want to iterate through the nums array 
    nums.forEach((num,i) => {
        // check if target - num exists in the set
        const weWant = target - num;
        if (visited[weWant] !== undefined) return [visited[weWant], i];
        else {
            visited[num] = i;
        }
    })
    
}
