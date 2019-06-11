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
var MyClass = /** @class */ (function () {
    function MyClass() {
    }
    MyClass.prototype.m1 = function () {
        console.log('Abstract m1');
    };
    return MyClass;
}());
var MyDerive = /** @class */ (function (_super) {
    __extends(MyDerive, _super);
    function MyDerive() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // overriding
    MyDerive.prototype.m2 = function () {
        this.m1();
        console.log('Abstract m2 in Derive');
    };
    return MyDerive;
}(MyClass));
var bObj = new MyDerive();
bObj.m1();
bObj.m2();
