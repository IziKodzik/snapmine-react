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
            routes:{
                    
            },
            user:"guest"
        
        }
        this.setRoutes = this.setRoutes.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.sendFetchClick = this.sendFetchClick.bind(this)
    }

    handleChange(event){
       const {name,value} = (event.target)
        this.setState({[name] : value})
    }

    setRoutes(paths){
        this.setState({routes : paths})
    }

    handleClick(event){

        const {name,type,checked,value} = event.target
        type !== "checkbox"? this.setState({[name] : value})
        : this.setState((prev)=>{
            return {[name] : !prev.name}
        })
    }
    sendFetchClick(fetchData){
        console.log(fetchData)
    }

    

    render(){

        return (
            <div className="AppConent">
                
                <Navbar 
                    handlers={{handleClick : this.handleClick,handleChange : this.handleChange,sendFetchClick : this.sendFetchClick}}
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