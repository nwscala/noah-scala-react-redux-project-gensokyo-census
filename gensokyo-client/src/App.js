import React from 'react';
import './App.css';
import { fetchCharacters } from './actions/character';
import { connect } from 'react-redux';
import CharacterContainer from './containers/CharacterContainer';
import { Switch, Route } from 'react-router-dom';
import { fetchSpellcards } from './actions/spellcard';
import { fetchGames } from './actions/games';
import Navbar from './components/Navbar';
import Home from './components/Home';


class App extends React.Component {
  componentDidMount() {
    this.props.fetchCharacters()
    this.props.fetchGames()
    // this.props.fetchSpellcards()
  }
  
  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={ Home }/>
          <Route exact path="/characters" component={ CharacterContainer }/>
        </Switch>
        
      </div>
    );
  }
}



export default connect(null, { fetchCharacters, fetchGames })(App);
