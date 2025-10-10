"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Car = /** @class */ (function () {
    function Car(brand, speed) {
        this.brand = brand;
        this.speed = speed;
    }
    Car.prototype.start = function () {
        console.log(this.brand + "Starting Car...");
    };
    Car.prototype.stop = function () {
        console.log(this.brand + "Stopping Car...");
    };
    return Car;
}());
exports.default = Car;
