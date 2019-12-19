const cowsay = require("cowsay");


// const words = process.argv.slice(2);
// const e = words.slice(0,1).join(' ');
// const T = words.slice(1,2).join(' ');
// const word = words.slice(2).join(' ');
// console.log(words);
// console.log(e);
// console.log(T);
// console.log(word);


function moo(text, eyes, tongue){
    const theCowSaid = cowsay.say({
        text : text,
        e : eyes,
        T : tongue
    })
    return theCowSaid;
}

// console.log(moo(word, e, T));

module.exports = moo;