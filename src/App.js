import React, { Component } from 'react'
import { CreateForm, List, Filter } from './components'

class App extends Component {
    render() {
        return (
            <div className="App">
                <img src="/assets/images/logo.png" className="logo" alt="Logo" />
                <CreateForm />
                <Filter />
                <List  />
            </div>
        )
    }
}

export default App
