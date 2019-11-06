import {combineReducers} from 'redux'
import kanjiReducer from './kanjiReducer'
import userReducer from './userReducer'


export default combineReducers({
    characters: kanjiReducer, 
    user: userReducer
})