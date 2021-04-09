import React, { Component } from 'react'
import AttendeesInsert from './AttendeesInsert'


class Calendar extends Component {
    render() {
        return (
            <div>
                <div className="pt-28 py-8 flex justify-center items-center h-5/6">
                <iframe src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffb9a7&amp;ctz=America%2FNew_York&amp;src=N212ZW5mNjU5b2o3a2IyMzU0cGdtbDA5MWtAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%239E69AF&amp;showCalendars=0" style={{border:"solid 1px #777"}} width="800" height="600" frameborder="0" scrolling="yes"></iframe>
              
                </div>     
                <AttendeesInsert/>
                </div>                   
        )
    }
}

export default Calendar