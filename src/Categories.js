import React from 'react';
import {Link} from 'react-router-dom';
import './Contents.css';

export function Categories(props) {
  return (
    <React.Fragment>
      <h1>Food Categories</h1>
      <ul>
        {[...props.categories].map(category =>
          <li><Link to={`/recipe/${category}`}>{category}</Link></li>
        )}
      </ul>
    </React.Fragment>
  );
}