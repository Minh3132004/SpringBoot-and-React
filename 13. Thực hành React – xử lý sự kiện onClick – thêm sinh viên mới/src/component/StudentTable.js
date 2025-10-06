import React from "react";
import StudentItem from "./StudentItem";

function StudentTable(props) {
    return (
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
            <tr>
                <td>{props.students[0].studentId}</td>
                <td>{props.students[0].lastName}</td>
                <td>{props.students[0].firstName}</td>
            </tr>

            {props.students.map((student) => (
                <StudentItem
                    student = {student}
                />
            ))}
            </tbody>
        </table>
    )
}

export default StudentTable