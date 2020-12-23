import React, { useEffect } from 'react'
import Menu from '../Menu/Menu'
import LoginC from '../LoginControll/LoginControll'

import RegisterForm from '../RegisterForm/RegisterForm'
import LoginForm from '../LoginForm/LoginForm'
import Home from '../Home/Home'
import Recrutation from '../Recrucation/Recrutation'
import LabelView from '../LabelView/LabelView'
import DefaultView from '../DefaultView/DefaultView'
import getRoutes from '../../data/Routes'

class Navbar extends React.Component{


    constructor(props){
        super(props)
    }
    render(){
    
    return(
        <nav className="navbar">
            <Menu handleClick={this.props.handleClick}/>
            <LoginC handleClick={this.props.handleClick}/>
        </nav>
    )
}
componentDidMount(){
    const methods = {handleChange : this.props.handleChange}
    this.props.setRoutes(getRoutes(methods))
}

getRoutes (methods){
    
return {
    "login" : 
        <LoginForm 
            onChange={methods.handleChange}/>,
    "homePage" : 
        <Home 
            onChange={methods.handleChange}/>,
    "about" : 
        <DefaultView 
            onChange={methods.handleChange}/>,
    "register" : 
        <RegisterForm 
            onChange={methods.handleChange}/>,
    "recrutation" : 
        <Recrutation 
            onChange={methods.handleChange}/>,
    "premium" :     
        <LabelView 
            onChange={methods.handleChange}/>
    }
}
}
export default Navbar