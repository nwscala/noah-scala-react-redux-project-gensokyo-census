export const loadCharacters = characters => ({
    type: "LOAD_CHARACTERS",
    characters
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