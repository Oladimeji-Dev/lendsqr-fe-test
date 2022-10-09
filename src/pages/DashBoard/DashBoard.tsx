import React from 'react'
import { NavBar } from '../../components/NavBar/NavBar'
import { SideBar } from '../../components/SideBar/SideBar'
import { Users } from '../../components/Users/Users'
import { useEffect,useState } from 'react'
import './DashBoard.scss'
export const DashBoard = () => {

  //fetch the data and store into useEffect
  const [fetchedData, setFetchedData] = useState([]);
  useEffect(()=>{
    //fecth the Data
    fetch('https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users')
    .then((response) => response.json())
    .then((data) => localStorage.setItem('usersData', JSON.stringify(data)))
  },[])
  

  



  return (
    <>
      <NavBar />
      <div className='dash-con'>
        <SideBar />
        <Users />
      </div>
    </>
  )
}
