import React, {Component} from 'react'
import './register.css'

export default class Register extends Component {

    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div className="register-main-container">
                <div className="register-inner-container">
                    <div className="register-info-container">
                        <div className="register-title">
                        <div>Join Housebnb and let the fun begin!</div>
                        </div>
                        <div className="register-subheader">
                        <div>• Create your username</div>
                        </div>
                        <input className="register-input" placeholder="Username"></input>
                        <div className="register-subheader">
                        <div>• What is your first name?</div>
                        </div>
                        <input className="register-input" placeholder="First name"></input>
                        <div className="register-subheader">
                        <div>• What is your last name?</div>
                        </div>
                        <input className="register-input" placeholder="Last name"></input>
                        <div className="register-subheader">
                        <div>• Write a short bio about you</div>
                        </div>
                        <input className="register-input" placeholder="Bio"></input>
                        <div className="register-button-container">
                            <div className="register-button">
                                <div>Register</div>
                            </div>
                        </div>
                    </div>
                    <div className="register-picture-container">
                        <div className="register-picture">

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}