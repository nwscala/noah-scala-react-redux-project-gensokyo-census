import React from 'react'
import Appearance from './Appearance'



const Game = (props) => {
    const renderAppearances = (parent) => {
        return parent.appearances.map((appearance, index) => {
            return <Appearance key={index} appearance={appearance} />
        })
    }
    
    return (
        props.game
        ? <div>
            <h3>Title: {props.game.name}</h3>
            <h3>Developer: {props.game.developer}</h3>
            <h3>Publisher: {props.game.publisher}</h3>
            <h3>Genre: {props.game.genre}</h3>
            <h3>Release Date: {props.game.release_date}</h3>
            <h3>Story:</h3>
            <ul>
                <li>
                    <p>{props.game.story}</p>
                </li>
            </ul>
            <h3>Appearances:</h3>
            <ul>
                {renderAppearances(props.game)}
            </ul>
        </div>
        : <h3>Girls are fetching data. Please wait warmly.</h3>
    )
}

export default Game
