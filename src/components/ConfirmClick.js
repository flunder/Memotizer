import React, { Component } from 'react'
import Anime from 'react-anime'
import { connect } from 'react-redux'
import { showConfirmDialog } from '../reducers/memo'

class ConfirmClick extends Component {

    state = {
        questioning: false
    }

    componentWillReceiveProps(newProps){
        if (newProps.dialogID !== this.props.id) {
            this.hideQuestion();
        }
    }

    showQuestion = () => {
        this.setState({ questioning: true })
        this.props.showConfirmDialog(this.props.id);
    }

    hideQuestion = () => {
        this.setState({ questioning: false })
    }

    toggle = () => {
        this.setState(state => ({ questioning: !state.questioning } ))
        this.props.showConfirmDialog(this.props.id);
    }

    render() {
        return (
            <div className={this.props.className}>

                <div onClick={this.toggle}>
                    {this.props.children}
                </div>

                {this.state.questioning &&
                    <Anime
                        translateX={[15, 0]}
                        opacity={[0, 1]}
                        scale={[0.98,1]}>
                        <div className="confirmWrap noSelect">
                            <button className="button--primary" onClick={this.props.onClick}>Sure</button>
                            <button className="button--secondary" onClick={this.hideQuestion}>Cancel</button>
                        </div>
                    </Anime>
                }
            </div>
        )
    }
}

ConfirmClick = connect(
    state => ({ dialogID: state.memo.confirmDialogID }),
    { showConfirmDialog }
)(ConfirmClick)

export { ConfirmClick  }
