function loop (val, test, update, body) {
	while (test(val)) {
    	val = body(val);
      	console.log(val);
        loop(update(val), test, update, body);
    }
}

loop(3, a => a<20, b => b=b+5, c => c=c*2+1);