import React, { useState, useEffect } from 'react';

function WordsILike( { likedWords } ){

    

    const likedWordsList = likedWords.map(word => {
        return <li key = {word} >{word}</li>
    })

    return (
        <>
        {/* <h2>I Like These Words:</h2> */}
        <ul> {likedWordsList}</ul>
        </>
    )

}
export default WordsILike