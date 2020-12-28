import React from 'react'
import Menu from '../Menu/Menu'
import LoginC from '../LoginControll/LoginControll'
import getRoutes from '../../data/Routes'
class Navbar extends React.Component{


    constructor(props){
        super(props)
       
        this.setView = this.setView.bind(this)
        this.setPState = this.setPState.bind(this)
        this.state = {routes : getRoutes({appClick : props.methods.appClickHandle,
            setView : this.setView,

        })
        ,logged : false} 
    }

    setView(event){
        if(event !== undefined){
            const view = (event.target.attributes.view.value)
            const target = {name:view,component:this.state.routes[view]}
            this.props.setView(target)
        }else{
            this.props.setView(this.state.routes["login"])
        }
        
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
                    appClick={this.props.methods.appClickHandle}
                />
            </nav>
        )
    }
}
export default Navbar