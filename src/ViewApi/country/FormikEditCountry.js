import React, { useState,useEffect } from 'react'
import { useFormik } from 'formik'
import CountryApi from '../../api/CountryApi'
import RegionApi from '../../api/RegionApi'

export default function FormikEditCountry(props) {
    const [country,setCountry]=useState([])
    const [region,setRegion]=useState([])
    useEffect(() => {
        CountryApi.FindOne(props.id).then(data => {
            setCountry(data)
        })
    }, [])
    console.log(country);
    const formik = useFormik({
        enableReinitialize:true,
        initialValues:{
            countryId:props.id,
            countryName:country.countryName,
            regionId:country.region.regionId
        },
        onSubmit:async(values)=>{
            let payload = {
                countryId: values.countryId,
                countryName: values.countryName,
                regionId: values.regionId
              };

            await CountryApi.Update(payload)
            .then(()=>{
                props.closeAdd();
                window.alert('Data Successfully Updated')
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
