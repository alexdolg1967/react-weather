import React from 'react';
import { Route, Switch } from 'react-router';
import { Home } from './pages/Home/Home';
import { Mountch } from './pages/Mountch/Mountch';

function App() {
    return (
        <div className="App">
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/mountch" exact component={Mountch} />
            </Switch>
        </div>
    );
}

export default App;
