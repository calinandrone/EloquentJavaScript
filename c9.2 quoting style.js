let text = "'I'm the cook,' he said, 'it's my job.'";
// Change this call.
console.log(text.replace(/'/g, "\"").replace(/(\w)"(\w)/g, "$1'$2"));
// ? "I'm the cook," he said, "it's my job."