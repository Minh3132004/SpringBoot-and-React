class Student {
    private _studentId: string;
    private _firstName: string;
    private _lastName: string;

    constructor(studentId: string, firstName: string, lastName: string) {
        this._studentId = studentId;
        this._firstName = firstName;
        this._lastName = lastName;
    }


    get studentId(): string {
        return this._studentId;
    }

    set studentId(value: string) {
        this._studentId = value;
    }

    get firstName(): string {
        return this._firstName;
    }

    set firstName(value: string) {
        this._firstName = value;
    }

    get lastName(): string {
        return this._lastName;
    }

    set lastName(value: string) {
        this._lastName = value;
    }
}

export default Student;