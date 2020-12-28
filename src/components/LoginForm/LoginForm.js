import React, { useState } from 'react'
import './LoginForm.css'



function LoginForm(props) { 
    

    const [login,setLogin] = useState("")
    const [pass,setPass] = useState("")
        


const enchancedAppClick = (event)=>{
    props.appClick(event)
    console.log(pass)
    console.log(login)
    //validate login and password and get token to the browser
    props.setView(event)


}
    return (
        
        <div className="loginForm">
            <form>
                <header>LOGOWANIE</header>
                <input type="text" name="name" placeholder="Pseudonim" onChange={e=>setLogin(e.target.value)} />
                <input type="password" name="password" placeholder="Hasło"onChange={e=>setPass(e.target.value)}  />
                <div className="loginButtons">
                    <button 
                    type="button" 
                        name="logged"
                        value={1}
                        onClick={enchancedAppClick}
                        view="account"
                    >
                        ZALOGUJ
                    </button>
                    <button 
                        type="button" 
                        name="remind">
                        PRZYPOMNIJ HASŁO
                    </button>
                </div>
            </form>
        </div>
    )

}

export default LoginForm

