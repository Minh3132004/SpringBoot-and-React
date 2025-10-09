import Shape from "./Shape";

class Circle extends Shape{

    constructor(x: number, y: number ,private r : number) {
        super(x,y);
    }

    calculateArea(): number {
        return Math.PI*this.r*this.r;
    }

    getInfo(): string {
        return `Hình tròn : ${super.getInfo()} + ${this.r}`;
    }
}

export default Circle;