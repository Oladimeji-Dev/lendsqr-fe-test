import React from 'react'
import './User.scss'
import cardIcon from '../../assets/card-icon.png'
import cardIcon1 from '../../assets/card-icon2.png'
import cardIcon2 from '../../assets/card-icon3.png'
import cardIcon3 from '../../assets/card-icon4.png'
import { CardUser } from '../CardUser/CardUser'
import { Table } from '../Table/Table'
export const User = () => {
  return (
    <div className='user-side'>
        <div className="user-side-container">
          <h1 >Users</h1>
          <div className="card-users">
            <CardUser icon={cardIcon} value='USERS' users='2,453'/>
            <CardUser icon={cardIcon1} value='ACTIVE USERS' users='2,453'/>
            <CardUser icon={cardIcon2} value='USERS WITH LOANS' users='12,453'/>
            <CardUser icon={cardIcon3} value='USERS WITH SAVINGS' users='102,453'/>
          </div>
          <Table />
          <footer className='user-side-container-footer'>
            <div className="show-result">
              <p>Showing</p>
              <select name="result" id="">
                <option value="100">100</option>
                <option value="200">200</option>
                <option value="300">300</option>
                <option value="400">400</option>
                <option value="500">500</option>
              </select>
              <p>out of 500</p>
            </div>

            <div>hello</div>
          </footer>
        </div>
    </div>
  )
}
