import React, { useEffect, useState } from 'react'
import './Users.scss'
import ReactPaginate from 'react-paginate';
import cardIcon from '../../assets/card-icon.png'
import cardIcon1 from '../../assets/card-icon2.png'
import cardIcon2 from '../../assets/card-icon3.png'
import cardIcon3 from '../../assets/card-icon4.png'
import { CardUser } from '../CardUser/CardUser'
import { Table } from '../Table/Table'
import {Data} from '../../model'
export const Users = () => {

  interface PageData{
    selected:number
  }

  

  const[fetchedData, setFectchedData] =useState([])
  const[pageSelected, setPageSelected] =useState(1)
  const[dataSelected, setDataSelected] = useState<Data[]>([])
  
  
  useEffect(()=>{
    const datas: Data[] = []
    const localStorageData = localStorage.getItem('usersData') || ""
    const parseData = JSON.parse(localStorageData)
    setFectchedData(parseData)
    //default data to load
    for (let index = 0; index < 10; index++) {
      datas.push(parseData[index])
    }

    setDataSelected(datas)
   
  },[])

  
    
  const handlePageClick = (data:PageData):void =>{
     const selected = data.selected + 1
    const datas: Data[] = []
    setPageSelected( selected)

    const perPage = 10
    const currentPage = selected
    const start = ( currentPage * perPage ) - perPage
    const end = (currentPage * perPage)

    for (let index = start; index < end; index++) {
      datas.push(fetchedData[index])
    }
    
    setDataSelected(datas)
  
  }


  console.log(dataSelected)

  return (
    <div className='users-side'>
        <div className="users-side-container">
          <h1 >Users</h1>
          <div className="card-users">
            <CardUser icon={cardIcon} value='USERS' users='2,453'/>
            <CardUser icon={cardIcon1} value='ACTIVE USERS' users='2,453'/>
            <CardUser icon={cardIcon2} value='USERS WITH LOANS' users='12,453'/>
            <CardUser icon={cardIcon3} value='USERS WITH SAVINGS' users='102,453'/>
          </div>
          <Table dataSelected = {dataSelected} />
          <footer className='user-side-container-footer'>
            <div className="show-result">
              <p>Showing</p>
              <select name="result" id="">
                <option value="100">100</option>
              </select>
              <p>out of 100</p>
            </div>

            <ReactPaginate 
              previousLabel=" < "
              breakLabel=" ... "
              nextLabel=" > "
              pageCount={fetchedData.length/10}
              marginPagesDisplayed ={3}
              onPageChange={handlePageClick}
              containerClassName={'pagination'}
              pageClassName={'page-item'}
              previousClassName ={'arrow-item'}
              nextClassName={'arrow-item'}
              breakClassName={'page-item'}
            />  
          </footer>
        </div>
    </div>
  )
}
