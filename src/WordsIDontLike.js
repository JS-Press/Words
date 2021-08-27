import React from 'react';
import WordCard from './WordCard'

function WordsIDontLike( { dislikedWords }){


    const dislikedWordsList = dislikedWords.map(word => <WordCard word = {word} key = {word} /> )

    return (
        <>
        {/* <h2>I Don't Like These Words:</h2> */}
        {dislikedWordsList}
        </>
    )
}
export default WordsIDontLike