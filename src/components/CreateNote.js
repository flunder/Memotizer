import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addNote } from '../reducers/memo'

class CreateNote extends Component {

    componentWillReceiveProps(newProps) {
        // if (newProps.createMemoId = )
    }

    handleChange = (e) => {
        this.props.updateNoteValue(e.currentTarget.value);
    }

    handleSubmit = (e) => {
        e.preventDefault();
    }

    handleAddNote = (e) => {
        e.preventDefault();
        const newNoteID = this.props.totalNotes + 1;
        this.props.addNote(this.props.memoID, newNoteID);
    }

    render() {

        if (this.props.isEditing) {
            return (
                <div className="note isEditing create-note">
                    <form onSubmit={this.handleSubmit}>
                        <input
                            className="create-note-input"
                            type="text"
                            onChange={this.handleChange}
                        />
                    </form>
                </div>
            )
        }

        return (
            <form onSubmit={this.handleAddNote}>
                <input
                    type="submit"
                    className="memo-add-note-button"
                    value="+"
                />
            </form>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        createMemoId: state.memo.createNote.memoID,
        createNoteId: state.memo.createNote.noteID
    }
}

CreateNote = connect( mapStateToProps , {addNote})(CreateNote)

export { CreateNote }
