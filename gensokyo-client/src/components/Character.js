import React from 'react'

const Character = (props) => {
    
    
    return (
        props.character
            ? <li>
                <h3>Name: {props.character.name}</h3>
                <h3>Title: {props.character.title}</h3>
                <h3>Species: {props.character.species}</h3>
                <h3>Abilities: {props.character.abilities}</h3>
                <h3>Occupation: {props.character.occupation ? props.character.occupation : "None"}</h3>
                <h3>Location: {props.character.location}</h3>
                <h3>Appearances:</h3>
                <ul>
                    {props.renderAppearances(props.character)}
                </ul>
                <h3>Spellcards (According to the Grimoire of Marisa):</h3>
                <ul>
                    {props.renderSpellcards(props.character)}
                </ul>
            </li>
            : <h3>Girls are fetching data. Please wait warmly.</h3>
        
    )
}

export default Character
