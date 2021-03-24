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
            <div class="overflow-visible mt-5 bottom-0 text-center">
                <h2 class="font-light"> HEALTH EDUCATED ASIAN LEADERS | UNIVERSITY OF FLORIDA</h2>
                <BackToTop/>
            </div>
            </React.Fragment>
        )
    }
}

export default Footer