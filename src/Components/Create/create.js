import React, { Component } from 'react'
import './create.css'

export default class Create extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: '',
            street: '',
            city: '',
            state: '',
            country: '',
            zip: '',
            price: '',
            picture: '',
            scrollPosition: 0,
            hover: '',
            address: 'California',
            lat: "41.223",
            long: "-111.9738304",
            size: "400x400"
        }
    }

    getLat() {
        var HttpClient = function() {
            this.get = function(aUrl, aCallback) {
                var anHttpRequest = new XMLHttpRequest();
                anHttpRequest.onreadystatechange = function() { 
                    if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
                        aCallback(anHttpRequest.responseText);
                }
        
                anHttpRequest.open( "GET", aUrl, true );            
                anHttpRequest.send( null );
            }
        }

        var client = new HttpClient();
        client.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${this.state.address}&key=AIzaSyAgIZ-A0dS_YP6vEoa7C3To4go4jlAhJ_g`, (response) => {
            response = JSON.parse(response)
            this.setState({lat: response.results[0].geometry.location.lat, long: response.results[0].geometry.location.lng}, () => console.log(this.state))
        })}

    render() {
        return (
            <div>
                <div className="create-container">
                    <div className="create-left-container">
                        <div className="create-header">
                            <div>What kind of place are you listing?</div>
                        </div>
                        <div className="create-sub-header">
                            <div>• First, let’s narrow things down</div>
                        </div>
                        <div className="select">
                        <select id="language" className="create-select">
                            <option value="Condo">Condo</option>
                            <option value="Cabin">Cabin</option>
                            <option value="Timeshare">Timeshare</option>
                        </select>
                        </div>
                        <div className="create-sub-header">
                            <div>• Name your property</div>
                        </div>
                        <div className="create-input">
                            <input placeholder="Name" onChange={(event) => this.setState({name: event.target.value}, () => console.log(this.state))}></input>
                        </div>
                        <div className="create-sub-header">
                            <div>• What's your address?</div>
                        </div>
                        <div className="create-input">
                            <input placeholder="Street" onChange={(event) => this.setState({street: event.target.value}, () => console.log(this.state))}></input>
                        </div>
                        <div className="create-input-margin">
                            <input placeholder="City" onChange={(event) => this.setState({city: event.target.value}, () => console.log(this.state))}></input>
                        </div>
                        <div className="create-input-margin">
                            <input placeholder="State" onChange={(event) => this.setState({state: event.target.value}, () => console.log(this.state))}></input>
                        </div>
                        <div className="create-input-margin">
                            <input placeholder="Country" onChange={(event) => this.setState({country: event.target.value}, () => console.log(this.state))}></input>
                        </div>
                        <div className="create-input-margin">
                            <input placeholder="ZIP Code" onChange={(event) => this.setState({zip: event.target.value}, () => console.log(this.state))}></input>
                        </div>
                        <div className="create-sub-header">
                            <div>• How much would you like to rent for? (i.e. $50 a day)</div>
                        </div>
                        <div className="create-input">
                            <input placeholder="Price per day" onChange={(event) => this.setState({price: event.target.value}, () => console.log(this.state))}></input>
                        </div>
                        <div className="create-sub-header">
                            <div>• Lastly, please copy & paste the URL of your home's picture</div>
                        </div>
                        <div className="create-input">
                            <input placeholder="Picture URL" onChange={(event) => this.setState({picture: event.target.value}, () => console.log(this.state))}></input>
                        </div>
                        <div className="create-button-container">
                            <div className="create-button">
                                <div>Submit</div>
                            </div>
                        </div>

                    </div>
                    <div className="create-right-container">
                        <div className="create-homes-picture">

                        </div>
                    </div>
                </div>

            </div>
        )
    }
}