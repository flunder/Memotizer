import React, { Component } from 'react'
import { connect } from 'react-redux'
import { applyFilter, fetchCategories } from '../reducers/memo'

class Filter extends Component {

    state = {
        filterValue: ''
    }

    componentDidMount() {
        this.props.fetchCategories();
    }

    handleChange = (e) => {
        this.props.applyFilter(e.target.value)
    }

    render(){

        const { categories, categoryFilter } = this.props;

        return (
            <form>
                <select onChange={this.handleChange} value={this.props.categoryFilter}>
                    {Object.keys(categories).map(i => (
                        <option
                            key={categories[i].id}
                            value={categories[i].name}
                            selected={categoryFilter === categories[i].name}>
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
