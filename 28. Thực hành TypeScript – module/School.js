"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var School = /** @class */ (function () {
    function School(name) {
        this.name = name;
        this.students = [];
    }
    School.prototype.addStudent = function (student) {
        this.students.push(student);
    };
    School.prototype.searchStudents = function (id) {
        for (var _i = 0, _a = this.students; _i < _a.length; _i++) {
            var student = _a[_i];
            if (student.studentID === id) {
                return student;
            }
        }
        return undefined;
    };
    School.prototype.getAllStudents = function () {
        for (var _i = 0, _a = this.students; _i < _a.length; _i++) {
            var student = _a[_i];
            console.log(student.getInfoStudent());
        }
    };
    return School;
}());
exports.default = School;
