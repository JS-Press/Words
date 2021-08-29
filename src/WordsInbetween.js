import React from 'react';
import WordCard from './WordCard'
import { Redirect } from "react-router-dom"

function WordsInbetween( { inbetweenWords, handleDelete, feeling }){


    const inbetweenWordsList = inbetweenWords.map(word => <WordCard word = {word.theWord} key = {word.theWord} handleDelete = {handleDelete} feeling = {feeling} /> )

    return (
        <>
        {/* <h2>I Don't Like These Words:</h2> */}
        {inbetweenWordsList}
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <button onClick = {() => <Redirect to= 'https://en.wikipedia.org/wiki/Acad%C3%A9mie_Fran%C3%A7aise' />} >What can be done about this word situation?</button>
        </>
    )
}
export default WordsInbetween