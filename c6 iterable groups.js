class Group {
	constructor () {
      	this.items = [];
    }
  
  	has (value) {
    	if (this.items.indexOf(value) != -1) return true;
      	else return false;
    }
  
  	add (value) {
    	if (!this.has(value)) return this.items.push(value);
      	else console.log(`Already has ${value}!`);
    }
  
  	delete (value) {
      	if (this.items.indexOf(value) == 0) return this.items.shift();
      	else if (this.items.indexOf(value) == this.items.length-1) 
          					return this.items.pop();
    	else if (this.has(value)) 
        	return this.items.slice(0, indexOf(value))
              .concat(this.items.slice(indexOf(value)+1));
        else console.log(`There is no ${value} to delete!`);
    }
  	
  	get (position) {
    	return this.items[position];
    }
  
  	static from (iterable) {
      	let gr = new Group;
    	for (let element of iterable) {
          	gr.add(element);
        }
      	return gr;
    }
  	
  	[Symbol.iterator]()  {
    	return new GroupIterator(this);
    }    
}

class GroupIterator {
	constructor(grp) {
    	this.x = 0;
      	this.grp = grp.items;
    }
  	next() {
    	if (this.x == this.grp.length) return {done: true};
      	else {
          	let val = this.grp[this.x];
      		this.x++;
      		return {value: val, done: false};
    	}
    }
}

let group = Group.from(["a", "b", "c"]);
console.log(group);

for (let value of group) {
  console.log(value);
}

// ? a
// ? b
// ? c