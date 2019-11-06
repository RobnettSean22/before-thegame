import {combineReducers} from 'redux'
import kanjiReducer from './kanjiReducer'


export default combineReducers({
    characters: kanjiReducer
})