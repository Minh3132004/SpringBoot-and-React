import Shape from "./Shape";

class Retangle extends Shape {
    constructor(x: number, y: number , private width : number, private height : number) {
        super(x,y);
    }

    calculateArea(): number {
        return this.width * this.height;
    }

    getInfo(): string {
        return `Hình chữ nhật : ${super.getInfo()} + ${this.height} + ${this.width}`;
    }

    printZero() {
        console.log("None Zero");
    }
}

export default Retangle;