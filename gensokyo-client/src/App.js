import React from 'react';
import './App.css';
import { fetchCharacters } from './actions/character';
import { connect } from 'react-redux';
import CharacterContainer from './containers/CharacterContainer';
import { Switch, Route, withRouter } from 'react-router-dom';
import { fetchGames } from './actions/games';
import Navbar from './components/Navbar';
import Home from './components/Home';
import GameContainer from './containers/GameContainer';
import CharacterForm from './components/CharacterForm';

const initialCharacter = {
  name: "",
  title: "",
  species: "",
  abilities: "",
  occupation: "",
  location: ""
}


class App extends React.Component {
  componentDidMount() {
    this.props.fetchCharacters()
    this.props.fetchGames()
  }
  
  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={ Home }/>
          <Route path="/characters" render={ routerProps => <CharacterContainer {...routerProps} /> }/>
          <Route path="/new/character" render={ routerProps => <CharacterForm {...routerProps} newCharacter={true} character={initialCharacter}/> }/>
          <Route path="/games" render={ routerProps => <GameContainer {...routerProps} /> }/>
        </Switch>
        
      </div>
    );
  }
}





export default withRouter(connect(null, { fetchCharacters, fetchGames })(App));
