function arrayToListERR (array) {
  	let list = {rest: null};
	for (let i=array.length-1; i>=0; i--) {
      	list = {value: array[i], rest:list};
    }
  	return list;
}

function arrayToList (array) {
  	let list = {}, listArray = [];
	for (let i=0; i<array.length; i++) {
      	listArray.push({value: array[i], rest: null});
    	if (i>0) Object.assign(listArray[i-1], {rest: listArray[i]});
    }
  	list = listArray[0];
  	return list;
}

function listToArray (list) {
	let array = [];
  	do {
    	array.push(list.value);
        list = list.rest;
    } while (list != null);
   	return array;
}

function prepend(element, list) {
	let newList = {value: element, rest:list}
    return newList;
}

function nth(list, position) {
  	let i = 0;
  	while (i < position && list != null) {
    	list = list.rest;
      	i++;
    }
  	if (list != null) return list.value;
  	else return undefined;
}

function nthR (list, position) {
 	if (list == null) return undefined;
    else if (position == 0) return list.value;
  	else return nthR(list.rest, position-1);
}


let arr=[1, 2, 3], lst = {value: 1, rest: {value: 2, rest: {value: 3, rest: null}}};

//console.log(arrayToList(arr));
//console.log(listToArray(lst));
//console.log(listToArray(arrayToList(arr)));
//console.log(prepend(0, lst));
//console.log(nth(lst, 5));
console.log(nthR(lst, 10));