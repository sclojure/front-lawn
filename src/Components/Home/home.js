import React, { Component } from 'react'
import HomeMain from '../Home-Main/home-main'
import './home.css'

export default class Home extends Component {

    condoScroll() {
        const element = document.getElementById('condos')
        const viewportOffset = element.getBoundingClientRect();
        const target = viewportOffset.top;

        window.scroll({
            top: target,
            left: 0,
            behavior: 'smooth'
        });
    }

    cabinScroll() {
        const element = document.getElementById('cabins')
        const viewportOffset = element.getBoundingClientRect();
        const target = viewportOffset.top;

        window.scroll({
            top: target,
            left: 0,
            behavior: 'smooth'
        });
    }

    timeshareScroll() {
        const element = document.getElementById('timeshares')
        const viewportOffset = element.getBoundingClientRect();
        const target = viewportOffset.top;

        window.scroll({
            top: target,
            left: 0,
            behavior: 'smooth'
        });
    }

    render() {
        return (
            <div>
                <HomeMain />
                <div className="explore-container">
                    <h1 className="housebnb-text-2">Explore Housebnb</h1>
                    <div className="explore-pictures-container">
                        <div className="explore-condo-container" onClick={() => this.condoScroll()}>
                            <div className="explore-condo-pic" />
                            <div className="explore-title">
                                <p>Condos</p>
                            </div>
                        </div>
                        <div className="explore-cabins-container" onClick={() => this.cabinScroll()}>
                            <div className="explore-cabin-pic" />
                            <div className="explore-title">
                                <p>Cabins</p>
                            </div>
                        </div>
                        <div className="explore-cabins-container" onClick={() => this.timeshareScroll()}>
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