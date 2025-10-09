class Student {

    //Paremeter properties : không cần khai báo thuộc tính bên ngoài

    constructor(private _studentID: number, private _lastName: string , private _firstName: string , private _grade : number , private _isEnrolled : boolean) {
        //không cần gán dữ liệu
    }

    get studentID(): number {
        return this._studentID;
    }

    set studentID(value: number) {
        this._studentID = value;
    }

    get lastName(): string {
        return this._lastName;
    }

    set lastName(value: string) {
        this._lastName = value;
    }

    get firstName(): string {
        return this._firstName;
    }

    set firstName(value: string) {
        this._firstName = value;
    }

    get grade(): number {
        return this._grade;
    }

    set grade(value: number) {
        this._grade = value;
    }

    get isEnrolled(): boolean {
        return this._isEnrolled;
    }

    set isEnrolled(value: boolean) {
        this._isEnrolled = value;
    }

    getInfoStudent() : string {
        return `${this._studentID} + ${this._firstName}  +  ${this._lastName} + ${this._grade} +  ${this._isEnrolled}`;
    }
}

export default Student;