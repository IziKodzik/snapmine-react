import React from 'react'
import './Header.css'

function Header(props){

    return (
        <div className="header">
            <header>
                <span>
                    {props.serverName}
                </span>
                <div className="ip">
                    {props.serverIP}
                </div>
            </header>

        </div>
    )

}

export default Header