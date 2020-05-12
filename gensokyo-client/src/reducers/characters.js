export default (state = [], action) => {
    switch (action.type) {
        case("LOAD_CHARACTERS"):
            return action.characters
        default:
            return state
    }
}