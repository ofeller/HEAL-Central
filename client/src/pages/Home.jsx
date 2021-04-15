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
                        <div className="mobile:text-8xl text-10xl tracking-widest font-medium -mb-10">
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
                <div className="mobile:-mx-2 text-center font-light text-lg my-10 mx-60">
                <p className="pb-4">
                HEAL (Health Educated Asian Leaders) is an organization of students representing various health-related fields at the University of Florida. 
                We are here to bring together students pursuing a career in medicine, pharmacy, dentistry, veterinary medicine, nursing, and physical and occupational therapy.
                </p>
                <p>
                Our goal is to unite and build a network of diverse students with similar interests and career goals. Students are provided with the resources needed in order to be successful in furthering their professional ambitions. Through volunteer opportunities with various non-profit organizations, 
                informational events with knowledgeable speakers, and educational meetings with icebreakers and after-socials, we include all aspects of the healthcare field and welcome every new member to join our Ohana!
                </p>
                
                    <div>
                        <Link to='/about'> 
                            <button className="mt-10 -mb-4 transition duration-150 ease-in-out bg-white hover:bg-peach border-8 border-black text-center text-3xl p-6 w-4/12 font-bold bg-transparent justify-center text-black font-bold py-2 px-2">
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