import React, { Component } from 'react'
import Appearance from '../components/Appearance'
import AppearanceForm from '../components/AppearanceForm'

const initialState = {
    playable: false,
    stage: "",
    character_id: 0,
    game_id: 0
}

class AppearanceContainer extends Component {
    state = {
        characterParent: false,
        gameParent: false,
        displayForm: false
    }

    componentDidMount() {
        if(this.props.parent.developer) {
            this.setState({
                gameParent: true
            })
        } else {
            this.setState({
                characterParent: true
            })
        }
    }
    
    renderAppearances = (parent) => {
        return parent.appearances.map((appearance, index) => {
            return <Appearance key={index} appearance={appearance} />
        })
    }

    handleClick = () => {
        this.setState(previousState => {
            return {
                displayForm: !previousState.displayForm
            }
        })
    }
    
    render() {
        return (
            <ul>
                {this.renderAppearances(this.props.parent)}
                <br />
                <input onClick={this.handleClick} type="button" value="Click here to create a new appearance"></input>
                {this.state.displayForm ? <AppearanceForm appearance={initialState} parent={this.props.parent} characterParent={this.state.characterParent} gameParent={this.state.gameParent} newAppearance={true}/> : ""}
            </ul>
        )
    }
}

export default AppearanceContainer