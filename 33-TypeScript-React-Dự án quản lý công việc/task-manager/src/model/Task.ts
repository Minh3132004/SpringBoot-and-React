
class Task{
    private _id: number;
    private _text: string

    constructor(id: number, text: string){
        this._id = id;
        this._text = text;
    }


    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get text(): string {
        return this._text;
    }

    set text(value: string) {
        this._text = value;
    }
}

export default Task;