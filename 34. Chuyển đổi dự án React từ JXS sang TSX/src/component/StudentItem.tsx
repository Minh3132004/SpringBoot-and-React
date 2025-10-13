import React from 'react';
import Student from "../model/Student";

interface StudentItemProps {
    student : Student;
    xoaSinhVien : (studentId: string) => void;
}

//Cach 1 truyen props
const StudentItem : React.FC<StudentItemProps> = (props: StudentItemProps) => {

    const deleteStudent = () => {
        props.xoaSinhVien(props.student.studentId);
    }

    return(
    <tr>
        <td>{props.student.studentId}</td>
        <td>{props.student.lastName}</td>
        <td>{props.student.firstName}</td>
        <td>
            <button className='btn btn-danger' onClick={deleteStudent}>Xoa</button>
        </td>
    </tr>
)
}

export default StudentItem;