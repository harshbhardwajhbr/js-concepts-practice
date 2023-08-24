
// Polyfill for reduce
Array.prototype.myreduce = function(callback, initialValue) {

	if(this === null || this === undefined) {
		throw new TypeError('Array cannot be empty');
	}
	const array = this;
	const length = array.length;
    console.log(length, array);
    let accumulator = initialValue !== undefined ? initialValue : array[0];
    for(let i = initialValue !== undefined ? 0 : 1; i < length; i++) {
        accumulator = callback(accumulator, array[i], i, array);
    }

    return accumulator;
}

const arr = [7 , 8, 9, 4];

const sum = arr.myreduce((acc, curr) => {
    return acc + curr;
}, 0);

console.log(sum);