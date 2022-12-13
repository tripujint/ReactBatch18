import React, { useState } from 'react'
import CountryApi from '../../api/CountryApi'

export default function FormCountry(props) {
    const [values, setValues] = useState({
        countryId: undefined,
        countryName: undefined,
        regionId: undefined
    })

    const HandleChange = name => event => {
        setValues({...values, [name]: event.target.value})
    }

    const onSubmit = async () => {
        const payload = {
            countryId: (values.countryId),
            countryName: (values.countryName),
            regionId: (values.regionId)
        }
        await CountryApi.Create(payload)
            .then(() => {
                props.setRefresh(true)
                window.alert('Data Successfully Insert')
            })
    }

    return (
        <div>
            <h2>Add Country</h2>
            <form onSubmit={onSubmit}>
                <div>
                    <label>Country ID : </label>
                    <input type="text" onChange={HandleChange('countryId')}></input>
                </div>
                <div>
                    <label>Country Name : </label>
                    <input type="text" onChange={HandleChange('countryName')}></input>
                </div>
                <div>
                    <button type='submit'>Simpan</button>
                    <button onClick={() => props.setDisplay(false)}>Cancel</button>
                </div>
            </form>        
        </div>
    )
}
