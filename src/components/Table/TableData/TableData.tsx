import './TableData.scss'
import dotIcon from '../../../assets/3dotvector.png'
import activateIcon from '../../../assets/activate-icon.png'
import blacklistIcon from '../../../assets/blacklist-icon.png'
import viewIcon from '../../../assets/view-icon.png'
export const TableData = () => {
  return (
    <tr className='table-data-row'>
        <td>Lendsqr</td>
        <td>Adedeji</td>
        <td>adedeji@lendsqr.com</td>
        <td>08078903721</td>
        <td>May 15, 2020 10:00 AM</td>
        <td> <span className='inactive'>Inactive</span> </td>
        <td className='table-data-row-img'>
            <img src={dotIcon} alt="dotIcon" />

            <div className="table-data-details">
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
