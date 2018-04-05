import React, { Component } from 'react'
import Home from '../Home/home'
import "./condos.css"
import axios from 'axios'

export default class Condos extends Component {

    constructor(props) {
        super(props)
        this.state = {
            apartments: [],
            condos: [],
            houses: [],
            apt1: "",
            apt1image: ""
        }
    }

    componentDidMount() {
        axios.get('http://localhost:3001/api/apartments')
            .then(res => {
                const rawApartments = [res.data]
                const eightApartments = rawApartments[0].splice(0, 8)
                this.setState({ apartments: eightApartments})
            })
                axios.get('http://localhost:3001/api/condos')
            .then(res => {
                const rawCondos = [res.data]
                const eightCondos = rawCondos[0].splice(0, 8)
                this.setState({ condos: eightCondos})
            }), () => console.log(this.state)

    }

    propertyClick(price) {
        console.log(price)
    }

    render() {
        return (
            <div>
                <Home />
                <div className="featured-condos-title" id="apartments">
                    <h1>Featured Apartments</h1>
                </div>
                <div className="featured-condos-container">
                {this.state.apartments.map(item => {
                    return (
                            <div className="featured-condo">
                        <div className="featured-condo-pic" style={{ backgroundImage: `url("${item.image_med}")` }} onClick={() => this.propertyClick(item.price)}>
                        </div>
                        <p className="featured-condo-rooms-font">{item.city}</p>
                        <p className="featured-condo-name-font">{item.property_name}</p>
                        <p className="featured-condo-price-font">${item.price}</p>
                        <div className="ratings-container">
                            <div className="stars-container">
                                <p className="star-color">★★★★★</p>
                                <p>(139)</p>
                            </div>
                            <p>• Superhost</p>
                        </div>
                        </div>
                    )
                })}
                </div>
                <div className="featured-condos-title" id="condos">
                    <h1>Featured Condos</h1>
                </div>
                <div className="featured-condos-container">
                {this.state.condos.map(item => {
                    return (
                            <div className="featured-condo">
                        <div className="featured-condo-pic" style={{ backgroundImage: `url("${item.image_med}")` }}>
                        </div>
                        <p className="featured-condo-rooms-font">{item.city}</p>
                        <p className="featured-condo-name-font">{item.property_name}</p>
                        <p className="featured-condo-price-font">${item.price}</p>
                        <div className="ratings-container">
                            <div className="stars-container">
                                <p className="star-color">★★★★★</p>
                                <p>(139)</p>
                            </div>
                            <p>• Superhost</p>
                        </div>
                        </div>
                    )
                })}
                </div>
                <div className="featured-condos-title" id="houses">
                    <h1>Featured Houses</h1>
                </div>
                <div className="featured-condos-container">
                {this.state.apartments.map(item => {
                    return (
                            <div className="featured-condo">
                        <div className="featured-condo-pic" style={{ backgroundImage: `url("${item.image_med}")` }}>
                        </div>
                        <p className="featured-condo-rooms-font">{item.city}</p>
                        <p className="featured-condo-name-font">{item.property_name}</p>
                        <p className="featured-condo-price-font">${item.price}</p>
                        <div className="ratings-container">
                            <div className="stars-container">
                                <p className="star-color">★★★★★</p>
                                <p>(139)</p>
                            </div>
                            <p>• Superhost</p>
                        </div>
                        </div>
                    )
                })}
                </div>

            </div>
        )
    }
}