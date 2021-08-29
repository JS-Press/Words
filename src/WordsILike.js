import React from 'react';
import WordCard from './WordCard'
import { Redirect } from "react-router-dom"

function WordsILike( { likedWords, handleDelete, feeling } ){

    const likedWordsList = likedWords.map(word => <WordCard key = {word.theWord} word = {word.theWord} handleDelete = {handleDelete} feeling = {feeling} /> )

    return (
        <>
        {/* <h2>I Like These Words:</h2> */}
        {likedWordsList}
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <button onClick = {() => <Redirect to= 'https://en.wikipedia.org/wiki/Acad%C3%A9mie_Fran%C3%A7aise' />} >What can be done about this word situation?</button>
        </>
    )

}
export default WordsILike