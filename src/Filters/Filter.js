import React from 'react';
import './Filter.css';
import PrintFilter from '../PrintFilter/PrintFilter';
import BookFilter from '../BookFilter/BookFilter';

export default class Filter extends React.Component{
    render(){
        return(
            <div className="filters">
                <PrintFilter />
                <BookFilter />
            </div>
        )
    }
}