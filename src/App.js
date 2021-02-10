import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Post from './components/Post';
import Navbar from './components/Navbar';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/post">
              <Post />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
