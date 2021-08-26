import React from 'react';
import { useParams } from 'react-router-dom'

function NewWord( { newWord, handleChangeWord, handleAddWord }){

    let { feeling } = useParams()

    return (
        <>
        <input type ='text' placeholder ='my new word' value = {newWord} onChange = {handleChangeWord} />
        <button onClick = {() => handleAddWord('like')} >I Like This Word</button>
        <button onClick = {() => handleAddWord('dislike')} >I Don't Like This Word</button>
        </>
    )

}
export default NewWord