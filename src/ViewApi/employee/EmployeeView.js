import React, { useEffect, useState } from 'react'
import EmployeeApi from '../../api/EmployeeApi'
import FormEmployee from './FormEmployee'
import FormEditEmployee from './FormEditEmployee'

export default function EmployeeView() {
    const [employee, setEmployee] = useState([])
    const [refresh, setRefresh] = useState(false)
    const [display, setDisplay] = useState(false)
    const [displayEdit, setDisplayEdit] = useState(false)
    const [id, setId] = useState()

    useEffect(()=>{
        EmployeeApi.list().then(data => {
            setEmployee(data)
        })
    }, [refresh])

    const onDelete = async (id) => {
        EmployeeApi.Delete(id).then(() => {
          setRefresh(true)
          window.alert('Data Successfully Delete')
        })
    }
    const onClick = (id) => {
        setDisplayEdit(true)
        setId(id)
    }

    return (
        <div>
          {
            displayEdit ?
              <FormEditEmployee
                id={id}
                setRefresh={setRefresh}
                setDisplay={setDisplay}
              />
            :
            display ? 
              <FormEmployee
                setRefresh={setRefresh}
                setDisplay={setDisplay}
              />
            : 
            <>
              <h2>List Employee</h2>
              <button onClick={() => setDisplay(true)}>Add Employee</button>
              <table>
                <thead>
                  <tr>
                    <th>Employee ID</th>
                    <th>Employee Name</th>
                    <th>Email</th>
                    <th>Phone Number</th>
                    <th>Hire Date</th>
                    <th>Salary</th>
                    <th>Commision Pct</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    employee && employee.map(dt => (
                      <tr key={dt.employeeId}>
                        <td>{dt.employeeId}</td>
                        <td>{dt.firstName} {dt.lastName}</td>
                        <td>{dt.email}</td>
                        <td>{dt.phoneNumber}</td>
                        <td>{dt.hireDate}</td>
                        <td>{dt.salary}</td>
                        <td>{dt.commissionPct}</td>
                        <td>
                          <button onClick={() => onDelete(dt.employeeId)}>Delete</button>
                          <button onClick={() => onClick(dt.employeeId)}>Edit</button>
                        </td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>
            </>
          }
        </div>
    )
}
