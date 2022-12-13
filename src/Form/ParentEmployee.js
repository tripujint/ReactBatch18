import React, { useEffect, useState } from 'react'
import FormInput from './FormInput'

export default function ParentEmployee() {
    const listEmployee = [
        {empId: 1, fullname: 'Tri', salary: 4500},
        {empId: 2, fullname: 'Puji', salary: 3500},
        {empId: 3, fullname: 'Tyas', salary: 5500}
    ]

    const [employee, setEmployee] = useState(listEmployee)
    const [total, setTotal] =  useState(0)
    const [values, setValues] = useState({
        fullName: undefined,
        salary: 0
    })
    const [display, setDisplay] = useState(false)

    useEffect(()=>{
        const TotalSalary = employee.reduce((sum,el) => sum + parseInt(el.salary),0)
        setTotal(TotalSalary)
    }, [employee])

    const handleChange = name => event => {
        setValues({...values,[name]:event.target.value})
    }
    const onSubmit = (event) => {
        event.preventDefault()
        setEmployee([...employee,{
            empId: (Math.round(Math.random()*10)),
            fullname: values.fullname,
            salary: values.salary
        }])
        setDisplay()
    }

    const PenambahanGaji = (id) => {
        setEmployee(
            [...employee.map(emp => {
                if (id === emp.empId) {
                    emp.salary = parseInt(emp.salary) + 500
                    return emp
                } else {
                    return emp
                }
            })]
        )
    }

    const PenguranganGaji = (id) => {
        setEmployee(
            [...employee.map(emp => {
                if (id === emp.empId) {
                    emp.salary = parseInt(emp.salary) - 500
                    return emp
                } else {
                    return emp
                }
            })]
        )
    }

    return(
        <div>
            <h2>List Employee</h2>
            { 
                display ? 
                    <FormInput 
                        onSubmitForm = {onSubmit}
                        handleChange = {handleChange}
                        setDisplay = {setDisplay}
                    />
                 : <>
                <button onClick={()=>setDisplay(true)}>Add Employee</button>                
                <table>
                    <tr>
                        <th>Emp Id</th>
                        <th>Full Name</th>
                        <th>Salary</th>
                        <th>Action</th>
                    </tr>
                    {
                        (employee || []).map(emp => (
                            <tr key={emp.empId}>
                                <td>{emp.empId}</td>
                                <td>{emp.fullname}</td>
                                <td>{emp.salary}</td>
                                <td>
                                    <button onClick={()=>PenambahanGaji(emp.empId)}>Tambah Gaji</button>
                                    <button onClick={()=>PenguranganGaji(emp.empId)}>Kurangi Gaji</button>
                                </td>
                            </tr>
                        ))
                    }                
                </table>
                <h3>Total Salary : {total}</h3></>
            }
        </div>
    )
}
