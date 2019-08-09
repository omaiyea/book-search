import React from 'react';
import './SearchBar.css';

export default class SearchBar extends React.Component{
    render(){
        return(
            <form className="search__bar">
                <label htmlFor="search">Search: </label>
                <input 
                  type="text" 
                  name="search"
                  id="search"
                  placeholder="Enter a topic"
                />
                <input type="button" value="Search"/>
            </form>
        );
    }
}