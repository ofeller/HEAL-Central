import React, { Component } from 'react'
import ohana from '../images/ohana.jpg'

class Gallery extends Component {
    render() {
        return (
            <div className="xl:bg-gradient-to-tl from-light-peach to-teal h-auto p-28">
                <div className=" text-5xl p-6 w-10/12 mb-4 m-auto font-bold">
                    <h2 className="italic tracking-wider "> GALLERY </h2>
                </div>
                <div className="grid grid-cols-3 gap-14 place-content-center px-8">
                    
                        <div className="hover:bg-opacity-50 ring-4 ring-black">
                            <img src={ohana} alt="ohana" className="m-auto xl:w-96 xl:h-64"/>
                        </div>
                        <div className="ring-4 ring-black">
                            <img src={ohana} alt="ohana" className="m-auto xl:w-96 xl:h-64"/>
                        </div>
                        <div className="ring-4 ring-black">
                            <img src={ohana} alt="ohana" className="m-auto xl:w-96 xl:h-64"/>
                        </div>
                    
                    <div className="ring-4 ring-black">
                        <img src={ohana} alt="ohana" className="m-auto xl:w-96 xl:h-64"/>
                    </div>
                    <div className="ring-4 ring-black">
                        <img src={ohana} alt="ohana" className="m-auto xl:w-96 xl:h-64"/>
                    </div>
                    <div className="ring-4 ring-black">
                        <img src={ohana} alt="ohana" className="m-auto xl:w-96 xl:h-64"/>
                    </div>
                    <div className="ring-4 ring-black">
                        <img src={ohana} alt="ohana" className="m-auto xl:w-96 xl:h-64"/>
                    </div>
                    <div className="ring-4 ring-black">
                        <img src={ohana} alt="ohana" className="m-auto xl:w-96 xl:h-64"/>
                    </div>
                    <div className="ring-4 ring-black">
                        <img src={ohana} alt="ohana" className="m-auto xl:w-96 xl:h-64"/>
                    </div>

                </div>


            
            </div>
        )
    }
}

export default Gallery