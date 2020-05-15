import React, { Component } from 'react'
import Spellcard from '../components/Spellcard'
import SpellcardForm from '../components/SpellcardForm'

const initialState = {
    name: "",
    notes: "",
    star_level_name: "",
    star_level: "",
    marisa_comments: "",
    character_id: 0
}

class SpellcardContainer extends Component {
    state = {
        toggleForm: false
    }
    
    handleClick = () => {
        this.setState(previousState => {
            return {
                toggleForm: !previousState.toggleForm
            }
        })
    }
    
    renderSpellcards = () => {
        if(this.props.character.spellcards) {
            return this.props.character.spellcards.map((spellcard, index) => {
                return <Spellcard key={index} spellcard={spellcard}/> 
            })
        }
        
    }

    render() {
        return (
            <div>
                {this.renderSpellcards()}
                <br />
                <input onClick={this.handleClick} type="button" value="Click here to create a new spellcard"></input>
                {this.state.toggleForm ? <SpellcardForm spellcard={initialState} character={this.props.character} newSpellcard={true} closeForm={this.handleClick}/> : ""}
            </div>
        )
    }
}

export default SpellcardContainer
