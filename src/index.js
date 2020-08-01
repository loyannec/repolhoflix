// Initialize the application
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import RegisterVideo from './pages/register/Video';
import RegisterCategory from './pages/register/Category';

// To do challenge
const Error404Page = () => (<div>Error 404</div>)

ReactDOM.render(
  // BrowserRouter represent the routes of the application
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/register/video" component={RegisterVideo} />
      <Route path="/register/category" component={RegisterCategory} />
      <Route component={Error404Page} />    {/** if the user typed other route, this component will be activate and will open the page error */}
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
