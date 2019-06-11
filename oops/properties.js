var Demo = /** @class */ (function () {
    function Demo() {
    }
    Object.defineProperty(Demo.prototype, "X", {
        set: function (v) {
            this.x = v;
        },
        enumerable: true,
        configurable: true
    });
    return Demo;
}());
var d = new Demo();
d.X = 100;
console.log(d.X);
