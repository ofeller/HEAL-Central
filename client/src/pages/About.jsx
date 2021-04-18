import React, { Component } from 'react'
import service from '../images/service.jpg'
import leadership from '../images/leadership.png'
import ohana from '../images/ohana.jpg'
import prehealth from '../images/prehealth.png'
 
class About extends Component {
    render() {
        return (
            <div className="pt-20 xl:bg-gradient-to-t from-light-peach to-teal">
                <div className="pb-20 border-transparent xl:border-r-2 xl:bg-white xl:border-l-2 xl:border-b-2 p-10 m-auto xl:w-8/12">
                    <div className="m-4">
                        <div className="border-8 border-gray-800 text-gray-800 text-center italic tracking-wider text-5xl p-6 w-9/12 xl:w-10/12 m-auto font-bold">
                            <h2> WHO WE ARE </h2>
                        </div>
                    </div>
                    <div className="font-light">
                        <div className="flex flex-col text-center xl:text-left xl:flex xl:flex-row mt-20 px-20">
                            <div className="lg:px-32 xl:px-0 xl:ml-auto xl:float-right">
                                <h3 className="font-bold text-gray-800 text-2xl"> Leadership </h3>
                                <div className="my-5 mr-4 xl:mt-5 xl:pr-8">
                                    <p className="font-light pb-5"> As future leaders in the healthcare field one day, we recognize the importance of developing great leadership skills. 
                                    To do so, we have several committees for our health panels and 5k runs. 
                                    Most importantly, we have a wonderful leadership program called MEDIC which stands for Members Expanding and Developing Ideas in Collaboration, 
                                    where MEDIC will be working alongside HEAL board members, learning how to plan for, prepare and execute events that cater to the pre-health community. 
                                    MEDIC will also be helping and working with board members for large events.
                                    </p>
                                </div>
                            </div>
                                <img src={leadership} alt="leadership" className="transform scale-110 border-2 border-gray-800 m-auto w-96 xl:h-64"/>
                        </div>
                        
                        <div className="flex flex-col xl:flex xl:flex-row-reverse mt-20 px-20">
                            <div className="lg:px-32 xl:px-0 text-center flex flex-col ml-auto text-left pl-8 xl:text-right">
                                <h3 className="text-center font-bold text-gray-800  text-2xl xl:text-right"> Pre-Health </h3>
                                <div className="my-5 ml-10 xl:mt-5">
                                    <p className=""> 
                                    HEAL upholds its pre-health pillar by holding a bi-yearly Health Panel in which Admission speakers and graduate students
                                    speak with our members about the path to different health professional careers.
                                    </p>
                                </div>
                            </div>
                            <img src={prehealth} alt="prehealth" className="transform scale-110 border-2 border-gray-800 m-auto w-96 xl:h-64 xl:float-left"/>
                        </div>
                        <div className="flex flex-col text-center xl:text-left xl:flex xl:flex-row mt-20 px-20">
                            <div className="lg:px-32 xl:px-0 ml-auto xl:float-right">
                                <h3 className="font-bold text-gray-800  text-2xl"> Service </h3>
                                <div className="my-5 mr-4 xl:mt-5 xl:pr-8">
                                    <p className="pb-5">
                                    As a pre health organization, we strongly believe in giving back to our community 
                                    and we do so through a monthly service event where we volunteer anywhere from 
                                    local nursing homes to volunteering for food banks and also take a weeklong 
                                    expedition trip in spring semester!
                                    </p>
                                </div>
                            </div>
                            <img src={service} alt="service" className="transform scale-110 border-2 border-gray-800 w-4/12 xl:w-56 m-auto"/>
                        </div>
                        <div className="flex flex-col text-center xl:flex xl:flex-row-reverse mt-20 px-20">
                            <div className="lg:px-32 xl:px-0 flex flex-col ml-auto pl-8 xl:text-right">
                                <h3 className="font-bold text-gray-800 text-2xl"> Ohana </h3>
                                <div className="my-5 ml-4 xl:mt-5">
                                    <p className="pl-3 pb-5">
                                    If you’ve ever watched Lilo and Stitch, we based this pillar off of the iconic line 
                                    “ohana means family and family means nobody gets left behind"—
                                    We promote this pillar through our Big/Little Week and social events such as winter dinner, allowing our members to form a close knit community and succeed not just academically but also personally.
                                    </p>
                                </div>
                            </div>
                            <img src={ohana} alt="Service" className="transform scale-110 border-2 border-gray-800 w-96 m-auto xl:h-64"/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
 
export default About

