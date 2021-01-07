// start with 1
// check if it is in array
// if it is remove it from the array
// if it isn't increment counter

// if counter becomes k then we want to return that number
// that sounds like a while looop

var findKthPositive = function(arr, k) {
    let currentGuy = 1;
    let importantCounter = 0;
    let index = 0;
    while (k !== importantCounter) {
        if (arr[index] !== currentGuy) {
            importantCounter++;
        }
        currentGuy++;
        index++;
    }
    return arr[index]
}