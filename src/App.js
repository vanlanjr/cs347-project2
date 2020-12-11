import './App.css';
import React, {useEffect} from 'react';
import {Switch, Route, Redirect, NavLink} from 'react-router-dom';
import {Contents} from './Contents';
import {RecipeReader} from './RecipeReader';
import {RecipeWriter} from './RecipeWriter';
import {useSelector, useDispatch} from 'react-redux';
import {getRecipes} from './actions';

function App() {

  const recipes = useSelector(state => state.recipes);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRecipes());
  }, [dispatch]);

  return (

    <div className="cookbook-root">
      <nav>
        <ul id="nav-header">
          <li><NavLink to="/contents"
          activeClassName="current-navlink">Recipes
          </NavLink></li>  
          <li><NavLink to="/recipe/new">Add Recipe</NavLink></li>
        </ul>
      </nav>

      <Switch>
        <Route exact path="/recipes">
          <Contents recipes={recipes}/>
        </Route>
        <Route exact path="/recipe/new">
          <RecipeWriter recipe={{id: -1, name: '', description: '', ingredients: '', 
            steps: ''}}/>
        </Route>
        <Route exact path="/recipe/:id" children={props => {
          const id = parseInt(props.match.params.id);
          const recipe = recipes.find(recipe => recipe.id === id);
          return <RecipeReader recipe={recipe} totalRecipes={recipes.length}/>;
        }}/>
        <Redirect to="/recipes"/>
      </Switch>
    </div>
  );
}

export default App;
