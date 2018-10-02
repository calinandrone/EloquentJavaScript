




function isEven(n) {
	if (n==0) {
      console.log("number is even");
      return true; 
    }
  	else if (n==1) {
      console.log("number is odd");
      return false;
    }
  	else if (n<0) return isEven(2-n);
  	else return isEven(n-2);
}

isEven(-1);