var GenericStack = /** @class */ (function () {
    function GenericStack() {
        this.arr = new Array();
    }
    GenericStack.prototype.push = function (item) {
        this.arr.push(item);
    };
    GenericStack.prototype.pop = function () {
        return this.arr.pop();
    };
    GenericStack.prototype.display = function () {
        return this.arr;
    };
    return GenericStack;
}());
var stkNumber = new GenericStack();
stkNumber.push(10);
stkNumber.push(20);
stkNumber.push(30);
stkNumber.push(40);
stkNumber.push(50);
console.log("poped value " + stkNumber.pop());
console.log();
stkNumber.display().forEach(function (v, i) {
    console.log("Value at index " + i + " is = " + v);
});
