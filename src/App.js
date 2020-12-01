import './App.css';
import React, {useEffect} from 'react';
import {Contents} from './Contents';
import {useSelector, useDispatch} from 'react-redux';
import {loadRecipe} from './actions';
import {Switch, Route, Redirect, NavLink, Link} from 'react-router-dom';
import {Recipe} from './Recipe';

// hard coded recipes for now
// const recipes = [
//   {name:"Good Old Fashioned Pancakes",description:"Pancakes that are old fashioned",ingredients:"1 1/2 flour, 3 1/2 baking powder, 1 teaspoon salt, 1 tablespoon white sugar, 1 egg, 1 1/4 cups milk, 3 tablespoon butter",steps:"1. In a large bowl, sift together the flour, baking powder, salt and sugar. Make a well in the center and pour in the milk, egg and melted butter; mix until smooth. 2.Heat a lightly oiled griddle or frying pan over medium-high heat. Pour or scoop the batter onto the griddle, using approximately 1/4 cup for each pancake. Brown on both sides and serve hot."},
//   {name:"Green eggs and ham",description:"Dr seusses favorite meal",ingredients:"1 green egg and 1 ham",steps:"1. cook the egss. 2. cook the ham. 3. eat the food."}
// ];

// function App() {

//   const recipes = useSelector(state => state.recipes);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(loadRecipe());
// }, [dispatch]);

//   return (
//     <div className="cookbook-root">
//       <h1>COOKBOOK.</h1>

//       <Contents recipes={recipes}/>
//     </div>
//   );
// }

function App() {
  return (
    <div className="cookbook-root">
      <nav>
        <ul>
          <li><NavLink to="/contents"
          activeClassName="current-navlink">table of contents
          </NavLink></li>
          <li><NavLink to="/recipe/0"
          activeClassName="current-navlink">page 1
          </NavLink></li>
          <li><Link to="/recipe/edit">new</Link></li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/contents">
          <Contents />
        </Route>
        <Route exact path="/recipe/0">
          <Recipe />
        </Route>
        <Route exact path="/recipe/edit">
          note writer
        </Route>
        <Redirect to="/contents"/>
      </Switch>
    </div>
  );
}

export default App;
