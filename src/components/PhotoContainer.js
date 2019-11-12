import React from 'react';
import Photo from './Photo';
import NotFound from './NotFound';

const PhotoContainer =props => {
  const {
    loading,
    results,
    photos,
    query
  } = props;

  return (
    <div className="photo-container">
      {
        (loading)
          ?<p>LOADING...</p>
          : (results)? <h2>Results for {(query)}</h2>:<NotFound />
      }
      <ul>
        {photos.map((photo, index) =>
          <Photo 
            {...photo}
            key = {photo.id.toString()}
            photoId = {photo.id}
            owner = {photo.owner}
            secret = {photo.secret}
            server = {photo.server}
            farm = {photo.farm}
            index={index}
          />
         )}
      </ul>
    </div>
   )
}

export default PhotoContainer;