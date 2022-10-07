import './login.scss'
import logo from '../../assets/Group.png'
import bilboard from '../../assets/pablo.png'

export const Login = () => {
  return (
    <div className='login'>
        <div className='login-logo-brand'>
            <img src={logo} alt="brand"/>
        </div>
        <div className="login-container">
            <div className='left-side'>
                <div className='pablo'>
                    <img src={bilboard} alt="bilboard" />
                </div>
            </div>
            <div className='right-side'>
                <form className="right-side-form">
                    <h1>Welcome!</h1>
                    <p className='p-details'>Enter details to login.</p>
                    <div className='email-form'>
                        <input type="text" placeholder='Email' />
                    </div>
                    <div className='password-form'>
                        <input type="password" placeholder='Password' />
                        <button className='show-btn'>SHOW</button>
                    </div>
                    <p className='forgot-password'>FORGOT PASSWORD?</p>
                    <button type='submit' className='submit-btn'> LOG IN</button>
                </form>
            </div>
        </div>
        
    </div>
  )
}
