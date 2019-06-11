var obj = { x: 10 };
// let  obj1 = obj;
// console.log(obj1.x);
// obj1.x = 20;
// console.log(obj1.x);
// console.log(obj.x);
// let obj2 = Object.create(obj);
// console.log(obj2.x);
// obj2.x = 100;
// console.log(obj2.x);
// console.log(obj.x);
// let obj2 = Object.assign({},obj);
// console.log(obj2.x);
// obj2.x = 100;
// console.log(obj2.x);
// console.log(obj.x);
// let obj2 = obj;
// console.log(obj2.x);
// obj2.x = 100;
// console.log(obj2.x);
// console.log(obj.x);
function addValues() {
    var values = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        values[_i] = arguments[_i];
    }
    var sum = 0;
    for (var i = 0; i < values.length; i++) {
        sum += values[i];
    }
    return sum;
}
console.log("2 parameters " + addValues(2, 3));
console.log("2 parameters " + addValues(2, 3, 4));
console.log("2 parameters " + addValues(2, 3, 4, 5));
console.log("2 parameters " + addValues(2, 3, 4, 5, 6));
