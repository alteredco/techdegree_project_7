import React from 'react';

const InvalidRoute = props => (
  <li className='not-found'>
    <i className="material-icons icon-gif">error_outline</i>
    <h3>What are you looking for?</h3>
    <p>This is not a valid route. Please try again.</p>
  </li>
);

export default InvalidRoute;