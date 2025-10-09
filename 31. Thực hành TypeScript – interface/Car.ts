import IVehicle from "./IVehicle";

class Car implements IVehicle {
    brand: string;
    speed: number;

    constructor(brand: string , speed: number) {
        this.brand = brand;
        this.speed = speed;
    }

    start() {
        console.log(this.brand + "Starting Car...");
    }

    stop() {
        console.log(this.brand +"Stopping Car...");
    }

}

export default Car;