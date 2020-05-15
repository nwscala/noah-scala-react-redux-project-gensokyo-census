import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import AppearanceForm from './AppearanceForm'
import { deleteAppearance } from '../actions/appearance'


class Appearance extends Component {
    state = {
        toggleForm: false
    }
    
    parentCharacter = () => {
        return this.props.characters.find(character => character.id === this.props.appearance.character_id)
    }
    parentGame = () => {
        return this.props.games.find(game => game.id === this.props.appearance.game_id)
    }
    
    handleEditClick = () => {
        this.setState(previousState => {
            return {
                toggleForm: !previousState.toggleForm
            }
        })
    }

    handleDeleteClick = () => {
        this.props.deleteAppearance(this.props.appearance)
    }
    
    render() {
       return (
        this.props.appearance
        ? <li>
            {this.parentCharacter() ? <Link to={`/characters/${this.parentCharacter().id}`}>{this.parentCharacter().name}</Link> : ""} was {this.props.appearance.playable ? "playable" : `a ${this.props.appearance.stage}`} in {this.parentGame() ? <Link to={`/games/${this.parentGame().id}`}>{this.parentGame().name}</Link> : ""}
            <br />
            <input onClick={this.handleEditClick} type="button" value="Click here to edit this appearance"/>
            {this.state.toggleForm ? <AppearanceForm appearance={this.props.appearance} parent={this.props.parent} gameParent={this.props.gameParent} newAppearance={false} closeForm={this.handleEditClick}/> : ""}
            <input onClick={this.handleDeleteClick} type="button" value="Click here to delete this appearance"/> 
        </li>
        : <h3>Girls are fetching data. Please wait warmly. Or maybe this girl doesn't have any appearances yet. You should add some!</h3>
        ) 
    }
    
}

const mapStateToProps = state => {
    return {
        characters: state.characters,
        games: state.games
    }
}


export default connect(mapStateToProps, { deleteAppearance })(Appearance)
