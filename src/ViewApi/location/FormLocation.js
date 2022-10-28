import React, { useState } from 'react'
import LocationApi from '../../api/LocationApi'

export default function FormLocation(props) {
    const [values, setValues] = useState({
        locationId: undefined,
        streetAddress: undefined,
        postalCode: undefined,
        city: undefined,
        stateProvince: undefined
    })

    const HandleChange = name => event => {
        setValues({...values, [name]: event.target.value})
    }

    const onSubmit = async () => {
        const payload = {
            locationId: (values.locationId),
            streetAddress: (values.streetAddress),
            postalCode: (values.postalCode),
            city: (values.city),
            stateProvince: (values.stateProvince)
        }
        await LocationApi.Create(payload)
            .then(() => {
                props.setRefresh(true)
                window.alert('Data Successfully Insert')
            })
    }

    return (
        <div>
            <h2>Add Location</h2>
            <form onSubmit={onSubmit}>
                <div>
                    <label>Location ID : </label>
                    <input type="text" onChange={HandleChange('locationId')}></input>
                </div>
                <div>
                    <label>Street Address : </label>
                    <textarea row="2" onChange={HandleChange('streetAddress')}></textarea>
                </div>
                <div>
                    <label>Postal Code : </label>
                    <input type="text" onChange={HandleChange('postalCode')}></input>
                </div>
                <div>
                    <label>City : </label>
                    <input type="text" onChange={HandleChange('city')}></input>
                </div><div>
                    <label>State Province : </label>
                    <input type="text" onChange={HandleChange('stateProvince')}></input>
                </div>
                <div>
                    <button type='submit'>Simpan</button>
                    <button onClick={() => props.setDisplay(false)}>Cancel</button>
                </div>
            </form>        
        </div>
    )
}
