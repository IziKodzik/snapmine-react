import React from 'react'
import './LoginForm.css'


function LoginForm(params) { 

    return (
        <div className="loginForm">
            <form>
                <header>LOGOWANIE</header>
                <input type="text" name="login" placeholder="Login"/>
                <input type="password" name="password" placeholder="Hasło"/>
                <div className="loginButtons">
                    <button type="button" name="login" onClick={trys}>ZALOGUJ</button>
                    <button type="button" name="remind">PRZYPOMNIJ HASŁO</button>
                </div>
            </form>
        </div>
    )

}

export default LoginForm
function trys(params) {
    fetch('http://localhost:8080/api/v1/client').then(response=>response.json()).then(result =>{
        console.log(result)
    }).catch(e=>{console.error('Error',e)})
}