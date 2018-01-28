import React, { Component } from 'react'
import { connect } from 'react-redux'
import { CreateNote, ConfirmClick , Note } from '.'
import { deleteMemo } from '../reducers/memo'

class Memo extends Component {

    handleDeleteMemo = (e) => {
        e.preventDefault();
        this.props.deleteMemo(this.props.id)
    }

    render() {
        const { id, title, isComplete, url, notes = [] } = this.props;
        const totalNotes = Object.keys(notes).length;

        return (
            <div className="memo">

                <header className="_r">
                    <h2>{title}</h2>
                    <h3 className="memo-url">{url}</h3>

                    <ConfirmClick
                        className="delete-button-wrap"
                        id={`deleteNote-${id}`}
                        onClick={this.handleDeleteMemo}>

                        <button className="delete-button">+</button>

                    </ConfirmClick>
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
                        id={`createNote-${id}-${totalNotes}`}
                        totalNotes={totalNotes}
                    />
                </main>

            </div>
        )
    }

}

Memo = connect(null, {deleteMemo})(Memo)

export { Memo }
