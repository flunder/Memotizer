import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchMemos, addNote } from '../reducers/memo'

const Note = ({ id, desc }) => (
    <div className="note">
        {desc}
    </div>
)

const Memo = ({ id, title, isComplete, url, notes = [], handleAddNote }) => (
    <div className="memo">
        <header>
            <h2>{title}</h2>
            <h3 className="memo-url">{url}</h3>
        </header>
        <main>
            {Object.keys(notes).map(id => <Note key={id} {...notes[id]} /> )}
            <form onSubmit={handleAddNote}>
                <input
                    type="submit"
                    className="memo-add-note-button"
                    value="+"
                />
            </form>
        </main>
    </div>
)

class List extends Component {

    componentDidMount() {
        this.props.fetchMemos()
    }

    handleAddNote = ({e, id, memo}) => {
        e.preventDefault();
        const newNoteID = Object.keys(memo.notes).length + 1;
        this.props.addNote(id, newNoteID)
    }

    render() {
        const { memos } = this.props;

        // const totalNotes =

        return (
            <section>
                {Object.keys(memos).map(id => {
                    const memo = memos[id]
                    return (
                        <Memo
                            key={id}
                            handleAddNote={(e) => this.handleAddNote({e, id, memo})}
                            {...memo}
                        />
                    )
                })}

            </section>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        memos: state.memo.memos
    }
}

const mapDispatchToProps = {
    fetchMemos,
    addNote
}

List = connect(mapStateToProps, mapDispatchToProps)(List)

export { List }
