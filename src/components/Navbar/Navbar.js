import React from 'react'
import Menu from '../Menu/Menu'
import LoginC from '../LoginControll/LoginControll'
import getRoutes from '../../data/Routes'
class Navbar extends React.Component{


    constructor(props){
        super(props)
        this.state = {routes : getRoutes({tf:"rf",log : props.methods.seter})
                        ,logged : false}
        this.setView = this.setView.bind(this)
        this.setPState = this.setPState.bind(this) 
    }

    setView(event){
        this.props.setView({name:event.target.value,component:this.state.routes[event.target.value]})
    }
    setPState(state){
        this.props.setState(state)
    }
    render(){

        return(
        
            <nav className="navbar">
            
                <Menu 
                    setView={this.setView}
                    logged={this.props.logged}
                />
                <LoginC 
                    logged={this.props.logged}
                    setView={this.setView}
                    appClick={this.props.methods.seter}
                />
            </nav>
        )
    }
}
export default Navbar