import React, { Component } from 'react';
import axios from 'axios';
import apikey from './config'
import {
  BrowserRouter,
  Redirect,
  Route,
  Switch
} from 'react-router-dom';
import SearchForm from './components/SearchForm';
import Nav from './components/Nav';
import PhotoContainer from './components/PhotoContainer';
import Error from './components/Error';
import NotFound from './components/NotFound';

class App extends Component {
  state ={
    photos: [],
    loading: true,
    results: false,
    query: 'moma',
    searchTerms: [
      'moma',
      'louvre',
      'tate modern'
    ]
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
    } else {
      this.setState({
        results:false
      })
    }
  }

  onSearchChange = e => {
    this.setState({ query: e.target.value } );
  }

  handleNavClick = e => {
    e.preventDefault();
    this.setState({ query: e.target.text })
    this.performSearch(e.target.text);
  }

  render() {
    return  (
      <BrowserRouter>
        <div className="App">
          <SearchForm 
                query={this.state.query} 
                onChange={this.onSearchChange} 
                performSearch = {this.performSearch}/>
          <Nav 
                searchTerms = {this.state.searchTerms}
                handleClick = {this.handleNavClick}/>
        </div>
        <Switch>
          <Route exact path='/' render={()=><Redirect to={`/${this.state.query}`} />} />
          <Route  exact path={`/${this.state.searchTerms[0]}`} render={()=>
            <PhotoContainer 
                photos={this.state.photos} 
                loading={this.state.loading} 
                results={this.state.results} 
                query={this.state.query}  />
          } />
          <Route  exact path={`/${this.state.searchTerms[1]}`} render={()=>
            <PhotoContainer 
                photos={this.state.photos} 
                loading={this.state.loading} 
                results={this.state.results} 
                query={this.state.query}  />
          } />
          <Route  exact path={`/${this.state.searchTerms[2]}`} render={()=>
            <PhotoContainer 
              photos={this.state.photos} 
              loading={this.state.loading} 
              results={this.state.results} 
              query={this.state.query} />
          } />
          <Route  exact path={`/${this.state.query}`} render={()=>
            <PhotoContainer     
              photos={this.state.photos}
              loading={this.state.loading} 
              results={this.state.results}  
              query={this.state.query} />
          } />
          <Route component={ Error  } />
          {this.state.results}!=true?<NotFound />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
