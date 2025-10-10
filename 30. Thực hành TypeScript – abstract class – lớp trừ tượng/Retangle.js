"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Shape_1 = require("./Shape");
var Retangle = /** @class */ (function (_super) {
    __extends(Retangle, _super);
    function Retangle(x, y, width, height) {
        var _this = _super.call(this, x, y) || this;
        _this.width = width;
        _this.height = height;
        return _this;
    }
    Retangle.prototype.calculateArea = function () {
        return this.width * this.height;
    };
    Retangle.prototype.getInfo = function () {
        return "H\u00ECnh ch\u1EEF nh\u1EADt : ".concat(_super.prototype.getInfo.call(this), " + ").concat(this.height, " + ").concat(this.width);
    };
    Retangle.prototype.printZero = function () {
        console.log("None Zero");
    };
    return Retangle;
}(Shape_1.default));
exports.default = Retangle;
