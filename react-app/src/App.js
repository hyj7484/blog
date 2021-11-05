import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import {Home, Information, Board, WriteBoard} from './component/index';

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
          <Route path='/writeboard' exact>
            <WriteBoard />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
