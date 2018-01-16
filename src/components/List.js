import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'
import { fetchMemos } from '../reducers/memo'

const Note = ({ id, desc }) => (
    <div className="note">
        {desc}
    </div>
)

const Memo = ({ id, title, isComplete, url, notes = [] }) => (
    <div className="memo">
        <header>
            <h2>{title}</h2>
            <h3 className="memo-url">{url}</h3>
        </header>
        <main>
            {notes.map(note => <Note key={note.id} {...note} /> )}
        </main>
    </div>
)

class List extends Component {

    componentDidMount() {
        this.props.fetchMemos()
    }

    render() {
        return (
            <section>
                {this.props.memos.map(memo => <Memo key={memo.id} {...memo} />)}
            </section>
        )
    }
}

Memo.propTypes = {
    id: PropTypes.number,
    title:  PropTypes.string,
    isComplete:  PropTypes.bool
}

const mapStateToProps = (state) => {
    return {
        memos: state.memo.memos
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchMemos: () => {
            dispatch(fetchMemos())
        }
    }
}

List = connect(mapStateToProps, mapDispatchToProps)(List)

export { List }
