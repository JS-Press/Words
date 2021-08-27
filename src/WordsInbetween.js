import React from 'react';
import WordCard from './WordCard'

function WordsInbetween( { inbetweenWords }){


    const inbetweenWordsList = inbetweenWords.map(word => <WordCard word = {word} key = {word} /> )

    return (
        <>
        {/* <h2>I Don't Like These Words:</h2> */}
        {inbetweenWordsList}
        </>
    )
}
export default WordsInbetween