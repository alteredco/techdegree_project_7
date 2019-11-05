import React from 'react';
import Photo from './Photo';
import NotFound from './NotFound';

const PhotoContainer =props => (
      <div className="photo-container">
          {
            (props.loading)
              ?<p>LOADING...</p>
              : (props.results)? <h2>Results</h2>:<NotFound />
          }
        <ul>
         {props.photos.map((photo, index) =>
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

export default PhotoContainer;