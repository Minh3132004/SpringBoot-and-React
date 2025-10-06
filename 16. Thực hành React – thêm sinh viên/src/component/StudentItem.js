import React from 'react';

//Cach 1 truyen props
function addStudent(props){
    return(
    <tr>
        <td>{props.student.studentId}</td>
        <td>{props.student.lastName}</td>
        <td>{props.student.firstName}</td>
    </tr>
)
}

//Cach 2 truyen tung thuoc tinh
// function addStudent({studentId, lastName, firstName}){
//     return(
//     <tr>
//         <td>{studentId}</td>
//         <td>{lastName}</td>
//         <td>{firstName}</td>
//     </tr>
// )
// }


export default addStudent;