export default (state = [], action) => {
    switch (action.type) {
        case("LOAD_GAMES"):
            return action.games
        default:
            return state
    }
}