export const loadCharacters = characters => ({
    type: "LOAD_CHARACTERS",
    characters
})

export const addCharacter = character => ({
    type: "ADD_CHARACTER",
    character
})

export const updateCharacter = character => ({
    type: "UPDATE_CHARACTER",
    character
})

export const destroyCharacter = character => ({
    type: "DESTROY_CHARACTER",
    character
})

export const fetchCharacters = () => {
    return dispatch => {
        return fetch("http://localhost:3001/characters")
            .then(resp => resp.json())
            .then(charactersJSON => {
                if(charactersJSON.error) {
                    alert(charactersJSON.error)
                } else {
                    dispatch(loadCharacters(charactersJSON))
                }
            })
    }
}

export const createCharacter = (character) => {
    return dispatch => {
        const body = {
            character
        }

        return fetch("http://localhost:3001/characters", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(body)
        })
            .then(resp => resp.json())
            .then(newCharacter => {
                if(newCharacter.error) {
                    alert(newCharacter.error_messages)
                } else {
                    dispatch(addCharacter(newCharacter))
                }
                return newCharacter
            })
    }
}

export const patchCharacter = (character) => {
    return dispatch => {
        const body = {
            character
        }

        return fetch(`http://localhost:3001/characters/${character.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(body)
        })
            .then(resp => resp.json())
            .then(newCharacter => {
                if(newCharacter.error) {
                    alert(newCharacter.error_messages)
                } else {
                    dispatch(updateCharacter(newCharacter))
                }
                return newCharacter
            })
    }
}

export const deleteCharacter = (character) => {
    return dispatch => {
        return fetch(`http://localhost:3001/characters/${character.id}`, {
            method: "DELETE",
        })
            .then( () => {
                alert("Character successfully deleted!")
                dispatch(destroyCharacter(character))
            })
    }
}