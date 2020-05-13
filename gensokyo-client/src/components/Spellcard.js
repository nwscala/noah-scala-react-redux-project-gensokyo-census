import React from 'react'

const Spellcard = ({spellcard}) => {
    return (
        spellcard
        ? <li>
            <h5>Name: {spellcard.name}</h5>
            <h5>Notes: {spellcard.notes}</h5>
            <h5>{spellcard.star_level_name}: {spellcard.star_level}</h5>
            <h6>Marisa's Comments: {spellcard.marisa_comments}</h6>
        </li>
        : <h3>Girls are fetching data. Please wait warmly. Or maybe this girl doesn't have any spellcards yet. You should add some!</h3>
    )
}

export default Spellcard
