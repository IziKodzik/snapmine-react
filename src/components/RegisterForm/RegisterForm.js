import './RegisterForm.css'
import React, {Component} from 'react'
class RegisterForm extends Component{
    
    constructor(props){
        super(props)
        this.state = {
            email : "",
            name : "",
            password : "",
            passwordRepeted :""
        }
        this.register = this.register.bind(this)
        this.handleChange = this.handleChange.bind(this)

    }

    register(){
        fetch("http://127.0.0.1:8080/client/add", { 
      
            method: "POST", 
            body: JSON.stringify(
                this.state
            ), 
            headers: { 
                "Content-type": "application/json; charset=UTF-8",
                
            } 
        })
        .then(response => response.json()).then(json=> console.log(json)).catch(e=> alert("error: " + e))
       
    }
    handleChange(event){
        const {name,value} = event.target
        this.setState({
            [name] : value
        })
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
                        onChange={this.handleChange} 
                    />
                    <input 
                        type="text"
                        name="name" 
                        placeholder="Pseudonim" 
                        onChange={this.handleChange}
                    />
                    <input type="password" 
                        name="password" 
                        placeholder="Hasło" 
                        onChange={this.handleChange}
                    />
                    <input 
                        type="password" 
                        name="passwordRepeted" 
                        placeholder="Powtórz hasło" 
                        onChange={this.handleChange}
                        />
                    <button 
                        type="button"
                        name="register" 
                        onClick={this.register}
                        onChange={this.handleChange}
                        >
                     
                        UTWÓRZ KONTO
                    </button>
                </form>
            </div>
    )
    }
}

export default RegisterForm

