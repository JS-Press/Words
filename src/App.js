import './App.css';
import { useState, useEffect } from "react"
import {  Switch, Route } from "react-router-dom";
import Navbar from "./Navbar"
import NewWord from "./NewWord"
import WordsILike from "./WordsILike"
import WordsIDontLike from "./WordsIDontLike"
import WordsInbetween from "./WordsInbetween"
// import DefineWord from "./DefineWord"

function App() {

  const [likeWords, setLikedWords] = useState([])
  const [dislikeWords, setDislikedWords] = useState([])
  const [inbetweenWords, setInbetweenWords] = useState([])
  const [newWord, setNewWord] = useState('')

  const headerStuff = {
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
    
// Deleting a word
    function handleDelete(word, feeling, id){
      console.log(id)

      fetch(`http://localhost:3000/${feeling}/${id}`
      , { method : 'DELETE' }).then(r => r.json()).then(d => console.log(d))

      const oldList = eval(`${feeling}Words`)
      const newList = oldList.filter(aWord => aWord.theWord !== word)
      console.log(newList)
      switch(oldList){
        case (likeWords): setLikedWords(newList);
        break;
        case (inbetweenWords): setInbetweenWords(newList);
        break;
        case (dislikeWords): setDislikedWords(newList);
        break;
      }
    }

// Handling new word addition
  function handleAddWord(feeling){
    
    // POST fetching server to add word
    // console.log(newWord, `added to ${ feeling }`)
    // console.log('posting', JSON.stringify({"theWord" : newWord}))

    fetch(`http://localhost:3000/${feeling}` 
    ,{ method:'POST',
       headers: headerStuff,
       body: JSON.stringify({"theWord" : newWord})
    }
    )
    .then(r => r.json())
    .then(data => {
      const oldList = eval(`${feeling}Words`)
      const newList = [...oldList, data]
      switch(oldList){
        case (likeWords): setLikedWords(newList);
        break;
        case (inbetweenWords): setInbetweenWords(newList);
        break;
        case (dislikeWords): setDislikedWords(newList);
        break;
      }
    })
    .catch(er => console.log(`Post failed BECAUSE:${er}`))

    //reseting input
    setNewWord('')

    //updating rendered words
    


     
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
        <WordsILike likedWords = {likeWords} handleDelete = {handleDelete} feeling = {'like'} className = "test" />
      </Route>
      <Route path = "/inbetween" >
        <WordsInbetween inbetweenWords = {inbetweenWords} handleDelete = {handleDelete} feeling = {'inbetween'}  className = "test" />
      </Route>
      <Route path = "/dislike" >
        <WordsIDontLike dislikedWords = {dislikeWords} handleDelete = {handleDelete} feeling = {'dislike'}  className = "test" />
      </Route>
    </Switch>
    </>
  );
}

export default App;
