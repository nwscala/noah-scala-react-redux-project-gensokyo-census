import React from 'react';
import './App.css';
import { fetchCharacters } from './actions/character';
import { connect } from 'react-redux';
import CharacterContainer from './containers/CharacterContainer';
import { Switch, Route } from 'react-router-dom';
import { fetchSpellcards } from './actions/spellcard';

class App extends React.Component {
  componentDidMount() {
    this.props.fetchCharacters()
    // this.props.fetchSpellcards()
  }
  
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/characters" component={ CharacterContainer }/>
        </Switch>
        
      </div>
    );
  }
}



export default connect(null, { fetchCharacters, fetchSpellcards })(App);
