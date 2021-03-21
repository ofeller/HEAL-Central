import React, { Component } from 'react'

class Calendar extends Component {
    render() {
        return (
            <div>

                <div class="pt-24" style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '90vh'}}>
                <iframe src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23f7cfff&amp;ctz=America%2FNew_York&amp;src=N212ZW5mNjU5b2o3a2IyMzU0cGdtbDA5MWtAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%23B39DDB&amp;showCalendars=0&amp;showNav=1&amp;showDate=1&amp;showTabs=1" style={{border:"solid 1px #777"}} width="800" height="600" frameborder="0" scrolling="no"></iframe>
                </div>

            </div>
                        
        )
    }
}

export default Calendar