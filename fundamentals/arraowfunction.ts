let data =[10,20,30];

function print(n: number, i:number) {
    console.log(`Element at index ${i} is ${n}`);
}

// data.forEach(print);

data.forEach((n,i) => {
    console.log(`Element at index ${i} is ${n}`);
});