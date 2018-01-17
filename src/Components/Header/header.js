import React, { Component } from 'react'
import './header.css'

export default class Header extends Component {
    render() {
        return (
            <div>
                <div className="header-container">
                    <div className="header-bar">
                        <div className="housebnb-logo">
                        </div>
                        <div className="header-menu">
                            <div className="header-menu-item">
                                <p>Become a host</p>
                            </div>
                            <div className="header-menu-item">
                                <p>Help</p>
                            </div>
                            <div className="header-menu-item">
                                <p>Sign up</p>
                            </div>
                            <div className="header-menu-item">
                                <p>Log in</p>
                            </div>
                        </div>
                    </div>
                    <div className="header-main">
                    <h1 className="housebnb-text">Housebnb</h1>
                    <h1 className="housebnb-text-2">Book unique homes and experiences</h1>
                    <h1 className="housebnb-text-3">all over the world.</h1>
                    <div className="header-search-container">
                    <div className="glass-icon" />
                    <input placeholder='Try "Salt Lake City"'></input>
                    <div className="search-box">
                    <p>Search</p>
                    </div>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}