import React, { Component } from 'react'
import './home.css'

export default class Home extends Component {
    render() {
        return (
            <div>
                <div className="explore-container">
                    <h1 className="housebnb-text-2">Explore Housebnb</h1>
                    <div className="explore-pictures-container">
                        <div className="explore-condo-container">
                            <div className="explore-condo-pic" />
                            <div className="explore-title">
                            <p>Condos</p>
                            </div>
                        </div>
                        <div className="explore-cabins-container">
                            <div className="explore-cabin-pic" />
                            <div className="explore-title">
                            <p>Cabins</p>
                            </div>
                        </div>
                        <div className="explore-cabins-container">
                            <div className="explore-timeshare-pic" />
                            <div className="explore-title">
                            <p>Timeshares</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}