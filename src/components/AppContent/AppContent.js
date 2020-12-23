import './AppContent.css'

import React ,{Component} from 'react'
import Menu from '../Menu/Menu'
import LoginC from '../LoginControll/LoginControll'
import MainContent from '../MainContent/MainContent'
import {CSSTransition, TransitionGroup} from 'react-transition-group'
import getRoutes from '../../data/Routes'
import Navbar from '../Navbar/Navbar'


class AppContent extends Component{

    constructor(props){
        super(props)
        this.state = {
            logged:false,
            show: true,
            focused:"None",
            views:{
                    
            },
            user:"guest",
            routes : {}
        
        }
        this.setRoutes = this.setRoutes.bind(this)
        this.handleClick = this.handleClick.bind(this)
        // this.handleOtherClick = this.handleOtherClick(this)
        this.handleChange = this.handleChange(this)
    }

    handleChange(event){
        console.log("xdd")
    }

    setRoutes(paths){
        console.log("Co tam byczku")
        this.setState({routes : paths})
    }

    handleClick(event){

        const {name,type,checked,value} = event.target
        type !== "checkbox"? this.setState({[name] : value})
        : this.setState((prev)=>{
            return {[name] : !prev.name}
        })
    }
    sendFetchClick(name,type,value){
    }


    render(){

        return (
            <div className="AppConent">
                
                <Navbar 
                    handleClick={this.handleClick}
                    setRoutes={this.setRoutes}
                />
                <main>  
                    <TransitionGroup>
                        <CSSTransition
                        key={this.state.focused}
                        classNames="fade"
                        timeout={300}
                        appear={true}
                        unmountOnExit={true}
                        exit={false}>
                            <MainContent 
                                handleChange={this.handleChange}
                                target={this.state.focused}
                                targets={this.state.routes}       
                            />
                        </CSSTransition>

                    </TransitionGroup>
                    
                </main>
            </div>
        )
    }

}


export default AppContent