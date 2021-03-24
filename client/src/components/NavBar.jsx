import React, { Component } from 'react'
import {Link} from 'react-router-dom';

import logo from '../images/heal_logo.png'
import instagram from '../images/instagram_icon.png'
import facebook from '../images/facebook_icon.png'

class NavBar extends Component {
    render() {
        return (
            <div class="font-light z-50 fixed bg-white m-auto w-full">
                <div class="flex flex-wrap justify-around items-center h-20">
                    <Link to='/'>
                        <img src={logo} class="m-auto w-20 h-15 my-1"/>
                    </Link>
                    <Link to='/'> 
                        <h1 class="hover:text-teal"> HOME </h1>
                    </Link>
                    <Link to='/about'> 
                        <h1 class="hover:text-teal"> ABOUT </h1>
                    </Link>
                    <Link to='/calendar'> 
                        <h1 class="hover:text-teal"> CALENDAR </h1>
                    </Link>
                    <Link to='/gallery'> 
                        <h1 class="hover:text-teal"> GALLERY </h1>
                    </Link>
                    <Link to='/execboard'> 
                        <h1 class="hover:text-teal"> EXECUTIVE BOARD </h1>
                    </Link>
                    <Link to='/'> 
                        <h1 class="hover:text-teal"> CONTACT </h1>
                    </Link>
                    <div class="flex items-center">
                        <a href='https://www.instagram.com/ufheal/' target="_blank"> 
                        <img src= {instagram} class="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 m-auto w-8 h-8 my-1 mx-2"/>
                        </a>
               
                        <a href='https://www.facebook.com/healatuf' target="_blank"> 
                        <img src= {facebook} class="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 m-auto w-8 h-8 my-1 mx-2"/>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NavBar