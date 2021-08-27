import React from 'react';
import WordCard from './WordCard'

function WordsILike( { likedWords } ){

    const likedWordsList = likedWords.map(word => <WordCard key = {word} word = {word} /> )

    return (
        <>
        {/* <h2>I Like These Words:</h2> */}
        {likedWordsList}
        </>
    )

}
export default WordsILike