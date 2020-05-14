import React from 'react'
import AppearanceContainer from '../containers/AppearanceContainer'

const Game = (props) => {
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
            <div>
                <AppearanceContainer parent={props.game}/>
            </div>
        </div>
        : <h3>Girls are fetching data. Please wait warmly.</h3>
    )
}

export default Game
