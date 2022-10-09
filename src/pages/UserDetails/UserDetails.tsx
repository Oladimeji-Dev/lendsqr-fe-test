import React from 'react'
import './UserDetails.scss'
import { NavBar } from '../../components/NavBar/NavBar'
import { SideBar } from '../../components/SideBar/SideBar'
import { User } from '../../components/User/User'
export const UserDetails = () => {
  return (
    <div>
        <NavBar />
        <div className="user-details-con">
            <SideBar />
            <User />
        </div>
    </div>
  )
}
