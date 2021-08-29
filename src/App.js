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

  const [likeWords, setLikedWords] = useState([])
  const [dislikeWords, setDislikedWords] = useState([])
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
    
// Deleting a word
    function handleDelete(word, feeling){
      // console.log(word,feeling)
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

    // const [feelingList, setList] = useState([])
    // let feelingList = []

    // TRYIG TO CHOOSE A LIST OF CURRENT WORDS BASED ON FEELING
    // let list = ''
    // if(feeling === 'like'){ let list = likedWords}
    // else if(feeling === 'dislike'){ let list = dislikedWords}
          //{feeling : [...( feeling === 'dislike' ? dislikedWords : likedWords ), newWord]}

          // const feelingList = if(feeling === 'like'){() => [...likedWords]}else if(feeling === 'dislike'){() => [...dislikedWords]}else{() => [...inbetweenWords]} }
          // }else if(feeling === 'inbetween'){
          //   let feelingList = inbetweenWords
          // }else if(feeling === 'dislike'){
          //   let feelingList = dislikedWords
          // }

    const feelingList = eval(`${feeling}Words`)

    console.log(feelingList)

    console.log(newWord, `added to ${ feeling }`, `with ${feeling === 'dislike' ? 'dislikedWords' : 'likedWords' }`)
    console.log('patching', JSON.stringify([...feelingList, {"theWord" : newWord}]))

    // fetch(`http://localhost:3000/${feeling}` 
    // ,{ method:'PATCH',
    //   headers: headerStuff,
    //   body: JSON.stringify({"theWord" : newWord})}
    // )
    // .then(r => r.json())
    // .then(data => console.log(data))
    // .catch(er => console.log(`Nope BECAUSE:${er}`))
    // setNewWord('')
      fetch(`http://localhost:3000/${feeling}`, {  method: "PATCH",  headers: {    "Content-type": "application/json"  },  body: JSON.stringify([...feelingList, {"theWord" : newWord}])}) .then(response => {    console.log(response.status);     return response.json();  })  .then(data => console.log("worked",data));
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
        <WordsILike likedWords = {likeWords} handleDelete = {handleDelete} feeling = {'like'} />
      </Route>
      <Route path = "/inbetween" >
        <WordsInbetween inbetweenWords = {inbetweenWords} handleDelete = {handleDelete} feeling = {'inbetween'} />
      </Route>
      <Route path = "/dislike" >
        <WordsIDontLike dislikedWords = {dislikeWords} handleDelete = {handleDelete} feeling = {'dislike'} />
      </Route>
    </Switch>
    </>
  );
}

export default App;
