import { useEffect,useState } from "react"
export const Auth = () => {

    const[auth ,setAuth] = useState({
        token:false
    })
    useEffect(()=>{
        
        setAuth(JSON.parse(localStorage.getItem('auth') || ""))

    },[])

    

    if(auth) return auth.token

    return false
}
