import React, { Component } from 'react'
import { connect } from 'react-redux'

class AppearanceForm extends Component {
    state = this.props.appearance

    componentDidMount() {
        if(this.props.gameParent) {
            this.setState({
                game_id: this.props.parent.id
            })
        } else {
            this.setState({
                character_id: this.props.parent.id
            })
        }
    }

    resetForm = () => {
        this.setState(this.props.appearance)
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    generateCharacterOptions = () => {
        this.props.characters.map(character => {
            return <option value={character.id}>{character.name}</option>
        })
    }

    generateGameOptions = () => {
        this.props.game.map(game => {
            return <option value={game.id}>{game.name}</option>
        })
    }

    render() {
        return (
            <div>
                <form>
                    {this.props.gameParent 
                    ? <label>
                        Character:
                        <select onChange={this.handleChange} name="character_id" value={this.state.character_id}>
                            {this.generateCharacterOptions()}
                        </select>
                    </label>
                    : <label>
                        Game:
                        <select onChange={this.handleChange} name="game_id" value={this.state.game_id}>
                            {this.generateGameOptions()}
                        </select>
                    </label>}
                    <br />
                    {this.state.playable 
                    ? "" 
                    : <label>
                        Stage:
                        <input onChange={this.handleChange} type="text" name="stage" placeholder="Stage (i.e. Stage 2 Boss)" value={this.state.stage} />
                    </label>
                    }
                    <br />

                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        characters: state.characters,
        games: state.games
    }
}

export default connect(mapStateToProps, {})(AppearanceForm)