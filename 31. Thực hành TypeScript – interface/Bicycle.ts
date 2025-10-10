import IVehicle from "./IVehicle";
import IColor from "./IColor";

class Bicycle implements IVehicle , IColor {
    brand: string;
    speed: number;
    blue: number;
    colorName: string;
    green: number;
    red: number;

    constructor(brand: string , speed: number , blue: number , colorName: string , green: number , red: number) {
        this.brand = brand;
        this.speed = speed;
        this.blue = blue;
        this.colorName = colorName;
        this.green = green;
        this.red = red;
    }

    start() {
        console.log(this.brand + "Starting Car...");
    }

    stop() {
        console.log(this.brand +"Stopping Car...");
    }

    printSpeed(){
        console.log(this.speed);
    }

    getColor() {
        console.log(this.colorName);
    }
}

export default Bicycle;