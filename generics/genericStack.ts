class GenericStack<T> {
    // member
    private arr:Array<T>;
    constructor(){
        this.arr = new Array<T>();
    }
    // generic method
    push(item:T): void{
        this.arr.push(item);
    }
    // generic method
    pop(): T {
        return this.arr.pop();
    }
    // generic method
    display(): T[] {
        return this.arr;
    }
}

let stkNumber = new GenericStack<number>();
stkNumber.push(10);
stkNumber.push(20);
stkNumber.push(30);
stkNumber.push(40);
stkNumber.push(50);

console.log(`poped value ${stkNumber.pop()}`);
console.log();
stkNumber.display().forEach((v,i)=>{
    console.log(`Value at index ${i} is = ${v}`);
});