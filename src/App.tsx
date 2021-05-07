import React, {Fragment} from 'react';
import Home from './containers/Home';
import ProductPage from './containers/ProductPage';
import CategoriesPage from './containers/CategoriesPage';

import { Switch, Route } from "react-router-dom";
import Cart from './containers/Cart';

const App = (): JSX.Element => {
  return (
    <Fragment>
      <Switch>
        <Route exact path='/categories/:categoryId' component={CategoriesPage}/>
        <Route exact path='/cart' component={Cart}/>
        <Route exact path='/:id' component={ProductPage} /> 
        <Route exact path='/' component = {Home} />
      </Switch>
    </Fragment>
  );
}

export default App;
