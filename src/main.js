// connect home, form with routing
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './component/home';
import Form from './component/form';

const Main = () => (
    <Router>
        <div className="wrapper">
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/list" component={Form} />
            </Switch>
        </div>
    </Router>
);

export default Main