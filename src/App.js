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
import InvalidRoute from './components/InvalidRoute';
import NotFound from './components/NotFound';

class App extends Component {
  state ={
    photos: [],
    loading: true,
    results: false,
    query: 'look up',
    searchTerms: [
      'moma',
      'louvre',
      'tate modern'
    ]
  }

  /*Request data from API only after the App component has loaded */
  componentDidMount() {
    this.performSearch(this.state.query);
  }

   /*Get data from Flickr API and check if there are results
  @params {string} query- data request term for API*/
  performSearch = (query) => {
    this.setState({
      loading:true
    });
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

  /* Handle input into the search box and set query to input value.  Passed as a prop to the SearchForm component. @params {event} e - event */ 
  onSearchChange = e => {
    this.setState({ query: e.target.value } );
  }

  /*Handle nav button click event, set query value to the search term of the button and send request data from API. Passed as a prop to the SearchForm component. @params {event} e - event*/ 
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
          <Route exact path='/' render={()=>
            <Redirect to={`/${this.state.query}`} />
            } />
          <Route  exact path={`/:query`} render={()=>
            <PhotoContainer     
              photos={this.state.photos}
              loading={this.state.loading} 
              results={this.state.results}  
              query={this.state.query} />
          } />
          <Route component={ InvalidRoute  } />
          {this.state.results}!=true?<NotFound />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
