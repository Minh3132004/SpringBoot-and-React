var Student = /** @class */ (function () {
    //constructor
    function Student(studentId, studentName, studentAge, studentGrade, isEnrolled) {
        this.studentId = studentId;
        this.studentName = studentName;
        this.studentAge = studentAge;
        this.studentGrade = studentGrade;
        this.isEnrolled = isEnrolled;
    }
    //methods
    Student.prototype.displayStudentInfo = function () {
        return "Student ID: ".concat(this.studentId, ", Name: ").concat(this.studentName, ", Age: ").concat(this.studentAge, ", Grade: ").concat(this.studentGrade, ", Enrolled: ").concat(this.isEnrolled ? "Yes" : "No");
    };
    return Student;
}());
var student1 = new Student(1, "Alice", 20, 3.5, true);
console.log(student1.displayStudentInfo());
