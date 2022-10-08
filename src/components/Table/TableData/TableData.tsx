import './TableData.scss'
import dotIcon from '../../../assets/3dotvector.png'
export const TableData = () => {
  return (
    <tr className='table-data-row'>
        <td>Lendsqr</td>
        <td>Adedeji</td>
        <td>adedeji@lendsqr.com</td>
        <td>08078903721</td>
        <td>May 15, 2020 10:00 AM</td>
        <td> <span className='inactive'>Inactive</span> </td>
        <td><img src={dotIcon} alt="dotIcon" /></td>
    </tr>
  )
}
