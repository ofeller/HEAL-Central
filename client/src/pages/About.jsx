import React, { Component } from 'react'
import service from '../images/service.jpg'
import leadership from '../images/leadership.png'
import ohana from '../images/ohana.jpg'
import prehealth from '../images/prehealth.png'
 
class About extends Component {
    render() {
        return (
            <div class="bg-gray-400">
                <div class="border-r-2 bg-white border-l-2 border-b-2 p-10 m-auto w-7/12">
                    <div class="m-4">
                        <div class="border-8 border-black text-center text-5xl p-6 w-10/12 m-auto font-bold">
                            <h2> WHO THE HEAL ARE WE </h2>
                        </div>
                    </div>
                    <div class="flex flex-row pl-10 mt-20">
                        <img src={service} alt="Service" class="w-64 rounded border border-blue-300"/>
                        <div class="flex flex-col ml-auto text-right p-8">
                            <h3 class="font-semibold"> Service </h3>
                            <div class="ml-10">
                                <p class=""> "Lorem ipsum dolor sit amet, 
                                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
                                eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                                sunt in culpa qui officia deserunt mollit anim id est laborum."
                                Section 1.10.32 of "d
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-row pr-10 mt-20">
                        <div class="flex flex-col ml-auto px-10">
                            <h3 class="font-semibold"> Leadership </h3>
                            <div class="">
                                <p class=""> "Lorem ipsum dolor sit amet, 
                                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
                                eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                                sunt in culpa qui officia deserunt mollit anim id est laborum."
                                Section 1.10.32 of "d
                                </p>
                            </div>
                        </div>
                        <img src={leadership} alt="leadership" class="w-80 h-auto rounded border border-blue-300"/>
                    </div>
                    <div class="flex flex-row pl-10 mt-20">
                        <img src={prehealth} alt="prehealth" class="w-64 rounded border border-blue-300"/>
                        <div class="flex flex-col ml-auto text-right p-8">
                            <h3 class="font-semibold"> Pre-Health </h3>
                            <div class="ml-10">
                                <p class="">"Lorem ipsum dolor sit amet, 
                                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
                                eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                                sunt in culpa qui officia deserunt mollit anim id est laborum."
                                Section 1.10.32 of "d
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-row pr-10 mt-20">
                        <div class="flex flex-col ml-auto px-10">
                            <h3 class="font-semibold"> Ohana </h3>
                            <div class="">
                                <p class=""> Paragraph about service goes here "Lorem ipsum dolor sit amet, 
                                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
                                eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                                sunt in culpa qui officia deserunt mollit anim id est laborum."
                                Section 1.10.32 of "d
                                </p>
                            </div>
                        </div>
                        <img src={ohana} alt="ohana" class="w-64 rounded border border-blue-300"/>
                    </div>
                </div>
            </div>
        )
    }
}
 
export default About

