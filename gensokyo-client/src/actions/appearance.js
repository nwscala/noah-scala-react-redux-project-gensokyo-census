export const addGameAppearance = appearance => ({
    type: "ADD_GAME_APPEARANCE",
    appearance
})

export const addCharacterAppearance = appearance => ({
    type: "ADD_CHARACTER_APPEARANCE",
    appearance
})

export const updateGameAppearance = appearance => ({
    type: "UPDATE_GAME_APPEARANCE",
    appearance
})

export const updateCharacterAppearance = appearance => ({
    type: "UPDATE_CHARACTER_APPEARANCE",
    appearance
})

export const destroyGameAppearance = appearance => ({
    type: "DESTROY_GAME_APPEARANCE",
    appearance
})

export const destroyCharacterAppearance = appearance => ({
    type: "DESTROY_CHARACTER_APPEARANCE",
    appearance
})

export const createAppearance = (appearance) => {
    return dispatch => {
        const body = {
            appearance
        }
        return fetch("http://localhost:3001/appearances", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(body)
        })
            .then(resp => resp.json())
            .then(newAppearance => {
                if(newAppearance.error) {
                    alert(newAppearance.error_messages)
                } else {
                    dispatch(addGameAppearance(newAppearance))
                    dispatch(addCharacterAppearance(newAppearance))
                }
                return newAppearance
            })
    }
}

export const patchAppearance = (appearance) => {
    return dispatch => {
        const body = {
            appearance
        }
        return fetch(`http://localhost:3001/appearances/${appearance.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(body)
        })
            .then(resp => resp.json())
            .then(newAppearance => {
                if(newAppearance.error) {
                    alert(newAppearance.error_messages)
                } else {
                    dispatch(updateGameAppearance(newAppearance))
                    dispatch(updateCharacterAppearance(newAppearance))
                }
                return newAppearance
            })
    }
}

export const deleteAppearance = (appearance) => {
    return dispatch => {
        return fetch(`http://localhost:3001/appearances/${appearance.id}`, {
            method: "DELETE"
        })
            .then(() => {
                alert("Appearance successfully deleted!")
                dispatch(destroyGameAppearance(appearance))
                dispatch(destroyCharacterAppearance(appearance))
            })
    }
}