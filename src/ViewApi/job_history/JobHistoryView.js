import React, { useEffect, useState } from 'react'
import JobHistoryApi from '../../api/JobHistoryApi'

export default function JobHistoryView() {
    const [JobHistory, setJobHistory] = useState([])
    const [refresh] = useState(false)

    useEffect(()=>{
        JobHistoryApi.list().then(data => {
            setJobHistory(data)
        })
    }, [refresh])

    return (
        <div>
          <h2>List JobHistory</h2>
          <table>
            <thead>
              <tr>
                <th>Employee ID</th>
                <th>Start Date</th>
                <th>End Date</th>
              </tr>
            </thead>
            <tbody>
              {
                JobHistory && JobHistory.map(dt => (
                  <tr>
                    <td>{dt.employeeId}</td>
                    <td>{dt.startDate}</td>
                    <td>{dt.endDate}</td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
    )
}
