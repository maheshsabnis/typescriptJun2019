abstract class MyClass {
    m1(): void {
        console.log('Abstract m1');
    }
    abstract m2(): void;
}

class MyDerive extends MyClass {
    // overriding
    m2(): void {
        this.m1();
        console.log('Abstract m2 in Derive');
    }
    // hiding matching m1() method from base class
    // m1(): void {
    //     console.log('My Derive m1');
    // }
}

let bObj = new MyDerive();
bObj.m1();
bObj.m2();
 