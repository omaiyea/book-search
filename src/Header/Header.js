import React from 'react';
import './Header.css';
import SearchBar from '../SearchBar/SearchBar';
import Filter from '../Filters/Filter';

export default class Header extends React.Component{
    render(){
        return(
            <header>
                <h2 className="main__header">Google Book Search</h2>
                <SearchBar 
                  selectedSearch={this.props.selected.q}
                  onChange={this.props.queryHandler}
                  onSubmit={this.props.submitHandler}
                />
                <Filter 
                  onTypeChange={this.props.typeHandler}
                  onFilterChange={this.props.filterHandler}
                />
            </header>
        );
    }
}