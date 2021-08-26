import React from 'react';
import { useParams } from 'react-router-dom'

function NewWord( { newWord, handleChangeWord, handleAddWord }){

    let { feeling } = useParams()

    return (
        <>
        <input type ='text' placeholder ='my new word' value = {newWord} onChange = {handleChangeWord} />
        <button onClick = {() => handleAddWord(feeling)} >Add To List</button>
        </>
    )

}
export default NewWord