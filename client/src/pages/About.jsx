import React, { Component } from 'react'
import service from '../images/service.jpg'
import leadership from '../images/leadership.png'
import ohana from '../images/ohana.jpg'
import prehealth from '../images/prehealth.png'
 
class About extends Component {
    render() {
        return (
            <div class="pt-20 xl:bg-gradient-to-t from-light-peach to-teal">
                <div class="border-transparent xl:border-r-2 xl:bg-white xl:border-l-2 xl:border-b-2 p-10 m-auto xl:w-8/12">
                    <div class="m-4">
                        <div class="border-8 border-black text-center text-5xl p-6 w-9/12 xl:w-10/12 m-auto font-bold">
                            <h2> WHO WE ARE </h2>
                        </div>
                    </div>
                    <div class="">
                        <div class="flex flex-col text-center xl:text-left xl:flex xl:flex-row mt-20 px-20">
                            <div class="lg:px-32 xl:px-0 xl:ml-auto xl:float-right">
                                <h3 class="font-bold text-black text-lg"> Leadership </h3>
                                <div class="my-5 xl:mt-5 xl:pr-8">
                                    <p class=""> Lorem ipsum dolor sit amet,
                                     consectetur adipiscing elit, sed do eiusmod tempor
                                      incididunt ut labore et dolore magna aliqua. Ut enim 
                                      ad minim veniam, quis nostrud exercitation ullamco laboris
                                       nisi ut aliquip ex ea commodo consequat. Duis aute irure 
                                       dolor in reprehenderit in voluptate velit esse cillum
                                        dolore eu fugiat nulla pariatur.
                                    </p>
                                </div>
                            </div>
                                <img src={leadership} alt="leadership" class="m-auto w-96 xl:h-64"/>
                        </div>
                        
                        <div class="flex flex-col xl:flex xl:flex-row-reverse mt-20 px-20">
                            <div class="lg:px-32 xl:px-0 text-center flex flex-col ml-auto text-left pl-8 xl:text-right">
                                <h3 class="text-center font-bold text-black text-lg xl:text-right"> Pre-Health </h3>
                                <div class="my-5 xl:mt-5">
                                    <p class=""> Lorem ipsum dolor sit amet,
                                     consectetur adipiscing elit, sed do eiusmod tempor
                                      incididunt ut labore et dolore magna aliqua. Ut enim 
                                      ad minim veniam, quis nostrud exercitation ullamco laboris
                                       nisi ut aliquip ex ea commodo consequat. Duis aute irure 
                                       dolor in reprehenderit in voluptate velit esse cillum
                                        dolore eu fugiat nulla pariatur.
                                    </p>
                                </div>
                            </div>
                            <img src={prehealth} alt="prehealth" class="m-auto w-96 xl:h-64 xl:float-left"/>
                        </div>
                        <div class="flex flex-col text-center xl:text-left xl:flex xl:flex-row mt-20 px-20">
                            <div class="lg:px-32 xl:px-0 ml-auto xl:float-right">
                                <h3 class="font-bold text-black text-lg"> Service </h3>
                                <div class="my-5 xl:mt-5 xl:pr-8">
                                    <p class="">Lorem ipsum dolor sit amet,
                                     consectetur adipiscing elit, sed do eiusmod tempor
                                      incididunt ut labore et dolore magna aliqua. Ut enim 
                                      ad minim veniam, quis nostrud exercitation ullamco laboris
                                       nisi ut aliquip ex ea commodo consequat. Duis aute irure 
                                       dolor in reprehenderit in voluptate velit esse cillum
                                        dolore eu fugiat nulla pariatur.
                                    </p>
                                </div>
                            </div>
                            <img src={service} alt="service" class="w-4/12 xl:w-56 m-auto"/>
                        </div>
                        <div class="flex flex-col text-center xl:flex xl:flex-row-reverse mt-20 px-20">
                            <div class="lg:px-32 xl:px-0 flex flex-col ml-auto pl-8 xl:text-right">
                                <h3 class="font-bold text-black text-lg"> Ohana </h3>
                                <div class="my-5 xl:mt-5">
                                    <p class="">Lorem ipsum dolor sit amet,
                                     consectetur adipiscing elit, sed do eiusmod tempor
                                      incididunt ut labore et dolore magna aliqua. Ut enim 
                                      ad minim veniam, quis nostrud exercitation ullamco laboris
                                       nisi ut aliquip ex ea commodo consequat. Duis aute irure 
                                       dolor in reprehenderit in voluptate velit esse cillum
                                        dolore eu fugiat nulla pariatur.
                                    </p>
                                </div>
                            </div>
                            <img src={ohana} alt="Service" class="w-96 m-auto xl:h-64"/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
 
export default About

