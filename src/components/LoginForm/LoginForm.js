import React, {useState} from 'react'
import './LoginForm.css'


function LoginForm(props) { 

    const [name, setName] = useState("")
    const [pass, setPass] = useState("")
    console.log(name)
    console.log(pass)
    return (
        
        <div className="loginForm">
            <form>
                <header>LOGOWANIE</header>
                <input type="text" name="name" placeholder="Pseudonim" onChange={e => setName(e.target.value)}/>
                <input type="password" name="password" placeholder="Hasło"  onChange={e => setPass(e.target.value)}/>
                <div className="loginButtons">
                    <button type="button" 
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

