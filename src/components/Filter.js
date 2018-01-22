import React, { Component } from 'react'
import { connect } from 'react-redux'
import { applyFilter, fetchCategories } from '../reducers/memo'

class Filter extends Component {

    componentDidMount() {
        this.props.fetchCategories();
    }

    handleChange = (e) => {
        this.props.applyFilter(e.target.value)
    }

    render(){
        const { categories, categoryFilter } = this.props;

        return (
            <form className="filter">
                <select onChange={this.handleChange} value={categoryFilter}>
                    {Object.keys(categories).map(i => (
                        <option
                            key={categories[i].id}
                            value={categories[i].name}>
                            {categories[i].name}
                        </option>
                    ))}
                </select>
            </form>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        categoryFilter: state.memo.categoryFilter,
        categories: state.memo.categories
    }
}

Filter = connect(mapStateToProps, {applyFilter, fetchCategories})(Filter)

export { Filter };
