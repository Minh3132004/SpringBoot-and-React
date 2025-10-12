import './App.css';
import {useState} from "react";
import StudentForm  from "./component/StudentForm";
import StudentTable from "./component/StudentTable";
import Student from "./model/Student";

function App() {

    const [students, setStudents] = useState<Student[]>([]);

    const themSinhVien = (student : Student) => {
        setStudents([...students, student])
        console.log("Da them sinh vien")
    }

    const deleteStudent = (id : string) => {
        const updatedStudents = students.filter(student => student.studentId !== id);
        setStudents(updatedStudents);
        console.log("Da xoa sinh vien");
    }

    const [isFormVisible, setIsFormVisible] = useState(false);

    const showForm = () => {
        setIsFormVisible(!isFormVisible);
    }

  return (
    <div className="container mt-4">
      <div className="card">
          <div className="card-body">
              <StudentTable
                  students={students}
                  xoaSinhVien={deleteStudent}>
              </StudentTable>

              <button className="btn btn-primary mt-3" onClick={showForm}>
                  {isFormVisible ? "Hide Form" : "Show Form"}
              </button>

              {isFormVisible && (
                  <StudentForm themSinhVien={themSinhVien} />
              )}
          </div>
      </div>
    </div>
  );
}

export default App;

