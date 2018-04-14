import React, { Component } from 'react'
import Home from '../Home/home'
import "./condos.css"
import axios from 'axios'
import {connect} from 'react-redux'
import {chosen} from '../../reducer.js'
import {Link} from 'react-router-dom'

class Condos extends Component {

    constructor(props) {
        super(props)
        this.state = {
            apartments: [],
            condos: [],
            houses: [],
            chosenHomeName: "",
            chosenHomeId: "",
            chosenHomeType: "",
            chosenHomePrice: "",
            chosenHomeSummary: "",
            chosenHomePic: "",
            chosenHomeStreet: "",
            chosenHomeCity: "",
            chosenHomeState: "",
            chosenHomeCountry: "",
            chosenHomeZip: "",
            chosenHomeLat: "",
            chosenHomeLong: "",
            chosenHomeBooked: ""
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
            })

    }

    propertyClick(name, id, type, price, summary, pic, street, city, state, country, zip, lat, long, booked) {
        this.setState({
            chosenHomeName: name,
            chosenHomeId: id,
            chosenHomeType: type,
            chosenHomePrice: price,
            chosenHomeSummary: summary,
            chosenHomePic: pic,
            chosenHomeStreet: street,
            chosenHomeCity: city,
            chosenHomeState: state,
            chosenHomeCountry: country,
            chosenHomeZip: zip,
            chosenHomeLat: lat,
            chosenHomeLong: long,
            chosenHomeBooked: booked
        })
        window.location = "http://localhost:3000/room"
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
                            <a href={`/room/${item.property_id}`}>
                        <div className="featured-condo-pic" style={{ backgroundImage: `url("${item.image_med}")` }}>
                        </div>
                        </a>
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
                        <a href={`/room/${item.property_id}`}>
                        <div className="featured-condo-pic" style={{ backgroundImage: `url("${item.image_med}")` }}>
                        </div>
                        </a>
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
                        <a href={`/room/${item.property_id}`}>
                        <div className="featured-condo-pic" style={{ backgroundImage: `url("${item.image_med}")` }}>
                        </div>
                        </a>
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

function mapStateToProps(state) {
    return state
}

export default connect(mapStateToProps)(Condos)