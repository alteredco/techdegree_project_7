import React, { Component } from 'react';
import axios from 'axios';
import apikey from './config'
import {
  BrowserRouter,
} from 'react-router-dom';
import SearchForm from './components/SearchForm';
import Nav from './components/Nav';

class App extends Component {
  state ={
    photos: [],
    loading: true,
    results: false,
    query: 'cat'
  }

  componentDidMount() {
    this.performSearch(this.state.query);
  }

  performSearch = (query) => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apikey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
    .then(( response ) => {
      this.setState({
        photos: response.data.photos.photo,
        loading: false
      })
      this.checkResults();
    })
    .catch( ( error )=> {
      console.log('Error parsing data', error);
    })
  }

  checkResults = () => {
    if(this.state.photos.length > 0) {
      this.setState({
        results: true
      })
    }
  }

  onSearchChange = e => {
    this.setState({ query: e.target.value });
  }
    
  handleSubmit = e => {
    e.preventDefault();
    this.onSearch(this.state.query.value);
    e.currentTarget.reset();
  }

  render() {
    return  (
          <BrowserRouter>
            <div className="App">
              <SearchForm query={this.state.query} onChange={this.onSearchChange} handleSubmit = {this.handleSubmit}/>
              <Nav query={this.state.query} photos={ this.state.photos } loading={this.state.loading}
    results={this.state.results} />
            </div>
          </BrowserRouter>
    );
  }
}

export default App;
