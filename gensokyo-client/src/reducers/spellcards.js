export default (state = [], action) => {
    switch (action.type) {
        case("LOAD_SPELLCARDS"):
            return action.spellcards
        default:
            return state
    }
}