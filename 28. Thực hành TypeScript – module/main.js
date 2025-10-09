"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var School_1 = require("./School");
var Student_1 = require("./Student");
var mySchool = new School_1.default("FPT");
var student1 = new Student_1.default(1, "Vu", "Binh Minh", 10, true);
var student2 = new Student_1.default(2, "Vu", "Phuong Mai", 12, false);
//Them sinh viên
mySchool.addStudent(student1);
mySchool.addStudent(student2);
//Lấy ra tất cả các sinh viên
mySchool.getAllStudents();
//Tìm kiếm sinh viên theo id
console.log(mySchool.searchStudents(2).getInfoStudent());
if (mySchool.searchStudents(3) === undefined) {
    console.log("undefined");
}
