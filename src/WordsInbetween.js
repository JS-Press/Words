import React from 'react';
import WordCard from './WordCard'

function WordsInbetween( { inbetweenWords, handleDelete, feeling }){


    const inbetweenWordsList = inbetweenWords.map(word => <WordCard word = {word.theWord} id = {word.id} key = {word.id} handleDelete = {handleDelete} feeling = {feeling} /> )

    return (
        <>
        {/* <h2>I Don't Like These Words:</h2> */}
        <div className = "wordGrid" id = "inbetweenWords" >
        {inbetweenWordsList}
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <a href ='https://en.wikipedia.org/wiki/Acad%C3%A9mie_Fran%C3%A7aise' >What can be done about this word situation?</a>
        </>
    )
}
export default WordsInbetween