class Demo {
    private x: number;
    set X(v: number) {
        this.x = v;
    }
    get X(): number {
        return this.x;
    }
}

let d = new Demo();
d.X = 100;
console.log(d.X);