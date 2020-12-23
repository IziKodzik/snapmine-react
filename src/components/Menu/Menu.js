import React ,{Component} from 'react'

function Menu(props) {
    return(
        <nav className="menu">
        <button
            name="focused"
            value="homePage"
            onClick={props.setView}
        >
            STRONA GŁÓWNA
        </button>           
        <button
            name="focused"
            value="recrutation"
            onClick={props.setView}
        >
            DOŁĄCZ DO ZESPOŁU
        </button>
        <button
            name="focused"
            value="about"
            onClick={props.setView}
        >
            O NAS
        </button>
        <button
            className="btn-premium"
            name="focused"
            value="premium"
            onClick={props.setView}
        >
            SKLEP
        </button>
    </nav>
    )
}

export default Menu