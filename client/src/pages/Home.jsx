import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import image2 from '../images/heal_image2.jpeg'
import image3 from '../images/heal_image3.jpg'
import image6 from '../images/heal_image6.jpeg'
import image9 from '../images/heal_image9.jpg'
import image10 from '../images/heal_image10.jpeg'
import image11 from '../images/heal_image11.jpeg'
import image12 from '../images/heal_image12.jpeg'
import prehealth from '../images/prehealth.png'

class Home extends Component {
    render() {
        return (
        
            <div>
                <div className="bg-white h-20"></div>
                <div className="bg-banner bg-cover bg-top p-24 bg-fixed">
                    <div className="bg-teal bg-opacity-90 text-white text-center">
                        <div className="text-10xl tracking-widest font-medium -mb-10">
                            HEAL
                        </div>
                        <div className="text-3xl italic tracking-widest">
                            Health Educated Asian Leaders
                        </div>
                        <div className="text-2xl text-black pb-10 font-medium tracking-wider">
                            University of Florida
                        </div>
                    </div> 
                </div>
                <div className="text-center font-light text-lg my-10 mx-60">
                HEAL is lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    <div>
                        <Link to='/about'> 
                            <button className="mt-10 transition duration-150 ease-in-out bg-white hover:bg-peach border-8 border-black text-center text-3xl p-6 w-4/12 font-bold bg-transparent justify-center text-black font-bold py-2 px-2">
                                LEARN MORE
                            </button>
                        </Link>
                    </div>
                </div>
                <div className=" p-8 grid grid-flow-row grid-cols-4 justify-center px-0">
                <div className="">
                    <img src={image9} className=""/>
                    <img src={image6}/>  
                         
                </div>
                <div className="">
                    <img src={image3}/>
                    <img src={image10}/>          
                                 
                </div>
                <div>
                <img src={image11} className="w-full"/>
                <img src={prehealth}/>
         
                </div>
                <div>
                <img src={image2} className="w-full"/>
                <img src={image12}/>
         
                </div>
               
               
               
               
                   
               
                
             
               
                
                

                </div>
            </div>
            
        )
    }
}

export default Home