import React, { Component } from 'react'
import { CreateForm, List } from './components'

class App extends Component {
    render() {
        return (
            <div className="App">
                <img src="/assets/images/logo.png" className="logo" alt="Logo" />
                <CreateForm />
                <List />
            </div>
        )
    }
}

export default App
