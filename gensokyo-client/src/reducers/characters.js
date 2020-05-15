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
        case("DESTROY_SPELLCARD"):
            return state.map(character => {
                if(character.id === action.spellcard.character_id) {
                    return {
                        ...character,
                        spellcards: character.spellcards.filter(spellcard => {
                            return spellcard.id !== action.spellcard.id
                        })
                    }
                } else {
                    return character
                }
            })
        case("ADD_CHARACTER_APPEARANCE"):
            return state.map(character => {
                if(character.id === action.appearance.character_id) {
                    return {
                        ...character,
                        appearances: [...character.appearances, action.appearance]
                    }
                    } else {
                        return character
                    }
            })
        case("UPDATE_CHARACTER_APPEARANCE"):
            return state.map(character => {
                    if(character.id === action.appearance.character_id) {
                        return {
                            ...character,
                            appearances: character.appearances.map(appearance => {
                                if(appearance.id === action.appearance.id) {
                                    return action.appearance
                                } else {
                                    return appearance
                                }
                            })
                        }
                    } else {
                        return character
                    }
                })
        case("DESTROY_CHARACTER_APPEARANCE"):
            return state.map(character => {
                if(character.id === action.appearance.character_id) {
                    return {
                        ...character,
                        appearances: character.appearances.filter(appearance => {
                            return appearance.id !== action.appearance.id
                        })
                    }
                } else {
                    return character
                }
            })
        case("ADD_CHARACTER"):
            return [...state, action.character]
        case("UPDATE_CHARACTER"):
            return state.map(character => {
                if(character.id === action.character.id) {
                    return action.character
                } else {
                    return character
                }
            })
        case("DESTROY_CHARACTER"):
            return state.filter(character => {
                return character.id !== action.character.id
            })
        default:
            return state
    }
}