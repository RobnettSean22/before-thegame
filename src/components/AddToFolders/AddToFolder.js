// import React, { Component } from 'react'
// import Rapid from '../Rapid'
// import axios from 'axios'
// import {connect} from 'react-redux'
// import {setUser} from  '../../reducer/userReducer'

// class AddToFolder extends Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//             allKanjiButton:null,
//             add: []
//         }
//     }
//     readAllKanji(){
//         Rapid.get('/kanji/all').then(response => {
//             this.setState({
//                 allKanjiButton: response.data
//             })
//          })    
//     }



//     render() {
//         return (
//             <div>
                
//             </div>
//         )
//     }
// }

// const mapStateToProps = state => {
//     return state
// } 



// const mapDispatchToProps = {
//     setUser
// }

// export default connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(AddToFolder)

