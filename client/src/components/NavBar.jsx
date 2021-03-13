import React, { Component } from 'react'
import {Link} from 'react-router-dom';

import logo from '../heal_logo.png'

class NavBar extends Component {
    render() {
        return (
            <div class="bg-white">
                <Link to='/'>
                    <img src={logo} class="m-auto w-48 h-48 fixed inset-x-0"/>
                    </Link>
                <div class="flex justify-around">
                    <Link to='/'> 
                        <h1 class="mt-40 fixed"> HOME </h1>
                    </Link>
                    <Link to='/about'> 
                        <h1 class="mt-40 fixed"> ABOUT </h1>
                    </Link>
                    <Link to='/calendar'> 
                        <h1 class="mt-40 fixed"> CALENDAR </h1>
                    </Link>
                    <Link to='/gallery'> 
                        <h1 class="mt-40 fixed"> GALLERY </h1>
                    </Link>
                    <Link to='/'> 
                        <h1 class="mt-40 fixed"> CONTACT </h1>
                    </Link>
                    <div class="flex">
                        <Link to='/'> 
                            <h1 class="mt-40 fixed"> SOCIAL#1 </h1>
                        </Link>
                        <Link to='/'> 
                            <h1 class="mt-40 fixed"> SOCIAL#2 </h1>
                        </Link>
                        <Link to='/'> 
                            <h1 class="mt-40 fixed"> SOCIAL#3 </h1>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default NavBar