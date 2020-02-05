import React from 'react';
import ReactDOM from 'react-dom';
import List from './List';


describe('List component', () => {
	// data = {id: 'a', title: 'First card', content: 'lorem ipsum'}; 
	it('List renders without crashing', () => {
		const div = document.createElement('div');
  	ReactDOM.render(<List cards={[]} />, div);
  	ReactDOM.unmountComponentAtNode(div);
	});

	

});	

// ReactDOM.render(<Person name="Joe" username="jturner" />, div);
