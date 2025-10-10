"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Shape = /** @class */ (function () {
    function Shape(x, y) {
        this.x = x;
        this.y = y;
    }
    Shape.prototype.calculateArea = function () {
        return 0;
    };
    Shape.prototype.getInfo = function () {
        return "\"T\u1ECDa \u0111\u1ED9 : \" ".concat(this.x, " - ").concat(this.y);
    };
    return Shape;
}());
exports.default = Shape;
