import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createCharacter, patchCharacter } from '../actions/character'

const errorStyle = {
    borderColor: "red"
}

class CharacterForm extends Component {
    state = {
        ...this.props.character,
        errors: {
            name: false,
            title: false,
            species: false,
            abilities: false,
            occupation: false,
            location: false
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    resetForm = () => {
        this.setState(this.props.character)
    }

    handleSubmit = (event) => {
        event.preventDefault()
        if(this.props.newCharacter) {
            this.props.createCharacter(this.state, this.props.history)
                .then(resp => {
                    if(!resp.error) {
                        this.resetForm()
                        this.props.history.push("/")
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
            this.props.patchCharacter(this.state)
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
                <h2>Create a New Character</h2>
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
                        Title:
                        <input
                            onChange={this.handleChange} 
                            type="text" 
                            name="title" 
                            value={this.state.title}
                            placeholder={this.state.errors.title ? `Title ${this.state.errors.title}` : "Title"}
                            style={this.state.errors.title ? errorStyle : {}} 
                        />
                    </label>
                    <br />
                    <label>
                        Species:
                        <input
                            onChange={this.handleChange} 
                            type="text" 
                            name="species" 
                            value={this.state.species}
                            placeholder={this.state.errors.species ? `Species ${this.state.errors.species}` : "Species"}
                            style={this.state.errors.species ? errorStyle : {}} 
                        />
                    </label>
                    <br />
                    <label>
                        Abilities:
                        <input
                            onChange={this.handleChange} 
                            type="text" 
                            name="abilities" 
                            value={this.state.abilities}
                            placeholder={this.state.errors.abilities ? `Abilities ${this.state.errors.abilities}` : "Abilities"}
                            style={this.state.errors.abilities ? errorStyle : {}} 
                        />
                    </label>
                    <br />
                    <label>
                        Occupation:
                        <input
                            onChange={this.handleChange} 
                            type="text" 
                            name="occupation" 
                            value={this.state.occupation}
                            placeholder={this.state.errors.occupation ? `Occupation ${this.state.errors.occupation}` : "Occupation"}
                            style={this.state.errors.occupation ? errorStyle : {}} 
                        />
                    </label>
                    <br />
                    <label>
                        Location:
                        <input
                            onChange={this.handleChange} 
                            type="text" 
                            name="location" 
                            value={this.state.location}
                            placeholder={this.state.errors.location ? `Location ${this.state.errors.location}` : "Location"}
                            style={this.state.errors.location ? errorStyle : {}} 
                        />
                    </label>
                    <br />
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        )
    }
}


export default connect(null, { createCharacter, patchCharacter })(CharacterForm)