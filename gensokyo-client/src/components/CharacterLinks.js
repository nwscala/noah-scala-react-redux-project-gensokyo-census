import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class CharacterLinks extends Component {
    state = {
        selectSorter: "0",
        game_id: 0
    }

    handleChange = (event) => {
        this.setState({
            selectSorter: event.target.value
        })
    }

    handleInt = (event) => {
        this.setState({
            [event.target.name]: parseInt(event.target.value)
        })
    }

    sortCharacters = () => {
        const copyOfCharacters = [...this.props.characters]
        
        function compareValues(key, order = "asc") {
            return function innerSort(a,b) {
                if(!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
                    return 0
                }

                const varA = (typeof a[key] === 'string')
                    ? a[key].toUpperCase() : a[key]
                const varB = (typeof b[key] === 'string')
                    ? b[key].toUpperCase() : b[key]

                let comparison = 0
                if(varA > varB) {
                    comparison = 1
                } else if(varA < varB) {
                    comparison = -1
                }
                return (
                    (order === 'desc') ? (comparison * -1) : comparison
                )
            }
        }

        if(this.state.selectSorter === "1") {
            return this.renderCharacterLinks(copyOfCharacters.sort(compareValues('name')))
        } else if(this.state.selectSorter === "2") {
            return this.renderCharacterLinks(copyOfCharacters.sort(compareValues('name', 'desc')))
        } else if(this.state.selectSorter === "3") {
            if(this.state.game_id === 0) {
                return this.renderCharacterLinks(this.props.characters)
            } else {
                return this.renderCharacterLinks(this.props.characters.filter(character => {
                    return character.games.some(game => {
                        return game.id === this.state.game_id
                    })
                }))
            }
        } else {
            return this.renderCharacterLinks(this.props.characters)
        }
    }
    
    renderCharacterLinks = (charactersArray) => {
        return charactersArray.map(character => {
            return <li key={character.id}>
                    <Link key={character.id} to={`/characters/${character.id}`}>{character.name}</Link>
                </li>
        })
    }

    generateGameOptions = () => {
        return this.props.games.map(game => {
            return <option key={game.id} value={game.id}>{game.name}</option>
        })
    }
    
    render() {
        return (
            <> 
                <h3>Please select a method of organizing characters</h3>
                <select onChange={this.handleChange}>
                    <option defaultValue value={0}>Default</option>
                    <option value={1}>Alphabetically (A-Z)</option>
                    <option value={2}>Reverse Alphabetically (Z-A)</option>
                    <option value={3}>By Game</option>
                </select>
                <br />
                {this.state.selectSorter === "3" 
                    ? <label>
                        Game:
                        <select
                            onChange={this.handleInt}
                            name="game_id"
                            value={this.state.game_id}
                        >
                            <option defaultValue value={0}>Please select a game</option>
                            {this.generateGameOptions()}
                        </select>
                    </label>
                    : ""}
                <ul>
                    {this.sortCharacters()}
                </ul>
            </>
            
        )
    }
}

export default CharacterLinks
