import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addNote } from '../reducers/memo'

class CreateNote extends Component {

    state = {
        isEditing: false,
        value: ''
    }

    handleChange = (e) => {
        this.setState({
            value: e.currentTarget.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();

        this.props.addNote({
            memoID: this.props.memoID,
            noteValue: this.editTaskInput.value
        })

        this.setState({
            isEditing: false,
            value: ''
        })
    }

    handleAddNote = (e) => {
        e.preventDefault();

        this.setState({
            isEditing: true
        }, () => {
            this.editTaskInput.focus();
        })
    }

    handleCancel = () => {
        this.setState({
            isEditing: false
        })
    }

    render() {

        if (this.state.isEditing) {
            return (
                <div className="note isEditing">
                    <form onSubmit={this.handleSubmit}>
                        <textarea
                            className="textarea"
                            onChange={this.handleChange}
                            ref={node => this.editTaskInput = node}
                            type="text"
                            value={this.state.value}>
                        </textarea>
                        <footer className="footer">
                            <button type="button" className="button button--secondary" onClick={this.handleCancel}>
                                Cancel
                            </button>
                            <button type="submit" className="button button--primary">
                                Create
                            </button>
                        </footer>
                    </form>
                </div>
            )
        }

        return (
            <button className="memo-add-note-button" onClick={this.handleAddNote}>+</button>

        )
    }

}

CreateNote = connect(null, {addNote})(CreateNote)

export { CreateNote }
