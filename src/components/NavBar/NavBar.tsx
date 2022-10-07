import React from 'react'
import './NavBar.scss'
import logo from '../../assets/logo.svg'
import bellIcon from '../../assets/bell-icon.png'
import avatar from '../../assets/avatar.png'
import downIcon from '../../assets/down-vector.png'
import { SearchBox } from '../SearchBox/SearchBox'
export const NavBar = () => {
  return (
    <nav className='nav-bar'>
        <div className='logo'>
            <img src={logo} alt="logo-icon" />
        </div>
        <div className="nav-right">
            <div>
                <SearchBox />
            </div>
            <div className='nav-right-right'>
                <p>Docs</p>
                <img src={bellIcon} alt="bell-icon" />

                <div className='profile-avatar'>
                    <img src={avatar} alt="avatar-icon" />
                    <div className="profile-name">
                        <p>Adedeji</p>
                        <img src={downIcon} alt="dowIcon" />
                    </div>
                </div>
            </div>
        </div>
    </nav>
  )
}
