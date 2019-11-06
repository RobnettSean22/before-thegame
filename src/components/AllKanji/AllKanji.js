import React, { Component } from 'react'
import Rapid from '../Rapid'
import {connect} from 'react-redux'
import {readKanji} from '../../reducer/kanjiReducer'
class AllKanji extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 allKanji:[]
        }
    }

    componentDidMount(){
        this.readAllKanji()
    }

    readAllKanji(){
        Rapid.get('/kanji/all').then(response => {
           this.props.readKanji(response.data)
        }).catch(err => console.log(err))
    }

    
    render() {
       
        
        
        return (
            <div>
               
            </div>
        )
    }
}

const mapStateToProps = state => {
 return state
}
 const mapDispatchProps = {
     readKanji
 }
export default connect(
    mapStateToProps,
    mapDispatchProps
)(AllKanji)
