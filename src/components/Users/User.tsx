import React from 'react'
import './User.scss'
import cardIcon from '../../assets/card-icon.png'
import cardIcon1 from '../../assets/card-icon2.png'
import cardIcon2 from '../../assets/card-icon3.png'
import cardIcon3 from '../../assets/card-icon4.png'
export const User = () => {
  return (
    <div className='user-side'>
        <div className="user-side-container">
            <h1>Users</h1>
            <div className="card-users">
                <div className="card-user">
                    <img src={cardIcon} alt="cardIcon" />
                    <p>USERS</p>
                    <h1>2,453</h1>
                </div>
            </div>
            <div className="card-users">
                <div className="card-user">
                    <img src={cardIcon} alt="cardIcon" />
                    <p>USERS</p>
                    <h1>2,453</h1>
                </div>
            </div>
            <div className="card-users">
                <div className="card-user">
                    <img src={cardIcon} alt="cardIcon" />
                    <p>USERS</p>
                    <h1>2,453</h1>
                </div>
            </div>
            <div className="card-users">
                <div className="card-user">
                    <img src={cardIcon} alt="cardIcon" />
                    <p>USERS</p>
                    <h1>2,453</h1>
                </div>
            </div>
        </div>
    </div>
  )
}
