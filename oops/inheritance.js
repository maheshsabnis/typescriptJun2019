var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var BaseMath = /** @class */ (function () {
    function BaseMath(x, y) {
        this.x = x;
        this.y = y;
    }
    BaseMath.prototype.add = function () {
        return this.x + this.y;
    };
    BaseMath.prototype.sub = function () {
        return this.x - this.y;
    };
    BaseMath.display = function () {
    };
    return BaseMath;
}());
var DeriveMath = /** @class */ (function (_super) {
    __extends(DeriveMath, _super);
    function DeriveMath(a, b) {
        var _this = _super.call(this, a, b) || this;
        _this.a = a;
        _this.b = b;
        return _this;
    }
    DeriveMath.prototype.mult = function () {
        return this.a * this.b;
    };
    return DeriveMath;
}(BaseMath));
var objM = new DeriveMath(100, 200);
console.log("Add = " + objM.add());
console.log("Sub = " + objM.sub());
console.log("Mult = " + objM.mult());
