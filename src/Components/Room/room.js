import React, { Component } from 'react'
import './room.css'
import ScrollListener from 'react-scroll-listen'

export default class Room extends Component {

    constructor(props) {
        super(props)
        this.state = {
            scrollPosition: 0
        }
        this.scroller = this.scroller.bind(this)
    }

    componentDidMount() {
        const roomSearch = document.getElementById('room-search-bar')
        roomSearch.className = "room-search-bar-on"
        this.scroller()
    }

    scroller() {
        window.onscroll = () => {
        if (this.state.scrollPosition > 825) {
            const rentBox = document.getElementById('rent-box')
            rentBox.className = "rent-box-fixed"
        } else if (this.state.scrollPosition < 825) {
            const rentBox = document.getElementById('rent-box')
            rentBox.className = "rent-box"
        }
    }
    }

    render() {
        return (
            <div>
                   <ScrollListener
      onScroll={value => this.setState({scrollPosition: value}, () => {
          console.log(this.state)
      })}
    />
                <div className="room-header-container" id="room-header">
                    <div className="room-header-top">
                        <div className="room-header-top-box">                   
                        <div className="save-heart">⤿</div>
                            <div>Share</div>
                        </div>
                        <div className="room-header-top-box">
                            <div className="save-heart">♡</div>
                            <div>Save</div>
                        </div>
                    </div>
                    <div className="room-header-bottom">
                    <div className="room-header-bottom-box">                   
                            <div>View Photos</div>
                        </div>
                    </div>
                </div>
                <div className="take-up-room">
                <div className="room-column">
                </div>
                <div className="rent-box" id="rent-box">
                </div>
                </div>
            </div>
        )
    }
}