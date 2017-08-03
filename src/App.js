import React from 'react'
import './styles/empStyle.css'
import Header from './components/Header'
import Main from './components/Main'

class App extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <hr/>
                <Main/>
            </div>
        )
    }
}

export default App;