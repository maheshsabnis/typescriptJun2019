class BaseMath {
    constructor(private x, private y){
    }

    add(): number {
        return this.x + this.y;
    }

    sub(): number {
        return this.x - this.y;
    }

    static display(): void {
    }
}

class DeriveMath extends BaseMath {
    constructor(private a: number, private b: number){
        super(a,b);
    }
    mult(): number {
        return this.a * this.b;
    }
}

let objM = new DeriveMath(100,200);

console.log(`Add = ${objM.add()}`);
console.log(`Sub = ${objM.sub()}`);
console.log(`Mult = ${objM.mult()}`);