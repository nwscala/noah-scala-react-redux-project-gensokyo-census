export default (state = [], action) => {
    switch (action.type) {
        case("LOAD_GAMES"):
            return action.games
        case("ADD_GAME_APPEARANCE"):
            return state.map(game => {
                if(game.id === action.appearance.game_id) {
                    return {
                        ...game,
                        appearances: [...game.appearances, action.appearance]
                    }
                    } else {
                        return game
                    }
            })
        case("UPDATE_GAME_APPEARANCE"):
            return state.map(game => {
                    if(game.id === action.appearance.game_id) {
                        return {
                            ...game,
                            appearances: game.appearances.map(appearance => {
                                if(appearance.id === action.appearance.id) {
                                    return action.appearance
                                } else {
                                    return appearance
                                }
                            })
                        }
                    } else {
                        return game
                    }
                })
        case("DESTROY_GAME_APPEARANCE"):
            return state.map(game => {
                if(game.id === action.appearance.game_id) {
                    return {
                        ...game,
                        appearances: game.appearances.filter(appearance => {
                            return appearance.id !== action.appearance.id
                        })
                    }
                } else {
                    return game
                }
            })
        case("ADD_GAME"):
            return [...state, action.game]
        case("UPDATE_GAME"):
            return state.map(game => {
                if(game.id === action.game.id) {
                    return action.game
                } else {
                    return game
                }
            })
        case("DESTROY_GAME"):
            return state.filter(game => {
                return game.id !== action.game.id
            })
        default:
            return state
    }
}