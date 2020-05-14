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
                    }
                })
        } else {
            this.props.patchSpellcard(this.state)
                .then(resp => {
                    if(!resp.error) {
                        
                    } else {
                        this.setState({
                            
                        })
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
                        <input onChange={this.handleChange} type="text" name="name" placeholder="Name" value={this.state.name}/>
                    </label>
                    <br />
                    <label>
                        Notes:
                        <input onChange={this.handleChange} type="text" name="notes" placeholder="Notes" value={this.state.notes} style={this.state.errors.notes ? errorStyle : {}}/>
                    </label>
                    <br />
                    <label>
                        Star Level Name:
                        <input onChange={this.handleChange} type="text" name="star_level_name" placeholder="Star Level Name" value={this.state.star_level_name}/>
                    </label>
                    <br />
                    <label>
                        Star Level:
                        <input onChange={this.handleChange} type="text" name="star_level" placeholder="Star Level" value={this.state.star_level}/>
                    </label>
                    <br />
                    <label>
                        Marisa's Comments:
                        <textarea onChange={this.handleChange} type="textarea" name="marisa_comments" placeholder="Marisa's Comments" value={this.state.marisa_comments}/>
                    </label>
                    <br />
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        )
    }
}


export default connect(null, { createSpellcard, patchSpellcard })(SpellcardForm)