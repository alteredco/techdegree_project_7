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
    <li onClick={ handleClick }><NavLink to={`/${searchTerms[0]}`} >{searchTerms[0]}</NavLink></li>
    <li onClick={ handleClick }><NavLink to={`/${searchTerms[1]}`} >{searchTerms[1]}</NavLink></li>
    <li onClick={ handleClick }><NavLink to={`/${searchTerms[2]}`} >{searchTerms[2]}</NavLink></li>
  </ul>
</nav>
  );
}

export default Nav;