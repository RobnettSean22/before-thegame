import React, { Component } from 'react'
import Rapid from '../Rapid'
import {connect} from 'react-redux'
import {setUser} from  '../../reducer/userReducer'
import axios from 'axios'




class Study extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
            allKanji:[],
            kCode1:[],
            kCode2:[],
            kCode3:[]
            
        }
    }
    componentDidMount(){
        this.readAllKanji()
        this.readKanji(this.props.user.user.user_id, +this.props.match.params.folder_id)
        this.readKanji2(this.props.user.user.user_id, +this.props.match.params.folder_id)
        this.readKanji3(this.props.user.user.user_id, +this.props.match.params.folder_id)
        
       
    }
    shuffle(ji){
        let k = ji.length, t, i;
        while(k){
            i = Math.floor(Math.random() * k--);
            t = ji[k]
            ji[k] = ji[i]
            ji[i] = t;
        }
        return ji
    }
    readAllKanji(shuffle){
        Rapid.get('/kanji/all').then(response => {
         this.setState({
             allKanji: this.shuffle(response.data)

         })
         
         })    
    }

    readKanji(user_id, folder_id) {
        axios.get(`/api/read_kanji/${user_id}/${folder_id}`).then(response => {
            this.setState({
                kCode1:response.data
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

        const {kCode1} = this.state
        const {kCode2} = this.state
        const {kCode3} = this.state
       
        return (
            <div>
            {allKanji.length > 1 && kCode1.map((kc, i) => {
                const code = allKanji.filter(kcc =>{
                    return kc.index_number === kcc.references.kodansha
                })
                console.log(54616, code)
                const filtercode = code.filter(answers => {
                    return answers.kanji.meaning.english
                })
                console.log(filtercode)
                const mapShit = filtercode.map((fu,i) =>{
                    return(
                        <div  key = {i}>
                         <div>{fu.kanji.character}</div>
                            {fu.kanji.meaning.english}
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
)(Study)
