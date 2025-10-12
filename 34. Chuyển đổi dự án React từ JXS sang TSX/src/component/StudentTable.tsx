import React from "react";
import StudentItem from "./StudentItem";
import Student from "../model/Student";

interface StudentTableProps {
    students : Student[] ;
    xoaSinhVien (studentId: string) : void;
}

const StudentTable : React.FC<StudentTableProps> = (props : StudentTableProps) => {

    const deleteStudent = (id : string) => {
        props.xoaSinhVien(id);
    }

    return (
        <table className="table table-success table-striped-columns">
            <thead>
            <tr>
                <th scope="col">Ma sinh vien</th>
                <th scope="col">Ho dem</th>
                <th scope="col">Ten</th>
                <th scope="col">Thao tac</th>
            </tr>
            </thead>
            <tbody>
            {props.students.map((student) => (
                <StudentItem
                    key={student.studentId}
                    student = {student}
                    xoaSinhVien = {deleteStudent}
                />
            ))}
            </tbody>
        </table>
    )
}

export default StudentTable