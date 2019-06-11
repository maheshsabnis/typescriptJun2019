interface IOperations {
    getLength(str: string): number;
}

class Operations implements IOperations {
    getLength(str: string): number {
        return str.length;
    }
   
    convert(str: string): string {
        return str.toUpperCase();
    }
}
let op = new Operations();



