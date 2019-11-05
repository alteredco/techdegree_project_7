import React from 'react';

const SearchForm  = props => {
      const {
        query,
        onChange,
        handleSubmit
      } = props;
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

export default SearchForm;