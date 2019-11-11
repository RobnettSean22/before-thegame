import React, { Component } from 'react'
import Rapid from '../Rapid'
import './AllKanji.css'
import FolderContent from '../FolderContent/FolderContent'
// import {connect} from 'react-redux'
// import {readKanji} from '../../reducer/kanjiReducer'
class AllKanji extends Component {
    constructor(props) {
        super(props)

        this.state = {
                search:'',
                allKanji:[],
               
                
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

   

    render() {
            console.log(this.state.selece)
            const {allKanji, search} = this.state
            console.log(allKanji)
            let filteredKanji = allKanji.filter((kanjiObj) => {
                
               return kanjiObj.kanji.character.indexOf(search) !== -1 || kanjiObj.kanji.meaning.english.indexOf(search) !== -1　|| kanjiObj.kanji.kunyomi.hiragana.indexOf(search) !== -1　|| kanjiObj.kanji.onyomi.katakana.indexOf(search) !== -1　|| kanjiObj.kanji.onyomi.romaji.indexOf(search) !== -1 || kanjiObj.kanji.kunyomi.romaji.indexOf(search) !== -1

                
                
            }).map((k,i) => {
               
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
                        <img className = 'pics' src ={k.kanji.video.poster} alt = 'pic'/>
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

export default AllKanji

// const mapStateToProps = state => {
//  return state

// }

// const mapDispatchToProps = {
//     readKanji
// }
 
// export default connect(
//     mapStateToProps, mapDispatchToProps
  
// )(AllKanji)
