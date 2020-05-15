import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createGame, patchGame } from '../actions/games'

const errorStyle = {
    borderColor: "red"
}

class GameForm extends Component {
    state = {
        ...this.props.game,
        errors: {
            name: false,
            developer: false,
            publisher: false,
            release_date: false,
            story: false,
            genre: false
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    resetForm = () => {
        this.setState(this.props.game)
    }

    handleSubmit = (event) => {
        event.preventDefault()
        if(this.props.newGame) {
            this.props.createGame(this.state, this.props.history)
                .then(resp => {
                    if(!resp.error) {
                        this.resetForm()
                        this.props.history.push("/games")
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
        } else {
            this.props.patchGame(this.state)
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
                <h2>Create a New Game</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:
                        <input 
                            onChange={this.handleChange}
                            type="text"
                            name="name"
                            value={this.state.name}
                            placeholder={this.state.errors.name ? `Name ${this.state.errors.name}` : "Name"}
                            style={this.state.errors.name ? errorStyle : {}}
                        />
                    </label>
                    <br />
                    <label>
                        Developer:
                        <input 
                            onChange={this.handleChange}
                            type="text"
                            name="developer"
                            value={this.state.developer}
                            placeholder={this.state.errors.developer ? `Developer ${this.state.errors.developer}` : "Developer"}
                            style={this.state.errors.developer ? errorStyle : {}}
                        />
                    </label>
                    <br />
                    <label>
                        Publisher:
                        <input 
                            onChange={this.handleChange}
                            type="text"
                            name="publisher"
                            value={this.state.publisher}
                            placeholder={this.state.errors.publisher ? `Publisher ${this.state.errors.publisher}` : "Publisher"}
                            style={this.state.errors.publisher ? errorStyle : {}}
                        />
                    </label>
                    <br />
                    <label>
                        Release Date:
                        <input 
                            onChange={this.handleChange}
                            type="text"
                            name="release_date"
                            value={this.state.release_date}
                            placeholder={this.state.errors.release_date ? `Release Date ${this.state.errors.release_date}` : "Release Date"}
                            style={this.state.errors.release_date ? errorStyle : {}}
                        />
                    </label>
                    <br />
                    <label>
                        Genre:
                        <input 
                            onChange={this.handleChange}
                            type="text"
                            name="genre"
                            value={this.state.genre}
                            placeholder={this.state.errors.genre ? `Genre ${this.state.errors.genre}` : "Genre"}
                            style={this.state.errors.genre ? errorStyle : {}}
                        />
                    </label>
                    <br />
                    <label>
                        Story:
                        <textarea 
                            onChange={this.handleChange}
                            type="text"
                            name="story"
                            value={this.state.story}
                            placeholder={this.state.errors.story ? `Story ${this.state.errors.story}` : "Story"}
                            style={this.state.errors.story ? errorStyle : {}}
                        />
                    </label>
                    <br />
                    <input type="submit" value="Submit"/>
                </form>
                
            </div>
        )
    }
}



export default connect(null, { createGame, patchGame })(GameForm)