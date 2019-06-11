// explict datatype declaration
var n1 = 100;
// implicit datatype
var n2 = 100; // the type of n2 will be set to number
var n3;
n3 = 100;
console.log(typeof (n3));
n3 = 'ffff';
console.log(typeof (n3));
// the JSON object declaration
var myObj = {
    x: 10,
    y: 20
};
console.log(typeof (myObj));
console.log(myObj.x);
console.log(myObj.y);
var myname = 'TypeScript Programming Language';
console.log(myname.toUpperCase());
console.log(myname.toLowerCase());
console.log(myname.length);
console.log(myname.toLocaleLowerCase());
for (var p in myObj) {
    console.log(p);
}
