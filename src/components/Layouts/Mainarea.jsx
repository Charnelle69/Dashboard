//import React from 'react'
import MainLayout from './MainLayout'
import { Outlet } from 'react-router-dom'

const MainArea = () => {
  return (
    <div>
        <MainLayout/>
        <Outlet/>
    </div>
  )
}

export default MainArea