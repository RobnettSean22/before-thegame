import React, { Component } from 'react'
import Rapid from '../Rapid'
import './AllKanji.css'

import axios from 'axios'
import {connect} from 'react-redux'
import {setUser} from '../../reducer/kanjiReducer'
class AllKanji extends Component {
    constructor(props) {
        super(props)

        this.state = {
                search:'',
                allKanji:[],
                add:[],
                add2:[],
                add3:[]
             
                
        }
        
    
    }
    componentDidMount(){
        this.readAllKanji()
        
    }

    readAllKanji(){
        Rapid.get('/kanji/all').then(response => {
            this.setState({
                allKanji: response.data
            })
         })    
    }

    addKanji(user_id, folder_id, index_number){
        axios.post(`/api/add_kanji/${user_id}/${folder_id}`, {index_number}).then(response => {
            this.setState({
                 add:response.data
 
            })
        })
 
    }
    addKanji2(user_id, folder_id, index_number){
        axios.post(`/api/add2_kanji/${user_id}/${folder_id}`, {index_number}).then(response => {
            this.setState({
                 add2:response.data
 
            })
        })
 
    }

    addKanji3(user_id, folder_id, index_number){
        axios.post(`/api/add3_kanji/${user_id}/${folder_id}`, {index_number}).then(response => {
            this.setState({
                 add3:response.data
 
            })
        })
 
    }



  

    render() {
            console.log(this.state.add2)
            console.log(this.state.add)
            const {allKanji, search} = this.state
            console.log(allKanji)
            let filteredKanji = allKanji.filter((kanjiObj) => {
                
               return kanjiObj.kanji.character.indexOf(search) !== -1 || kanjiObj.kanji.meaning.english.indexOf(search) !== -1　|| kanjiObj.kanji.kunyomi.hiragana.indexOf(search) !== -1　|| kanjiObj.kanji.onyomi.katakana.indexOf(search) !== -1　|| kanjiObj.kanji.onyomi.romaji.indexOf(search) !== -1 || kanjiObj.kanji.kunyomi.romaji.indexOf(search) !== -1

                
                
            }).map((k,i) => {
                console.log(typeof k.references.kodansha)
                
            return(
                <div  key = {i}>
                    
                    <div className = 'kanji-container'>
                        <div className = 'kanji'>
                            <div className = 'character-container'>
                            
                            <h1 className = 'character'>{k.kanji.character}</h1>
                            </div>
                        
                            <div className = 'kana' >
                            
                            <h2 className = 'kunyomi katahira' >KUN-YOMI: {k.kanji.kunyomi.hiragana}</h2>
                            
                            <h2 className = 'onyomi katahira' >ON-YOMI: {k.kanji.onyomi.katakana}</h2>
                            
                            
                            </div>
                        </div>
                        
                        <div className = 'pic-container'>
                       <img onClick = {(e) => this.addKanji(this.props.user.user.user_id, +this.props.match.params.folder_id, k.references.kodansha)} className = 'pics' src ={k.kanji.video.poster} alt = 'pic'/>
                        </div>
                        
                    
                        
                        
                        <div className = 'english-container' >
                        <h2 className = 'english' >English: {k.kanji.meaning.english}</h2>
                        </div>
                        
                    </div>
                    
                </div>
            )
        })
        return (
            <div>
            
                <div className = 'search-input-container'>
                    <input className = 'search-input' value = {search} onChange = {(e) => this.setState({search:e.target.value})}/>
                </div>
                
            
           {filteredKanji}
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
    mapStateToProps, mapDispatchToProps
  
)(AllKanji)
