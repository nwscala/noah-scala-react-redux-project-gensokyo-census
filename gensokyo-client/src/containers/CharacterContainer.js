import React from 'react'
import Character from '../components/Character'
import { Switch, Route } from 'react-router-dom'
import CharacterLinks from '../components/CharacterLinks'
import { connect } from 'react-redux'
import CharacterForm from '../components/CharacterForm'

const initialCharacter = {
    name: "",
    title: "",
    species: "",
    abilities: "",
    occupation: "",
    location: ""
}


const CharacterContainer = (props) => {
    return (
        <>
            <Switch>
                <Route exact path="/characters" render={(routerProps) => <CharacterLinks {...routerProps} characters={props.characters} games={props.games}/> }/>
                <Route exact path="/characters/new" render={ routerProps => <CharacterForm {...routerProps} newCharacter={true} character={initialCharacter}/> }/>
                <Route exact path="/characters/:id" render={(routerProps) => {
                    const character = props.characters.find(character => character.id === parseInt(routerProps.match.params.id))
                    return <Character {...routerProps} character={character} />
                }}/>
            </Switch>
        </>
    )
}

const mapStateToProps = state => {
    return {
        characters: state.characters,
        games: state.games
    }
  }

export default connect(mapStateToProps)(CharacterContainer)
