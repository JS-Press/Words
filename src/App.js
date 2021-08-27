import './App.css';
import { useState, useEffect } from "react"
import {  Switch, Route, Redirect } from "react-router-dom";
import Navbar from "./Navbar"
import NewWord from "./NewWord"
import WordsILike from "./WordsILike"
import WordsIDontLike from "./WordsIDontLike"
import WordsInbetween from "./WordsInbetween"
// import DefineWord from "./DefineWord"

function App() {

  const [likedWords, setLikedWords] = useState([])
  const [dislikedWords, setDislikedWords] = useState([])
  const [inbetweenWords, setInbetweenWords] = useState([])
  const [newWord, setNewWord] = useState('')

  const headerStuff = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }


// Setting up initial liked / disliked word lists
    useEffect(() => {
        fetch('http://localhost:3000/dislike')
        .then(r => r.json())
        .then(d => setDislikedWords(d))
    },[])

    useEffect(() => {
      fetch('http://localhost:3000/inbetween')
      .then(r => r.json())
      .then(d => setInbetweenWords(d))
  },[])

    useEffect(() => {
        fetch('http://localhost:3000/like')
        .then(r => r.json())
        .then(d => setLikedWords(d))
    },[])
    

// Handling new word
  function handleAddWord(feeling){

    // TRYIG TO CHOOSE A LIST OF CURRENT WORDS BASED ON FEELING
    // let list = ''
    // if(feeling === 'like'){ let list = likedWords}
    // else if(feeling === 'dislike'){ let list = dislikedWords}
          //{feeling : [...( feeling === 'dislike' ? dislikedWords : likedWords ), newWord]}
   

    console.log(newWord, `added to ${ feeling }`, `with ${feeling === 'dislike' ? 'dislikedWords' : 'likedWords' }`)
    console.log('patching', JSON.stringify({[feeling] : [...( feeling === 'dislike' ? dislikedWords : likedWords ), newWord]}))

    fetch(`http://localhost:3000/`, {
      method:'PATCH',
      headers: headerStuff,
      body: JSON.stringify({[feeling] : [...( feeling === 'dislike' ? dislikedWords : likedWords ), newWord]})
  })
    .then(r => r.json())
    .then(data => console.log(data))
    .catch(er => console.log(`Nope BECAUSE:${er}`))
    // setNewWord('')
    
  }

  function handleChangeWord(e){
    setNewWord(e.target.value)
  }

  return (
    <>
    <Navbar />
      <br></br>
      <br></br>
      <NewWord newWord = {newWord} handleChangeWord = {handleChangeWord} handleAddWord = {handleAddWord} />
      <br></br>
      <br></br>
    <Switch>
      {/* <Route exact path='/' >
        <WordsILike likedWords = {likedWords} />
      </Route> */}
      <Route path = "/like" >
        <WordsILike likedWords = {likedWords} />
      </Route>
      <Route path = "/inbetween" >
        <WordsInbetween inbetweenWords = {inbetweenWords} />
      </Route>
      <Route path = "/dont-like" >
        <WordsIDontLike dislikedWords = {dislikedWords} />
      </Route>
    </Switch>
    </>
  );
}

export default App;
