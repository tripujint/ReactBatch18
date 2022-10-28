import React, { useEffect, useState } from 'react'
import RegionApi from '../api/RegionApi'
import FormEditRegionApi from './FormEditRegionApi'
import FormRegionApi from './FormRegionApi'

export default function RegionView() {
  const [region, setRegion] = useState([])
  const [refresh, setRefresh] = useState(false)

  const [display, setDisplay] = useState(false)
  const [displayEdit, setDisplayEdit] = useState(false)
  const [id, setId] = useState()

  useEffect(()=>{
    RegionApi.list().then(data => {
      setRegion(data)
    })
  },[refresh])

  const onDelete = async (id) => {
    RegionApi.Delete(id).then(() => {
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
          <FormEditRegionApi
            id={id}
            setRefresh={setRefresh}
            setDisplay={setDisplay}
          />
        :
        display ? 
          <FormRegionApi
            setRefresh={setRefresh}
            setDisplay={setDisplay}
          />
        : 
        <>
          <h2>List Region</h2>
          <button onClick={() => setDisplay(true)}>Add Region</button>
          <table>
            <thead>
              <tr>
                <th>Region ID</th>
                <th>Region Name</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                region && region.map(reg => (
                  <tr key={reg.regionId}>
                    <td>{reg.regionId}</td>
                    <td>{reg.regionName}</td>
                    <td>
                      <button onClick={() => onDelete(reg.regionId)}>Delete Region</button>
                      <button onClick={() => onClick(reg.regionId)}>Edit Region</button>
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
