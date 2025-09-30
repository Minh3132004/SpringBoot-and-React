import React from 'react';


function addStudent(){
    const studentId = "DE180333";
    const lastName = "Nguyen";
    const firstName = "Van A";

    return(
    <tr>
        <td>{studentId}</td>
        <td>{lastName}</td>
        <td>{firstName}</td>
    </tr>
)
}

export default addStudent;