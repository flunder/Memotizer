import React, { Component } from 'react'
import { CreateForm, List } from './components'

class App extends Component {
    render() {
        return (
            <div className="App">
                <CreateForm />
                <List />
            </div>
        )
    }
}

export default App
