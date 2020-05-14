import React, { Component } from 'react'
import SpellcardForm from './SpellcardForm'
import { connect } from 'react-redux'
import { deleteSpellcard } from '../actions/spellcard'

class Spellcard extends Component {
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
        this.props.deleteSpellcard(this.props.spellcard)
    }
    
    render() {
        return (
            this.props.spellcard
            ? <li>
                <h5>Name: {this.props.spellcard.name}</h5>
                <h5>Notes: {this.props.spellcard.notes}</h5>
                <h5>{this.props.spellcard.star_level_name}: {this.props.spellcard.star_level}</h5>
                <h6>Marisa's Comments: {this.props.spellcard.marisa_comments}</h6>
                <input onClick={this.handleEditClick} type="button" value="Click here to edit this spellcard"/>
                {this.state.toggleForm ? <SpellcardForm spellcard={this.props.spellcard} newSpellcard={false} closeForm={this.handleEditClick}/> : ""}
                <input onClick={this.handleDeleteClick} type="button" value="Click here to delete this spellcard"/>
            </li>
            : <h3>Girls are fetching data. Please wait warmly. Or maybe this girl doesn't have any spellcards yet. You should add some!</h3>
        )
    }
}


export default connect(null, { deleteSpellcard })(Spellcard)
