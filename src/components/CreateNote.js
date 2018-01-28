import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addNote, updateNote, showEditMemoDialog } from '../reducers/memo'
import { ConfirmClick } from '.'

class CreateNote extends Component {

    state = {
        isEditing: false,
        value: ''
    }

    componentWillMount(){
        if (this.props.isEditing) this.handleAddNote();
    }

    componentWillReceiveProps(newProps){
        if (newProps.editingDialogID !== this.props.id) {
            if (this.props.isEditing) {
                this.props.cancelEditing();
            } else {
                this.setState({
                    isEditing: false
                })
            }
        }
    }

    handleTextChange = (e) => {
        this.setState({
            value: e.currentTarget.value
        })
    }

    handleAddNote = (e) => {
        if (e) e.preventDefault();

        this.setState({
            isEditing: true,
            value: this.props.desc || ''
        }, () => {
            this.editTaskInput.focus();
        })

        this.props.showEditMemoDialog(this.props.id)
    }

    handleSubmit = (e) => {
        e.preventDefault();

        if (this.props.isEditing) { // SUBMIT AN EDIT

            this.props.updateNote({
                memoID: this.props.memoID,
                noteID: this.props.noteID,
                noteValue: this.editTaskInput.value
            })

            return this.props.cancelEditing();

        } else { // CREATE A NEW ONE

            this.props.addNote({
                memoID: this.props.memoID,
                noteValue: this.editTaskInput.value
            })
            this.setState({
                isEditing: false,
                value: ''
            })

        }
    }

    handleCancel = () => {2
        if (this.props.cancelEditing) return this.props.cancelEditing();

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
                            onChange={this.handleTextChange}
                            ref={node => this.editTaskInput = node}
                            type="text"
                            value={this.state.value}>
                        </textarea>

                        <footer className="footer">

                            <ConfirmClick
                                className="delete"
                                id={`deleteNote-${this.props.memoID}-${this.props.noteID}`}
                                onClick={this.props.deleteFunc}
                                confirmWrapStyles={{ top: 3 }}>
                                <button type="button" className="button button--secondary">Delete</button>
                            </ConfirmClick>

                            <button type="button" className="button button--secondary" onClick={this.handleCancel}>
                                Cancel
                            </button>
                            <button type="submit" className="button button--primary">
                                { this.props.isEditing ? 'Update' : 'Create' }
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

CreateNote = connect(
    state => ({ editingDialogID: state.memo.editingDialogID }),
    { addNote, updateNote, showEditMemoDialog }
)(CreateNote)

export { CreateNote }
