export const addSpellcard = spellcard => ({
    type: "ADD_SPELLCARD",
    spellcard
})

export const updateSpellcard = spellcard => ({
    type: "UPDATE_SPELLCARD",
    spellcard
})

export const destroySpellcard = spellcard => ({
    type: "DESTROY_SPELLCARD",
    spellcard
})

export const createSpellcard = (spellcard) => {
    return dispatch => {
        const body = {
            spellcard
        }

        return fetch("http://localhost:3001/spellcards", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(body)
        })
            .then(resp => resp.json())
            .then(newSpellcard => {
                if(newSpellcard.error) {
                    alert(newSpellcard.error_messages)
                } else {
                    dispatch(addSpellcard(newSpellcard))
                }
                return newSpellcard
            })
    }
}

export const patchSpellcard = (spellcard) => {
    return dispatch => {
        const body = {
            spellcard
        }

        return fetch(`http://localhost:3001/spellcards/${spellcard.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(body)
        })
            .then(resp => resp.json())
            .then(newSpellcard => {
                if(newSpellcard.error) {
                    alert(newSpellcard.error_messages)
                } else {
                    dispatch(updateSpellcard(newSpellcard))
                }
                return newSpellcard
            })
            
    }
}

export const deleteSpellcard = (spellcard) => {
    return dispatch => {
        return fetch(`http://localhost:3001/spellcards/${spellcard.id}`, {
            method: "DELETE"
        })
            .then(() => {
                alert("Spellcard successfully deleted!")
                dispatch(destroySpellcard(spellcard))
            })
    }
}