import './Table.scss'
import filterIcon from '../../assets/filter.png'
export const Table = () => {
  return (
    <table className='table'>
        <thead className='table-head'>
            <tr className='table-head-row'>
                <td className='table-head-row-data'>
                    <span>organization</span>
                    <img src={filterIcon} alt="filtericon" /> 
                    </td>
                <td>
                    <span>Username</span>
                    <img src={filterIcon} alt="filtericon" /> 
                </td>
                <td>
                    <span>Email</span>
                    <img src={filterIcon} alt="filtericon" /> 
                </td>
                <td>
                    <span>Phone number</span>
                    <img src={filterIcon} alt="filtericon" /> 
                </td>
                <td>
                    <span>Date joined</span>
                    <img src={filterIcon} alt="filtericon" /> 
                </td>
                <td>
                    <span>Status</span>
                    <img src={filterIcon} alt="filtericon" /> 
                </td>
            </tr>
        </thead>
    </table>
  )
}
