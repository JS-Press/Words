import React from 'react';
import WordCard from './WordCard'

function WordsIDontLike( { dislikedWords, handleDelete, feeling }){

    const dislikedWordsList = dislikedWords.map(word => <WordCard id = {word.id} word = {word.theWord} key = {word.id} handleDelete = {handleDelete} feeling = {feeling} /> )

    return (
        <>
        {/* <h2>I Don't Like These Words:</h2> */}
        {dislikedWordsList}
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <a href ='https://en.wikipedia.org/wiki/Acad%C3%A9mie_Fran%C3%A7aise' >What can be done about this word situation?</a>
        </>
    )
}
export default WordsIDontLike