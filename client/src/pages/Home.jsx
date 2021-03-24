import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import image1 from '../images/heal_image1.jpg'
import image2 from '../images/heal_image2.jpg'
import image3 from '../images/heal_image3.jpg'
import image4 from '../images/heal_image4.jpg'
import image5 from '../images/heal_image5.jpg'
import service from '../images/service.jpg'
import leadership from '../images/leadership.png'
import ohana from '../images/ohana.jpg'
import prehealth from '../images/prehealth.png'

class Home extends Component {
    render() {
        return (
        
            <div>
                <div class="bg-white h-20"></div>
                <div class="bg-banner bg-cover bg-top p-24 bg-fixed">
                    <div class="bg-teal bg-opacity-90 text-white text-center">
                        <div class="text-10xl tracking-widest font-medium -mb-10">
                            HEAL
                        </div>
                        <div class="text-3xl italic tracking-widest">
                            Health Educated Asian Leaders
                        </div>
                        <div class="text-2xl text-black pb-10 font-medium tracking-wider">
                            University of Florida
                        </div>
                    </div> 
                </div>
                <div class="text-center font-light text-lg my-10 mx-60">
                HEAL is lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    <div>
                        <Link to='/about'> 
                            <button class="mt-10 transition duration-150 ease-in-out bg-white hover:bg-peach border-8 border-black text-center text-3xl p-6 w-4/12 font-bold bg-transparent justify-center text-black font-bold py-2 px-2">
                                LEARN MORE
                            </button>
                        </Link>
                    </div>
                </div>
                <div class=" p-8 grid grid-flow-row grid-cols-3 justify-center px-4">
                <div class="">
                    <img src={leadership} class=""/>
                    <img src={ohana}/>  
                    <img src={image4}/>                 
                </div>
                <div class="">
                    <img src={image3}/>
                    <img src={image1}/>          
                    <img src={image5}/>                   
                </div>
                <div>
                <img src={image2} class="w-full"/>
                <img src={prehealth}/>
                </div>
               
               
               
                   
               
                
             
               
                
                

                </div>
            </div>
            
        )
    }
}

export default Home