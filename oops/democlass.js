var SampleClass = /** @class */ (function () {
    // private str: string;
    // constructor(s:string) {
    //     this.str = s;
    // }
    function SampleClass(str) {
        this.str = str;
    }
    SampleClass.prototype.changeCase = function (choice) {
        if (choice === "U") {
            return this.str.toUpperCase();
        }
        if (choice === "L") {
            return this.str.toLowerCase();
        }
        return this.str;
    };
    return SampleClass;
}());
var objStr = new SampleClass('TypeScript Training');
console.log("Upper Case " + objStr.changeCase('U'));
console.log("Lower Case " + objStr.changeCase('L'));
