import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'


const Appearance = (props) => {
    const parentCharacter = props.characters.find(character => character.id === props.appearance.character_id)
    const parentGame = props.games.find(game => game.id === props.appearance.game_id)
    
    return (
        props.appearance
        ? <li>
            {parentCharacter ? <Link to={`/characters/${parentCharacter.id}`}>{parentCharacter.name}</Link> : ""} was {props.appearance.playable ? "playable" : `a ${props.appearance.stage}`} in {parentGame ? <Link to={`/games/${parentGame.id}`}>{parentGame.name}</Link> : ""} 
        </li>
        : <h3>Girls are fetching data. Please wait warmly. Or maybe this girl doesn't have any appearances yet. You should add some!</h3>
    )
}

const mapStateToProps = state => {
    return {
        characters: state.characters,
        games: state.games
    }
}


export default connect(mapStateToProps)(Appearance)
