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

    handleBool = (event) => {
        if(event.target.value === "true") {
            this.setState({
                playable: true
            })
        } else {
            this.setState({
                playable: false
            })
        }
    }

    handleInt = (event) => {
        this.setState({
            [event.target.name]: parseInt(event.target.value)
        })
    }

    generateCharacterOptions = () => {
        return this.props.characters.map(character => {
            return <option key={character.id} value={character.id}>{character.name}</option>
        })
    }

    generateGameOptions = () => {
        return this.props.games.map(game => {
            return <option key={game.id} value={game.id}>{game.name}</option>
        })
    }

    render() {
        // console.log(this.generateGameOptions())
        return (
            <div>
                <form>
                    {this.props.gameParent 
                    ? <label>
                        Character:
                        <select onChange={this.handleInt} name="character_id" value={this.state.character_id}>
                            {this.generateCharacterOptions()}
                        </select>
                    </label>
                    : <label>
                        Game:
                        <select onChange={this.handleInt} name="game_id" value={this.state.game_id}>
                            <option value={0}></option>
                            {this.generateGameOptions()}
                        </select>
                    </label>}
                    <br />
                    {this.state.playable
                    ? "" 
                    : <> 
                        <label>
                            Stage:
                            <input onChange={this.handleChange} type="text" name="stage" placeholder="Stage (i.e. Stage 2 Boss)" value={this.state.stage} />
                        </label>
                        <br />
                    </>
                    }
                    <label>
                        Playability:
                        <select onChange={this.handleBool} name="playable" value={this.state.playable}>
                            <option value={true}>Playable</option>
                            <option defaultValue value={false}>Not Playable</option>
                        </select>
                    </label>
                    

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