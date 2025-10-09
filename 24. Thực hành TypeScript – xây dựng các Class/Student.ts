class Student{
    //properties

    studentId: number;
    studentName: string;
    studentAge: number;
    studentGrade: number;
    isEnrolled: boolean;


    //constructor

    constructor(studentId: number, studentName: string, studentAge: number, studentGrade: number, isEnrolled: boolean){
        this.studentId = studentId;
        this.studentName = studentName;
        this.studentAge = studentAge;
        this.studentGrade = studentGrade;
        this.isEnrolled = isEnrolled;
    }

    //methods

    public displayStudentInfo(): string {
        return `Student ID: ${this.studentId}, Name: ${this.studentName}, Age: ${this.studentAge}, Grade: ${this.studentGrade}, Enrolled: ${this.isEnrolled?"Yes":"No"}`;
    }

}


const student1 = new Student(1, "Alice", 20, 3.5, true);
console.log(student1.displayStudentInfo());