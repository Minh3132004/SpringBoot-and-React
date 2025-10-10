import Shape from "./Shape";
import Circle from "./Circle";
import Retangle from "./Retangle";


const c1 = new Circle(2, 2 , 4)
console.log(c1.calculateArea());
console.log(c1.getInfo())
console.log(c1.printZero());

const r1 = new Retangle(2, 2 , 4 , 3)
console.log(r1.calculateArea());
console.log(r1.getInfo())
console.log(r1.printZero());


