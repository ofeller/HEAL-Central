import React, { Component } from 'react'

class Calendar extends Component {
    render() {
        return (
            <div>

                <p>Calendar goes here </p>
                <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>
                <iframe src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%2385cef1&amp;ctz=America%2FNew_York&amp;src=b2NmNzExQGdtYWlsLmNvbQ&amp;src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&amp;color=%23039BE5&amp;color=%237986CB&amp;showTitle=1&amp;showNav=1&amp;showDate=1&amp;showPrint=1&amp;showCalendars=1&amp;showTz=1&amp;mode=MONTH&amp;title=UF%20HEAL%20Events" style={{border: "solid 1px #777"}} width="800" height="600" frameborder="0" scrolling="no"></iframe>
                
                </div>
            </div>
                        
        )
    }
}

export default Calendar