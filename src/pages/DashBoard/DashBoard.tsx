import React from 'react'
import { NavBar } from '../../components/NavBar/NavBar'
import { SideBar } from '../../components/SideBar/SideBar'
import { User } from '../../components/Users/User'
import './DashBoard.scss'
export const DashBoard = () => {
  return (
    <>
      <NavBar />
      <div className='dash-con'>
        <SideBar />
        <User />
      </div>
    </>
  )
}
