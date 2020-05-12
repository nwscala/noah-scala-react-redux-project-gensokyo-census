import { combineReducers } from 'redux'
import characters from './characters'
import spellcards from './spellcards'
import games from './games'

export default combineReducers({
    characters,
    spellcards,
    games
})