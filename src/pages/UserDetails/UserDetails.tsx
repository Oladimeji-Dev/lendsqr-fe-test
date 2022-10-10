import React from 'react'
import './UserDetails.scss'
import { NavBar } from '../../components/NavBar/NavBar'
import { SideBar } from '../../components/SideBar/SideBar'
import { User } from '../../components/User/User'
import {useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import { Data } from '../../model'

export const UserDetails = () => {

  const params = useParams()
  const param = Number(params.id)
  const [userData, setUserData] = useState<Data | any>()
  const [loading,setLoading] = useState(false)

  useEffect(()=>{
    setLoading(true)
    //fecth the Data single data
    fetch(`https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${param}`)
    .then((response) => response.json())
    .then((data) => {
      
      setUserData(data)
      setLoading(false)
    })
  },[])

  //send the data into User as props


  return (
    <div>
        <NavBar />
        <div className="user-details-con">
            <SideBar />
            <User loading = {loading} userData = {userData} />
        </div>
    </div>
  )
}
