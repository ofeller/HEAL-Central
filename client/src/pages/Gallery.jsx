import React, { Component } from 'react'

import image1 from '../images/heal_image1.jpg'
import image4 from '../images/heal_image4.jpg'
import image8 from '../images/heal_image8.jpeg'
import image13 from '../images/image13.jpeg'
import image14 from '../images/image14.jpeg'
import image15 from '../images/image15.jpeg'
import image16 from '../images/image16.jpeg'
import image17 from '../images/image17.jpeg'
import image18 from '../images/image18.jpeg'
import image19 from '../images/image19.jpeg'
import image20 from '../images/image20.jpeg'
import image21 from '../images/image21.jpeg'
import image22 from '../images/image22.jpeg'
import image23 from '../images/image23.jpeg'
import image24 from '../images/image24.jpg'
import image25 from '../images/image25.jpeg'
import image26 from '../images/image26.jpeg'
import image28 from '../images/image28.jpeg'
import image29 from '../images/image29.jpg'
import image30 from '../images/image30.jpeg'
import image31 from '../images/image31.jpg'
import image32 from '../images/image32.jpeg'

/* images used on home page: 2,3,6,9,10,11,12 */
/* image sections organized by column */

class Gallery extends Component {
    render() {
        return (
            <div className="xl:bg-gradient-to-l from-light-peach to-teal h-auto p-28">
                <div className="mt-6 border-gray-800 text-gray-800 border-8 text-5xl text-center p-6 w-6/12 mb-8 m-auto font-bold">
                    <h2 className="italic tracking-wider"> GALLERY </h2>
                </div>
                <div className="grid grid-cols-4 gap-4 place-content-center -mx-24 -mb-16">
                        <div>
                            <img src={image31} className="hover:shadow border-2 border-gray-800 my-4"/>
                            <img src={image32} className="hover:shadow border-2 border-gray-800 my-4"/>
                            <img src={image26} className="hover:shadow border-2 border-gray-800 my-4"/>
                            <img src={image24} className="hover:shadow border-2 border-gray-800 my-4"/>
                            <img src={image17} className="hover:shadow border-2 border-gray-800 my-4"/>
                            <img src={image23} className="hover:shadow border-2 border-gray-800 my-4"/>
                        </div>

                        <div>
                            <img src={image14} className="hover:shadow border-2 border-gray-800 my-4"/>
                            <img src={image13} className="hover:shadow border-2 border-gray-800 my-4"/>
                            <img src={image28} className="hover:shadow border-2 border-gray-800 my-4"/>
                            <img src={image8} className="hover:shadow border-2 border-gray-800 my-4"/>
                            <img src={image16} className="hover:shadow border-2 border-gray-800 my-4"/>
                            <img src={image20} className="hover:shadow border-2 border-gray-800 my-4"/>
                        </div>

                        <div>
                            <img src={image19} className="hover:shadow border-2 border-gray-800 my-4"/>
                            <img src={image29} className="hover:shadow border-2 border-gray-800 my-4"/>
                            <img src={image22} className="hover:shadow border-2 border-gray-800 my-4"/>
                            <img src={image25} className="hover:shadow border-2 border-gray-800 my-4"/>
                            <img src={image1} className="hover:shadow border-2 border-gray-800 my-4"/>
                        </div>
                        <div>
                            <img src={image15} className="hover:shadow border-2 border-gray-800 my-4"/>
                            <img src={image18} className="hover:shadow border-2 border-gray-800 my-4"/>
                            <img src={image4} className="hover:shadow border-2 border-gray-800 my-4"/>
                            <img src={image21} className="hover:shadow border-2 border-gray-800 my-4"/>
                            <img src={image30} className="hover:shadow border-2 border-gray-800 my-4"/>
                        </div>
                        
                </div>

        
            
            </div>
        )
    }
}

export default Gallery