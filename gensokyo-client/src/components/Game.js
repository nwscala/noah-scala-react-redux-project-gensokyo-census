import React from 'react'
import AppearanceContainer from '../containers/AppearanceContainer'

const Game = (props) => {
    return (
        props.game
        ? <div>
            <p><span>Title:</span> {props.game.name}</p>
            <p><span>Developer:</span> {props.game.developer}</p>
            <p><span>Publisher:</span> {props.game.publisher}</p>
            <p><span>Genre:</span> {props.game.genre}</p>
            <p><span>Release Date:</span> {props.game.release_date}</p>
            <p><span>Story:</span></p>
            <ul>
                <li>
                    <p>{props.game.story}</p>
                </li>
            </ul>
            <p><span>Appearances:</span></p>
            <div>
                <AppearanceContainer parent={props.game}/>
            </div>
        </div>
        : <h3>Girls are fetching data. Please wait warmly.</h3>
    )
}

export default Game
