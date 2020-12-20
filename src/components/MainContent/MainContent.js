import { useState } from 'react'
import './MainContent.css'
import Account from '../Account/Account'
import Home from '../Home/Home'
import LoginForm from '../LoginForm/LoginForm'
function MainContent(props) {
  return (
    <div className="mainContent">
      {props.targets[props.target] === undefined  ? "Pogczamp" : props.targets[props.target]} 
    </div>

    )

}



export default MainContent