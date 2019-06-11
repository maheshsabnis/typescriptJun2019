class SampleClass {
    // private str: string;
    // constructor(s:string) {
    //     this.str = s;
    // }
    // constructor(private str:string) {
    // }
    constructor(public str:string) {
    }
    changeCase(choice: string):string{
        if(choice === "U"){
            return this.str.toUpperCase();
        }
        if(choice === "L"){
            return this.str.toLowerCase();
        }
        return this.str;
    }
}
let objStr:SampleClass = new SampleClass('TypeScript Training');
console.log(`Upper Case ${objStr.changeCase('U')}`); 
console.log(`Lower Case ${objStr.changeCase('L')}`); 
