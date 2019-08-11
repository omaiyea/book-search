import React from 'react';
import './Filter.css';
import PrintFilter from '../PrintType/PrintType';
import BookFilter from '../BookFilter/BookFilter';

export default class Filter extends React.Component{
    render(){
        return(
            <div className="filters">
                <PrintFilter onTypeChange={this.props.onTypeChange} />
                <BookFilter onFilterChange={this.props.onFilterChange} />
            </div>
        )
    }
}