import React, { useEffect, useState } from 'react'
import LocationApi from '../../api/LocationApi'
import FormLocation from './FormLocation'
import FormEditLocation from './FormEditLocation'

export default function LocationView() {
    const [location, setLocation] = useState([])
    const [refresh, setRefresh] = useState(false)
    const [display, setDisplay] = useState(false)
    const [displayEdit, setDisplayEdit] = useState(false)
    const [id, setId] = useState()

    useEffect(()=>{
        LocationApi.list().then(data => {
            setLocation(data)
        })
    }, [refresh])

    const onDelete = async (id) => {
        LocationApi.Delete(id).then(() => {
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
              <FormEditLocation
                id={id}
                setRefresh={setRefresh}
                setDisplay={setDisplay}
              />
            :
            display ? 
              <FormLocation
                setRefresh={setRefresh}
                setDisplay={setDisplay}
              />
            : 
            <>
              <h2>List Location</h2>
              <button onClick={() => setDisplay(true)}>Add Location</button>
              <table>
                <thead>
                  <tr>
                    <th>Location ID</th>
                    <th>Street Address</th>
                    <th>Postal Code</th>
                    <th>City</th>
                    <th>State Province</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    location && location.map(dt => (
                      <tr key={dt.locationId}>
                        <td>{dt.locationId}</td>
                        <td>{dt.streetAddress}</td>
                        <td>{dt.postalCode}</td>
                        <td>{dt.city}</td>
                        <td>{dt.stateProvince}</td>
                        <td>
                          <button onClick={() => onDelete(dt.locationId)}>Delete</button>
                          <button onClick={() => onClick(dt.locationId)}>Edit</button>
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
