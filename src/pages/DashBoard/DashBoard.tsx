import { NavBar } from '../../components/NavBar/NavBar'
import { SideBar } from '../../components/SideBar/SideBar'
import { Users } from '../../components/Users/Users'
import './DashBoard.scss'
export const DashBoard = () => {

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
