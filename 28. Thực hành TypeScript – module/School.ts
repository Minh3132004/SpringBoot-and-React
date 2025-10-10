import Student from "./Student";

class School {
    private students : Student[] = [];

    constructor(private name: string) {
    }

    public addStudent(student : Student) {
        this.students.push(student);
    }

    public searchStudents(id : number): Student | undefined {
        for (let student of this.students) {
            if (student.studentID === id) {
                return student;
            }
        }
        return undefined;
    }

    public getAllStudents() {
        for (let student of this.students) {
            console.log(student.getInfoStudent());
        }
    }
}

export default School;