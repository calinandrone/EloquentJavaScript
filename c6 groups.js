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
  
  	static from (iterable) {
      	let gr = new Group;
    	for (let element of iterable) {
          	gr.add(element);
        }
      	return gr;
    }
  	 
}


let group = Group.from([10, 20]);
console.log(group.has(10));

console.log(group.has(30));

group.add(10);
group.delete(10);
console.log(group.has(10));
