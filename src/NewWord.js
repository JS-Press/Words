import React from 'react';

function NewWord( { newWord, handleChangeWord, handleAddWord }){

    return (
        <>
        <input type ='text' placeholder ='my new word' value = {newWord} onChange = {handleChangeWord} />
        <button onClick = {() => handleAddWord('like')} >I like this word</button>
        <button onClick = {() => handleAddWord('inbetween')} >I'm in between</button>
        <button onClick = {() => handleAddWord('dislike')} >I don't like this word</button>
        </>
    )

}
export default NewWord