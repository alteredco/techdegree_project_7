import React from 'react';

const Photo = props => {
  const {
    farm,
    server,
    photoId,
    secret,
    name
  }=props;

  /*Build flickr url for photo from API data*/ 
  const photoUrl = `https://farm${farm}.staticflickr.com/${server}/${photoId}_${secret}_m.jpg`
  return (
    <React.Fragment>
    <li>
    <img src={photoUrl} alt={name} />
  </li>
  </React.Fragment>
  );
}

export default Photo;