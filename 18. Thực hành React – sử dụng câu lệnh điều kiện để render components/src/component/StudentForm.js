import React from 'react';


function NewStudentForm(props){
    const [firstName, setFirstName] = React.useState("");
    const [lastName, setLastName] = React.useState("");
    const [studentId, setStudentId] = React.useState("");

    const saveStudent = () => {
        if (lastName && firstName && studentId) {
            props.themSinhVien(studentId, lastName, firstName);
            setFirstName("");
            setLastName("");
            setStudentId("");
        }
    }

    return(
        <div>
        <h2>Them Sinh Vien</h2>
        <div className='form-group'>
            <label>Student Id : </label>
            <input type="text"
                   className='form-control'
                   value={studentId}
                   onChange={event => setStudentId(event.target.value)}
            />
            <label>Last Name : </label>
            <input type="text"
                   className='form-control'
                   value={lastName}
                   onChange={event => setLastName(event.target.value)}
            />
            <label>First Name : </label>
            <input type="text"
                   className='form-control'
                   value={firstName}
                   onChange={event => setFirstName(event.target.value)}
            />
            <button className='btn btn-success' onClick={saveStudent}>Luu sinh vien</button>
        </div>
        </div>
    )
}

export default NewStudentForm;