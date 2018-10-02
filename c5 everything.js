let arr = ["metallica", "metallmania", "ironmetal", 
           "metalpriest", "metalsabbath", "dedmental"];

function find (text, array) {
    	if (array.every((array) => {return array.indexOf(text) != -1} )) return true;
      	else return false;
    }
  	


console.log(find("metal", arr));