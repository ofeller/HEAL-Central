import React, { Component } from 'react'
import Userfront from "@userfront/react";
import ReactTable from 'react-table-6'
import api from '../api'
import { BrowserRouter as Router, Link, Route, Redirect, } from "react-router-dom";
import 'react-table-6/react-table.css'

Userfront.init("vndgv7b7");

class UpdateAttendee extends Component {
    updateUser = event => {
        event.preventDefault()

        window.location.href = `/attendees/update/${this.props.id}`
    }
    render() {
        return <div className="cursor-pointer m-auto lg:w-5/12 text-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={this.updateUser}>Update</div>
    }
}

class DeleteAttendee extends Component {
    deleteUser = event => {
        event.preventDefault()

        if (
            window.confirm(
                `Do you want to delete this attendee permanently?`,
            )
        ) {
            api.deleteAttendeeById(this.props.id)
            window.location.reload()
        }
    }

    render() {
        return <div className="cursor-pointer m-auto lg:w-5/12 text-center bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={this.deleteUser}>Delete</div>
    }
}


class AttendeesList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            attendees: [],
            columns: [],
            isLoading: false,
        }
    }

    componentDidMount = async () => {
        this.setState({ isLoading: true })

        await api.getAllAttendees().then(attendees => {
            this.setState({
                attendees: attendees.data.data,
                isLoading: false,
            })
        })
    }

    render() {
        
        const { attendees, isLoading } = this.state
        console.log('TCL: AttendeesList -> render -> attendees', attendees)

        const columns = [
            {
                Header: 'ID',
                accessor: '_id',
                filterable: true,
            },
            {
                Header: 'Event',
                accessor: 'heal_event',
                filterable: true,
            },
            {
                Header: 'First Name',
                accessor: 'first_name',
                filterable: true,
            },
            {
                Header: 'Last Name',
                accessor: 'last_name',
                filterable: true,
            },
            {
                Header: 'Email',
                accessor: 'email',
                filterable: true,
            },
            {
                Header: '',
                accessor: '',
                Cell: function(props) {
                    return (
                        <span>
                            <DeleteAttendee id={props.original._id} />
                        </span>
                    )
                },
            },
            {
                Header: '',
                accessor: '',
                Cell: function(props) {
                    return (
                        <span>
                            <UpdateAttendee id={props.original._id} />
                        </span>
                    )
                },
            },
        ]

        let showTable = true
        if (!attendees.length) {
            showTable = false
        }
        function renderFn({ location }) {
            // If the user is not logged in, redirect to login
            if (!Userfront.accessToken()) {
            return (
                <Redirect 
                to={{
                    pathname: "/login",
                    state: {from: location },
                }}
                />
            );
            }
            
            const userData = JSON.stringify(Userfront.user, null, 2);
            return (
            <div className="pt-24 pb-4">
            <pre>{userData}</pre>
                <button className="px-4 py-2 border group hover:border-blue-500 hover:text-blue-500 font-light rounded" onClick={Userfront.logout}>Logout</button>
                <Link to='/reset'> 
                            <button className="px-4 py-2 border group hover:border-blue-500 hover:text-blue-500 font-light rounded">
                                Reset Password
                            </button>
                        </Link>
            <h2 className="text-center font-light text-2xl mb-4">List of Attendees</h2>
                {showTable && (
                    <ReactTable
                        data={attendees}
                        columns={columns}
                        loading={isLoading}
                        defaultPageSize={10}
                        showPageSizeOptions={true}
                        minRows={0}
                    />
                )}
                
            </div>
        );
       
    }
    return <Route render={renderFn} />;
   
}
}
export default AttendeesList