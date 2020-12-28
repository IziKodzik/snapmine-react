import React from 'react'
import './LoginControll.css'

class Login extends React.Component {

    constructor(props){
        super(props)
        
        this.state = {logged : this.props.logged}
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event){
        const {name,value} = event.target
        this.setState({[name] : value})
    }

    render(){
        console.log(this.props.logged)
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
                value={0}
                onChange={this.handleChange}
                onClick={this.props.appClick}
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

            // <nav className="accountManager">
            // {!this.props.logged ? 
            // <div>
            // <button
            //     name="focused"
            //     value="login"
            //     onChange={this.handleChange}
            //     onClick={this.props.setView}
            // >
            //     ZALOGUJ SIĘ
            // </button>
            // <button
            //     name="focused"
            //     value="register"
            //     onChange={this.handleChange}
            //     onClick={this.props.setView}
            // >
            //     ZAREJESTRUJ
            // </button>
            // </div> :
            // <div>
            // <button
            //     name="logged"
            //     value={false}
            //     onChange={this.handleChange}
            //     onClick={this.props.appClick}
            // >
            //     WYLOGUJ
            // </button>
            // <button
            //     name="focused"
            //     value="account"
            //     onChange={this.handleChange}
            //     onClick={this.props.setView}
            // >
            //     PROFIL
            // </button>  
            // </div>}
        // </nav>
        )
    }


}

export default Login