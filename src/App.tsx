import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router';
import { Header } from './components/Header/Header';
import { Popup } from './components/Popup/Popup';
import { Home } from './pages/Home/Home';
import { Mountch } from './pages/Mountch/Mountch';

function App() {
    return (
        <BrowserRouter basename="/">
            <div className="container">
                {/* <Popup /> */}
                <Header />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/mountch" exact component={Mountch} />
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
