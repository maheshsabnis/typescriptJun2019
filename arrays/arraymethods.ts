let names: Array<string> = new Array<string>();

names.push('James Bond');
names.push('Ethan Hunt');
names.push('Indiaia Jones');
names.push('Jason Bourn');
names.push('Peter Parker');

names.forEach((value,index) => {
    console.log(`Value at index ${index} is ${value}` );
});

names.map((value,index) => {
    console.log(`Value at index ${index} is ${value}` );
});

// filter method to read elements from array based on  
// condition a return an array of matching values

let res = names.filter((v,idx) => {
    return v.charAt(0) === 'J';
});

console.log(JSON.stringify(res));


