import React from 'react'
import './LoginControll.css'

class Login extends React.Component {

    constructor(props){
        super(props)
        this.state = {}
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event){
        const {name,value} = event.target
        this.setState({[name] : value})
    }

    render(){
        return (
            <nav className="accountManager">
            <button
                name="focused"
                value="login"
                onChange={this.handleChange}
                onClick={this.props.setView}
            >
                ZALOGUJ SIĘ
            </button>
            <button
                name="focused"
                value="register"
                onChange={this.handleChange}
                onClick={this.props.setView}
            >
                ZAREJESTRUJ
            </button>

        </nav>
        )
    }


}

export default Login