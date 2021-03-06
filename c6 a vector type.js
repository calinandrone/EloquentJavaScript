class Vec {
	constructor (x, y) {
    	this.pointer = {x, y};
    }
  	get length () {
    	return Math.sqrt(this.pointer.x*this.pointer.x + 
                         this.pointer.y*this.pointer.y);
    }
  
  	plus (vector){
    	return {x: this.pointer.x + vector.pointer.x, 
                y: this.pointer.y + vector.pointer.y};
    }

  	minus (vector) {
    	return {x: this.pointer.x - vector.pointer.x, 
                y: this.pointer.y - vector.pointer.y};
    }

}

console.log(new Vec(1, 2).plus(new Vec(2, 3)));
// → Vec{x: 3, y: 5}
console.log(new Vec(1, 2).minus(new Vec(2, 3)));
// → Vec{x: -1, y: -1}
console.log(new Vec(3, 4).length);
// → 5