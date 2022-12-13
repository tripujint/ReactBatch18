import React, { useState } from 'react'
import { useFormik } from 'formik'
import CountryApi from '../../api/CountryApi'

export default function FormikAddCountry(props) {
    const formik = useFormik({
        initialValues:{
            countryId:undefined,
            countryName:undefined,
            regionId: undefined
        },
        onSubmit:async(values)=>{
            let payload = {
                countryId: values.countryId,
                countryName: values.countryName,
                regionId: values.regionId
              };

            await CountryApi.Create(payload)
            .then(()=>{
                props.closeAdd();
                window.alert('Data Successfully Insert')
                props.onRefresh();
            })
        }
    })
    
  return (
    <div>
        <div>
                <label>Country ID : </label>
                <input
                    type="text"
                    name="countryId"
                    id="countryId"
                    value={formik.values.countryId}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    autoComplete="countryId"
                />
            </div>
        <div>
                <label>Country Name : </label>
                <input
                    type="text"
                    name="countryName"
                    id="countryName"
                    value={formik.values.countryName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    autoComplete="countryName"
                />
            </div>
            <div>
                <label>Region : </label>
                <input
                    type="number"
                    name="regionId"
                    id="regionId"
                    value={formik.values.regionId}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    autoComplete="regionId"
                />
            </div>
            
            <div>
                <button type='submit' onClick={formik.handleSubmit}> Simpan </button>
                <button onClick={() => props.setDisplay(false)}> Cancel </button>
            </div>
    </div>
  )
}
