// class component

import React, { Component } from 'react';
import List from './List'
import './App.css';
import STORE from './STORE';


//Helper function from module for randomButtonHandler 
const newRandomCard = () => {
  const id = Math.random().toString(36).substring(2, 4)
    + Math.random().toString(36).substring(2, 4);
  return {
    id,
    title: `Random Card ${id}`,
    content: 'lorem ipsum',
  }
}

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
    console.log(this.state);
  }

  deleteButtonHandler = (listId, cardId) => {
    console.log(cardId);
    console.log(listId);
    const { lists, allCards} = this.state.store;
    console.log('all cards', allCards);
    // filter method to remove card from list
    // const newList = [...lists];
    // const newCard = lists.cardIds.filter(id => id !== cardId);

    const newLists = lists.map(list => ({...list,
      cardIds: list.cardIds.filter(id => id !== cardId)
      })
    );
    
    // const newCards = omit(allCards, 'l');


    // console.log('new cards', newCards);

    this.setState({
      store: {
        lists: newLists,
        allCards: allCards
      }
    })
  }


  randomButtonHandler(listId) {
    console.log(listId);
    // console.log(listId);
    // const newState = [...this.state.store, newRandomCard];
    // //const newList = // add id to the list you clicked on
    // this.setState({
    //   store: newState,
    // })
  };
  
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