import React from 'react';
import { Header } from './components/header/index.js'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { InfoCardList } from './components/infoCardList/index'
import { InfoCardDetail } from './components/infoCardDetail/Index'
import { Footer } from './components/footer/index'
import SearchBar from './components/searchBar/index'


import './App.scss';

function App() {
  return (

    <Router>
    <div className="App">
      <Header title={"Congress Searcher"}></Header>
      <SearchBar/>
        <Route path="/" exact component={InfoCardList} />
        <Route path="/detail/" component={InfoCardDetail} />
      <Footer/>
    </div>
  </Router>

  );
}

export default App;
