




function reverseArray (array) {
	let newArray = [];
  	for (let i=array.length-1; i>=0; i--) newArray.push(array[i]);
  	return newArray;
}

function reverseArrayInPlace (array) {
  	const l = array.length;
	for (let i=0; i<l; i++) array.unshift(array[i*2]);
  	for (let i=0; i<l; i++) array.pop();
  	//array = array.slice(0, l);
  	return array;
}

let arr=[1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(reverseArray(arr));
reverseArrayInPlace(arr)
console.log(arr);