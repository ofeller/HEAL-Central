import React, { Component } from 'react'
import api from '../api'

class AttendeesInsert extends Component {
    constructor(props) {
        super(props)

        this.state = {
            heal_event: '',
            first_name: '',
            last_name: '',
            email: '',
        }
    }

    handleChangeInputHealEvent = async event => {
        const heal_event = event.target.value
        this.setState({ heal_event })
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
        const { heal_event, first_name, last_name, email } = this.state
        const payload = { heal_event, first_name, last_name, email }

        await api.insertAttendee(payload).then(res => {
            window.alert(`Attendance confirmed successfully`)
            this.setState({
                heal_event: '',
                first_name: '',
                last_name: '',
                email: '',
            })
        })
    }

    render() {
        const { heal_event, first_name, last_name, email } = this.state
        return (
            <form className="flex flex-col m-auto w-5/12 pb-4" onSubmit={this.handleIncludeAttendee}>
                <h2 className="text-center">Sign Up for an Event </h2>

                <label>Event: </label>
                <input
                    className="border rounded"
                    type="text"
                    value={heal_event}
                    onChange={this.handleChangeInputHealEvent}
                />

                <label>First Name: </label>
                <input
                    className="border rounded"
                    type="text"
                    value={first_name}
                    onChange={this.handleChangeInputFirstName}
                />

                <label>Last Name: </label>
                <input
                    className="border rounded"
                    type="text"
                    value={last_name}
                    onChange={this.handleChangeInputLastName}
                />

                <label>Email: </label>
                <input
                    className="border rounded"
                    type="text"
                    value={email}
                    onChange={this.handleChangeInputEmail}
                />

                <input className="mt-2 border rounded transition duration-100 ease-in-out hover:bg-gray-300" type="submit" value="Submit"/>
            </form>
        )
    }
}

export default AttendeesInsert