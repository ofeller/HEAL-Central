import React, { Component } from 'react'
import leadership from '../images/leadership.png'

class ExecBoard extends Component {
    render() {
        return (
            <div class="text-center"> 
                <div class="border-8 border-black text-center text-5xl p-6 w-10/12 mb-4 m-auto font-bold">
                    <h2> Executive Board </h2>
                </div>
                <div class="grid grid-cols-3 gap-8 place-content-center m-auto w-5/6">
                    <div>
                        <img src={leadership} alt="leadership" class ="border-black 300" />
                        <h2 class="text-blue-600 font-bold">Name</h2>
                        <p class="font-bold">Position</p>
                        <p>Lorem ipsum</p>
                    </div>
                    <div>
                        <img src={leadership} alt="leadership" class ="border-black 300" />
                        <h2 class="text-blue-600 font-bold">Name</h2>
                        <p class="font-bold">Position</p>
                        <p>Lorem ipsum</p>
                    </div>
                    <div>
                        <img src={leadership} alt="leadership" class ="border-black 300" />
                        <h2 class="text-blue-600 font-bold">Name</h2>
                        <p class="font-bold">Position</p>
                        <p>Lorem ipsum</p>
                    </div>
                    <div>
                        <img src={leadership} alt="leadership" class ="border-black 300" />
                        <h2 class="text-blue-600 font-bold">Name</h2>
                        <p class="font-bold">Position</p>
                        <p>Lorem ipsum</p>
                    </div>
                    <div>
                        <img src={leadership} alt="leadership" class ="border-black 300" />
                        <h2 class="text-blue-600 font-bold">Name</h2>
                        <p class="font-bold">Position</p>
                        <p>Lorem ipsum</p>
                    </div>
                    <div class="mb-10">
                        <img src={leadership} alt="leadership" class ="border-black 300" />
                        <h2 class="text-blue-600 font-bold">Name</h2>
                        <p class="font-bold">Position</p>
                        <p>Lorem ipsum</p>
                    </div>
                </div> 
            </div>
             
        )
    }
}

export default ExecBoard