import React from 'react'
import './LoginControll.css'

class Login extends React.Component {

    constructor(props){
        super(props)
        
        this.state = {logged : this.props.logged}
        this.handleChange = this.handleChange.bind(this)
        this.enchancedSetStateClick = this.enchancedSetStateClick.bind(this)
    }

    handleChange(event){
        const {name,value} = event.target
        this.setState({[name] : value})
    }
    enchancedSetStateClick(event){
        this.props.appClick(event)
        this.props.setView(event)
        
    }
    render(){
        return (
            <nav className="accountManager">
            {!this.props.logged.localeCompare("0") ? 
            <div>
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
            </div> :
            <div>
            <button
                type="button"
                name="logged"
                surname="login"
                value={0}
                onChange={this.handleChange}
                onClick={this.enchancedSetStateClick}

            >
                WYLOGUJ
            </button>
            <button
                name="focused"
                value="account"
                onChange={this.handleChange}
                onClick={this.props.setView}
            >
                PROFIL
            </button>  
            </div>}
        </nav>
        )
    }


}

export default Login