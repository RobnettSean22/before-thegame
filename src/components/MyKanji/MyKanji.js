import React, { Component } from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import {setUser} from '../../reducer/userReducer'


class MyKanji extends Component {
    constructor(props) {
        super(props)

        this.state = {
                folders:[],
               folderName: ''
              
        }
    }

  componentDidMount(){
      this.readFolder(this.props.user.user.user_id)
  }

    readFolder(user_id){
       
        axios.get(`/api/get_folder/${user_id}`).then(response => {
            this.setState({
                folders:response.data
            })
        })
    }
  
    createFolderStudied(user_id, folderName){
       
        axios.post(`/api/studied_folder/${user_id}`, {folderName}).then(response => {
            console.log(response.data)
            this.setState({
                folders:response.data,
               
            })
            
        })
        
    }

    render() {
        console.log(this.props.user)
        const {folderName} = this.state
        const {folders} = this.state
        const mapFolderName = folders.map((folder) => {
            return (
                <div key = {folder.folder_id} >
                    <button>{folder.folder_name}</button>               
                </div>
            )
        })
      
        return (
            <div>
                {mapFolderName}
                <button onClick = {(e) => this.createFolderStudied(this.props.user.user.user_id, folderName)}>Add List</button>
                <input  value = {folderName} onChange = {(e) => this.setState({folderName:e.target.value})}/>

                
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
)(MyKanji)
