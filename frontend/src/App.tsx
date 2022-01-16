import React from 'react';
import './App.css';
import { render } from 'react-dom';

// Route backend requests to current host on port 8080, cors from 3000 in React debug mode
const backendOrigin = `${window.location.protocol}//${window.location.hostname}:8080`;

const onClick = () => {
	fetch(`${backendOrigin}/api/json`)
		.then(res => {
			console.log(res);
			return res.text();
		})
		.then(res => {
			console.log('break point me');
			console.log(res);
		})
		.catch(err => {
			console.error('Whoops, an error occurred');
			console.log(err);
		});
}

function App() {
  return (
    <div className="App">
			<h1>What's up</h1>
			<p>muh dudes</p>
      <button onClick={onClick}>Click Me</button>
			<p>Pokemon card of the day</p>
			<img src='./Charizard.png' />
			<Dice />
    </div>
  );
}

class Dice extends React.Component<{}> {
	render() {
		return (
			<p>Fake Dice</p>
		);
	}
}

export default App;
