import React, { useEffect, useState } from 'react'
import EmployeeApi from '../../api/EmployeeApi'

export default function FormEditEmployee(props) {
    const [employee, setEmployee] = useState([])
    const [values, setValues] = useState({
        employeeId: undefined,
        firstName: undefined,
        lastName: undefined,
        email: undefined,
        phoneNumber: undefined,
        hireDate: undefined,
        salary: undefined,
        commissionPct: undefined
    })

    useEffect(() => {
        EmployeeApi.FindOne(props.id).then(data => {
            setEmployee(data)
        })
    }, [])

    const HandleChange = name => event => {
        setValues({...values, [name]: event.target.value})
    }

    const onEdit = async () => {
        const payload = {
            employeeId: (props.id),
            firstName: (values.firstName),
            lastName: (values.lastName),
            email: (values.email),
            phoneNumber: (values.phoneNumber),
            hireDate: (values.hireDate),
            salary: (values.salary),
            commissionPct: (values.commissionPct)
        }
        await EmployeeApi.Update(payload)
            .then(() => {
                props.setRefresh(true)
                window.alert('Data Successfully Updated')
            })
    }

    return (
        <div>
            <h2>Edit Employee</h2>
            <form onSubmit={onEdit}>
                <div>
                    <label>Employee ID : </label>
                    <input type="text" defaultValue={employee.employeeId} disabled></input>
                </div>
                <div>
                    <label>First Name : </label>
                    <input type="text" defaultValue={employee.firstName} onChange={HandleChange('firstName')}></input>
                </div>
                <div>
                    <label>Last Name : </label>
                    <input type="text" defaultValue={employee.lastName} onChange={HandleChange('lastName')}></input>
                </div>
                <div>
                    <label>Email : </label>
                    <input type="text" defaultValue={employee.email} onChange={HandleChange('email')}></input>
                </div>
                <div>
                    <label>Phone Number : </label>
                    <input type="text" defaultValue={employee.phoneNumber} onChange={HandleChange('phoneNumber')}></input>
                </div>
                <div>
                    <label>Hire Date : </label>
                    <input type="date" defaultValue={employee.hireDate} onChange={HandleChange('hireDate')}></input>
                </div>
                <div>
                    <label>Salary : </label>
                    <input type="number" defaultValue={employee.salary} onChange={HandleChange('salary')}></input>
                </div>
                <div>
                    <label>Commission Pct : </label>
                    <input type="text" defaultValue={employee.commissionPct} onChange={HandleChange('commissionPct')}></input>
                </div>
                <div>
                    <button type='submit'>Simpan</button>
                    <button onClick={() => props.setDisplay(false)}>Cancel</button>
                </div>
            </form>        
        </div>
    )
}
