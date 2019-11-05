import React from 'react';
import { 
  Route,
  NavLink,
  Switch
} from 'react-router-dom';
import PhotoContainer from './PhotoContainer';

const Nav = props =>  (
  <nav className="main-nav">
  <ul>
    <li><NavLink exact to='/cats'>Cats</NavLink></li>
    <li><NavLink exact to='/dogs'>Dogs</NavLink></li>
    <li><NavLink exact to='/computers'>Computers</NavLink></li>
  </ul>
<Switch>
  <Route  path='/cats' render={()=><PhotoContainer photos={props.photos} loading={props.loading} results={props.results}  />} />
  <Route  path='/dogs' render={()=><PhotoContainer photos={props.photos} loading={props.loading} results={props.results}  />} />
  <Route  path='/computers' render={()=><PhotoContainer photos={props.photos} loading={props.loading} results={props.results} />} />
</Switch>
</nav>
 );

export default Nav;