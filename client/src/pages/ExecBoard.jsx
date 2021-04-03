import React, { Component } from 'react'
import leadership from '../images/leadership.png'
import profilePic from '../images/profile-icon.png'

class ExecBoard extends Component {
    render() {
        return (
            <div className="pt-24 text-center"> 
                <div className="border-8 border-black text-center text-5xl p-6 w-10/12 mb-4 m-auto font-bold">
                    <h2> Executive Board </h2>
                </div>
                <div className="grid grid-cols-3 gap-8 m-auto w-5/6">
                    <div>
                        <img src={profilePic} alt="profilePic" class ="border-black-300 m-auto"/>
                        <h2 className="text-blue-600 font-bold">Name</h2>
                        <p className="font-bold">Position</p>
                        <p>Lorem ipsum</p>
                    </div>
                    <div>
                        <img src={profilePic} alt="profilePic" class ="border-black-300 m-auto"/>
                        <h2 className="text-blue-600 font-bold">Name</h2>
                        <p className="font-bold">Position</p>
                        <p>Lorem ipsum</p>
                    </div>
                    <div>
                        <img src={profilePic} alt="profilePic" class ="border-black-300 m-auto"/>
                        <h2 className="text-blue-600 font-bold">Name</h2>
                        <p className="font-bold">Position</p>
                        <p>Lorem ipsum</p>
                    </div>
                    <div>
                        <img src={profilePic} alt="profilePic" class ="border-black-300 m-auto"/>
                        <h2 className="text-blue-600 font-bold">Name</h2>
                        <p className="font-bold">Position</p>
                        <p>Lorem ipsum</p>
                    </div>
                    <div>
                        <img src={profilePic} alt="profilePic" class ="border-black-300 m-auto"/>
                        <h2 className="text-blue-600 font-bold">Name</h2>
                        <p className="font-bold">Position</p>
                        <p>Lorem ipsum</p>
                    </div>
                    <div className="mb-10">
                        <img src={profilePic} alt="profilePic" class ="border-black-300 m-auto"/>
                        <h2 className="text-blue-600 font-bold">Name</h2>
                        <p className="font-bold">Position</p>
                        <p>Lorem ipsum</p>
                    </div>
                </div> 
            </div>
             
        )
    }
}

export default ExecBoard