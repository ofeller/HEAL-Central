import React, { Component } from 'react'
import api from '../api'

class AttendeesUpdate extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
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

    handleUpdateAttendee = async () => {
        const { id, heal_event, first_name, last_name, email } = this.state
        const payload = { heal_event, first_name, last_name, email }

        await api.updateAttendeeById(id, payload).then(res => {
            window.alert(`Attendee updated successfully`)
            this.setState({
                heal_event: '',
                first_name: '',
                last_name: '',
                email: '',
            })
        })
    }

    componentDidMount = async () => {
        const { id } = this.state
        const attendee = await api.getAttendeeById(id)

        this.setState({
            heal_event: attendee.data.data.heal_event,
            first_name: attendee.data.data.first_name,
            last_name: attendee.data.data.last_name,
            email: attendee.data.data.email,
        })
    }

    render() {
        const { heal_event, first_name, last_name, email } = this.state
        return (
            <div className="pt-24 block text-center">
                <h1 className="font-bold">Edit Attendee</h1>
                <form className="inline-block mx-auto text-left">
                <h1>Event: </h1>
                <input
                    className="border rounded mb-2"
                    type="text"
                    value={heal_event}
                    onChange={this.handleChangeInputHealEvent}
                />


                <h1>First Name: </h1>
                <input
                    className="border rounded mb-2"
                    type="text"
                    value={first_name}
                    onChange={this.handleChangeInputFirstName}
                />

                <h1>Last Name: </h1>
                <input
                     className="border rounded mb-2"
                    type="text"
                    value={last_name}
                    onChange={this.handleChangeInputLastName}
                />

                <h1>Email: </h1>
                <input
                    className="border rounded mr-2"
                    type="text"
                    value={email}
                    onChange={this.handleChangeInputEmail}
                />


                <div></div>
                    <button className="border rounded p-2 bg-blue-300 hover:bg-blue-400 my-4 mr-4" onClick={this.handleUpdateAttendee} >Update </button>
                    <a className="border rounded p-2 bg-red-300 hover:bg-red-400 mb-4" href={'/attendees/list'}> Back </a>
                    </form>
            </div>
        )
    }
}

export default AttendeesUpdate