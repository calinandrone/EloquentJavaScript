



let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
arr = [[1, 2, 3], ["x","y","z"]];
console.log(arr.reduce((a, b) => a.concat(b)));