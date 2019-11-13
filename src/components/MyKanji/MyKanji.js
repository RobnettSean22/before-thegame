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
                studyingName:'',
                study:[],
                studyName:'',
                folders:[],
               folderName: ''
              
        }
    }

   componentDidMount(){
       this.readStudyingFolder3(this.props.user.user.user_id)
      this.readStudyingFolder(this.props.user.user.user_id)
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
                folderName:''
                
            })
            
        })
        
    }

    readStudyingFolder(user_id){
       
        axios.get(`/api/get_studying_folder/${user_id}`).then(response => {
           
            this.setState({
                studying:response.data

            })
        })
    }
  
 
    createFolderStudying(user_id, studyingName){
       
        axios.post(`/api/studying_folder/${user_id}`, {studyingName}).then(response => {
            console.log(response.data)
            this.setState({
                studying:response.data,
                studyingName:''
               
            })
            
        })
        
    }

    readStudyingFolder3(user_id){
       
        axios.get(`/api/get_study_folder/${user_id}`).then(response => {
           
            this.setState({
                study:response.data

            })
        })
    }
    createFolderStudying3(user_id, studyName){
       
        axios.post(`/api/study_folder/${user_id}`, {studyName}).then(response => {
            console.log(response.data)
            this.setState({
                study:response.data,
                studyName:''
               
            })
            
        })
        
    }

    

    render() {
        
        const {folderName} = this.state
        const {folders} = this.state
        const {studying, studyingName} = this.state
        const {study, studyName} = this.state

        const mapStudy = study.map(folder3 =>    {
            return(
                <div key = {folder3.folder_id} >
                <button><Link to = {`/folder_content/${this.props.user.user.user_id}/${folder3.folder_id}`}>{folder3.folder_name}</Link></button>               
            </div>
            )
        })

        const mapStudying = studying.map(folder2 => {
            return(
                <div key = {folder2.folder_id} >
                    <button><Link to = {`/folder_content/${this.props.user.user.user_id}/${folder2.folder_id}`}>{folder2.folder_name}</Link></button>               
                </div>
            )
        })
        const mapFolderName = folders.map((folder) => {
            return (
                <div key = {folder.folder_id} >
                    <button><Link to = {`/folder_content/${this.props.user.user.user_id}/${folder.folder_id}`}>{folder.folder_name}</Link></button>               
                </div>
            )
        })
      
        return (
            <div className = 'background2'>
                <div className = 'containers studied1'>
                    {mapFolderName}
                    <button onClick = {(e) => this.createFolderStudied(this.props.user.user.user_id, folderName)}>Add List</button>
                    <input  value = {folderName} onChange = {(e) => this.setState({folderName:e.target.value})}/>
                </div>
                <div className = 'containers studying2'>
                    {mapStudying}
                    <button onClick = {(e) => this.createFolderStudying(this.props.user.user.user_id, studyingName)}>Add List</button>
                    <input  value = {studyingName} onChange = {(e) => this.setState({studyingName:e.target.value})}/>
                </div>
                <div className = 'containers study3'>
                    {mapStudy}
                    <button onClick = {(e) => this.createFolderStudying3(this.props.user.user.user_id, studyName)}>Add List</button>
                    <input  value = {studyName} onChange = {(e) => this.setState({studyName:e.target.value})}/>
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
