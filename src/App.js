import React from 'react'
import './App.css'
import Header from './components/Header/Header'
import AppContent from './components/AppContent/AppContent'

class App extends React.Component{



    render(){
        return (
            <div className="app">
                <Header 
                    serverName="SnapMine"
                    serverIP="46.29.23.166"
                />
                <AppContent/>
            </div>
        )
    }

}
export default App