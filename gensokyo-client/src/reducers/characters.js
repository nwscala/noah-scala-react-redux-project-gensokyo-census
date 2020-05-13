export default (state = [], action) => {
    switch (action.type) {
        case("LOAD_CHARACTERS"):
            return action.characters
        case("ADD_SPELLCARD"):
            return state.map(character => {
                    if(character.id === action.spellcard.character_id) {
                        return {
                            ...character,
                            spellcards: [...character.spellcards, action.spellcard]
                        }
                    } else {
                        return character
                    }
                })
        case("UPDATE_SPELLCARD"):
            return state.map(character => {
                    if(character.id === action.spellcard.character_id) {
                        return {
                            ...character,
                            spellcards: character.spellcards.map(spellcard => {
                                if(spellcard.id === action.spellcard.id) {
                                    return action.spellcard
                                } else {
                                    return spellcard
                                }
                            })
                        }
                    } else {
                        return character
                    }
                })
        default:
            return state
    }
}