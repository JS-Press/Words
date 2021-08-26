import './App.css';
import { useState, useEffect } from "react"
import {  Switch, Route } from "react-router-dom";
import Navbar from "./Navbar"
import NewWord from "./NewWord"
import WordsILike from "./WordsILike"
import WordsIDontLike from "./WordsIDontLike"
// import DefineWord from "./DefineWord"

function App() {

  const [likedWords, setLikedWords] = useState([])
  const [dislikedWords, setDislikedWords] = useState([])
  const [newWord, setNewWord] = useState('')


// Setting up initial liked / disliked word lists
    useEffect(() => {
        fetch('http://localhost:3000/dislike')
        .then(r => r.json())
        .then(d => setDislikedWords(d))
    },[])
    useEffect(() => {
        fetch('http://localhost:3000/like')
        .then(r => r.json())
        .then(d => setLikedWords(d))
    },[])

// Handling new word
  function handleAddWord(feeling){
    console.log(newWord, `added to ${ feeling }`)
    setNewWord('')
  }
  function handleChangeWord(e){
    setNewWord(e.target.value)
  }

  return (
    <>
    <h1>Words</h1>
    <Navbar />
    <Switch>
      {/* <Route exact path='/' >
        <WordsILike likedWords = {likedWords} />
      </Route> */}
      <Route path = "/like" >
        <WordsILike likedWords = {likedWords} />
      </Route>
      <Route path = "/dontLike" >
        <WordsIDontLike dislikedWords = {dislikedWords} />
      </Route>
    </Switch>
    <br></br>
    <br></br>
    <NewWord newWord = {newWord} handleChangeWord = {handleChangeWord} handleAddWord = {handleAddWord} />
    </>
  );
}

export default App;
