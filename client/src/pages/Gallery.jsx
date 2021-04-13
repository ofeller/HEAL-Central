import React, { Component } from 'react'
import ohana from '../images/ohana.jpg'
import image1 from '../images/heal_image1.jpg'
import image2 from '../images/heal_image2.jpeg'
import image3 from '../images/heal_image3.jpg'
import image4 from '../images/heal_image4.jpg'
import image5 from '../images/heal_image5.jpg'
import image6 from '../images/heal_image6.jpeg'
import image7 from '../images/heal_image7.jpeg'
import image8 from '../images/heal_image8.jpeg'
import image9 from '../images/heal_image9.jpg'
import image10 from '../images/heal_image10.jpeg'
import image11 from '../images/heal_image11.jpeg'
import image12 from '../images/heal_image12.jpeg'
import prehealth from '../images/prehealth.png'

class Gallery extends Component {
    render() {
        return (
            <div className="xl:bg-gradient-to-l from-light-peach to-teal h-auto p-28">
                <div className="mt-6 border-gray-800 text-gray-800 border-8 text-5xl text-center p-6 w-6/12 mb-8 m-auto font-bold">
                    <h2 className="italic tracking-wider"> GALLERY </h2>
                </div>
            
                <div className="grid grid-cols-4 gap-2 place-content-center -mx-24">
                        <div>
                            <img src={image1} className="hover:shadow border-2 border-gray-800 my-2"/>
                            <img src={image12} className="hover:shadow border-2 border-gray-800 my-2"/>
                            <img src={image4} className="hover:shadow border-2 border-gray-800 my-2"/>
                            <img src={image3} className="hover:shadow border-2 border-gray-800 my-2"/>
                        </div>
                        <div>
                            <img src={image7} className="hover:shadow border-2 border-gray-800 my-2"/>
                            <img src={image6} className="hover:shadow border-2 border-gray-800 my-2"/>
                            <img src={image2} className="hover:shadow border-2 border-gray-800 my-2"/>
                            <img src={image11} className="hover:shadow border-2 border-gray-800 my-2"/>
                        </div>
                        <div>
                            <img src={image1} className="hover:shadow border-2 border-gray-800 my-2"/>
                            <img src={image10} className="hover:shadow border-2 border-gray-800 my-2"/>
                            <img src={image1} className="hover:shadow border-2 border-gray-800 my-2"/>
                            <img src={prehealth} className="hover:shadow border-2 border-gray-800 my-2"/>
                        </div>
                        <div>
                            <img src={image8} className="hover:shadow border-2 border-gray-800 my-2"/>
                            <img src={image9} className="hover:shadow border-2 border-gray-800 my-2"/>
                            <img src={image5} className="hover:shadow border-2 border-gray-800 my-2"/>
                            <img src={image4} className="hover:shadow border-2 border-gray-800 my-2"/>
                        </div>
                        
                </div>

        
            
            </div>
        )
    }
}

export default Gallery