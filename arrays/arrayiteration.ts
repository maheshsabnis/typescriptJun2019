let arrNames = ['james', 'ethan', 'indiana', 'jason','peter','stark'];

console.log('The Simple Iteration using for..loop');
for(let i=0; i<arrNames.length; i++) {
    console.log('Element at index ' + i + ' is  = ' + arrNames[i]);
}
console.log();
console.log('Using for..in loop');
for(let i in arrNames) {
    console.log('Element at index ' + i + ' is  = ' + arrNames[i]);
}
console.log();
console.log('Using for..of loop');
for(let n of arrNames) {
    console.log(n);
}
