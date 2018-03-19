import React, { Component } from 'react'
import '../Host/host.css'

export default class Host extends Component {
    render() {
        return (
            <div>
                <div className="host-container">
                    <div className="profile-strip-container">
                        <div className="profile-pic">

                        </div>
                        <div className="verified-info-container">
                            <div className="verified-info-header">
                                <div className="text-margin">Verified info</div>
                            </div>
                            <div className="verified-info-body-container">
                                <div className="verified-container">
                                    <div className="verified-info-body-left">
                                        <div className="text-margin">Government ID</div>
                                        <div className="text-margin">Email address</div>
                                        <div className="text-margin">Phone number</div>
                                        <div className="text-margin">Work email</div>
                                    </div>
                                    <div className="verified-info-right">
                                        <div className="check-circle">
                                            <div>✓</div>
                                        </div>
                                        <div className="check-circle">
                                            <div>✓</div>
                                        </div>
                                        <div className="check-circle">
                                            <div>✓</div>
                                        </div>
                                        <div className="check-circle">
                                            <div>✓</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="learn-more">
                                    <div className="learn-text">
                                        <div>Learn more</div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="about-me-container">
                            <div className="verified-info-header">
                                <div className="text-margin">About me</div>
                            </div>
                            <div className="about-me-body-container">
                                <div className="school-header">School</div>
                                <div className="school-body">Oneonta High School, Oneonta Senior High School, University of Rochester, University of Rochester</div>
                                <div className="school-header">Work</div>
                                <div className="school-body">Forrest Technical Coatings</div>
                                <div className="school-header">Languages</div>
                                <div className="school-body">English, Español, Français</div>
                            </div>
                        </div>
                    </div>
                    <div className="profile-body">
                        <div className="profile-header-container">
                            <div className="profile-header">
                                <div>Jon Snow</div>
                            </div>
                            <div className="profile-location">
                                <div>Eugene, Oregon, United States · Joined in August 2012</div>
                            </div>
                            <div className="profile-report">
                                <div>⚑ Report user</div>
                            </div>
                            <div className="profile-bio">
                                <div>My family gives me life! I live in Eugene Oregon but my husband lives in LA. I travel there quite frequently. My favorite thing to do is spend time with my grand kids. They live on the east coast so I travel there quite a bit as well. I enjoy being outdoors running, hiking and at the beach!</div>
                            </div>
                        </div>
                        <div className="profile-badge-container">
                            <div className="superhost">
                                <div className="superhost-pic"></div>
                                <div className="superhost-title">
                                    <div>Superhost</div>
                                </div>
                            </div>
                            <div className="superhost">
                                <div className="reviews-box">
                                    <div>102</div>
                                </div>
                                <div className="superhost-title">
                                    <div>Reviews</div>
                                </div>
                            </div>
                            <div className="superhost">
                                <div className="verified-pic"></div>
                                <div className="superhost-title">
                                    <div>Verified</div>
                                </div>
                            </div>
                        </div>
                        <div className="homes-header">
                            <div>Hosted properties</div>
                        </div>
                        <div className="homes-container">
                            <div className="home-item">

                            </div>
                            <div className="home-item">

                            </div>
                            <div className="home-item">

                            </div>
                            <div className="home-item">

                            </div>
                            <div className="home-item">

                            </div>
                            <div className="home-item">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}