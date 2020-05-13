import React from 'react'
import { Link } from 'react-router-dom'


const CharacterLinks = (props) => {
    const renderCharacterLinks = () => {
        return props.characters.map(character => {
            return <li key={character.id}>
                    <Link key={character.id} to={`/characters/${character.id}`}>{character.name}</Link>
                </li>
        })
    }
    
    return (
        <ul>
            {renderCharacterLinks()}
        </ul>
    )
}

export default CharacterLinks
