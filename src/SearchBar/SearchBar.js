import React from 'react';
import './SearchBar.css';

export default class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        console.log('call api after this');
    }

    handleUpdate(e){
        this.props.onChange(e.target.value);
    }

    render(){
        return(
            <form className="search__bar" onSubmit={this.handleSubmit}>
                <label htmlFor="search">Search: </label>
                <input 
                  type="text" 
                  name="search"
                  id="search"
                  placeholder="Enter a value"
                  onChange={this.handleUpdate}
                />
                <input type="submit" value="Search"></input>
            </form>
        );
    }
}