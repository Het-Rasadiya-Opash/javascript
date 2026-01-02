let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
console.log(text.toLowerCase());

console.log("Length : ", text.length);
console.log(text.charAt(1));
console.log(text.charCodeAt(1));
console.log(text.codePointAt(1));

console.log(text.at(3));
console.log(text[1]);

let text1 = "Hello";
let text2 = "World";
let text3 = text1.concat(" ", text2);
console.log(text3);

console.log(text1.toUpperCase());

let a = "Apple, Banana, Kiwi";
console.log(a.slice(7, 13));
console.log(a.slice(15));

console.log(a.substring(7, 13));
console.log(a.substring(15));

let b = "     home  ";
console.log(b);
console.log(b.trim());
console.log(b.trimEnd());
console.log(b.trimStart());

let c = "Please visit Opash";
console.log(c.replace("Opash", "Google"));

let d = "cat dog cat cow cat";
console.log(d.replaceAll("cat", "DOG"));
