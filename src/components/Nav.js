import React from 'react';
import { 
  NavLink,
} from 'react-router-dom';

const Nav = (props) =>  {
  const {
    searchTerms,
    handleClick
  } = props;
  
  return (
  <nav className="main-nav">
  <ul>
    { searchTerms.map( (searchTerm, index) => 
      <li onClick={ handleClick } key={index.toString()}><NavLink  to={`/${searchTerm}`}>{searchTerm}</NavLink></li>
    )}
  </ul>
</nav>
  );
}

export default Nav;