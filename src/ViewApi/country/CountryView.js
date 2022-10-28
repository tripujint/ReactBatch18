import React, { useEffect, useState } from 'react'
import CountryApi from '../../api/CountryApi'
import FormCountry from './FormCountry'
import FormEditCountry from './FormEditCountry'

export default function CountryView() {
    const [country, setCountry] = useState([])
    const [refresh, setRefresh] = useState(false)
    const [display, setDisplay] = useState(false)
    const [displayEdit, setDisplayEdit] = useState(false)
    const [id, setId] = useState()

    useEffect(()=>{
        CountryApi.list().then(data => {
            setCountry(data)
        })
    }, [refresh])

    const onDelete = async (id) => {
        CountryApi.Delete(id).then(() => {
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
              <FormEditCountry
                id={id}
                setRefresh={setRefresh}
                setDisplay={setDisplay}
              />
            :
            display ? 
              <FormCountry
                setRefresh={setRefresh}
                setDisplay={setDisplay}
              />
            : 
            <>
              <h2>List Country</h2>
              <button onClick={() => setDisplay(true)}>Add Country</button>
              <table>
                <thead>
                  <tr>
                    <th>Country ID</th>
                    <th>Country Name</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    country && country.map(dt => (
                      <tr key={dt.countryId}>
                        <td>{dt.countryId}</td>
                        <td>{dt.countryName}</td>
                        <td>
                          <button onClick={() => onDelete(dt.countryId)}>Delete</button>
                          <button onClick={() => onClick(dt.countryId)}>Edit</button>
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
