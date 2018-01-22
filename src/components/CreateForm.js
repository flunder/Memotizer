import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createMemo } from '../reducers/memo'

class CreateForm extends Component {

    state = {
        title: '',
        url: ''
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const { title, url } = this.state;
        this.props.createMemo({title, url});
        this.clearState();
    }

    clearState = () => {
        this.setState({ title: '', url: '' })
    }

    render() {
        return (
            <section className="create-memo">

                <form className="memo" onSubmit={this.handleSubmit}>

                    <header>

                        <input
                            type="text"
                            value={this.state.title}
                            onChange={(e) => this.setState({ title: e.currentTarget.value })}
                            placeholder="Title"
                            className="create-memo-title h2"
                            required
                        />

                        <input
                            type="text"
                            value={this.state.url}
                            onChange={(e) => this.setState({ url: e.currentTarget.value })}
                            placeholder="Url"
                            className="create-memo-url h3 memo-url"
                            required
                        />

                        <input
                            type="submit"
                            className="button create-memo-button"
                        />

                    </header>

                </form>

            </section>
        )
    }
}

CreateForm = connect(null, {createMemo})(CreateForm)

export { CreateForm }
