class PGroup {
  	constructor () {
      	this.items = [];
    }
    	
  	has (value) {
    	if (this.items.indexOf(value) != -1) return true;
      	else return false;
    }
  
  	add (value) {
      	let pGroup = new PGroup;
    	if (!this.has(value)) {
          let pg = this.items;
          pg.push(value);
          pGroup.items = pg;
          return pGroup;
        }
      	else console.log(`Already has ${value}!`);
    }
  
  	delete (value) {
      	let pGroup = new PGroup;
        let pg = this.items;
        pg = pg.filter(v => v !== value);
      	pGroup.items = pg;
        return pGroup;
    }
}

let a = new PGroup;
a.add("a");
a.add("b");
a.add("c");
a.delete("a");
console.log("a",  a);

let ab = a.add("d");
console.log("ab",  ab);

let b = ab.delete("a");
console.log("b", b);

console.log(b.has("b"));
// → true
console.log(a.has("b"));
// → false
console.log(b.has("a"));
// → false 