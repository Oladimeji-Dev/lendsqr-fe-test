import searchicon from '../../assets/searchicon.png'
import './SearchBox.scss'
export const SearchBox = () => {
  return (
    <div className="search-box">
        <div className='nav-search-box'>
            <input type="text" placeholder='Search for anything' />
        </div>
        <button><img src={searchicon} alt="searchicon" /></button>
    </div>
  )
}
