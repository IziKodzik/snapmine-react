import React from 'react'

function Menu(props) {
    return(
        <nav className="menu">
        <button
            name="focused"
            view="homePage"
            onClick={props.setView}
        >
            STRONA GŁÓWNA
        </button>           
        <button
            name="focused"
            view="recrutation"
            onClick={props.setView}
        >
            DOŁĄCZ DO ZESPOŁU
        </button>
        <button
            name="focused"
            view="about"
            onClick={props.setView}
        >
            O NAS
        </button>
        <button
            className="btn-premium"
            name="focused"
            view="premium"
            onClick={props.setView}
        >
            SKLEP
        </button>
    </nav>
    )
}

export default Menu