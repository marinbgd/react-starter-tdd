import React, { Component } from 'react'
import LoginForm from './LoginForm'


export default class LoginPage extends Component {

    loginFormCb = (username, password) => {
        console.log('login cb', username, password)
    }

    render () {
        return (
            <div>
                <h1>Login</h1>

                <LoginForm onSubmitCallBack={this.loginFormCb}/>
            </div>
        )
    }
}
