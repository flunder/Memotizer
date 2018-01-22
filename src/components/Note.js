import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteNote } from '../reducers/memo'

class Note extends Component {

    handleDelete = () => {

        this.props.deleteNote({
            memoID: this.props.memoID,
            noteID: this.props.noteID
        })
    }

    render() {
        const { desc } = this.props;

        return (
            <div className="note">
                {desc}

                <button onClick={this.handleDelete} className="delete">+</button>
            </div>
        )
    }
}

Note = connect(null, {deleteNote})(Note)

export { Note }
