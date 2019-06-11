var names = new Array();
names.push('James Bond');
names.push('Ethan Hunt');
names.push('Indiaia Jones');
names.push('Jason Bourn');
names.push('Peter Parker');
names.forEach(function (value, index) {
    console.log("Value at index " + index + " is " + value);
});
names.map(function (value, index) {
    console.log("Value at index " + index + " is " + value);
});
// filter method to read elements from array based on  
// condition a return an array of matching values
var res = names.filter(function (v, idx) {
    return v.charAt(0) === 'J';
});
console.log(JSON.stringify(res));
