import React, { Component } from 'react'
import {Link} from 'react-router-dom';

import logo from '../heal_logo.png'

class NavBar extends Component {
    render() {
        return (
            <div>
                <Link to='/'>
                    <img src={logo} class="m-auto w-48 h-48"/>
                    </Link>
                <div class="flex justify-around">
                    <Link to='/'> 
                        <h1 class=""> HOME </h1>
                    </Link>
                    <Link to='/about'> 
                        <h1 class=""> ABOUT </h1>
                    </Link>
                    <Link to='/calendar'> 
                        <h1 class=""> CALENDAR </h1>
                    </Link>
                    <Link to='/gallery'> 
                        <h1 class=""> GALLERY </h1>
                    </Link>
                    <Link to='/'> 
                        <h1 class=""> CONTACT </h1>
                    </Link>
                    <div class="flex">
                        <Link to='/'> 
                            <h1 class=""> SOCIAL#1 </h1>
                        </Link>
                        <Link to='/'> 
                            <h1 class=""> SOCIAL#2 </h1>
                        </Link>
                        <Link to='/'> 
                            <h1 class=""> SOCIAL#3 </h1>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default NavBar