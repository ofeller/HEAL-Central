import React, { Component } from 'react'
import {Link} from 'react-router-dom';

import logo from '../images/heal_logo.png'
import instagram from '../images/instagram_icon.png'
import facebook from '../images/facebook_icon.png'

class NavBar extends Component {
    render() {
        return (
            <div class="fixed bg-white m-auto w-full">
                <div class="flex flex-wrap justify-around items-center">
                    <Link to='/'>
                        <img src={logo} class="m-auto w-20 h-20 my-1"/>
                    </Link>
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
                    <div class="flex items-center">
                        <a href='https://www.instagram.com/ufheal/' target="_blank"> 
                        <img src= {instagram} class="m-auto w-8 h-8 my-1 mx-2"/>
                        </a>
               
                        <a href='https://www.facebook.com/healatuf' target="_blank"> 
                        <img src= {facebook} class="m-auto w-8 h-8 my-1 mx-2"/>
                        </a>
           
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