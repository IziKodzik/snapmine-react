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
            view:"None",
            routes:{
                    
            },
            user:"guest"
        
        }
        this.setView = this.setView.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.sendFetchClick = this.sendFetchClick.bind(this)
    }
    

    handleChange(event){
       const {name,value} = (event.target)
        this.setState({[name] : value})
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


    setView(currentView){
        this.setState({view : currentView})
    }

    render(){

        return (
            <div className="AppConent">
                
                <Navbar 
                    setView={this.setView}
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
                                <MainContent view={this.state.view}/>
                        </CSSTransition>

                    </TransitionGroup>
                    
                </main>
            </div>
        )
    }

}


export default AppContent