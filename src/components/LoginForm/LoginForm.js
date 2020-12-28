import React from 'react'
import './LoginForm.css'


function LoginForm(props) { 

   
    return (
        
        <div className="loginForm">
            <form>
                <header>LOGOWANIE</header>
                <input type="text" name="name" placeholder="Pseudonim" />
                <input type="password" name="password" placeholder="Hasło"  />
                <div className="loginButtons">
                    <button 
                    type="button" 
                        name="logged"
                        value={true}
                        onClick={props.log}
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

