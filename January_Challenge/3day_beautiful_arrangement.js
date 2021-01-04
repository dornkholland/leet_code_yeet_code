
//Plan
/*

start with an array from 1 to n
create n recursive calls on helper function with sliced off array
check condition for each popped is true and return values are not 'fail' string
if so, add to counter 


for next call, do  the same thing
*/

const countArrangement = function(num) {
	if (num === 1) return 1;
	const numArray = [];
	for(let i = 1; i <= num; i++) {
		numArray.push[i];
	}
	const helper = function(numArray, index) {
		const counter = 0
		const n = numArray[0];
		if (numArray.length = 1) {
			if (!n % index &&!index % n) {
				return 1;
			} else return "Failed!";
		} else {
			const popped = n;
			const newIndex = index + 1;
			for (let i = 0; i < numArray.length; i++) {
				const call = helper(numArray.slice(1), newIndex)
				if (!popped % index && !index % popped ){
					if (call !== "Failed!") {
						counter++;
					}
				} else return "Failed!";
			}
			}
			return counter;
		}

		if (helper !== "Failed") return helper(num, 0);
	}

	console.log(countArrangement(2));