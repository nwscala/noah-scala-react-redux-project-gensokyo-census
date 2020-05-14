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
        gameParent: false,
        toggleForm: false
    }

    componentDidMount() {
        if(this.props.parent.developer) {
            this.setState({
                gameParent: true
            })
        } else {
            this.setState({
                gameParent: false
            })
        }
    }
    
    renderAppearances = (parent) => {
        return parent.appearances.map((appearance, index) => {
            return <Appearance key={index} appearance={appearance} parent={this.props.parent} gameParent={this.state.gameParent} />
        })
    }

    handleClick = () => {
        this.setState(previousState => {
            return {
                toggleForm: !previousState.toggleForm
            }
        })
    }
    
    render() {
        return (
            <ul>
                {this.renderAppearances(this.props.parent)}
                <br />
                <input onClick={this.handleClick} type="button" value="Click here to create a new appearance"></input>
                {this.state.toggleForm ? <AppearanceForm appearance={initialState} parent={this.props.parent} gameParent={this.state.gameParent} newAppearance={true} closeForm={this.handleClick}/> : ""}
            </ul>
        )
    }
}

export default AppearanceContainer