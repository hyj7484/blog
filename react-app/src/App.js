import {useState, useEffect} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Home, Login} from './component/index';
import './App.css';

function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={user === null ? <Login setUser={setUser}/> : <Home/>} exact/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
// test

export default App;
