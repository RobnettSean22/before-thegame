import React, { Component } from 'react'
import './Home.css'

class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        
        return (
            <div className = 'background'>
                <div className = 'concealer'>
                    <input className = 'search-kanji' />
                    <button className = 'search'>Search</button>
                </div>
            </div>
        )
    }
}

export default Home
