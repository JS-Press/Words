import './App.css';
import {  Switch, Route, Redirect } from "react-router-dom";
import Navbar from "./Navbar"
import NewWord from "./NewWord"
import WordsILike from "./WordsILike"
import WordsIDontLike from "./WordsIDontLike"
// import DefineWord from "./DefineWord"

function App() {


  return (
    <>
    <Navbar />
    <Switch>
      <Route exact path='/' >
        <WordsILike />
      </Route>
      <Route path = "/like" >
        <WordsILike />
      </Route>
      <Route path = "/dontLike" >
        <WordsIDontLike />
      </Route>
    </Switch>
    <NewWord />
    </>
  );
}

export default App;
