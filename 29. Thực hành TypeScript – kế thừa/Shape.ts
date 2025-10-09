class Shape{
    constructor(private x: number, private y: number) {
    }

    public calculateArea() : number{
        return 0 ;
    }

    public getInfo() : string {
        return `"Tọa độ : " ${this.x} - ${this.y}`;
    }
}

export default Shape;