import './Table.scss'
import { TableData } from './TableData/TableData'
import { TableHead } from './TableHead/TableHead'
import { useState } from 'react'

export const Table = () => {
    const [openModal, setOpenModal] = useState<Boolean>(true)

    function handleModal():void{
        setOpenModal(!openModal)
    }

  return (
    <div className='before-table' >
        <div className='filter-data-lists' style={openModal ? { display:"block"} : {display:"none"}}>
            <form className="filter-data-form">
                <div className="filter-data-list">
                    <p>Organization</p>
                    <select name="" id="">
                        <option value="1">Select</option>
                    </select>
                </div>
                <div className="filter-data-list">
                    <p>Username</p>
                    <input type="text" placeholder='Username' />
                </div>
                <div className="filter-data-list">
                    <p>Email</p>
                    <input type="text" placeholder='Email' />
                </div>
                <div className="filter-data-list">
                    <p>Date</p>
                    <input placeholder="Type Date" type="text"id="date"/>
                </div>
                <div className="filter-data-list">
                    <p>Phone Number</p>
                    <input type="text" placeholder='Phone Number'/>
                </div>
                <div className="filter-data-list">
                    <p>Status</p>
                    <select name="" id="">
                        <option value="1">Select</option>
                        <option value="Inactive">inactive</option>
                        <option value="Active">Active</option>
                        <option value="Blacklisted">Blacklisted</option>
                    </select>
                </div>
                <div className="filter-data-list filter-data-list-buttons">
                    <button className='filter-reset-btn'>Reset</button>
                    <button className='filter-filter-btn' type='submit'>Filter</button>
                </div>
            </form>
        </div>
        
        <table className='table' width={"100%"} >
        <TableHead handleModal = {handleModal} />
        <tbody>
            <TableData/>
            <TableData/>
            <TableData/>
            <TableData/>
            <TableData/>
            <TableData/>
            <TableData/>
            <TableData/>
            <TableData/>
        </tbody>
    </table>
    </div>
    
  )
}
