import React from 'react';
import { withRouter } from 'react-router-dom';

const SearchForm  = props => {
      const {
        query,
        onChange,
        performSearch,
        history
      } = props;

      const handleSubmit = (e) => {
        e.preventDefault();
        performSearch(query);
        let path = `/${query}`
        history.push(path)
        e.currentTarget.reset();
      }

      return (
      <form className="search-form" onSubmit={handleSubmit} >
        <label className="is--hidden" htmlFor="search">Search</label>
        <input type="search" 
               onChange={onChange}
               name="search" 
               ref={(input)=> input = {query}}
               placeholder="Search..." />
        <button type="submit" id="submit" className="search-button"><i className="material-icons icn-search">search</i></button>
      </form>      
      )
};

export default withRouter(SearchForm);