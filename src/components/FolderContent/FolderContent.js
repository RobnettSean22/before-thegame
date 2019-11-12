import React, { Component } from 'react'
import Rapid from '../Rapid'
import {connect} from 'react-redux'
import {setUser} from  '../../reducer/userReducer'
import axios from 'axios'
import {Link} from 'react-router-dom'
import AllKanji from '../AllKanji/AllKanji'

class FolderContent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 kanjiCode:[],
                 allKanji:[]
        }
    }
    componentDidMount(){
        this.readAllKanji()
        this.readKanji(this.props.user.user.user_id, +this.props.match.params.folder_id)
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
    

    


    render() {
        const {allKanji} = this.state
       
        const {kanjiCode} = this.state
        
        // const mapKanjCode = kanjiCode.map((kc, i) => {
        //     const code = allKanji.filter(kcc =>{
        //         return kc.index_number === kcc.references.kodansha
        //     })
        //     console.log(54616, code)
        //     const mapShit = code.map((fu,i) =>{
        //         return(
        //             <div  key = {i}>
                    
        //             <div className = 'kanji-container'>
        //                 <div className = 'kanji'>
        //                     <div className = 'character-container'>
                            
        //                     <h1 className = 'character'>{fu.kanji.character}</h1>
        //                     </div>
                        
        //                     <div className = 'kana' >
                            
        //                     <h2 className = 'kunyomi katahira' >KUN-YOMI: {fu.kanji.kunyomi.hiragana}</h2>
                            
        //                     <h2 className = 'onyomi katahira' >ON-YOMI: {fu.kanji.onyomi.katakana}</h2>
                            
                            
        //                     </div>
        //                 </div>
                        
        //                 <div className = 'pic-container'>
        //                <img  className = 'pics' src ={fu.kanji.video.poster} alt = 'pic'/>
        //                 </div>
                        
                    
                        
                        
        //                 <div className = 'english-container' >
        //                 <h2 className = 'english' >English: {fu.kanji.meaning.english}</h2>
        //                 </div>
                        
        //             </div>
                    
        //         </div>
        //         )
        //     })
        //     return mapShit
    
    // })

        
        return (
            <div>
               <Link to ={`/add_to_folder/${this.props.user.user.user_id}/${this.props.match.params.folder_id}`}>Add</Link>
              {allKanji.length > 1 && kanjiCode.map((kc, i) => {
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
