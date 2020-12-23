import React from 'react'
import Menu from '../Menu/Menu'
import LoginC from '../LoginControll/LoginControll'
import RegisterForm from '../RegisterForm/RegisterForm'
import LoginForm from '../LoginForm/LoginForm'
import Home from '../Home/Home'
import Recrutation from '../Recrucation/Recrutation'
import LabelView from '../LabelView/LabelView'
import DefaultView from '../DefaultView/DefaultView'

class Navbar extends React.Component{


    constructor(props){
        super(props)
        this.getRoutes = this.getRoutes.bind(this)
    }
    
    render(){
    return(
        <nav className="navbar">
            <Menu 
                handleClick={this.props.handlers.handleClick}
            />
            <LoginC 
                handleClick={this.props.handlers.handleClick}
                handleChange={this.props.handlers.handleChange}
            />
        </nav>
    )
}
componentDidMount(){
    this.props.setRoutes(this.getRoutes(this.props.handlers))
}

getRoutes (handlers){
    
    return {
        "login" : 
            <LoginForm 
                handleChange={handlers.handleChange}/>,
        "homePage" : 
            <Home 
                onChange={handlers.handleChange}/>,
        "about" : 
            <DefaultView 
                onChange={handlers.handleChange}/>,
        "register" : 
            <RegisterForm 
            handleChange={handlers.handleChange}
            register={handlers.sendFetchClick}/>,
        "recrutation" : 
            <Recrutation 
                onChange={handlers.handleChange}/>,
        "premium" :     
            <LabelView 
                onChange={handlers.handleChange}/>
        }
    }

}
export default Navbar