import React, { Component } from "react";
import leadership from "../images/leadership.png";
import profilePic from "../images/profile-icon.png";

class ExecBoard extends Component {
  render() {
    return (
      <div className="pt-28 text-center">
        <div className="mt-6  mobile:border-transparent border-8 border-gray-800 tracking-wider text-gray-800 italic text-center text-5xl p-6 w-7/12 my-8  m-auto font-bold">
          <h2>EXECUTIVE BOARD</h2>
        </div>
        <div>
            <h2 className="text-3xl pb-6">2021-2022 executive board will be announced soon!</h2>
        </div>
        {/* <div className="grid grid-cols-3 gap-8 m-auto w-5/6 pt-4">
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
                </div>  */}
      </div>
    );
  }
}

export default ExecBoard;
