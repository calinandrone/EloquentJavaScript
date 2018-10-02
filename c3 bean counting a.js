




function countBs(string) {
  	let c = 0;
	for (i=0; i<string.length; i++) {
    	if (string[i]=="B") c++;
    }
  return c;
}

console.log(countBs("BrBomb"));