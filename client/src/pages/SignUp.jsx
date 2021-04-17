import React, { Component } from 'react'
import Userfront from "@userfront/react";

Userfront.init("vndgv7b7");

const SignupForm = Userfront.build({
  toolId: "mnnkak"
});

class SignUp extends Component {
    render() {
        return (
            <div className="pt-24 pb-8">
                 <SignupForm className="pt-24" />
             </div>
        )
    }
}

export default SignUp