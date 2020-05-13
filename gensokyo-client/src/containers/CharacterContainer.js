import React from 'react'
import Character from '../components/Character'
import { Switch, Route } from 'react-router-dom'
import CharacterLinks from '../components/CharacterLinks'
import { connect } from 'react-redux'


const CharacterContainer = (props) => {
    return (
        <>
            <Switch>
                <Route exact path="/characters" render={(routerProps) => <CharacterLinks {...routerProps} characters={props.characters}/> }/>
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
        characters: state.characters
    }
  }

export default connect(mapStateToProps)(CharacterContainer)
