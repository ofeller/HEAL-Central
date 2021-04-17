import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect, // Be sure to add this import
} from "react-router-dom";
import Userfront from "@userfront/react";

Userfront.init("vndgv7b7");

const PasswordResetForm = Userfront.build({
  toolId: "oaaodb"
});

class Reset extends Component {
    render() {
        function renderFn({ location }) {
            // If the user is not logged in, redirect to login
            if (!Userfront.accessToken()) {
              return (
                <Redirect
                  to={{
                    pathname: "/login",
                    state: { from: location },
                  }}
                />
              );
            }
        const userData = JSON.stringify(Userfront.user, null, 2);
        return (
            <div className="pt-24 pb-8">
              <pre>{userData}</pre>
                 <PasswordResetForm className="" />
             </div>
            );
        }      
    return <Route render={renderFn} />;
    }
}

export default Reset