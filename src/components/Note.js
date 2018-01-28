import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteNote } from '../reducers/memo'
import { CreateNote } from '.'

class Note extends Component {

    state = {
        isEditing: false
    }

    handleDelete = () => {
        this.props.deleteNote({
            memoID: this.props.memoID,
            noteID: this.props.noteID
        })
    }

    handleClick = () => {
        this.setState({
            isEditing: true
        })
    }

    cancelEditing = () => {
        this.setState({
            isEditing: false
        })
    }

    render() {
        const { desc } = this.props;

        if (this.state.isEditing) {
            return <CreateNote
                isEditing
                cancelEditing={this.cancelEditing}
                id={`editNote-${this.props.memoID}-${this.props.noteID}`}
                deleteFunc={this.handleDelete}
                {...this.props}
            />
        }

        return (
            <div className="note" onClick={this.handleClick}>
                {desc}
            </div>
        )
    }
}

Note = connect(null, {deleteNote})(Note)

export { Note }
