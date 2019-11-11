import React, { Component } from 'react'
import MyKanji from '../MyKanji/MyKanji'
import {connect} from 'react-redux'
import {setUser} from  '../../reducer/userReducer'

class FolderContent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }
    

    render() {
        return (
            <div>
                <button></button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return state
} 



const mapDispatchToProps = {
    setUser
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FolderContent)
