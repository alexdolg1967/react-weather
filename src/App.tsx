import React from 'react';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Home } from './pages/Home/Home';
import { Mountch } from './pages/Mountch/Mountch';

function App() {
  return (
    <BrowserRouter basename="/react-weather">
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
