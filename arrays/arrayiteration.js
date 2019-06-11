var arrNames = ['james', 'ethan', 'indiana', 'jason', 'peter', 'stark'];
console.log('The Simple Iteration using for..loop');
for (var i = 0; i < arrNames.length; i++) {
    console.log('Element at index ' + i + ' is  = ' + arrNames[i]);
}
console.log();
console.log('Using for..in loop');
for (var i in arrNames) {
    console.log('Element at index ' + i + ' is  = ' + arrNames[i]);
}
console.log();
console.log('Using for..of loop');
for (var _i = 0, arrNames_1 = arrNames; _i < arrNames_1.length; _i++) {
    var n = arrNames_1[_i];
    console.log(n);
}
