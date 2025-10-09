"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Shape = /** @class */ (function () {
    function Shape(x, y) {
        this.x = x;
        this.y = y;
    }
    Shape.prototype.getInfo = function () {
        return "T\u1ECDa \u0111\u1ED9: X(".concat(this.x, ", ").concat(this.y, ")");
    };
    Shape.prototype.printZero = function () {
        console.log("Zero");
    };
    return Shape;
}());
exports.default = Shape;
