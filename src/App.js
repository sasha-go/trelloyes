// class component

import React, { Component } from 'react';
import List from './List'
import './App.css';
import STORE from './STORE';

class App extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      store: STORE
      // store is from index.js
    }
  }

  // ADD Clickhandler method here > Update props for buttons below
  deleteButtonHandler(cardId, listId) {
    console.log(cardId);
    console.log(listId);
  }

  randomButtonHandler(listId) {
    console.log(listId)
  }

  render() {
    const { store } = this.state

    return (
      <main className='App'>
        <header className='App-header'>
          <h1>Trelloyes!</h1>
        </header>
        <div className='App-list'>
          {store.lists.map(list => (
            <List
              key={list.id}
              listId={list.id}
              header={list.header}
              cards={list.cardIds.map(id => store.allCards[id])}
              deleteButtonHandler={this.deleteButtonHandler}
              randomButtonHandler={this.randomButtonHandler}
            />
          ))}
        </div>
      </main>
    );
  }
}

export default App;