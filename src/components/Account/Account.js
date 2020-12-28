import React from 'react'

const account = (props)=>{

    return (
        <div> 
        <div>
            <button
                type="button"
                name="logged"
                value={false}
                onClick={this.props.appClick}
            >
                WYLOGUJ
            </button>
            <button
                name="focused"
                value="account"
                onChange={this.handleChange}
                onClick={this.props.setView}
            >
                PROFIL
            </button>  
            </div>

        </div>
        
    )

}

export default account