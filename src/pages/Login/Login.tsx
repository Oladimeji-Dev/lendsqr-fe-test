import './Login.scss'
import logo from '../../assets/logo.svg'
import bilboard from '../../assets/pablo.png'
import { useState } from 'react'
import { login } from '../../model'
import { useNavigate } from 'react-router-dom'



export const Login = () => {

    const navigate = useNavigate()
    
    const[loading,setLoading] = useState(false)
    const [show, setShow] = useState(false)
    const [formInput, setFormInput] = useState<login>({
        email: "",
        password: "",
    })

    const handleShowPass = (e:React.SyntheticEvent): void =>{
        e.preventDefault()

        setShow(!show)
        
    }

    function handleChangeInput(e: React.FormEvent<HTMLInputElement>){
        
        const {name,value} = e.currentTarget

        setFormInput(intitialUserInfo =>({
          ...intitialUserInfo, [name]:value
        }))

    }
    //validate the login page and send navigate to dashboard
    const handleOnsubmit = (e:React.SyntheticEvent): void =>{
        e.preventDefault()

        if(formInput.email.trim() === "" || formInput.password.trim() === ""){
           return  alert('input field empty')
        }

        if(formInput.email.toLowerCase() === 'lendsqr@lendsqr.com'){

            if(formInput.password === 'admin'){
                setLoading(true)
                fetch('https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users')
                .then((response) => response.json())
                .then((data) => {
                    localStorage.setItem('usersData', JSON.stringify(data))
                    localStorage.setItem('auth',JSON.stringify({token:true}))
                    setLoading(false)
                })
                //login and not loading successfull and navigate
                setTimeout(()=>{
                    if(!loading) navigate('users')
                },1000)
                
            }else{
                alert('password incorrect')
            }
        }else{
            alert("email not correct")
        }
    }
    
    


  return (
    <div className='login'>

        {loading ? <h4>Loading ...</h4> : 
        <>
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
                <form className="right-side-form" onSubmit={handleOnsubmit}>
                    <h1>Welcome!</h1>
                    <p className='p-details'>Enter details to login.</p>
                    <div className='email-form'>
                        <input  
                        type=  "text" 
                        placeholder='Email' 
                        name='email'
                        onChange={handleChangeInput}/>
                    </div>
                    <div className='password-form'>
                        <input type= {show ? "text" : "password"}   placeholder='Password' 
                        name='password'
                        onChange={handleChangeInput}/>
                        <button type='button' className='show-btn'  onClick={handleShowPass}>{show ? "HIDE" : "SHOW"}  </button>
                    </div>
                    <p className='forgot-password'>FORGOT PASSWORD?</p>
                    <button type='submit' className='submit-btn'> LOG IN</button>
                </form>
            </div>
        </div>
        </>  }

    </div>

  
  )
}
