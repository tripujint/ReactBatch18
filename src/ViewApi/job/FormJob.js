import React, { useState } from 'react'
import JobApi from '../../api/JobApi'

export default function FormJob(props) {
    const [values, setValues] = useState({
        jobId: undefined,
        jobTitle: undefined,
        minSalary: undefined,
        maxSalary: undefined
    })

    const HandleChange = name => event => {
        setValues({...values, [name]: event.target.value})
    }

    const onSubmit = async () => {
        const payload = {
            jobId: (values.jobId),
            jobTitle: (values.jobTitle),
            minSalary: (values.minSalary),
            maxSalary: (values.maxSalary)
        }
        await JobApi.Create(payload)
            .then(() => {
                props.setRefresh(true)
                window.alert('Data Successfully Insert')
            })
    }

    return (
        <div>
            <h2>Add Job</h2>
            <form onSubmit={onSubmit}>
                <div>
                    <label>Job ID : </label>
                    <input type="text" onChange={HandleChange('jobId')}></input>
                </div>
                <div>
                    <label>Job Title : </label>
                    <input type="text" onChange={HandleChange('jobTitle')}></input>
                </div>
                <div>
                    <label>Min Salary : </label>
                    <input type="number" onChange={HandleChange('minSalary')}></input>
                </div>
                <div>
                    <label>Max Salary : </label>
                    <input type="number" onChange={HandleChange('maxSalary')}></input>
                </div>
                <div>
                    <button type='submit'>Simpan</button>
                    <button onClick={() => props.setDisplay(false)}>Cancel</button>
                </div>
            </form>        
        </div>
    )
}
