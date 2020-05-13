import React from 'react'
import { connect } from 'react-redux'
import Character from '../components/Character'
import Spellcard from '../components/Spellcard'
import Appearance from '../components/Appearance'
import { Link, Switch, Route } from 'react-router-dom'


const CharacterContainer = (props) => {
    const renderSpellcards = (character) => {
        return character.spellcards.map((spellcard, index) => {
            return <Spellcard key={index} spellcard={spellcard}/> 
        })
    }

    const renderAppearances = (character) => {
        return character.appearances.map((appearance, index) => {
            return <Appearance key={index} appearance={appearance} character={character} />
        })
    }

    const renderCharacters = () => {
        return props.characters.map((character, index) => {
            return <Character key={index} character={character} renderAppearances={renderAppearances} renderSpellcards={renderSpellcards}/>
        })
    }

    const renderCharacterLinks = () => {
        return props.characters.map(character => {
            return <Link key={character.id} to={`/characters/${character.id}`}>{character.name}</Link>
        })
    }

    
    return (
        <>
            <ul>
                {renderCharacterLinks()}
            </ul>

            <Switch>
                <Route exact path="/characters/:id" render={(routerProps) => {
                    const character = props.characters.find(character => character.id === parseInt(routerProps.match.params.id))
                    return <Character {...routerProps} character={character} renderAppearances={renderAppearances} renderSpellcards={renderSpellcards}/>
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
