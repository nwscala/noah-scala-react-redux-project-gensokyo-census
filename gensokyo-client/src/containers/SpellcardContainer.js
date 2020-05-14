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
        displayForm: false
    }
    
    handleClick = () => {
        this.setState(previousState => {
            return {
                displayForm: !previousState.displayForm
            }
        })
    }
    
    renderSpellcards = () => {
        return this.props.character.spellcards.map((spellcard, index) => {
            return <Spellcard key={index} spellcard={spellcard}/> 
        })
    }

    render() {
        return (
            <div>
                {this.renderSpellcards()}
                <br />
                <input onClick={this.handleClick} type="button" value="Click here to create a new spellcard"></input>
                {this.state.displayForm ? <SpellcardForm spellcard={initialState} character={this.props.character} newSpellcard={true} /> : ""}
            </div>
        )
    }
}

export default SpellcardContainer
