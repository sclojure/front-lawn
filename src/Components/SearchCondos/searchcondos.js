import React, { Component } from 'react'
import './searchcondos.css'

import SearchHeader from '../SearchHeader/searchheader'

export default class SearchCondos extends Component {

    constructor(props) {
        super(props)
        this.state = {
            hover: ''
        }
    }

    componentDidMount() {
        const footer1 = document.getElementById('footer-1')
        const footer2 = document.getElementById('footer-2')
        footer1.style = "display: none;"
        footer2.style = "display: none;"
    }

    render() {
        return (
            <div>
                <SearchHeader />
                <div className="search-condos-container">
                    <div className="search-condos-left">
                        <div className="search-condos-item">
                            <div className="search-condos-picture">
                            <div className="heart-on">
                            ♡
                            </div>
                                <div className="left-arrow-off" id={this.state.hover}>⇚</div>
                                <div className="right-arrow-off" id={this.state.hover}>⇛</div>
                            </div>
                            <div className="search-condo-rooms-font">2 BEDS, 1 BATH</div>
                            <div className="search-condo-name-font">Vestibulum elementum</div>
                            <div className="search-condo-price-font">$120</div>
                            <div className="search-ratings-container">
                                <div className="search-stars-container">
                                    <p className="search-star-color">★★★★★</p>
                                    <p>(139)</p>
                                </div>
                                <p>• Superhost</p>
                            </div>
                        </div>
                        <div className="search-condos-item">
                            <div className="search-condos-picture">
                            <div className="heart-on">
                            ♡
                            </div>
                                <div className="left-arrow-off" id="left-arrow">⇚</div>
                                <div className="right-arrow-off" id="right-arrow">⇛</div>
                            </div>
                            <div className="search-condo-rooms-font">2 BEDS, 1 BATH</div>
                            <div className="search-condo-name-font">Vestibulum elementum</div>
                            <div className="search-condo-price-font">$120</div>
                            <div className="search-ratings-container">
                                <div className="search-stars-container">
                                    <p className="search-star-color">★★★★★</p>
                                    <p>(139)</p>
                                </div>
                                <p>• Superhost</p>
                            </div>
                        </div>
                        <div className="search-condos-item">
                            <div className="search-condos-picture">
                            <div className="heart-on">
                            ♡
                            </div>
                                <div className="left-arrow-off" id="left-arrow">⇚</div>
                                <div className="right-arrow-off" id="right-arrow">⇛</div>
                            </div>
                            <div className="search-condo-rooms-font">2 BEDS, 1 BATH</div>
                            <div className="search-condo-name-font">Vestibulum elementum</div>
                            <div className="search-condo-price-font">$120</div>
                            <div className="search-ratings-container">
                                <div className="search-stars-container">
                                    <p className="search-star-color">★★★★★</p>
                                    <p>(139)</p>
                                </div>
                                <p>• Superhost</p>
                            </div>
                        </div>
                        <div className="search-condos-item">
                            <div className="search-condos-picture">
                            <div className="heart-on">
                            ♡
                            </div>
                                <div className="left-arrow-off" id="left-arrow">⇚</div>
                                <div className="right-arrow-off" id="right-arrow">⇛</div>
                            </div>
                            <div className="search-condo-rooms-font">2 BEDS, 1 BATH</div>
                            <div className="search-condo-name-font">Vestibulum elementum</div>
                            <div className="search-condo-price-font">$120</div>
                            <div className="search-ratings-container">
                                <div className="search-stars-container">
                                    <p className="search-star-color">★★★★★</p>
                                    <p>(139)</p>
                                </div>
                                <p>• Superhost</p>
                            </div>
                        </div>
                    </div>
                    <div className="search-condos-right">
                        yes
                    </div>
                </div>
                <div className="search-condos-footer-container">Enter dates to see full pricing. Additional fees apply. Taxes may be added.</div>
            </div>
        )
    }
}