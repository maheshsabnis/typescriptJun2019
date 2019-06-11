function doWork(x){
    if(x){
        var i = 10;
        console.log('i = ' + i);
    }
    i++;
    console.log('Out of if ' + i);
}
// doWork(true);
// doWork(false);

function doWork1(x){
    let i = 10;
    if(x){
        console.log('i = ' + i);
    }
    i++;
    console.log('Out of if ' + i);
}
// doWork1(true);
// doWork1(false);

for(var i=0;i<4;i++){
    console.log(i);
}
console.log('ouy of loop' +i);

console.log('out of loop ' +j);

