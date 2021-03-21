import React, { Component } from 'react'
import service from '../images/service.jpg'
import leadership from '../images/leadership.png'
import ohana from '../images/ohana.jpg'
import prehealth from '../images/prehealth.png'
 
class About extends Component {
    render() {
        return (
            <div class="pt-20 xl:bg-gray-400">
                <div class="xl:border-r-2 xl:bg-white xl:border-l-2 xl:border-b-2 p-10 m-auto xl:w-8/12">
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
                                    <p class=""> Leadership sample description: HEAL offers members a variety of ways to
                                    grow professionally through our research, volunteer, and shadowing opportunities.
                                    </p>
                                </div>
                            </div>
                                <img src={leadership} alt="leadership" class="m-auto w-96 xl:h-64"/>
                        </div>
                        
                        <div class="flex flex-col xl:flex xl:flex-row-reverse mt-20 px-20">
                            <div class="lg:px-32 xl:px-0 text-center flex flex-col ml-auto text-left pl-8 xl:text-right">
                                <h3 class="text-center font-bold text-black text-lg xl:text-right"> Pre-Health </h3>
                                <div class="my-5 xl:mt-5">
                                    <p class=""> Pre-health sample description: We provide many resources to our members such as
                                        informational events with knowledgable speakers and
                                    educational meetings that encompass all aspects of the healthcare field.
                                    </p>
                                </div>
                            </div>
                            <img src={prehealth} alt="prehealth" class="m-auto w-96 xl:h-64 xl:float-left"/>
                        </div>
                        <div class="flex flex-col text-center xl:text-left xl:flex xl:flex-row mt-20 px-20">
                            <div class="lg:px-32 xl:px-0 ml-auto xl:float-right">
                                <h3 class="font-bold text-black text-lg"> Service </h3>
                                <div class="my-5 xl:mt-5 xl:pr-8">
                                    <p class=""> Service sample description: Service is a crucial component of HEAL. We volunteer with 
                                    various non-profit organizations such as Learn to Be, UPchieve, Paper Airplanes, and many more. 
                                    </p>
                                </div>
                            </div>
                            <img src={service} alt="service" class="w-4/12 xl:w-56 m-auto"/>
                        </div>
                        <div class="flex flex-col text-center xl:flex xl:flex-row-reverse mt-20 px-20">
                            <div class="lg:px-32 xl:px-0 flex flex-col ml-auto pl-8 xl:text-right">
                                <h3 class="font-bold text-black text-lg"> Ohana </h3>
                                <div class="my-5 xl:mt-5">
                                    <p class=""> Ohana sample description: HEAL fosters a family atmosphere and offers social events 
                                    for our members to build strong relationships that will last throughout college and 
                                    into the professional world.
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

