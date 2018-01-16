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
            {notes.map(note => <Note key={note.id} {...note} /> )}
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

    handleAddNote = ({e, memoID, totalNotes}) => {
        e.preventDefault();
        this.props.addNote(memoID, totalNotes + 1)
    }

    render() {
        return (
            <section>
                {this.props.memos.map(memo =>
                    <Memo
                        key={memo.id}
                        handleAddNote={(e) => this.handleAddNote({
                            e: e,
                            memoID: memo.id,
                            totalNotes: memo.notes ? memo.notes.length : 0
                        })}
                        {...memo}
                    />
                )}
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
