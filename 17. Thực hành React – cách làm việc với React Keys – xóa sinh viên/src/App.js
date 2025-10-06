import './App.css';
import {useState} from "react";
import StudentForm  from "./component/StudentForm";
import StudentTable from "./component/StudentTable";

function App() {

    const [students, setStudents] = useState([
        { studentId: "DE180352", lastName: "Vu", firstName: "Binh Minh" },
        { studentId: "DE180999", lastName: "Phan", firstName: "Trung Hieu" },
        { studentId: "DE180335", lastName: "Nguyen", firstName: "Van B" },
        { studentId: "DE180333", lastName: "Nguyen", firstName: "Van A" },
    ])

    const themSinhVien = (studentId , lastName , firstName) => {
        const newStudent = { studentId : studentId, lastName : lastName, firstName : firstName }
        setStudents([...students, newStudent])
        console.log("Da them sinh vien")
    }

    const deleteStudent = (id) => {
        const updatedStudents = students.filter(student => student.studentId !== id);
        setStudents(updatedStudents);
        console.log("Da xoa sinh vien");
    }

  return (
    <div className="container mt-4">
      <div className="card">
          <div className="card-body">
              <StudentTable
                  students={students}
                  xoaSinhVien={deleteStudent}>
              </StudentTable>
              <StudentForm
                  themSinhVien={themSinhVien}>
              </StudentForm>
          </div>
      </div>
    </div>
  );
}

export default App;

