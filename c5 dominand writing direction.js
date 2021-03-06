function dominantDirection(text) {
	let codes = getCharsCodes(text);
  	let ltr = 0, rtl = 0, ttb = 0;
  		for (let i=0; i<codes.length; i++) {
        	if (characterDirection(codes[i]) == "ltr") ltr++;
          	else if (characterDirection(codes[i]) == "rtl") rtl++;
          	else if (characterDirection(codes[i]) == "ttb") ttb++;
          	//else console.log("there is no script");
        }
  	if (ltr > rtl && ltr > ttb) return "ltr";
  	else if (rtl > ltr && rtl > ttb) return "rtl";
  	else if (ttb > ltr && ttb > rtl) return "ttb";
  	else return "there is no dominant direction";
}

function getCharsCodes (string) {
  	let charsCodes = [];
	for (let i=0; i<string.length; i++) {
    	charsCodes.push(string.charCodeAt(i));
    }
    return charsCodes;
}


function characterDirection(code) {
	for (let script of SCRIPTS) {
		if (script.ranges.some(([from, to]) => {
          return code >= from && code < to;
		  })) {
		return script.direction;
		}
	}
return null;
}



console.log(dominantDirection("Hello!"));
console.log(dominantDirection(" Hey, مساء الخير"));
