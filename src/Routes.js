import React from 'react'
import { useRoutes } from 'react-router-dom'
import CountryView from './ViewApi/country/CountryView'
import RegionView from './ViewApi/RegionView'

export default function Routes() {
  return useRoutes([
    { path: "region", element: <RegionView />},
    { path: "country", element: <CountryView />},
  ]);
}