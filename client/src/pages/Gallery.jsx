import React, { Component } from 'react'
import ohana from '../images/ohana.jpg'

class Gallery extends Component {
    render() {
        return (
            <div class="bg-contain bg-gradient-to-r from-blue-100 via-blue-200 to-purple-300 ... h-auto p-28">
                <div class=" text-5xl p-6 w-10/12 mb-4 m-auto font-bold">
                    <h2 class="italic tracking-wider "> GALLERY </h2>
                </div>
                <div class="grid grid-cols-3 gap-14 place-content-center px-8">
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