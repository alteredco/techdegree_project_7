import React, { Component } from 'react';
import axios from 'axios';
import apikey from './config'
import PhotoContainer from './components/PhotoContainer';
import SearchForm from './components/SearchForm';

class App extends Component {
  state = {
    photos: [],
    photoUrls:[],
    loading: true
  }

  componentDidMount() {
    this.performSearch();
  }

  performSearch = (query='sunsets') => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apikey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
    .then(( response ) => {
      this.setState({
        photos: response.data.photos.photo,
        photoUrls: `https://farm${response.data.photos.photo[0].farm}.staticflickr.com/${response.data.photos.photo[0].server}/${response.data.photos.photo[0].id}_${response.data.photos.photo[0].secret}_o.jpg)`,
        loading: false
      })
    })
    .catch( ( error )=> {
      console.log('Error parsing data', error);
    })
  }

  render() {
    console.log(this.state.photos);
    console.log(this.state.photoUrls);
    return (
      <div className="App">
        <SearchForm />
        {
            (this.state.loading)
              ?<p>LOADING...</p>
              : <PhotoContainer  />
          }
        
      </div>
    );
  }
}

export default App;
