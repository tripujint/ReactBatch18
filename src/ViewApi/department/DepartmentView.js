import React, { useEffect, useState } from 'react'
import DepartmentApi from '../../api/DepartmentApi'
import FormDepartment from './FormDepartment'
import FormEditDepartment from './FormEditDepartment'

export default function DepartmentView() {
    const [department, setDepartment] = useState([])
    const [refresh, setRefresh] = useState(false)
    const [display, setDisplay] = useState(false)
    const [displayEdit, setDisplayEdit] = useState(false)
    const [id, setId] = useState()

    useEffect(()=>{
        DepartmentApi.list().then(data => {
            setDepartment(data)
        })
    }, [refresh])

    const onDelete = async (id) => {
        DepartmentApi.Delete(id).then(() => {
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
              <FormEditDepartment
                id={id}
                setRefresh={setRefresh}
                setDisplay={setDisplay}
              />
            :
            display ? 
              <FormDepartment
                setRefresh={setRefresh}
                setDisplay={setDisplay}
              />
            : 
            <>
              <h2>List Department</h2>
              <button onClick={() => setDisplay(true)}>Add Department</button>
              <table>
                <thead>
                  <tr>
                    <th>Department ID</th>
                    <th>Department Name</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    department && department.map(dt => (
                      <tr key={dt.departmentId}>
                        <td>{dt.departmentId}</td>
                        <td>{dt.departmentName}</td>
                        <td>
                          <button onClick={() => onDelete(dt.departmentId)}>Delete</button>
                          <button onClick={() => onClick(dt.departmentId)}>Edit</button>
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
