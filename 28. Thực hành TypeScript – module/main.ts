import student from "./Student";
import School from "./School";
import Student from "./Student";

const mySchool = new School("FPT");
const student1 = new Student(1 , "Vu" , "Binh Minh" , 10 , true);
const student2 = new Student(2 , "Vu" , "Phuong Mai" , 12 , false);

//Them sinh viên
mySchool.addStudent(student1);
mySchool.addStudent(student2);

//Lấy ra tất cả các sinh viên
mySchool.getAllStudents();

//Tìm kiếm sinh viên theo id
console.log(mySchool.searchStudents(2).getInfoStudent());


if(mySchool.searchStudents(3) === undefined) {
    console.log("undefined");
}
