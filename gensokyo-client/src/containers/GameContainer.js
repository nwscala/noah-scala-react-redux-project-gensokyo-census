import React from 'react'
import { connect } from 'react-redux'
import Game from '../components/Game'
import { Switch, Route } from 'react-router-dom'
import GameLinks from '../components/GameLinks'


const GameContainer = (props) => {
    return (
        <>
            <Switch>
                <Route exact path="/games" render={(routerProps) => <GameLinks {...routerProps} games={props.games}/> }/>
                <Route exact path="/games/:id" render={(routerProps) => {
                    const game = props.games.find(game => game.id === parseInt(routerProps.match.params.id))
                    return <Game {...routerProps} game={game} />
                }}/>
            </Switch>
        </>
    )
}

const mapStateToProps = state => {
    return {
        games: state.games
    }
  }

export default connect(mapStateToProps)(GameContainer)
