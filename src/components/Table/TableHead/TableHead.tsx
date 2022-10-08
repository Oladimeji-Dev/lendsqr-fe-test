import filterIcon from '../../../assets/filter.png'
import './TableHead.scss'
export const TableHead = () => {
  return (
    <thead>
        <tr className='table-head-row'>
            <th>
                <span>organization</span>
                <img src={filterIcon} alt="filtericon" /> 
            </th>
            <th>
                <span>Username</span>
                <img src={filterIcon} alt="filtericon" /> 
            </th>
            <th>
                <span>Email</span>
                <img src={filterIcon} alt="filtericon" /> 
            </th>
            <th>
                <span>Phone number</span>
                <img src={filterIcon} alt="filtericon" /> 
            </th>
            <th>
                <span>Date joined</span>
                <img src={filterIcon} alt="filtericon" /> 
            </th>
            <th>
                <span>Status</span>
                <img src={filterIcon} alt="filtericon" /> 
            </th>
            <th>

            </th>
        </tr>
    </thead>

  )
}
