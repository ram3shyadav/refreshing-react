import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/molecules/Header';
import Home from './pages/Home';
import ToDo from './pages/ToDo';

const About = React.lazy(() => import(/* webpackPrefetch: true */ './pages/About'))

function App() {
	return (
		<Router>
			<div className="App">
				<Header />
				<main>
					<Suspense fallback={<Home />}>
						<Switch>
							<Route exact path="/" component={Home} />
							<Route path="/about" component={About} />
							<Route path="/todo" component={ToDo} />
						</Switch>
					</Suspense>
				</main>
			</div>
		</Router>
	);
}

export default App;
