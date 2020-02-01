import React from 'react';
import './Card.css';

export default function Card(props) {
  return (
    <div className='Card'>
      <button
        type='button'
      >
        delete
      </button>
      <h3>{props.title}</h3>
      <p>{props.content}</p>
    </div>
  )
}

// class Card extends React.Component {
// 	render() {
// 		<div className="Card">
// 			<button type="button">delete</button>
// 			<h3>title</h3>
// 			<p>content</p>
// 		</div>
// 	}
// };


