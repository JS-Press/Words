import React from 'react';
import WordCard from './WordCard'

function WordsILike( { likedWords, handleDelete, feeling } ){

    const likedWordsList = likedWords.map(word => <WordCard key = {word.id} word = {word.theWord} handleDelete = {handleDelete} feeling = {feeling} id = {word.id} /> )

    return (
        <>
        {/* <h2>I Like These Words:</h2> */}
        <div className = "wordGrid" id = "likedWords" >
        {likedWordsList}
        </div>

        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <a href ='https://en.wikipedia.org/wiki/Acad%C3%A9mie_Fran%C3%A7aise' >What can be done about this word situation?</a>
        </>
    )

}
export default WordsILike