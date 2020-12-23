import React from 'react'
import './LoginControll.css'

class Login extends React.Component {

    constructor(props){
        super(props)
    }


    render(){
        return (
            <nav className="accountManager">
            <button
                name="focused"
                value="login"
                onClick={this.props.setView}
            >
                ZALOGUJ SIĘ
            </button>
            <button
                name="focused"
                value="register"
                onClick={this.props.setView}
            >
                ZAREJESTRUJ
            </button>

        </nav>
        )
    }


}

export default Login