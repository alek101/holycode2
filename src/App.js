import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Post from './components/Post';
import Navbar from './components/Navbar';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import {createStore} from 'redux';
import {Provider} from 'react-redux';
import allReducers from './reducers';


const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


function App() {
  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
