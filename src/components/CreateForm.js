import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateCurrentTitle, updateCurrentUrl, createMemo } from '../reducers/memo'

class CreateForm extends Component {

    handleTitleChange = (e) => {
        this.props.updateCurrentTitle(e.currentTarget.value)
    }

    handleUrlChange = (e) => {
        this.props.updateCurrentUrl(e.currentTarget.value)
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.createMemo();
    }

    render() {
        return (
            <section className="create-memo">

                <form className="memo" onSubmit={this.handleSubmit}>

                    <header>

                        <input
                            type="text"
                            value={this.props.currentTitleValue}
                            onChange={this.handleTitleChange}
                            placeholder="Title"
                            className="create-memo-title h2"
                            required
                        />

                        <input
                            type="text"
                            value={this.props.currentUrlValue}
                            onChange={this.handleUrlChange}
                            placeholder="Url"
                            className="create-memo-url h3 memo-url"
                            required
                        />

                        <input
                            type="submit"
                            className="create-memo-submit"
                        />

                    </header>

                </form>

            </section>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        currentTitleValue: state.memo.create.title,
        currentUrlValue: state.memo.create.url
    }
}

const mapDispatchToProps = {
    updateCurrentTitle,
    updateCurrentUrl,
    createMemo
}

CreateForm = connect(mapStateToProps, mapDispatchToProps)(CreateForm)

export { CreateForm }
