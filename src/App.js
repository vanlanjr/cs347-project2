import './App.css';
import React, {useEffect, useState} from 'react';
import {Switch, Route, Redirect, NavLink, Link, useHistory} from 'react-router-dom';
import {Recipes} from './Recipes';
import {Contents} from './Contents';
import {RecipeReader} from './RecipeReader';
import {RecipeWriter} from './RecipeWriter';
import {useSelector, useDispatch} from 'react-redux';
import {getRecipes, startAddingRecipe} from './actions';
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

//const initialDatabase = {
//   recipes: [
//     {
//       id: 0,
//       name: 'old fashionned pancakes',
//       description: 'delicious meal',
//       ingredients: 'bunch of pancakes',
//       steps: 'cook em',
//       categories: new Set(['breakfast', 'sweet']),
//     },
//     {
//       id: 1,
//       name: 'green eggs and ham',
//       description: 'yummy meal',
//       ingredients: 'eggs and ham',
//       steps: 'fry em',
//       categories: new Set(['breakfast', 'healthy']),
//     },
//     {
//       id: 2,
//       name: 'sandwich',
//       description: 'easy to make meal',
//       ingredients: 'turkey, ham, and cheese',
//       steps: 'put them together',
//       categories: new Set(['lunch']),
//     },
//     {
//       id: 3,
//       name: 'ice cream sundae',
//       description: 'delicious desert',
//       ingredients: 'vanilla ice cream, caramel, and fudge',
//       steps: 'put the caramel and fudge on the ice cream',
//       categories: new Set(['dessert', 'sweet']),
//     },
//   ],
//   categories: new Set(['breakfast', 'sweet', 'lunch', 'healthy', 'dessert']),
// }

function App() {

//   // const recipes = useSelector(state => state.recipes);
//   // const dispatch = useDispatch();

//   // useEffect(() => {
//   //   dispatch(loadRecipe());
//   // }, [dispatch]);

//   // const onAdd = () => {
//   //   dispatch(startAddingRecipe());
//   // };

//   const [database, setDatabase] = useState(initialDatabase);
//   const history = useHistory();

//   const saveRecipe = savedRecipe => {
//     const newCategories = new Set(database.categories);
//     for (let category of savedRecipe.categories) {
//       newCategories.add(category);
//     }

//     let id = savedRecipe.id;
//     let newRecipes;
//     /* handles case for brand new recipe */
//     if (id < 0) {
//       id = database.recipes.length;
//       newRecipes = [
//         ...database.recipes,
//         {...savedRecipe, id},
//       ];
//     } 
//     /* handles editing existing recipes */
//     else {
//       newRecipes = database.recipes.map(recipe =>{
//         if (recipe.id === id) {
//           return savedRecipe;
//         } else {
//           return recipe;
//         }
//       });
//     }

//     setDatabase({
//       categories: newCategories,
//       recipes: newRecipes,
//     });

//     history.push(`/recipe/${id}`);
//   };

  const recipes = useSelector(state => state.recipes);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRecipes());
  }, [dispatch]);

  const onAdd = () => {
    dispatch(startAddingRecipe());
  }

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
        <Route exact path="/recipe/:id" children={props => {
          const id = parseInt(props.match.params.id);

          const recipe = recipes.filter(recipe => recipe.id == id);

          return <RecipeReader recipe={recipe[0]} totalRecipes={recipes.length}/>;
         }}/>

        {/* <Route exact path="/recipe/:id">
        
        </Route> */}

        <Route exact path="/recipe/new">
          <RecipeWriter recipe={{id: -1, name: '', description: '', ingredients: '', 
            steps: ''}}/>
        </Route>
        {/*
        <Route exact path="/recipes/:category" children={props =>
          <Recipes recipes={database.recipes.filter(recipe => 
            recipe.categories.has(props.match.params.category))}/>
        } />
        <Route exact path="/recipe/:id" children={props => {
          const id = parseInt(props.match.params.id);
          const recipe = database.recipes.find(recipe => recipe.id === id);
          return <RecipeReader recipe={recipe} totalRecipes={database.recipes.length}/>;
         }}/>
         <Route exact path="/recipe/:id/edit" children={props => {
          const id = parseInt(props.match.params.id);
          const recipe = database.recipes.find(recipe => recipe.id === id);
          return <RecipeWriter recipe={recipe} saveRecipe={saveRecipe}/>;
         }}/> */}
        <Redirect to="/recipes"/>
      </Switch>
    </div>
  );
}

export default App;
