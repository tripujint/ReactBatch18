import React, { useEffect, useState } from 'react'
import JobApi from '../../api/JobApi'
import FormJob from './FormJob'
import FormEditJob from './FormEditJob'

export default function JobView() {
    const [job, setJob] = useState([])
    const [refresh, setRefresh] = useState(false)
    const [display, setDisplay] = useState(false)
    const [displayEdit, setDisplayEdit] = useState(false)
    const [id, setId] = useState()

    useEffect(()=>{
        JobApi.list().then(data => {
            setJob(data)
        })
    }, [refresh])

    const onDelete = async (id) => {
        JobApi.Delete(id).then(() => {
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
              <FormEditJob
                id={id}
                setRefresh={setRefresh}
                setDisplay={setDisplay}
              />
            :
            display ? 
              <FormJob
                setRefresh={setRefresh}
                setDisplay={setDisplay}
              />
            : 
            <>
              <h2>List Job</h2>
              <button onClick={() => setDisplay(true)}>Add Job</button>
              <table>
                <thead>
                  <tr>
                    <th>Job ID</th>
                    <th>Job Title</th>
                    <th>Min Salary</th>
                    <th>Max Salary</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    job && job.map(dt => (
                      <tr key={dt.jobId}>
                        <td>{dt.jobId}</td>
                        <td>{dt.jobTitle}</td>
                        <td>{dt.minSalary}</td>
                        <td>{dt.maxSalary}</td>
                        <td>
                          <button onClick={() => onDelete(dt.jobId)}>Delete</button>
                          <button onClick={() => onClick(dt.jobId)}>Edit</button>
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
