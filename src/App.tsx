import React from 'react';
import { Route, Switch } from 'react-router';
import { Header } from './components/Header/Header';
import { Home } from './pages/Home/Home';
import { Mountch } from './pages/Mountch/Mountch';

function App() {
	return (
		<>
			<Header />
			<div className="container">
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/mountch" exact component={Mountch} />
					<Route component={() => <h2>404 - Not found :(</h2>} />
				</Switch>
			</div>
		</>
	);
}

export default App;
