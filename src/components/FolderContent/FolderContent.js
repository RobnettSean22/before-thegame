import React, { Component } from 'react'
import Rapid from '../Rapid'
import {connect} from 'react-redux'
import {setUser} from  '../../reducer/userReducer'
import axios from 'axios'
import {Link} from 'react-router-dom'
import './FolderContent.css'


class FolderContent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
            allKanji:[],
            kanjiCode:[],
            kanjiCode2:[],
            kanjiCode3:[]
            
        }
    }
    componentDidMount(){
        this.readAllKanji()
        this.readKanji(this.props.user.user.user_id, +this.props.match.params.folder_id)
        this.readKanji2(this.props.user.user.user_id, +this.props.match.params.folder_id)
        this.readKanji3(this.props.user.user.user_id, +this.props.match.params.folder_id)
        
       
    }
    
    readAllKanji(){
        Rapid.get('/kanji/all').then(response => {
         this.setState({
             allKanji:response.data

         })
         
         })    
    }

    readKanji(user_id, folder_id) {
        axios.get(`/api/read_kanji/${user_id}/${folder_id}`).then(response => {
            this.setState({
                kanjiCode:response.data
            })
        })
    }
 
    readKanji2(user_id, folder_id) {
        axios.get(`/api/read2_kanji/${user_id}/${folder_id}`).then(response => {
            this.setState({
                kanjiCode2:response.data
            })
        })
    }
    readKanji3(user_id, folder_id) {
        axios.get(`/api/read3_kanji/${user_id}/${folder_id}`).then(response => {
            this.setState({
                kanjiCode3:response.data
            })
        })
    }

    

    


    render() {
        
        const {allKanji} = this.state
       
        const {kanjiCode} = this.state
        const {kanjiCode2} = this.state
        const {kanjiCode3} = this.state
       
        
        return (
            <div>
                <div className = 'adk-container'>
                    <button className = 'add-kanji-to-folder' ><Link className = 'kanji-add' to={{pathname:`/add_to_folder/${this.props.user.user.user_id}/${this.props.match.params.folder_id}`, state:this.props.location.state}}>Add</Link></button>
                </div>
                <div className = 'folder-label-container'>
                
                    <h1 className = 'folder_label' >Folder Name</h1>
                    <button className = 'study' ><Link className = 'kanji-add' to={`/study/${this.props.user.user.user_id}/${this.props.match.params.folder_id}`}>Add</Link></button>
                
                </div>
              {allKanji.length > 1 && kanjiCode.map((kc, i) => {
                const code = allKanji.filter(kcc =>{
                    return kc.index_number === kcc.references.kodansha
                })
                console.log(54616, code)
                const mapShit = code.map((fu,i) =>{
                    return(
                        <div  key = {i}>
                        
                        <div className = 'kanjicontainer'>
                            <div className = 'kanji2'>
                                <div className = 'charactercontainer'>
                                
                                <h1 className = 'character2'>{fu.kanji.character}</h1>
                                </div>
                            
                                <div className = 'kana2' >
                                
                                <h2 className = 'kunyomi kata-hira' >KUN-YOMI: {fu.kanji.kunyomi.hiragana}</h2>
                                
                                <h2 className = 'onyomi kata-hira' >ON-YOMI: {fu.kanji.onyomi.katakana}</h2>
                                
                                
                                </div>
                            </div>
                            
                            <div className = 'piccontainer'>
                           <img  className = 'pics' src ={fu.kanji.video.poster} alt = 'pic'/>
                            </div>
                            
                        
                            
                            
                            <div className = 'englishcontainer' >
                            <h2 className = 'english' >English: {fu.kanji.meaning.english}</h2>
                            </div>
                            
                        </div>
                        
                    </div>
                    )
                })
                return mapShit
        
        })}
              {allKanji.length > 1 && kanjiCode2.map((kc, i) => {
                const code = allKanji.filter(kcc =>{
                    return kc.index_number === kcc.references.kodansha
                })
                console.log(54616, code)
                const mapShit = code.map((fu,i) =>{
                    return(
                        <div  key = {i}>
                        
                        <div className = 'kanji-container'>
                            <div className = 'kanji'>
                                <div className = 'character-container'>
                                
                                <h1 className = 'character'>{fu.kanji.character}</h1>
                                </div>
                            
                                <div className = 'kana' >
                                
                                <h2 className = 'kunyomi katahira' >KUN-YOMI: {fu.kanji.kunyomi.hiragana}</h2>
                                
                                <h2 className = 'onyomi katahira' >ON-YOMI: {fu.kanji.onyomi.katakana}</h2>
                                
                                
                                </div>
                            </div>
                            
                            <div className = 'pic-container'>
                           <img  className = 'pics' src ={fu.kanji.video.poster} alt = 'pic'/>
                            </div>
                            
                        
                            
                            
                            <div className = 'english-container' >
                            <h2 className = 'english' >English: {fu.kanji.meaning.english}</h2>
                            </div>
                            
                        </div>
                        
                    </div>
                    )
                })
                return mapShit
        
        })}
              {allKanji.length > 1 && kanjiCode3.map((kc, i) => {
                const code = allKanji.filter(kcc =>{
                    return kc.index_number === kcc.references.kodansha
                })
                console.log(54616, code)
                const mapShit = code.map((fu,i) =>{
                    return(
                        <div  key = {i}>
                        
                        <div className = 'kanji-container'>
                            <div className = 'kanji'>
                                <div className = 'character-container'>
                                
                                <h1 className = 'character'>{fu.kanji.character}</h1>
                                </div>
                            
                                <div className = 'kana' >
                                
                                <h2 className = 'kunyomi katahira' >KUN-YOMI: {fu.kanji.kunyomi.hiragana}</h2>
                                
                                <h2 className = 'onyomi katahira' >ON-YOMI: {fu.kanji.onyomi.katakana}</h2>
                                
                                
                                </div>
                            </div>
                            
                            <div className = 'pic-container'>
                           <img  className = 'pics' src ={fu.kanji.video.poster} alt = 'pic'/>
                            </div>
                            
                        
                            
                            
                            <div className = 'english-container' >
                            <h2 className = 'english' >English: {fu.kanji.meaning.english}</h2>
                            </div>
                            
                        </div>
                        
                    </div>
                    )
                })
                return mapShit
        
        })}
        
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
