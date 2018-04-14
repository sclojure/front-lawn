import React, { Component } from 'react'
import './header.css'
import { connect } from "react-redux";
import { search } from '../../reducer'
import axios from 'axios'

class Header extends Component {

    constructor(props) {
        super(props)
        this.state = {
            query: "",
            results: [],
            username: "",
            password: ""
        }
    }

    logIn(username, password) {

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
                    <div className="help-input-container">
                    <div className="help-input-box">
                    <div className="help-glass-icon" />
                    <input placeholder="Ask a question or search by keyword."></input>
                    </div>
                    </div>
                    <div className="suggested-articles-container">
                    <div>Suggested Articles</div>
                    <div className="suggested-article">
                    <div className="article-title">Getting Started Guide</div>
                    <div>➡</div>
                    </div>
                    <div className="suggested-article">
                    <div className="article-title">How is the price determined for my reservation?</div>
                    <div>➡</div>
                    </div>
                    <div className="suggested-article">
                    <div className="article-title">I'm a host. How do I make a change to a confirmed reservation?</div>
                    <div>➡</div>
                    </div>
                    <div className="suggested-article">
                    <div className="article-title">How does Airbnb handle security deposits?</div>
                    <div>➡</div>
                    </div>
                    <div className="suggested-article">
                    <div className="article-title">How do I create an account?</div>
                    <div>➡</div>
                    </div>
                    <div className="suggested-article">
                    <div className="article-title">Can I pay with any currency?</div>
                    <div>➡</div>
                    </div>
                    </div>
                    <div className="visit-help-container">
                    <div className="visit-help-button">
                    <div>Visit the Help Center</div>
                    </div>
                    <div className="article-title">Give feedback</div>
                    </div>
                </div>
                <div className="header-container">
                    <div className="header-bar">
                        <div className="housebnb-logo">
                        </div>
                        <div className="condos-search-bar-off" id="search-bar">
                            <div className="glass-icon" onClick={() => this.searchQuery()}></div>
                            <input placeholder="Anywhere • Condos" onChange={(e) => this.setState({query: e.target.value})}></input>
                        </div>
                        <div className="room-search-bar-off" id="room-search-bar">
                            <div className="glass-icon"></div>
                            <input placeholder="Search"></input>
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
                                <input placeholder="username" onChange={(e) => this.setState({username: e.target.value})}></input>
                                <input placeholder="password" onChange={(e) => this.setState({password: e.target.value})}></input>
                                <button onClick={() => this.logIn(this.state.username, this.state.password)}>Log in</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header-bottom-border">

                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return state
}

export default connect(mapStateToProps, { search })(Header)