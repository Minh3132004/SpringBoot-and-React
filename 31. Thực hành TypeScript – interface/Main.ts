import IVehicle from "./IVehicle";
import Car from "./Car";
import Bicycle from "./Bicycle";
import IColor from "./IColor";

const myCar : IVehicle = new Car("Toyota" , 120);
const myColor : IColor = new Bicycle("Vin" , 12 , 1, "Redfull" , 1 , 1);
const general = new Bicycle("ADV" , 12 , 1, "Blue" , 1 , 1);

console.log(myCar.start());
console.log(myColor.getColor());
console.log(general.getColor());
console.log(general.start());
console.log(general.stop());
