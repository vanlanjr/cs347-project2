import logo from './logo.svg';
import './App.css';
import Contents from './Contents';
import {useSelector} from 'react-redux';

// hard coded recipes for now
// const recipes = [
//   {name:"Good Old Fashioned Pancakes",description:"Pancakes that are old fashioned",ingredients:"1 1/2 flour, 3 1/2 baking powder, 1 teaspoon salt, 1 tablespoon white sugar, 1 egg, 1 1/4 cups milk, 3 tablespoon butter",steps:"1. In a large bowl, sift together the flour, baking powder, salt and sugar. Make a well in the center and pour in the milk, egg and melted butter; mix until smooth. 2.Heat a lightly oiled griddle or frying pan over medium-high heat. Pour or scoop the batter onto the griddle, using approximately 1/4 cup for each pancake. Brown on both sides and serve hot."},
//   {name:"Green eggs and ham",description:"Dr seusses favorite meal",ingredients:"1 green egg and 1 ham",steps:"1. cook the egss. 2. cook the ham. 3. eat the food."}
// ];

function App() {

  const recipes = useSelector(state => state.recipes);

  return (
    <div className="cookbook-root">
      <h1>COOKBOOK.</h1>
      <Contents recipes={recipes}/>
    </div>
  );
}

export default App;
