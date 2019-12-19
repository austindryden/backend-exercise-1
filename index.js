const moo = require("./moo");
const words = process.argv.slice(2);
const e = words.slice(0,1).join(' ');
const t = words.slice(1,2).join(' ');
const word = words.slice(2).join(' ');

console.log(moo(word, e, t));