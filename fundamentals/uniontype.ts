let data: string|number|boolean;

data = 100;
data =  'TypeScript';
data =  true;

let anyArray:Array<any>  =new Array<any>();
anyArray.push("10");
anyArray.push(10);


let collection: string[]|number[];
collection = [10,20,30];
collection.push(40); 
collection = ["A","B","C"];
collection.push("D");



function printValues(values:number[]|string[]){
    let sum:any="";
    let numSum = 0;
   
    for(let i=0; i<values.length;i++){
        if(typeof(values[i])==='number'){
            console.log('dd');
            sum +=  parseInt(values[i].toString());
        }else{
            sum+= values[i].toString();
        }
    }
 // console.log(numSum);

  console.log(sum);
}

printValues([10,20,30,40]);
printValues(["A","B","C","D"]);










 
