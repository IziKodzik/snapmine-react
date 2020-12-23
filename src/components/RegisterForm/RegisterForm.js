import './RegisterForm.css'
import React, {Component} from 'react'
class RegisterForm extends Component{
    
    constructor(props){
        super(props)
        this.state = {
            email : "",
            login : "",
            password : "",
            passwordRepeted :""
        }
        this.post = this.post.bind(this)

    }

    post(){
        fetch("http://localhost:8080/api/v1/client", { 
      
            method: "POST", 
            body: JSON.stringify(
                this.state
            ), 
            headers: { 
                "Content-type": "application/json; charset=UTF-8"
            } 
        })
        .then(response => console.log(response))
       
    }

    render(){
        return(
            <div className="registerForm">
                <form>
                    <header>REJESTRACJA</header>
                    <input 
                        type="text" 
                        name="email" 
                        placeholder="Adres e-mail" 
                        onChange={this.props.handleChange} 
                    />
                    <input 
                        type="text"
                        name="login" 
                        placeholder="Login" 
                        onChange={this.props.handleChange}
                    />
                    <input type="password" 
                        name="password" 
                        placeholder="Hasło" 
                        onChange={this.props.handleChange}
                    />
                    <input 
                        type="password" 
                        name="passwordRepeted" 
                        placeholder="Powtórz hasło" 
                        onChange={this.props.handleChange}
                        />
                    <button 
                        type="button"
                        name="register" 
                        onClick={this.post}
                        onChange={this.props.handleChange}
                        >
                     
                        UTWÓRZ KONTO
                    </button>
                </form>
            </div>
    )
    }
}

export default RegisterForm

