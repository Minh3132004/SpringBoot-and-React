abstract class Shape{
    constructor(private x: number, private y: number) {
    }

    abstract calculateArea() : number;

    public getInfo() : string {
        return `Tọa độ: X(${this.x}, ${this.y})`;
    }

    public printZero() {
        console.log("Zero");
    }
}

export default Shape;