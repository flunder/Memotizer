import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchMemos } from '../reducers/memo'
import { Memo } from '.'

class List extends Component {

    componentDidMount() {
        this.props.fetchMemos()
    }

    render({ memos } = this.props) {
        console.log(memos);
        return (
            <section>
                {Object.keys(this.props.memos).reverse().map(i =>
                    <Memo
                        key={memos[i].id}
                        {...memos[i]}
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

List = connect(mapStateToProps, {fetchMemos})(List)
export { List }
