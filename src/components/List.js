import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchMemos } from '../reducers/memo'
import { Memo } from '.'

class List extends Component {

    componentDidMount() {
        this.props.fetchMemos()
    }

    componentWillReceiveProps(newProps){
        if (this.props.categoryFilter !== newProps.categoryFilter) {
            this.props.fetchMemos();
        }
    }

    render() {
        const { memos } = this.props

        return (
            <section>
                {Object.keys(memos).reverse().map(i =>
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
        memos: state.memo.memos,
        categoryFilter: state.memo.categoryFilter
    }
}

List = connect(mapStateToProps, {fetchMemos})(List)
export { List }
