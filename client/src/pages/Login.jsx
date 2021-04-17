import React, { Component } from 'react'
import Userfront from "@userfront/react";

Userfront.init("vndgv7b7");

const LoginForm = Userfront.build({
  toolId: "aaakrm"
});

class Login extends Component {
    render() {
        return (
            <div className="pt-24 pb-8">
                 <LoginForm className="pt-24" />
             </div>
        )
    }
}

export default Login