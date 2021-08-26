import React from 'react';

function WordsIDontLike( { dislikedWords }){


    const dislikedWordsList = dislikedWords.map(word => {
        return <li key = {word} >{word}</li>
    })

    return (
        <>
        {/* <h2>I Don't Like These Words:</h2> */}
        <ul> {dislikedWordsList}</ul>
        </>
    )
}
export default WordsIDontLike