import React, { Component } from 'react'
import AppearanceContainer from '../containers/AppearanceContainer'
import { connect } from 'react-redux'
import { deleteGame } from '../actions/games'
import GameForm from './GameForm'

class Game extends Component {
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
        this.props.deleteGame(this.props.game, this.props.history)
            .then( () => {
                this.props.history.push("/games")
            })
    }
    
    render() {
        return (
            this.props.game
            ? <div>
                <p><span>Title:</span> {this.props.game.name}</p>
                <p><span>Developer:</span> {this.props.game.developer}</p>
                <p><span>Publisher:</span> {this.props.game.publisher}</p>
                <p><span>Genre:</span> {this.props.game.genre}</p>
                <p><span>Release Date:</span> {this.props.game.release_date}</p>
                <p><span>Story:</span></p>
                <ul>
                    <li>
                        <p>{this.props.game.story}</p>
                    </li>
                </ul>
                <input onClick={this.handleEditClick} type="button" value="Click here to edit this game"/>
                {this.state.toggleForm ? <GameForm game={this.props.game} newGame={false} closeForm={this.handleEditClick}/> : ""}
                <input onClick={this.handleDeleteClick} type="button" value="Click here to delete this game"/>
                <p><span>Appearances:</span></p>
                <div>
                    <AppearanceContainer parent={this.props.game}/>
                </div>
            </div>
            : <h3>Girls are fetching data. Please wait warmly.</h3>
        )
    }
}

export default connect(null, { deleteGame })(Game)