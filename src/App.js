// connect home, form with routing
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './component/home';
import Form from './component/form';
import Error from './component/error';
import { createStore } from 'redux';
import reducer from './reducer/reducer';
import { Provider } from 'react-redux';

const store = createStore(reducer);

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