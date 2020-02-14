// class component

import React, { Component } from 'react';
import List from './List'
import './App.css';
import STORE from './STORE';




//Helper function from module for deleteButtonHandler
function omit(obj, keyToOmit) {
  return Object.entries(obj).reduce(
    (newObj, [key, value]) =>
        key === keyToOmit ? newObj : {...newObj, [key]: value},
    {}
  );
}

class App extends Component {
  constructor(props) {
    super(props) 
    this.state = { 
      store: STORE
    }
  }

  //Helper function from module for randomButtonHandler 
  newRandomCard = () => {
    const id = Math.random().toString(36).substring(2, 4)
      + Math.random().toString(36).substring(2, 4);
    return {
      id,
      title: `Random Card ${id}`,
      content: 'lorem ipsum',
    }
  }

  deleteButtonHandler = (listId, cardId) => {
    const { lists, allCards } = this.state.store;
    const newLists = lists.map(list => {
      if (list.id === listId) {
        list.cardIds = list.cardIds.filter(id => id !== cardId);
      }
      return list;
    });

    // filter method to remove card from list
    // const newList = [...lists];
    // const newCard = lists.cardIds.filter(id => id !== cardId);

    // const newLists = lists.map(list => ({...list,
    //   cardIds: list.cardIds.filter(id => id !== cardId)
    //   })
    // );
    
    // const newCards = omit(lists, cardId);
    // console.log('new cards', newCards);

    this.setState({
      store: {
        lists: newLists,
        allCards: allCards
      }
    })
  }

  randomButtonHandler = (listId) => {
    console.log(listId);
    const randomCard = this.newRandomCard();
    console.log(randomCard);
    const { lists, allCards } = this.state.store;

    let newAllCards = allCards;
    newAllCards[randomCard.id] = randomCard;
    
    const newLists = lists.map(list => {
      if (list.id === listId) {
        list.cardIds.push(randomCard.id);
      }
      return list;
    });

    this.setState({
      store: {
        lists: newLists,
        allCards: newAllCards
      }
    })
  };
  
  render() {
    const { store } = this.state
    console.log(store.lists);

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