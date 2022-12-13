import React from 'react'
import {Navigate,useRoutes} from 'react-router-dom'
import Dashboard from './Layout/Dashboard'
import RegionView from './ViewApi/region/RegionView'
import FormikRegionView from './ViewApi/region/FormikRegionView'
import FormikRegionViewApiRedux from './ViewReduxSaga/region/FormikRegionViewApi'
import CountryView from './ViewApi/country/CountryView'
import FormikCountryView from './ViewApi/country/FormikCountryView'
import FormikCountryViewReduxSaga from './ViewReduxSaga/country/FormikCountryView'
import LocationView from './ViewApi/location/LocationView'
import DepartmentView from './ViewApi/department/DepartmentView'
import EmployeeView from './ViewApi/employee/EmployeeView'
import JobView from './ViewApi/job/JobView'
import JobHistoryView from './ViewApi/job_history/JobHistoryView'

export default function Routes() {
  return useRoutes([
    {
        path: '/',
        element :<Dashboard/>,
        children:[
            {path:'region', element:<RegionView/>},
            {path:'regionformik', element:<FormikRegionView/>},
            {path:'regionredux',element:<FormikRegionViewApiRedux/>},
            {path:'country', element:<CountryView />},
            {path:'countryformik', element:<FormikCountryView />},
            {path:'countryredux',element:<FormikCountryViewReduxSaga />},
            {path:'location', element:<LocationView />},
            {path:'department', element:<DepartmentView />},
            {path:'employee', element:<EmployeeView />},
            {path:'job', element:<JobView />},
            {path:'jobhistory', element:<JobHistoryView />},
        ]
    },
    {
        path:'*', element:<Navigate to='/404' replace/>
    }
  ])
}
