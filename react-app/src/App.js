import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import {Home, Information, Board} from './component/index';

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/' exact>
            <Home />
          </Route>
          <Route path='/information' exact>
            <Information />
          </Route>
          <Route path='/board' exact>
            <Board />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
