import React from 'react'
import './User.scss'
import backarrowIcon from '../../assets/back-arrow.png'
import starFilIcon from '../../assets/star-fil.png'
import starEmptyIcon from '../../assets/star-empty.png'
import avatarEmptyIcon from '../../assets/avatar-empty.png'
import { Data } from '../../model'
interface Props{
    userData:Data
}
export const User = ({userData}:Props) => {
    //get the data and populate it

  return (
    <div className='user-side'>
        <div className="user-side-container">
            <div className='back-users'>
                <img src={backarrowIcon} alt="back-arrow-icon" />
                <p>Back to Users</p>
            </div>
            <div className="user-detail-header">
                <h2>User Details</h2>
                <div className="user-status-btn">
                    <button className='blacklist-btn'>BLACKLIST USER</button>
                    <button className='activate-btn'>ACTIVATE USER</button>
                </div>
            </div>
            <section className='user-detail-profile'>
                <div className="user-detail-profile-first">
                    <div className='profile-name-reg'>
                        <img src={avatarEmptyIcon} alt="avatar-icon" />
                        <div className="profile-nr">
                            <h2 className='profile-name'>{`${userData.profile.firstName}  ${userData.profile.lastName}`}</h2>
                            <p className='profile-reg'>{userData.accountNumber}</p>
                        </div>
                    </div>
                    <div className='user-tier'>
                        <p>User's Tier</p>
                        <div className="stars">
                            <img src={starFilIcon} alt="stars" />
                            <img src={starEmptyIcon} alt="stars" />
                            <img src={starEmptyIcon} alt="stars" />
                        </div>
                    </div>
                    <div className='profile-acct-details'>
                        <h2>₦{userData.accountBalance}</h2>
                        <p>9912345678/Providus Bank</p>
                    </div>
                </div>
                <div className="user-detail-profile-second">
                   <p className='active'>General Details</p>
                   <p>Documents</p>
                   <p>Bank Details</p>
                   <p>Loans</p>
                   <p>Savings</p>
                   <p>App and System</p>
                </div>
            </section>
            <section className='user-profile-information'>
                <div className="user-personal-info">
                    <h3>Personal Information</h3>
                    <div className="user-info-details">
                        <div className="info">
                            <p>FULL NAME</p>
                            <h3>{`${userData.profile.firstName}  ${userData.profile.lastName}`}</h3>
                        </div>
                        <div className="info">
                            <p>PHONE NUMBER</p>
                            <h3>{userData.profile.phoneNumber}</h3>
                        </div>
                        <div className="info">
                            <p>EMAIL ADDRESS</p>
                            <h3>{userData.email}</h3>
                        </div>
                        <div className="info">
                            <p>BVN</p>
                            <h3>{userData.profile.bvn}</h3>
                        </div>
                        <div className="info">
                            <p>GENDER</p>
                            <h3>{userData.profile.gender}</h3>
                        </div>
                        <div className="info">
                            <p>MARITAL STATUS</p>
                            <h3>Single</h3>
                        </div>
                        <div className="info">
                            <p>CHILDREN</p>
                            <h3>None</h3>
                        </div>
                        <div className="info">
                            <p>TYPE OF RESIDENCE</p>
                            <h3>Parent’s Apartment</h3>
                        </div>
                    </div>
                </div>
                <div className="user-personal-info">
                    <h3>Education and Employment</h3>
                    <div className="user-info-details">
                        <div className="info">
                            <p>LEVEL OF EDUCATION</p>
                            <h3>{userData.education.level}</h3>
                        </div>
                        <div className="info">
                            <p>EMPLOYMENT STATUS</p>
                            <h3>{userData.education.employmentStatus}</h3>
                        </div>
                        <div className="info">
                            <p>SECTOR OF EMPLOYMENT</p>
                            <h3>{userData.education.sector}</h3>
                        </div>
                        <div className="info">
                            <p>DURATION OF EMPLOYMENT</p>
                            <h3>{userData.education.duration}</h3>
                        </div>
                        <div className="info">
                            <p>OFFICE EMAIL</p>
                            <h3>{userData.education.officeEmail}</h3>
                        </div>
                        <div className="info">
                            <p>MONTHLY INCOME</p>
                            <h3>₦{userData.education.monthlyIncome[0]}- ₦{userData.education.monthlyIncome[1]}</h3>
                        </div>
                        <div className="info">
                            <p>LOAN REPAYMENT</p>
                            <h3>₦{userData.education.loanRepayment}</h3>
                        </div>
                    </div>
                </div>
                <div className="user-personal-info">
                    <h3>Socials</h3>
                    <div className="user-info-details">
                        <div className="info">
                            <p>TWITTER</p>
                            <h3>{userData.socials.twitter}</h3>
                        </div>
                        <div className="info">
                            <p>FACEBOOK</p>
                            <h3>{userData.socials.facebook}</h3>
                        </div>
                        <div className="info">
                            <p>INSTAGRAM</p>
                            <h3>{userData.socials.instagram}</h3>
                        </div>
                    </div>
                </div>
                <div className="user-personal-info">
                    <h3>Guarantor</h3>
                    <div className="user-info-details">
                        <div className="info">
                            <p>FULL NAME</p>
                            <h3>{`${userData.guarantor.firstName}  ${userData.guarantor.lastName}`}</h3>
                        </div>
                        <div className="info">
                            <p>PHONE NUMBER</p>
                            <h3>{userData.guarantor.phoneNumber}</h3>
                        </div>
                        <div className="info">
                            <p>ADDRESS</p>
                            <h3>{userData.guarantor.address}</h3>
                        </div>
                        <div className="info">
                            <p>GENDER</p>
                            <h3>{userData.guarantor.gender}</h3>
                        </div>
                        <div className="info">
                            <p>RELATIONSHIP</p>
                            <h3>UNKOWN</h3>
                        </div>
                    </div>
                </div>
                <div className="user-personal-info last-info">
                    <h3>Guarantor</h3>
                    <div className="user-info-details">
                        <div className="info">
                            <p>FULL NAME</p>
                            <h3>Debby Ogana</h3>
                        </div>
                        <div className="info">
                            <p>PHONE NUMBER</p>
                            <h3>07060780922</h3>
                        </div>
                        <div className="info">
                            <p>EMAIL ADDRESS</p>
                            <h3>debby@gmail.com</h3>
                        </div>
                        <div className="info">
                            <p>RELATIONSHIP</p>
                            <h3>Sister</h3>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
  )
}
