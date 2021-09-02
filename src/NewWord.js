import React from 'react';

function NewWord( { newWord, handleChangeWord, handleAddWord }){

    return (
        <div className = 'new'>
        <input type ='text' placeholder ='my new word' value = {newWord} onChange = {handleChangeWord} />
        <button id = 'newLike' onClick = {() => handleAddWord('like')} >I like this word</button>
        <button id = 'newInbetween' onClick = {() => handleAddWord('inbetween')} >I'm in between</button>
        <button id = 'newDislike' onClick = {() => handleAddWord('dislike')} >I don't like this word</button>
        </div>
    )

}
export default NewWord