import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/molecules/Header';
import About from './pages/About';
import Home from './pages/Home';

function App() {
	return (
		<Router>
			<div className="App">
				<Header />
				<main>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route path="/about" component={About} />
					</Switch>
				</main>
			</div>
		</Router>
	);
}

export default App;
