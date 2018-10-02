function deepEqual (value1, value2) {
	if (typeof(value1) == "object" && typeof(value2) == "object") {
      let v1 = Object.keys(value1), v2 = Object.keys(value2);
      if (propertiesComparison(v1, v2, 0, 0)) {
    	return deepComparison(value1, value2, 0, 0);
    	} 
  		else return false;
    }
	else if (typeof(value1) == typeof(value2)) {
    	if (value1 == value2) return true;
  		else return false;
	}
	else return false;
}

function propertiesComparison (val1, val2, pos1, pos2) {
  	if (pos1 < val1.length) {
   		if (val1[pos1] == val2[pos2]) {
          	return propertiesComparison(val1, val2, pos1+1, pos2+1);
    	}
    	else return false;
	}
  	else return true;
}

function deepComparison (val1, val2, pos1, pos2) {
	if (pos1 < val1.length) {
   		if (val1[pos1] == val2[pos2]) {
    		return deepComparison(val1, val2, pos1+1, pos2+1);
    	}
    	else return false;
	}
  	else return true;
}

let a = {a:10, b:20, x:30}, b = [11, 12, 13], c = [11, 12, 13], d = [22, 33, 44]
	e = [1, 2, 3, 4];

console.log(deepEqual(e, b));