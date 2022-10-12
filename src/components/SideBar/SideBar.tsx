import './SideBar.scss'
import briefcaseIcon from '../../assets/briefcase.png'
import downIcon from '../../assets/down-vector.png'
import dashIcon from '../../assets/home.png'
import userFriendsIcon from '../../assets/user-friends.png'
import guarantors from '../../assets/guarantors.png'
import Loans from '../../assets/Loans.png'
import Decision from '../../assets/Decision.png'
import Savings from '../../assets/Savings.png'
import Loanrequest from '../../assets/Loan-request.png'
import Whitelist from '../../assets/Whitelist.png'
import karma from '../../assets/karma.png'
import bank from '../../assets/bank.png'
import coins from '../../assets/coins.png'
import trasaction from '../../assets/trasaction.png'
import spinner from '../../assets/spinner.png'
import serviceAccount from '../../assets/service-account.png'
import scroll from '../../assets/scroll.png'
import preferance from '../../assets/preferance.png'
import fees from '../../assets/fees.png'
import audit from '../../assets/audit.png'
import sysmessages from '../../assets/sysmessages.png'
import logOut from '../../assets/log-out.png'
import { useNavigate } from 'react-router-dom'

export const SideBar = () => {
    const navigate = useNavigate()
    
    function handleLogout(){
        //clear the local storage to remove all the data
        localStorage.clear()
        //navigate back to the login page
        navigate('/')
        
    }

  return (
    <div className='side-bar'>
        <div className='side-item side-item-switchOrg'>
            <li className='sideimage'>
                <img src={briefcaseIcon} alt="briefcase-icon"  />
            </li>
            <li className='sideText'>Switch Organization</li>
            <li className='sideimage'>
                <img src={downIcon} alt="down-icon"  />
            </li>
        </div>
        <div className='side-item side-item-dash'>
            <li className='sideimage'>
                <img src={dashIcon} alt="briefcase-icon"  />
            </li>
            <li className='sideText'>Dashboard</li>
        </div>

        <p className='side-item-head'>CUSTOMERS</p>

        <div className='side-item side-item-dash active'>
            <li className='sideimage'>
                <img src={userFriendsIcon} alt="briefcase-icon"  />
            </li>
            <li>Users</li>
        </div>
        <div className='side-item side-item-dash'>
            <li className='sideimage'>
                <img src={userFriendsIcon} alt="briefcase-icon"  />
            </li>
            <li className='sideText'>Guarantors</li>
        </div>
        <div className='side-item side-item-dash'>
            <li className='sideimage'>
                <img src={guarantors} alt="briefcase-icon"  />
            </li>
            <li className='sideText'>Loans</li>
        </div>
        <div className='side-item side-item-dash'>
            <li className='sideimage'>
                <img src={Loans} alt="briefcase-icon"  />
            </li>
            <li className='sideText'>Decision Models</li>
        </div>
        <div className='side-item side-item-dash'>
            <li className='sideimage'>
                <img src={Decision} alt="briefcase-icon"  />
            </li>
            <li className='sideText'>Savings</li>
        </div>
        <div className='side-item side-item-dash'>
            <li className='sideimage'>
                <img src={Savings} alt="briefcase-icon"  />
            </li>
            <li className='sideText'>Loan Requests</li>
        </div>
        <div className='side-item side-item-dash'>
            <li className='sideimage'>
                <img src={Whitelist} alt="briefcase-icon"  />
            </li>
            <li className='sideText'>Whitelist</li>
        </div>
        <div className='side-item side-item-dash'>
            <li className='sideimage'>
                <img src={karma} alt="briefcase-icon"  />
            </li>
            <li className='sideText'>Karma</li>
        </div>
        <p className='side-item-head'>BUSINESSES</p>
        <div className='side-item side-item-dash'>
            <li className='sideimage'>
                <img src={briefcaseIcon} alt="briefcase-icon"  />
            </li>
            <li className='sideText'>Organization</li>
        </div>
        <div className='side-item side-item-dash'>
            <li className='sideimage'>
                <img src={Loanrequest} alt="briefcase-icon"  />
            </li>
            <li className='sideText'>Loan Products</li>
        </div>
        <div className='side-item side-item-dash'>
            <li className='sideimage'>
                <img src={bank} alt="briefcase-icon"  />
            </li>
            <li className='sideText'>Savings Products</li>
        </div>
        <div className='side-item side-item-dash'>
            <li className='sideimage'>
                <img src={coins} alt="briefcase-icon"  />
            </li>
            <li className='sideText'>Fees and Charges</li>
        </div>
        <div className='side-item side-item-dash'>
            <li className='sideimage'>
                <img src={trasaction} alt="briefcase-icon"  />
            </li>
            <li className='sideText'>Transactions</li>
        </div>
        <div className='side-item side-item-dash'>
            <li className='sideimage'>
                <img src={spinner} alt="briefcase-icon"  />
            </li>
            <li className='sideText'>Services</li>
        </div>

        <p className='side-item-head'>Service Account</p>
        <div className='side-item side-item-dash'>
            <li className='sideimage'>
                <img src={serviceAccount} alt="briefcase-icon"  />
            </li>
            <li className='sideText'>Settlements</li>
        </div>
        <div className='side-item side-item-dash'>
            <li className='sideimage'>
                <img src={scroll} alt="briefcase-icon"  />
            </li>
            <li className='sideText'>Reports</li>
        </div>
        <p className='side-item-head'>SETTINGS</p>
        <div className='side-item side-item-dash'>
            <li className='sideimage'>
                <img src={preferance} alt="briefcase-icon"  />
            </li>
            <li className='sideText'>Preferences</li>
        </div>
        <div className='side-item side-item-dash'>
            <li className='sideimage'>
                <img src={fees} alt="briefcase-icon"  />
            </li>
            <li>Fees and Pricing</li>
        </div>
        <div className='side-item side-item-dash'>
            <li className='sideimage'>
                <img src={audit} alt="briefcase-icon"  />
            </li>
            <li className='sideText'>Audit Logs</li>
        </div>
        <div className='side-item side-item-dash'>
            <li className='sideimage'>
                <img src={sysmessages} alt="briefcase-icon"  />
            </li>
            <li className='sideText'>Systems Messages</li>
        </div>
        <div className='side-item side-item-dash' onClick={handleLogout}>
            <li className='sideimage'>
                <img src={logOut} alt="briefcase-icon"  />
            </li>
            <li className='sideText'>Logout</li>
        </div>
    </div>
  )
}
