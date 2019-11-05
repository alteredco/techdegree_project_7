import React from 'react';

const Photo = props => {
  const photoUrl = `https://farm${props.farm}.staticflickr.com/${props.server}/${props.photoId}_${props.secret}_m.jpg`
  return (
    <React.Fragment>
    <li>
    <img src={photoUrl} alt={props.name} />
  </li>
  </React.Fragment>
  );
}

export default Photo;