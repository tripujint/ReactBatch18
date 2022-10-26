import { useState } from "react"

export default function EmployeeList() {
    const listEmployee = [
        {empId: 1, fullname: 'Tri', salary: 4500},
        {empId: 2, fullname: 'Puji', salary: 3500},
        {empId: 3, fullname: 'Tyas', salary: 5500}
    ]

    const [employee, setEmployee] = useState(listEmployee)

    const PenambahanGaji = (id) => {
        setEmployee(
            [...employee.map(emp => {
                if (id === emp.empId) {
                    emp.salary = emp.salary + 500
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
                    emp.salary = emp.salary - 500
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
            <table>
                <tr>
                    <th>Emp Id</th>
                    <th>Full Name</th>
                    <th>Salary</th>
                    <th>Action</th>
                </tr>
                {
                    (employee || []).map(emp => (
                        <tr>
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
        </div>
    )
}