import React,{useEffect,useState} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import EmpInput from '../../Form/FormInput'
import { doGetEmp,doAddEmp } from '../Action/emp_action'

export default function EmployeeRedux() {
    const dispatch = useDispatch()
    const emp = useSelector(state=>state.employee)
    const total = useSelector(state=> state.totalSalary)

    const [display, setDisplay] = useState(false)
    const [values,setValues] = useState({
        fullname: undefined,
        salary: 0
    })
    const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value })
    }
    const onSubmit = (event) => {
        event.preventDefault()
        const payload = {
            empId: (Math.round(Math.random()*10)),
            fullname: values.fullname,
            salary: values.salary
        }
        dispatch(doAddEmp(payload))
        setDisplay(false)
    }
  return (
    <div>
        <h2>List Employee</h2>
        { 
            display ? 
                <EmpInput 
                    onSubmitForm = {onSubmit}
                    handleChange = {handleChange}
                    setDisplay = {setDisplay}
                />
                : <>
            <button onClick={()=>setDisplay(true)}>Add Employee</button>                
            <table>
                <thead>
                    <tr>
                        <th>Employee Id</th>
                        <th>Full Name</th>
                        <th>Salary</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                {
                    (emp || []).map(emp => (
                        <tr key={emp.empId}>
                            <td>{emp.empId}</td>
                            <td>{emp.fullname}</td>
                            <td>{emp.salary}</td>
                            {/* <td>
                                <button onClick={()=>PenambahanGaji(emp.empId)}>Tambah Gaji</button>
                                <button onClick={()=>PenguranganGaji(emp.empId)}>Kurangi Gaji</button>
                            </td> */}
                        </tr>
                    ))
                }   
                </tbody>             
            </table>
            <h3>Total Salary : {total}</h3></>
        }
    </div>

  )
}
