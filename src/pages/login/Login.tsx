import './login.scss'
import logo from '../../assets/Group.png'
import bilboard from '../../assets/pablo.png'

export const Login = () => {
  return (
    <div>
        <div>
            <div className='logo-brand'>
                <img src={logo} alt="brand"/>
            </div>
            <div>
                <img src={bilboard} alt="bilboard" />
            </div>
            <div>
                <h1>Welcome!</h1>
                <p>Enter details to login.</p>
                <div>
                    <input type="text" />
                </div>
                <div>
                    <input type="password" />
                    <button>SHOW</button>
                </div>
                <p>Forgot PASSWORD?</p>
                <button type='submit'> LOG IN</button>
            </div>

        </div>
    </div>
  )
}
