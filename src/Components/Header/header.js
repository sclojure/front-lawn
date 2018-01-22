import React, { Component } from 'react'
import './header.css'
import { connect } from "react-redux";
import { isTyped, complete, deleteThis } from '../../reducer'

class Header extends Component {

    componentDidMount() {
        console.log(this.props)
    }

    becomeHostHover() {
        const becomeHostBox = document.getElementById('become-host-box')
        becomeHostBox.className = "become-host-box"
    }

    becomeHostOff() {
        const becomeHostBox = document.getElementById('become-host-box')
        becomeHostBox.className = "become-host-box-off"
    }

    helpOn() {
        const help = document.getElementById('help-menu')
        const headerMenu = document.getElementById('header-menu')
        help.className = "help-menu"
    }

    helpClose() {
        const help = document.getElementById('help-menu')
        help.className = "help-menu-off"
    }

    render() {
        return (
            <div>
                 <div className="help-menu-off" id="help-menu">
                                <div className="help-menu-header">
                                <div className="help-menu-title">Airbnb Help</div>
                                <div className="help-menu-title" onClick={() => this.helpClose()}>X</div>
                                </div>
                                </div>
                <div className="header-container">
                    <div className="header-bar">
                        <div className="housebnb-logo">
                        </div>
                        <div className="condos-search-bar-off" id="search-bar">
                            <div className="glass-icon" />
                            <input placeHolder="Anywhere • Condos"></input>
                        </div>
                        <div className="header-menu" id="header-menu">
                            <div className="header-menu-item" onMouseOver={() => this.becomeHostHover()} onMouseLeave={() => this.becomeHostOff()}>
                                <p>Become a host</p>
                                <div className="become-host-box-off" id="become-host-box">
                                    <div className="become-host-menu">Host a home</div>
                                    <div className="become-host-menu">No time to host?</div>
                                    <div className="become-host-menu">Host an experience</div>
                                </div>
                            </div>
                            <div className="header-menu-item" onClick={() => this.helpOn()}>
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
                </div>
            </div>
        )
    }
}

function MapStateToProps(state) {
    return (
        state
    )
}

export default connect(MapStateToProps, { isTyped, complete, deleteThis })(Header)