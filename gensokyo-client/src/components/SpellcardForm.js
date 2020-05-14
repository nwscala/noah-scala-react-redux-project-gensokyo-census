import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createSpellcard, patchSpellcard } from '../actions/spellcard'

const errorStyle = {
    borderColor: "red"
}

class SpellcardForm extends Component {
    state = {
        ...this.props.spellcard,
        errors: {
            name: false,
            notes: false,
            star_level_name: false,
            star_level: false,
            marisa_comments: false
        }
    }

    componentDidMount() {
        if(!this.state.character_id) {
            this.setState({
                character_id: this.props.character.id
            })
        }
    }

    resetForm = () => {
        this.setState(this.props.spellcard)
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        if(this.props.newSpellcard) {
            this.props.createSpellcard(this.state)
                .then(resp => {
                    if(!resp.error) {
                        this.resetForm()
                        console.log(this.props)
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
        } else {
            this.props.patchSpellcard(this.state)
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
                    <label>
                        Name:
                        <input 
                            onChange={this.handleChange} 
                            type="text" 
                            name="name" 
                            placeholder={this.state.errors.name ? `Name ${this.state.errors.name}` : "Name"} 
                            value={this.state.name} 
                            style={this.state.errors.name ? errorStyle : {}}
                        />
                    </label>
                    <br />
                    <label>
                        Notes:
                        <input 
                            onChange={this.handleChange} 
                            type="text" 
                            name="notes" 
                            placeholder={this.state.errors.notes ? `Notes ${this.state.errors.notes}` : "Notes"} 
                            value={this.state.notes} 
                            style={this.state.errors.notes ? errorStyle : {}}
                        />
                    </label>
                    <br />
                    <label>
                        Star Level Name:
                        <input 
                            onChange={this.handleChange} 
                            type="text" 
                            name="star_level_name" 
                            placeholder={this.state.errors.star_level_name ? `Star Level Name ${this.state.errors.star_level_name}` : "Star Level Name"} 
                            value={this.state.star_level_name} 
                            style={this.state.errors.star_level_name ? errorStyle : {}}
                        />
                    </label>
                    <br />
                    <label>
                        Star Level:
                        <input 
                            onChange={this.handleChange} 
                            type="text" 
                            name="star_level" 
                            placeholder={this.state.errors.star_level ? `Star Level ${this.state.errors.star_level}` : "Star Level"} 
                            value={this.state.star_level} 
                            style={this.state.errors.star_level ? errorStyle : {}}
                        />
                    </label>
                    <br />
                    <label>
                        Marisa's Comments:
                        <textarea 
                            onChange={this.handleChange} 
                            type="textarea" 
                            name="marisa_comments" 
                            placeholder={this.state.errors.marisa_comments ? `Marisa's Comments ${this.state.errors.marisa_comments}` : "Marisa's Comments"} 
                            value={this.state.marisa_comments} 
                            style={this.state.errors.marisa_comments ? errorStyle : {}}
                        />
                    </label>
                    <br />
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        )
    }
}


export default connect(null, { createSpellcard, patchSpellcard })(SpellcardForm)