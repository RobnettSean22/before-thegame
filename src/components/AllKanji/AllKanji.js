import React, { Component } from 'react'
import Rapid from '../Rapid'
// import {connect} from 'react-redux'
// import {readKanji} from '../../reducer/kanjiReducer'
class AllKanji extends Component {
    constructor(props) {
        super(props)

        this.state = {
                search:'',
                allKanji:[]
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

            const {allKanji, search} = this.state
            console.log(allKanji)
            let filteredKanji = allKanji.filter((kanjiObj) => {
                
               return kanjiObj.kanji.character.indexOf(search) !== -1 || kanjiObj.kanji.meaning.english.indexOf(search) !== -1　|| kanjiObj.kanji.kunyomi.hiragana.indexOf(search) !== -1　|| kanjiObj.kanji.onyomi.katakana.indexOf(search) !== -1　

                
                
            }).map((k,i) => {
            return(
                <div key = {i}>
                    <div>
                    {k.kanji.character}
                    {k.kanji.meaning.english}
                    {k.kanji.kunyomi.hiragana}
                    {k.kanji.onyomi.katakana}
                    </div>
                    
                </div>
            )
        })
        return (
            <div>
            <input value = {search} onChange = {(e) => this.setState({search:e.target.value})}/>
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
