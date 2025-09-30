import './App.css';
import StudentItem from "./component/StudentItem";
import {StrictMode} from "react";

function App() {
    const students = [
        { studentId: "DE180352", lastName: "Vu", firstName: "Binh Minh" },
        { studentId: "DE180999", lastName: "Phan", firstName: "Trung Hieu" },
        { studentId: "DE180335", lastName: "Nguyen", firstName: "Van B" },
        { studentId: "DE180333", lastName: "Nguyen", firstName: "Van A" },
    ];

    //Thay doi phan tu trong mang tai vi tri cu the (vi tri 0)
    students[0] = { studentId: "DE180000", lastName: "Tran", firstName: "Thi D" };

    //Them phan tu vao cuoi mang
    students.push({ studentId: "DE190000", lastName: "Tran", firstName: "Thi E" })

    //Them phan tu vao dau mang
    students.unshift({ studentId: "DE170000", lastName: "Le", firstName: "Van C" })

    //Xoa phan tu o cuoi mang
    students.pop();

    //Xoa phan tu o dau mang
    students.shift();
  return (
    <div className="container mt-4">
      <div className="card">
          <div className="card-header">
              <h1>Bang sinh vien</h1>
          </div>
          <div className="card-body">
        <table className="table table-success table-striped-columns">
            <thead>
                <tr>
                    <th scope="col">Ma sinh vien</th>
                    <th scope="col">Ho dem</th>
                    <th scope="col">Ten</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>DE180352</td>
                    <td>Vu</td>
                    <td>Binh Minh</td>
                </tr>
                <tr>
                    <td>DE180999</td>
                    <td>Phan</td>
                    <td>Trung Hieu</td>
                </tr>

                <StudentItem
                studentId="DE180335"
                lastName="Nguyen"
                firstName="Van B"
                />

                <StudentItem
                    studentId="DE180333"
                    lastName="Nguyen"
                    firstName="Van A"
                />

                <StudentItem
                    studentId = {students[0].studentId}
                    lastName = {students[0].lastName}
                    firstName = {students[0].firstName}
                />

                {students.map((student) => (
                    <StudentItem
                        studentId={student.studentId}
                        lastName={student.lastName}
                        firstName={student.firstName}
                    />
                ))}

            </tbody>
        </table>
          </div>
      </div>
    </div>
  );
}

export default App;
