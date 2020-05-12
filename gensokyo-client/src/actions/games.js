export const loadGames = games => ({
    type: "LOAD_GAMES",
    games
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