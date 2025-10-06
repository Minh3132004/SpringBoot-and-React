import './App.css';
import StudentTable from "./component/StudentTable";
import {useState} from "react";

function App() {

    const [students, setStudents] = useState([
        { studentId: "DE180352", lastName: "Vu", firstName: "Binh Minh" },
        { studentId: "DE180999", lastName: "Phan", firstName: "Trung Hieu" },
        { studentId: "DE180335", lastName: "Nguyen", firstName: "Van B" },
        { studentId: "DE180333", lastName: "Nguyen", firstName: "Van A" },
    ])



    const themSinhVien = () => {
        const newStudent = { studentId: "DE111111", lastName: "Nguyen", firstName: "Van L" }
        setStudents([...students, newStudent])
        console.log("Da them sinh vien")
    }

  return (
    <div className="container mt-4">
      <div className="card">
          <div className="card-header">
              <h1>Bang sinh vien</h1>
          </div>
          <div className="card-body">
                <StudentTable
                    students={students}
                />
              <button className='btn btn-primary' onClick={themSinhVien}>Them sinh vien</button>
          </div>
      </div>
    </div>
  );
}

export default App;

