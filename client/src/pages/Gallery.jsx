import React, { Component } from 'react'
import ohana from '../images/ohana.jpg'

class Gallery extends Component {
    render() {
        return (
            <div class="bg-contain bg-gradient-to-r from-blue-100 via-blue-200 to-purple-300 ... h-screen">
                <div class=" text-5xl p-6 w-10/12 mb-4 m-auto font-bold">
                    <h2 class="italic tracking-wider "> GALLERY </h2>
                </div>
                <div class="border-2 border-green-300 border-opacity-75 grid grid-cols-3 gap-2 place-content-center h-30">
                    <div>
                        <img src={ohana} alt="ohana" class="m-auto w-96 xl:h-64"/>
                    </div>
                    <div>
                        <img src={ohana} alt="ohana" class="m-auto w-96 xl:h-64"/>
                    </div>
                    <div>
                        <img src={ohana} alt="ohana" class="m-auto w-96 xl:h-64"/>
                    </div>
                    <div>
                        <img src={ohana} alt="ohana" class="m-auto w-96 xl:h-64"/>
                    </div>
                    <div>
                        <img src={ohana} alt="ohana" class="m-auto w-96 xl:h-64"/>
                    </div>
                    <div>
                        <img src={ohana} alt="ohana" class="m-auto w-96 xl:h-64"/>
                    </div>
                    <div>
                        <img src={ohana} alt="ohana" class="m-auto w-96 xl:h-64"/>
                    </div>
                    <div>
                        <img src={ohana} alt="ohana" class="m-auto w-96 xl:h-64"/>
                    </div>
                    <div>
                        <img src={ohana} alt="ohana" class="m-auto w-96 xl:h-64"/>
                    </div>

                </div>


            
            </div>
        )
    }
}

export default Gallery