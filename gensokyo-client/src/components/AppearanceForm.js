import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createAppearance, patchAppearance } from '../actions/appearance'

const errorStyle = {
    borderColor: "red"
}

class AppearanceForm extends Component {
    state = {
        ...this.props.appearance,
        errors: {
            character: false,
            game: false,
            playable: false,
            stage: false
        }
        
    }

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
                playable: true,
                stage: ""
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

    handleSubmit = (event) => {
        event.preventDefault()
        if(this.props.gameParent && this.props.newAppearance) {
            this.props.createAppearance(this.state)
                .then(resp => {
                    if(!resp.error) {
                        this.resetForm()
                        this.props.closeForm()
                    } else {
                        for(const field in resp.error) {
                            this.setState({
                                errors: {
                                    ...this.state.errors,
                                    [field]: resp.error[field][0]
                                }
                            })
                        }
                    }
                })
        } else if(!this.props.gameParent && this.props.newAppearance) {
            this.props.createAppearance(this.state)
                .then(resp => {
                    if(!resp.error) {
                        this.resetForm()
                        this.props.closeForm()
                    } else {
                        for(const field in resp.error) {
                            this.setState({
                                errors: {
                                    ...this.state.errors,
                                    [field]: resp.error[field][0]
                                }
                            })
                        }
                    }
                })
        } else if(this.props.gameParent && !this.props.newAppearance) {
            this.props.patchAppearance(this.state)
                .then(resp => {
                    if(!resp.error) {
                        this.props.closeForm()
                    } else {
                        for(const field in resp.error) {
                            this.setState({
                                errors: {
                                    ...this.state.errors,
                                    [field]: resp.error[field][0]
                                }
                            })
                        }
                    }
                })
        } else if(!this.props.gameParent && !this.props.newAppearance) {
            this.props.patchAppearance(this.state)
                .then(resp => {
                    if(!resp.error) {
                        this.props.closeForm()
                    } else {
                        for(const field in resp.error) {
                            this.setState({
                                errors: {
                                    ...this.state.errors,
                                    [field]: resp.error[field][0]
                                }
                            })
                        }
                    }
                })
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    {this.props.gameParent 
                    ? <label>
                        Character:
                        <select 
                            onChange={this.handleInt} 
                            name="character_id" 
                            value={this.state.character_id}
                            style={this.state.errors.character ? errorStyle : {}}
                        >
                            <option value={0}>{this.state.errors.character ? `Character ${this.state.errors.character}` : "Please select a character"}</option>
                            {this.generateCharacterOptions()}
                        </select>
                    </label>
                    : <label>
                        Game:
                        <select 
                            onChange={this.handleInt} 
                            name="game_id" 
                            value={this.state.game_id}
                            style={this.state.errors.game ? errorStyle : {}}
                        >
                            <option value={0}>{this.state.errors.game ? `Game ${this.state.errors.game}` : "Please select a game"}</option>
                            {this.generateGameOptions()}
                        </select>
                    </label>}
                    <br />
                    {this.state.playable
                    ? "" 
                    : <> 
                        <label>
                            Stage:
                            <input 
                                onChange={this.handleChange} 
                                type="text" 
                                name="stage" 
                                placeholder={this.state.errors.stage ? `Stage ${this.state.errors.stage}` : "Stage (i.e. Stage 2 Boss)"} 
                                value={this.state.stage}
                                style={this.state.errors.stage ? errorStyle : {}} 
                            />
                        </label>
                        <br />
                    </>
                    }
                    <label>
                        Playability:
                        <select 
                            onChange={this.handleBool} 
                            name="playable" 
                            value={this.state.playable}
                            style={this.state.errors.playable ? errorStyle : {}}
                        >
                            <option value={true}>Playable</option>
                            <option defaultValue value={false}>Not Playable</option>
                        </select>
                    </label>
                    <br />
                    <input type="submit" value="Submit" />
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


export default connect(mapStateToProps, { createAppearance, patchAppearance })(AppearanceForm)