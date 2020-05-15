export const loadGames = games => ({
    type: "LOAD_GAMES",
    games
})

export const addGame = game => ({
    type: "ADD_GAME",
    game
})

export const updateGame = game => ({
    type: "UPDATE_GAME",
    game
})

export const destroyGame = game => ({
    type: "DESTROY_GAME",
    game
})

export const fetchGames = () => {
    return dispatch => {
        return fetch("http://localhost:3001/games")
            .then(resp => resp.json())
            .then(gamesJSON => {
                if(gamesJSON.error) {
                    alert(gamesJSON.error)
                } else {
                    dispatch(loadGames(gamesJSON))
                }
            })
    }
}

export const createGame = (game) => {
    return dispatch => {
        const body = {
            game
        }

        return fetch("http://localhost:3001/games", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(body)
        })
            .then(resp => resp.json())
            .then(newGame => {
                if(newGame.error) {
                    alert(newGame.error_messages)
                } else {
                    dispatch(addGame(newGame))
                }
                return newGame
            })
    }
}

export const patchGame = (game) => {
    return dispatch => {
        const body = {
            game
        }

        return fetch(`http://localhost:3001/games/${game.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(body)
        })
            .then(resp => resp.json())
            .then(newGame => {
                if(newGame.error) {
                    alert(newGame.error_messages)
                } else {
                    dispatch(updateGame(newGame))
                }
                return newGame
            })
    }
}

export const deleteGame = (game) => {
    return dispatch => {
        return fetch(`http://localhost:3001/games/${game.id}`, {
            method: "DELETE",
        })
            .then( () => {
                alert("Game successfully deleted!")
                dispatch(destroyGame(game))
            })
    }
}