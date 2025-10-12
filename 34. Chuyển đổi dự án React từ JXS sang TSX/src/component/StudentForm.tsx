import React, {useState} from 'react';
import student from "../model/Student";
import Student from "../model/Student";

interface StudentFormProps {
    themSinhVien : (student : Student) => void;
}

const NewStudentForm : React.FC<StudentFormProps>  = (props : StudentFormProps) => {
    const [firstName, setFirstName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const [studentId, setStudentId] = useState<string>('');

    const saveStudent = () => {
        if (lastName && firstName && studentId) {
            const newStudent = new Student(firstName, lastName, studentId);
            props.themSinhVien(newStudent);
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