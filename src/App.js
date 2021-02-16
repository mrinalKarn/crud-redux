// connect home, form with routing
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './component/home';
import Form from './component/form';
import Error from './component/error';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import allReducer from "./reducer/rootReducer";
import './App.css';

const store = createStore(allReducer,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const App = () => (
  <Provider store={store}>
  <div>
    <Router>
      <div className="wrapper">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/form" component={Form} />
          <Route path ="*" component={Error}></Route>
        </Switch>
      </div>
    </Router>
  </div>
  </Provider>
);

export default App;