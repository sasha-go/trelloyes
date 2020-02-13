import React from 'react';
import Card from './Card'
import './List.css';

function List(props) { 
  
  return (
    <section className='List'>
      <header className='List-header'>
        <h2>{props.header}</h2>
      </header>
      <div className='List-cards'>
        {props.cards.map((card) =>
          <Card
            key={card.id}
            cardId={card.id}
            listId={props.listId}
            title={card.title}
            content={card.content}
            deleteButtonHandler={props.deleteButtonHandler}
          />
        )}
        <button
          onClick={(e) => props.randomButtonHandler(props.listId)}
          type='button'
          className='List-add-button'
        >
          + Add Random Card
        </button>
      </div>
    </section>
  )
}

List.defaultProps = {
  header: 'no list found',
  cards: []
};

export default List;