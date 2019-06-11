// explict datatype declaration
let n1: number = 100;
// implicit datatype
let n2 = 100; // the type of n2 will be set to number
let n3: any;
n3 = 100;
console.log(typeof(n3));
n3 = 'ffff';
console.log(typeof(n3));
// the JSON object declaration
let myObj = {
    x:10,
    y:20
};
console.log(typeof(myObj));
console.log(myObj.x);
console.log(myObj.y);

let myname:string = 'TypeScript Programming Language';

console.log(myname.toUpperCase());
console.log(myname.toLowerCase());
console.log(myname.length);
console.log(myname.toLocaleLowerCase());
for (let p in myObj) {
    console.log(p);
}