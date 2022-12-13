import { ChevronLeftIcon, ChevronRightIcon, InformationCircleIcon, TrashIcon } from '@heroicons/react/solid'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Header from '../../Component/Header'
import { DelCountryRequest, GetCountryRequest } from '../../redux-saga/Action/CountryAction'
import { GetRegionRequest } from '../../redux-saga/Action/RegionAction'
import FormEditCountry from './FormEditCountry'
import FormikAddCountry from './FormikAddCountry'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function FormikCountryViewReduxSaga() {
  const dispatch = useDispatch()
  const [refresh, setRefresh] = useState(false)
  const [display, setDisplay] = useState(false)
  const [displayEdit, setDisplayEdit] = useState(false)
  const [id, setId] = useState()
  const { countries } = useSelector(state => state.countryStated)

  useEffect(() => {
    dispatch(GetCountryRequest())
  }, [])

  const onDelete = async (id) => {
    dispatch(DelCountryRequest(id))
    setRefresh(true)
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
          <Header name={'Country'} setDisplay={setDisplay} />
          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead>
                <tr>
                  <th className='text-left'>Country ID</th>
                  <th className='text-left'>Country Name</th>
                  {/* <th>Region</th> */}
                  <th className='text-right'>Action</th>
                </tr>
              </thead>
              <tbody>
                {
                  countries && countries.map(dt => (
                    <tr key={dt.countryId}>
                      <td className='text-left'>{dt.countryId}</td>
                      <td className='text-left'>{dt.countryName}</td>
                      {/* <td>{dt.region.regionName}</td> */}
                      <td className='text-right'>
                        <button className='btn btn-sm btn-accent text-white text-xs font-normal ml-2' onClick={() => onClick(dt.countryId)}>Edit</button>
                        <button className='btn btn-sm btn-error text-white text-xs font-normal ml-2'
                          onClick={() => {
                          if (window.confirm("Delete this data?"))
                            onDelete(dt.countryId)
                          }}
                        > Delete</button>
                      </td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
        </>
      }
    </div>
  )
}