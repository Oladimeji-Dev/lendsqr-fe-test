import filterIcon from '../../../assets/filter.png'
import './TableHead.scss'

interface Props{
    handleModal:()=>void
}

export const TableHead = ({handleModal}:Props) => {

    
    
  return (
    <thead>
        <tr className='table-head-row'>
            <th onClick={handleModal}>
                <span>organization</span>
                <img src={filterIcon} alt="filtericon" /> 
            </th>
            <th onClick={handleModal}>
                <span>Username</span>
                <img src={filterIcon} alt="filtericon" /> 
            </th>
            <th onClick={handleModal}>
                <span>Email</span>
                <img src={filterIcon} alt="filtericon" /> 
            </th>
            <th onClick={handleModal}>
                <span>Phone number</span>
                <img src={filterIcon} alt="filtericon" /> 
            </th>
            <th onClick={handleModal}>
                <span>Date joined</span>
                <img src={filterIcon} alt="filtericon" /> 
            </th>
            <th onClick={handleModal}>
                <span>Status</span>
                <img src={filterIcon} alt="filtericon" /> 
            </th>
            <th >

            </th>
        </tr>
    </thead>

  )
}
