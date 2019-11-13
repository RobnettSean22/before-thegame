import React, { Component } from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import {setUser} from '../../reducer/userReducer'
import {Link} from 'react-router-dom'
import './MyKanji.css'


class MyKanji extends Component {
    constructor(props) {
        super(props)

        this.state = {
                studying:[],
                study:[],
                folders:[],
               folderName: ''
              
        }
    }

  componentDidMount(){
      if(this.props.user.user){
        return this.readFolder(this.props.user.user.user_id) && this.readStudyingFolder(this.props.user.user.user_id)
      }else{
         this.props.history.push('/')
      }
      
  }

    

    readFolder(user_id){
       
        axios.get(`/api/get_folder/${user_id}`).then(response => {
            this.setState({
                folders:response.data
            })
        })
    }
    readStudyingFolder(user_id){
       
        axios.get(`/api/get_folder/${user_id}`).then(response => {
            this.setState({
                studying:response.data
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
    createFolderStudying(user_id, studyingName){
       
        axios.post(`/api/studied_folder/${user_id}`, {studyingName}).then(response => {
            console.log(response.data)
            this.setState({
                studying:response.data,
               
            })
            
        })
        
    }

    

    render() {
        
        const {folderName} = this.state
        const {folders} = this.state
        const mapFolderName = folders.map((folder) => {
            return (
                <div key = {folder.folder_id} >
                    <button><Link to = {`/folder_content/${this.props.user.user.user_id}/${folder.folder_id}`}>{folder.folder_name}</Link></button>               
                </div>
            )
        })
      
        return (
            <div className = 'background2'>
                <div className = 'containers studied'>
                    {mapFolderName}
                    <button onClick = {(e) => this.createFolderStudied(this.props.user.user.user_id, folderName)}>Add List</button>
                    <input  value = {folderName} onChange = {(e) => this.setState({folderName:e.target.value})}/>
                </div>

                
                
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
