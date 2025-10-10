"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Student = /** @class */ (function () {
    //Paremeter properties : không cần khai báo thuộc tính bên ngoài
    function Student(_studentID, _lastName, _firstName, _grade, _isEnrolled) {
        this._studentID = _studentID;
        this._lastName = _lastName;
        this._firstName = _firstName;
        this._grade = _grade;
        this._isEnrolled = _isEnrolled;
        //không cần gán dữ liệu
    }
    Object.defineProperty(Student.prototype, "studentID", {
        get: function () {
            return this._studentID;
        },
        set: function (value) {
            this._studentID = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (value) {
            this._lastName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            this._firstName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "grade", {
        get: function () {
            return this._grade;
        },
        set: function (value) {
            this._grade = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "isEnrolled", {
        get: function () {
            return this._isEnrolled;
        },
        set: function (value) {
            this._isEnrolled = value;
        },
        enumerable: false,
        configurable: true
    });
    Student.prototype.getInfoStudent = function () {
        return "".concat(this._studentID, " + ").concat(this._firstName, "  +  ").concat(this._lastName, " + ").concat(this._grade, " +  ").concat(this._isEnrolled);
    };
    return Student;
}());
exports.default = Student;
