import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Note, CreateNote } from '.'
import { deleteMemo } from '../reducers/memo'

class Memo extends Component {

    handleDeleteMemo = (e) => {
        e.preventDefault();
        this.props.deleteMemo(this.props.id)
    }

    render() {
        const { id, title, isComplete, url, notes = [] } = this.props;

        return (
            <div className="memo">

                <header className="_r">

                    <h2>{title}</h2>

                    <h3 className="memo-url">{url}</h3>

                    <form onSubmit={this.handleDeleteMemo} className="memo-delete-note-button-wrap">
                        <input
                            type="submit"
                            className="memo-delete-note-button"
                            value="+"
                        />
                    </form>

                </header>

                <main>
                    {Object.keys(notes).map(i =>
                        <Note
                            key={notes[i].id}
                            memoID={id}
                            noteID={notes[i].id}
                            desc={notes[i].desc}
                        />
                    )}

                    <CreateNote
                        memoID={id}
                        totalNotes={Object.keys(notes).length}
                    />
                </main>

            </div>
        )
    }

}

Memo = connect(null, {deleteMemo})(Memo)

export { Memo }
