import React from 'react'

const Appearance = ({appearance, character}) => {
    const gameName = () => {
        return character.games.find(game => game.id === appearance.game_id).name
    }
    
    return (
        appearance
        ? <li>
            {character.name} was {appearance.playable ? "playable" : `a ${appearance.stage}`} in {gameName()} 
        </li>
        : <h3>Girls are fetching data. Please wait warmly. Or maybe this girl doesn't have any appearances yet. You should add some!</h3>
    )
}

export default Appearance
