import React, { useState, useEffect } from 'react';

function WordsILike(){

    const [likedWords, setLikedWords] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/like')
        .then(r => r.json())
        .then(d => setLikedWords(d))
    },[])

    const likedWordsList = likedWords.map(word => {
        return <li key = {word} >{word}</li>
    })

    return (
        <>
        <h2>I Like These Words:</h2>
        <ul> {likedWordsList}</ul>
        </>
    )

}
export default WordsILike