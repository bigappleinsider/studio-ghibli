import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import Home from '../home';
import Category from '../category';
import Header from '../header';
import Details from '../details';

const App = () => (    
    <div>
      <Header />
      <Route exact path="/" component={Home} />
      <Route exact path="/category/:category" component={Category} />
      <Route exact path="/details/:category/:id" component={Details} />
    </div>
);

export default withRouter(App);