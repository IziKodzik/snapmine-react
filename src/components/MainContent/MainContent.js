import { useState } from 'react'
import './MainContent.css'
import Account from '../Account/Account'
import Home from '../Home/Home'
import LoginForm from '../LoginForm/LoginForm'
function MainContent(props) {
    return (
      <div className="mainContent">
        {props.view}
      </div>

    )

}



export default MainContent