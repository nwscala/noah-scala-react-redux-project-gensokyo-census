import { combineReducers } from 'redux'
import characters from './characters'
import games from './games'

export default combineReducers({
    characters,
    games
})