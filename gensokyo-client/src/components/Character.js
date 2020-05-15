import React, { Component } from 'react'
import SpellcardContainer from '../containers/SpellcardContainer'
import AppearanceContainer from '../containers/AppearanceContainer'
import CharacterForm from './CharacterForm'
import { connect } from 'react-redux'
import { deleteCharacter } from '../actions/character'

class Character extends Component {
    state = {
        toggleForm: false
    }

    handleEditClick = () => {
        this.setState(previousState => {
            return {
                toggleForm: !previousState.toggleForm
            }
        })
    }

    handleDeleteClick = () => {
        this.props.deleteCharacter(this.props.character, this.props.history)
            .then( () => {
                this.props.history.push("/characters")
            })
    }
    
    render () {
        return (
            this.props.character
                ? <div>
                    <p><span>Name:</span> {this.props.character.name}</p>
                    <p><span>Title:</span> {this.props.character.title}</p>
                    <p><span>Species:</span> {this.props.character.species}</p>
                    <p><span>Abilities:</span> {this.props.character.abilities}</p>
                    <p><span>Occupation:</span> {this.props.character.occupation ? this.props.character.occupation : "None"}</p>
                    <p><span>Location:</span> {this.props.character.location}</p>
                    <input onClick={this.handleEditClick} type="button" value="Click here to edit this character"/>
                    {this.state.toggleForm ? <CharacterForm character={this.props.character} newCharacter={false} closeForm={this.handleEditClick}/> : ""}
                    <input onClick={this.handleDeleteClick} type="button" value="Click here to delete this character"/>
                    <p><span>Appearances:</span></p>
                    <div>
                        <AppearanceContainer parent={this.props.character}/>
                    </div>
                    <p><span>Spellcards (According to the Grimoire of Marisa):</span></p>
                    <ul>
                        <SpellcardContainer character={this.props.character}/>
                    </ul>
                </div>
                : <h3>Girls are fetching data. Please wait warmly.</h3>
            
        )
    }
}

export default connect(null, { deleteCharacter })(Character)
