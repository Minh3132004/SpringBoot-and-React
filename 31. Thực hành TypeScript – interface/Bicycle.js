"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Bicycle = /** @class */ (function () {
    function Bicycle(brand, speed, blue, colorName, green, red) {
        this.brand = brand;
        this.speed = speed;
        this.blue = blue;
        this.colorName = colorName;
        this.green = green;
        this.red = red;
    }
    Bicycle.prototype.start = function () {
        console.log(this.brand + "Starting Car...");
    };
    Bicycle.prototype.stop = function () {
        console.log(this.brand + "Stopping Car...");
    };
    Bicycle.prototype.printSpeed = function () {
        console.log(this.speed);
    };
    Bicycle.prototype.getColor = function () {
        console.log(this.colorName);
    };
    return Bicycle;
}());
exports.default = Bicycle;
