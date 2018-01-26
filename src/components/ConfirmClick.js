import React, { Component } from 'react'
import Transition from 'react-transition-group/Transition'

class ConfirmClick extends Component {

    state = {
        questioning: false
    }

    showQuestion = () => {
        this.setState({questioning: true})
    }

    hideQuestion = () => {
        this.setState({questioning: false})
    }

    toggle = () => {
        this.setState(state => ({ questioning: !state.questioning } ))
    }

    render() {
        return (
            <div className={this.props.className}>

                <div onClick={this.toggle}>
                    {this.props.children}
                </div>

                {this.state.questioning &&
                    <div className="confirmWrap noSelect">
                        <p>Sure?</p>
                        <button className="button--primary" onClick={this.props.onClick}>Yes</button>
                        <button className="button--secondary" onClick={this.hideQuestion}>no</button>
                    </div>
                }
            </div>
        )
    }
}

export { ConfirmClick  }
