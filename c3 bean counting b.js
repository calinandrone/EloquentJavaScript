




function countChar(string, char) {
  	let c = 0;
	for (i=0; i<string.length; i++) {
    	if (String(string[i])==String(char)) c++;
    }
  return c;
}

console.log(countChar("lBrBombll", "l"));