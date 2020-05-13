import React from 'react'
import { Link } from 'react-router-dom'


const GameLinks = (props) => {
    const renderGameLinks = () => {
        return props.games.map(game => {
            return <li key={game.id}>
                    <Link key={game.id} to={`/games/${game.id}`}>{game.name}</Link>
                </li>
        })
    }
    
    return (
        <ul>
            {renderGameLinks()}
        </ul>
    )
}

export default GameLinks