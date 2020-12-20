import React ,{Component} from 'react'

function Menu(props) {
    return(
        <nav className="menu">
        <button
            name="focused"
            value="homePage"
            onClick={props.handleClick}
        >
            STRONA GŁÓWNA
        </button>           
        <button
            name="focused"
            value="recrutation"
            onClick={props.handleClick}
        >
            DOŁĄCZ DO ZESPOŁU
        </button>
        <button
            name="focused"
            value="about"
            onClick={props.handleClick}
        >
            O NAS
        </button>
        <button
            className="btn-premium"
            name="focused"
            value="premium"
            onClick={props.handleClick}
        >
            SKLEP
        </button>
    </nav>
    )
}

export default Menu