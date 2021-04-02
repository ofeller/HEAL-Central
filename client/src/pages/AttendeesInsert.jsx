import React, { Component } from 'react'
import api from '../api'



class AttendeesInsert extends Component {
    constructor(props) {
        super(props)

        this.state = {
            first_name: '',
            last_name: '',
            email: '',
        }
    }

    handleChangeInputFirstName = async event => {
        const first_name = event.target.value
        this.setState({ first_name })
    }

    handleChangeInputLastName = async event => {
        const last_name = event.target.value
        this.setState({ last_name })
    }

    handleChangeInputEmail = async event => {
        const email = event.target.value
        this.setState({ email })
    }

    handleIncludeAttendee = async () => {
        const { first_name, last_name, email } = this.state
        const payload = { first_name, last_name, email }

        await api.insertAttendee(payload).then(res => {
            window.alert(`Attendee confirmed successfully`)
            this.setState({
                first_name: '',
                last_name: '',
                email: '',
            })
        })
    }

    render() {
        const { first_name, last_name, email } = this.state
        return (
            <form onSubmit={this.handleIncludeAttendee}>
                <h2>Sign up for event </h2>

                <label>First Name: </label>
                <input
                    type="text"
                    value={first_name}
                    onChange={this.handleChangeInputFirstName}
                />

                <label>Last Name: </label>
                <input
                    type="text"
                    value={last_name}
                    onChange={this.handleChangeInputLastName}
                />

                <label>Email: </label>
                <input
                    type="text"
                    value={email}
                    onChange={this.handleChangeInputEmail}
                />

                <input type="submit" value="Submit"/>
            </form>
        )
    }
}

export default AttendeesInsert