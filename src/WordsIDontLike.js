import React, { useState, useEffect } from 'react';

function WordsIDontLike(){

    const [dislikedWords, setDislikedWords] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/dislike')
        .then(r => r.json())
        .then(d => setDislikedWords(d))
    },[])

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