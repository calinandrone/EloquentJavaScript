async function retrivePlain() {
  	let r = await fetch("https://eloquentjavascript.net/author" , 
                        {headers: {accept: "text/plain"}});
	console.log(await r.text());
}

async function retriveHtml() {
  	let r = await fetch("https://eloquentjavascript.net/author" , 
                        {headers: {accept: "text/html"}});
	console.log(await r.text());
}

async function retriveJson() {
  	let r = await fetch("https://eloquentjavascript.net/author" , 
                        {headers: {accept: "application/json"}});
	console.log(await r.text());
}

async function retriveUnicorns() {
  	let r = await fetch("https://eloquentjavascript.net/author" , 
                        {headers: {accept: "application/rainbows+unicorns"}});
	console.log(await r.text());
}

//retrivePlain();
//retriveHtml();
//retriveJson();
retriveUnicorns();