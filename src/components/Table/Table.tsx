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
            <TableData/>
            <TableData/>
            <TableData/>
            <TableData/>
        </tbody>
        <div className="filter-data-lists">
            <div className="filter-data-list">
                <p>Organization</p>
                <select name="" id="">
                    <option value="1">Select</option>
                </select>
            </div>
            <div className="filter-data-list">
                <p>Organization</p>
                <select name="" id="">
                    <option value="1">Select</option>
                </select>
            </div>
            <div className="filter-data-list">
                <p>Organization</p>
                <select name="" id="">
                    <option value="1">Select</option>
                </select>
            </div>
            <div className="filter-data-list">
                <p>Organization</p>
                <select name="" id="">
                    <option value="1">Select</option>
                </select>
            </div>
            <div className="filter-data-list">
                <p>Organization</p>
                <select name="" id="">
                    <option value="1">Select</option>
                </select>
            </div>
            <div className="filter-data-list">
                <p>Organization</p>
                <select name="" id="">
                    <option value="1">Select</option>
                </select>
            </div>
            <div className="filter-data-list">
                <p>Organization</p>
                <select name="" id="">
                    <option value="1">Select</option>
                </select>
            </div>
        </div>
    </table>
  )
}
