
// keep track of counter, importantGuy, index
// index starts at 0, counter starts at 1
// while counter !== k
// when arr[index] === counter increment index
// when arr[index] !== counter increment counter

// return counter

var findKthPositive = function(arr, k) {
    let counter = 0;
    let importantGuy = 1;
    let index = 0;

    while (counter !== k) {
        if (arr[index] === importantGuy) {
            index++;
        } else {
            counter++;
        }
        importantGuy++;
    }
    return importantGuy - 1;
}

