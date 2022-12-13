import React, { useEffect, useState } from 'react'
import CountryApi from '../../api/CountryApi'
import FormikAddCountry from './FormikAddCountry'
import FormikEditCountry from './FormikEditCountry'

export default function FormikCountryView() {
  const [country, setCountry] = useState([])
  const [refresh, setRefresh] = useState(false)
  const [id, setId] = useState()
  const [display, setDisplay] = useState(false)
  const [displayEdit, setDisplayEdit] = useState(false)

  useEffect(() => {
    CountryApi.list().then(data => {
      setCountry(data)
    })
    setRefresh(false)
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
          <FormikEditCountry
            id={id}
            setDisplay={setDisplayEdit}
            closeAdd={() => setDisplayEdit(false)}
            onRefresh={() => setRefresh(true)}
          />
          :
          display ?
            <FormikAddCountry
            setDisplay={setDisplay}
            closeAdd={() => setDisplay(false)}
            onRefresh={() => setRefresh(true)}
            />
            :
            <>
              <h2>List Country</h2>
              <button onClick={() => setDisplay(true)}>Add Country</button>
              <table>
                <th>Country ID</th>
                <th>Country Name</th>
                <th>Action</th>
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
