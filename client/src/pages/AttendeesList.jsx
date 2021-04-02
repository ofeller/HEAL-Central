import React, { Component } from 'react'
import api from '../api'
 
 
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
                Header: 'First Name',
                accessor: 'last_name',
                filterable: true,
            },
            {
                Header: 'Last name',
                accessor: 'last_name',
                filterable: true,
            },
            {
                Header: 'Email',
                accessor: 'email',
                Cell: props => <span>{props.value.join(' / ')}</span>,
            },
        ]
 
        let showTable = true
        if (!attendees.length) {
            showTable = false
        }
 
        return (
            <div class="pt-24">
            <h1 class="bg-blue-300"> Hello </h1>
                {showTable && (
                    <div>
                        data={attendees}
                        columns={columns}
                        loading={isLoading}
                        defaultPageSize={10}
                        showPageSizeOptions={true}
                        minRows={0}
                    </div>
                )}
            </div>
        )
    }
}
 
export default AttendeesList

