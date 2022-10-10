import './TableData.scss'
import { useState } from 'react';
import dotIcon from '../../../assets/3dotvector.png'
import activateIcon from '../../../assets/activate-icon.png'
import blacklistIcon from '../../../assets/blacklist-icon.png'
import viewIcon from '../../../assets/view-icon.png'
import { Data } from '../../../model';


interface Props {
    data: Data
}
export const TableData = ({data}:Props) => {
    //creted the modal state
    const [openModal, setOpenModal] = useState(false)
    function handleModal():void{
        setOpenModal(!openModal)
    }

    return (
        <tr className='table-data-row'>
            <td>{data.orgName}</td>
            <td>{data.userName}</td>
            <td>{data.email}</td>
            <td>{data.phoneNumber}</td>
            <td>May 15, 2020 10:00 AM</td>
            <td> <span className='inactive'>Inactive</span> </td>
            <td className='table-data-row-img'>
                <img src={dotIcon} alt="dotIcon" onClick={handleModal} />
                <div className="table-data-details" 
                style={openModal ? { display:"block"} : {display:"none"}}>
                    <div className='row-details'>
                        <p>View Details</p>
                        <img src={viewIcon} alt="view-icon" />
                    </div>
                    <div className='row-blacklist'>
                        <p>Blaclist User</p>
                        <img src={blacklistIcon} alt="blacklist-icon" />
                    </div>
                    <div className='row-activate'>
                        <p>Activate User</p>
                        <img src={activateIcon} alt="activate-icon" />
                    </div>
                </div>  
            </td>
        </tr>
    )
}
