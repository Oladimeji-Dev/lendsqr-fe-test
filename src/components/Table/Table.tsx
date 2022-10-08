import './Table.scss'
import { TableData } from './TableData/TableData'
import { TableHead } from './TableHead/TableHead'

export const Table = () => {
  return (
    <table className='table' width={"100%"} >
        <TableHead />
        <tbody>
            <TableData/>
            <TableData/>
            <TableData/>
            <TableData/>
            <TableData/>
        </tbody>
    </table>
  )
}
