import React from 'react';

//Cach 1 truyen props
function StudentItem(props){

    const studentId = props.student.studentId;

    const deleteStudent = () => {
        props.xoaSinhVien(studentId);
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

//Cach 2 truyen tung thuoc tinh
// function StudentItem({studentId, lastName, firstName}){
//     return(
//     <tr>
//         <td>{studentId}</td>
//         <td>{lastName}</td>
//         <td>{firstName}</td>
//     </tr>
// )
// }


export default StudentItem;