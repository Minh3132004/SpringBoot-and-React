class Student{
    //properties

    private studentId: number;
    private studentName: string;
    private studentAge: number;
    private studentGrade: number;
    private isEnrolled: boolean;


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

    public getStudentId (): number {
        return this.studentId;
    }

    public setStudentId (studentId: number){
        if(studentId <= 0){
            throw new Error("Student ID must be a positive number.");
        }
        else{
            this.studentId = studentId;
        }
    }

    public getStudentName (): string {
        return this.studentName;
    }

    public setStudentName (studentName: string){
        this.studentName = studentName;
    }

    public getStudentAge (): number {
        return this.studentAge;
    }

    public setStudentAge (studentAge: number){
        if (studentAge < 0){
            throw new Error("Age cannot be negative.");
        }
        else{
            this.studentAge = studentAge;
        }
    }

    public getStudentGrade (): number {
        return this.studentGrade;
    }

    public setStudentGrade (studentGrade: number){
        this.studentGrade = studentGrade;
    }

    public getIsEnrolled (): boolean {
        return this.isEnrolled;
    }

    public setIsEnrolled (isEnrolled: boolean){
        this.isEnrolled = isEnrolled;
    }


    //Co the su dung accessors (getters and setters) nhu tren de truy cap va cap nhat cac thuoc tinh rieng tu.
}


const student1 = new Student(1, "Alice", 20, 3.5, true);
console.log(student1.displayStudentInfo());

console.log("ID of student1: " + student1.getStudentId());
console.log("Name of student1: " + student1.getStudentName());
console.log("Age of student1: " + student1.getStudentAge());
student1.setStudentName("Bob");
console.log("Name of student1 after change:" + student1.getStudentName());
student1.setStudentId(-1);
// console.log("ID of student1 after change:" + student1.getStudentId());