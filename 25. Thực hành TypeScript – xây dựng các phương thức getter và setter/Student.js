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
    Student.prototype.getStudentId = function () {
        return this.studentId;
    };
    Student.prototype.setStudentId = function (studentId) {
        if (studentId <= 0) {
            throw new Error("Student ID must be a positive number.");
        }
        else {
            this.studentId = studentId;
        }
    };
    Student.prototype.getStudentName = function () {
        return this.studentName;
    };
    Student.prototype.setStudentName = function (studentName) {
        this.studentName = studentName;
    };
    Student.prototype.getStudentAge = function () {
        return this.studentAge;
    };
    Student.prototype.setStudentAge = function (studentAge) {
        if (studentAge < 0) {
            throw new Error("Age cannot be negative.");
        }
        else {
            this.studentAge = studentAge;
        }
    };
    Student.prototype.getStudentGrade = function () {
        return this.studentGrade;
    };
    Student.prototype.setStudentGrade = function (studentGrade) {
        this.studentGrade = studentGrade;
    };
    Student.prototype.getIsEnrolled = function () {
        return this.isEnrolled;
    };
    Student.prototype.setIsEnrolled = function (isEnrolled) {
        this.isEnrolled = isEnrolled;
    };
    return Student;
}());
var student1 = new Student(1, "Alice", 20, 3.5, true);
console.log(student1.displayStudentInfo());
console.log("ID of student1: " + student1.getStudentId());
console.log("Name of student1: " + student1.getStudentName());
console.log("Age of student1: " + student1.getStudentAge());
student1.setStudentName("Bob");
console.log("Name of student1 after change:" + student1.getStudentName());
student1.setStudentId(-1);
console.log("ID of student1 after change:" + student1.getStudentId());
