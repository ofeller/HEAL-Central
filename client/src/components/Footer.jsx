import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import BackToTop from './BackToTop'

import logo from '../images/heal_logo.png'
import instagram from '../images/instagram_icon.png'
import facebook from '../images/facebook_icon.png'

class Footer extends Component {
    render() {
        return (
            <React.Fragment>
            <div id="Footer" class="bg-mint-green overflow-visible bottom-0 text-center py-2">
                <h2 class="font-light"> 
                HEALTH EDUCATED ASIAN LEADERS | UNIVERSITY OF FLORIDA
                </h2>
                <h3 class="font-light m-4"> Stay Connected: </h3>
                <div class="flex justify-center m-2">
                        <a href='https://www.instagram.com/ufheal/' target="_blank"> 
                        <img src= {instagram} class="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 m-auto w-8 h-8 my-1 mx-2"/>
                        </a>
               
                        <a href='https://www.facebook.com/healatuf' target="_blank"> 
                        <img src= {facebook} class="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 m-auto w-8 h-8 my-1 mx-2"/>
                        </a>
                    </div>
                <BackToTop/>
            </div>
            </React.Fragment>
        )
    }
}

export default Footer