import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class GameLinks extends Component {
    state = {
        selectSorter: "0",
        character_id: 0
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

    handleLike = ({ target: { name } }) => {
        if(this.state[name]){
            this.setState(previousState => ({
                [name]: previousState[name] + 1
            }))
        } else {
            this.setState({
                [name]: 1
            })
        }
    }

    sortGames = () => {
        const copyOfGames = [...this.props.games]
        
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
            return this.renderGameLinks(copyOfGames.sort(compareValues('name')))
        } else if(this.state.selectSorter === "2") {
            return this.renderGameLinks(copyOfGames.sort(compareValues('name', 'desc')))
        } else if(this.state.selectSorter === "3") {
            if(this.state.character_id === 0) {
                return this.renderGameLinks(this.props.games)
            } else {
                return this.renderGameLinks(this.props.games.filter(game => {
                    return game.characters.some(character => {
                        return character.id === this.state.character_id
                    })
                }))
            }
        } else {
            return this.renderGameLinks(this.props.games)
        }
    }
    
    renderGameLinks = (gamesArray) => {
        return gamesArray.map(game => {
            return <li key={game.id}>
                    <Link key={game.id} to={`/games/${game.id}`}>{game.name}</Link>
                    <input onClick={this.handleLike} name={game.name} type="button" value={this.state[game.name] ? `Number of Likes: ${this.state[game.name]}` : "Number of Likes: 0"} />
                </li>
        })
    }
    
    generateCharacterOptions = () => {
        return this.props.characters.map(character => {
            return <option key={character.id} value={character.id}>{character.name}</option>
        })
    }
    
    render() {
        return (
            <> 
                <h3>Please select a method of organizing games</h3>
                <select onChange={this.handleChange}>
                    <option defaultValue value={0}>Default</option>
                    <option value={1}>Alphabetically (A-Z)</option>
                    <option value={2}>Reverse Alphabetically (Z-A)</option>
                    <option value={3}>By Character</option>
                </select>
                <br />
                {this.state.selectSorter === "3" 
                    ? <label>
                        Character:
                        <select
                            onChange={this.handleInt}
                            name="character_id"
                            value={this.state.character_id}
                        >
                            <option defaultValue value={0}>Please select a character</option>
                            {this.generateCharacterOptions()}
                        </select>
                    </label>
                    : ""}
                <ul>
                    {this.sortGames()}
                </ul>
            </>
            
        )
    }
}

export default GameLinks