export const loadSpellcards = spellcards => ({
    type: "LOAD_SPELLCARDS",
    spellcards
})

export const fetchSpellcards = () => {
    return dispatch => {
        return fetch("http://localhost:3001/spellcards")
            .then(resp => resp.json())
            .then(spellcardsJSON => {
                if(spellcardsJSON.error) {
                    alert(spellcardsJSON.error)
                } else {
                    dispatch(loadSpellcards(spellcardsJSON))
                }
            })
    }
}