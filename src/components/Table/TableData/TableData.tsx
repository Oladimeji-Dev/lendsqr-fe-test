import './TableData.scss'
import { useState } from 'react';
import dotIcon from '../../../assets/3dotvector.png'
import activateIcon from '../../../assets/activate-icon.png'
import blacklistIcon from '../../../assets/blacklist-icon.png'
import viewIcon from '../../../assets/view-icon.png'
import { Data } from '../../../model';
import {Link} from 'react-router-dom'


interface Props {
    data: Data
}
export const TableData = ({data}:Props) => {
    //creted the modal state
    const [openModal, setOpenModal] = useState(false)
    function handleModal():void{
        setOpenModal(!openModal)
    }
    const [status, setStatus] = useState({
        blackList: false,
        active:true,
        inactive:false
    })
    function handleBlacklist(){
        setStatus((intial) =>({
            ...intial,
            blackList:true,
            active:false,
            inactive:false
        }))
    }
    function handleActive(){
        setStatus((intial) =>({
            ...intial,
            blackList:false,
            active:true,
            inactive:false
        }))
    }
    const dateString = data?.createdAt
    const utcDate = new Date(dateString).toUTCString();
    const date = utcDate.slice(0,17);
    
    

    return (
        <tr className='table-data-row'>
            <td>{data.orgName}</td>
            <td>{data.userName}</td>
            <td>{data.email}</td>
            <td>{data.phoneNumber}</td>
            <td>{date}</td>
            {/* <td>May 15, 2020 10:00 AM</td> */}
            <td> <span className={status.active ? 'active' : 'blacklisted'}>{status.active ? 'Active' : 'Blacklisted'}</span> </td>
            <td className='table-data-row-img'>
                <img src={dotIcon} alt="dotIcon" onClick={handleModal} />
                <div className="table-data-details" 
                style={openModal ? { display:"block"} : {display:"none"}}>
                    <Link to={`/user/${data.id}`}>
                        <div className='row-details'>
                            <p>View Details</p>
                            <img src={viewIcon} alt="view-icon" />
                        </div>
                    </Link>
                    <div className='row-blacklist' onClick={handleBlacklist}>
                        <p>Blaclist User</p>
                        <img src={blacklistIcon} alt="blacklist-icon" />
                    </div>
                    <div className='row-activate' onClick={handleActive}>
                        <p>Activate User</p>
                        <img src={activateIcon} alt="activate-icon" />
                    </div>
                </div>  
            </td>
        </tr>
    )
}
